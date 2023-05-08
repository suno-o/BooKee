import { RootState } from ".."
import { createSelector } from "@reduxjs/toolkit"
import { Transaction } from "./types";

const selectTransactions = (state: RootState) => state.creditBillPayment;

/* paid and unpaid credit transactions, and carried over transactions */
export const creditTransactionsSelector = createSelector(
  selectTransactions,
  ({ creditTransactions, carryoverCreditTransactions }) => {console.log('runrun'); return ({
    unPaidTransactions: creditTransactions.filter(transaction => transaction?.paymentTransactionId === undefined),
    paidTransactions: creditTransactions.filter(transaction => transaction?.paymentTransactionId !== undefined),
    carryoverTransactions: carryoverCreditTransactions
  })}
)

/* paid transactions total */
export const creditPaymentTotalSelector = createSelector(
  creditTransactionsSelector,
  ({ paidTransactions }) => paidTransactions.reduce((sum, transaction) => sum + transaction.amount, 0)
)

/* unpaid transactions by account */
interface TransactionsByCreditAccount {
  [key: string]: Transaction[];
}

const getCreditTransactionsByAccount = (creditTransactions: Transaction[]) => {
  const result: TransactionsByCreditAccount = {};

  creditTransactions.forEach((transaction: Transaction) => {
    const key = `${transaction.bankName} ${transaction.accountName}`;
    if (result[key]) {
      result[key].push(transaction);
    } else {
      result[key] = [transaction];
    }
  })

  return result;
}

export const unpaidCreditTransactionsByAccountSelector = createSelector(
  creditTransactionsSelector,
  ({ unPaidTransactions }) => getCreditTransactionsByAccount(unPaidTransactions)
)