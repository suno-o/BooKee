import { RootState } from ".."
import { createSelector } from "@reduxjs/toolkit"
import { getUniqueValues, getTransactionsByAccount } from "./helper";
import { TransactionType } from "@prisma/client";

const selectTransactionsData = (state: RootState) => state.transactions.data;
const selectTransactionsDataLoaded = (state: RootState) => state.transactions.transactionsLoaded;

export const selectMonthFilter = (state: RootState) => state.transactions.selectedMonthyear;

/* select all transactions */
export const selectAllTransactions = createSelector(
  [selectTransactionsData, selectTransactionsDataLoaded],
  (data, transactionsLoaded) => ({
    data,
    transactionsLoaded
  })
)

/* select transactions by transaction type */
export const selectTransactionsByType = createSelector(
  [selectTransactionsData, selectTransactionsDataLoaded],
  (data, transactionsLoaded) => ({
    cashEarnings: data.filter(transaction => transaction.transactionType === TransactionType.CASH_EARNING),
    cashSpendings: data.filter(transaction => transaction.transactionType === TransactionType.CASH_SPENDING),
    creditSpendings: data.filter(transaction => transaction.transactionType === TransactionType.CREDIT_SPENDING),
    creditCarryovers: data.filter(transaction => transaction.transactionType === TransactionType.CREDIT_CARRYOVER),
    transactionsLoaded
  })
)

/* select transaction total by transaction type */
export const selectTotalsByType = createSelector(
  selectTransactionsByType,
  ({cashEarnings, cashSpendings, creditSpendings, transactionsLoaded}) => {
    const cashEarningsTotal = cashEarnings.reduce((sum, transaction) => sum + transaction.amount, 0);
    const cashSpendingsTotal = cashSpendings.reduce((sum, transaction) => sum + transaction.amount, 0);
    const creditSpendingsTotal = creditSpendings.reduce((sum, transaction) => sum + transaction.amount, 0);
    
    return {
      total: cashEarningsTotal + cashSpendingsTotal + creditSpendingsTotal,
      cashEarningsTotal,
      cashSpendingsTotal,
      creditSpendingsTotal,
      transactionsLoaded
    }
  }
)

/* select list of unique banks and categories */
export const selectBankAndCategoryFilters = createSelector(
  [selectTransactionsData, selectTransactionsDataLoaded],
  (data, transactionsLoaded) => {
    const banks = data.map(transaction => transaction.bankName);
    const categories = data.map(transaction => transaction.categoryName);

    return {
      banks: getUniqueValues(banks),
      categories: getUniqueValues(categories),
      transactionsLoaded,
    }
  }
)

/* paid and unpaid credit transactions, and carried over transactions */
export const selectCreditTransactionsByPayingStatus = createSelector(
  selectTransactionsByType,
  ({ creditSpendings, creditCarryovers, transactionsLoaded }) => ({
    unPaidTransactions: creditSpendings.filter(transaction => transaction?.paymentTransactionId === undefined),
    paidTransactions: creditSpendings.filter(transaction => transaction?.paymentTransactionId !== undefined),
    carryoverTransactions: creditCarryovers,
    transactionsLoaded
  })
)

/* spending summary data (totals, transactions data) */
export const selectSpendingSummaryData = createSelector(
  selectTransactionsByType,
  selectTotalsByType,
  (transactionsByType, totalsByType) => ({
    creditSpendings: transactionsByType.creditSpendings,
    cashSpendingTotal: totalsByType.cashSpendingsTotal,
    creditSpendingTotal: totalsByType.creditSpendingsTotal,
    transactionsLoaded: transactionsByType.transactionsLoaded,
  })
)

/* paid and carried over transactions totals */
export const selectCreditTransactionsTotals = createSelector(
  selectCreditTransactionsByPayingStatus,
  ({ paidTransactions, carryoverTransactions, transactionsLoaded }) => ({
    paidCreditTotal: paidTransactions.reduce((sum, transaction) => sum + transaction.amount, 0),
    carryoverCreditTotal: carryoverTransactions.reduce((sum, transaction) => sum + transaction.amount, 0),
    transactionsLoaded
  })
)

/* unpaid transactions grouped by account (credit card) */
export const selectUnpaidCreditTransactionsByAccount = createSelector(
  selectCreditTransactionsByPayingStatus,
  ({ unPaidTransactions }) => getTransactionsByAccount(unPaidTransactions)
)