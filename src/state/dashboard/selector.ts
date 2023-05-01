import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "..";
import { Account } from "./types";

const dashboardSelector = (state: RootState) => state.dashboard;

/* calculate total balance */
const selectAccountsSum = createSelector(
  dashboardSelector,
  ({ accounts }) => accounts.reduce((total: number, account: Account) => account.balance + total, 0)
)

/* select accounts and month-end balances data */
export const accountsAndBalancesSelector = createSelector(
  dashboardSelector,
  selectAccountsSum,
  ({accounts, balanceSnapshots}, total) => ({
    total,
    accounts,
    balanceSnapshots
  })
)

/* select transaction total by transaction type */
export const transactionTotalSummarySelector = (state: RootState) => {
  const { earningTotal, spendingTotal, creditSpendingTotal } = state.dashboard.transactionsData;

  return {
    total: earningTotal + spendingTotal + creditSpendingTotal,
    earningTotal,
    spendingTotal,
    creditSpendingTotal
  }
}

/* select transactions by transaction type */
export const transactionsByTypeSelector = createSelector(
  dashboardSelector,
  ({ transactionsData: { earningTransactions, spendingTransactions, creditSpendingTransactions } }) => ({
    earningTransactions,
    spendingTransactions,
    creditSpendingTransactions
  })
)