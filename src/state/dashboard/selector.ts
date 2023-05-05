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
  ({ accounts, balanceSnapshots, accountDataLoaded }, total) => ({
    total,
    accounts,
    balanceSnapshots,
    accountDataLoaded
  })
)

/* select transaction total by transaction type */
export const transactionTotalSummarySelector = (state: RootState) => {
  const { transactionDataLoaded, transactionsData: { earningTotal, spendingTotal, creditSpendingTotal } } = state.dashboard;

  return {
    total: earningTotal + spendingTotal + creditSpendingTotal,
    earningTotal,
    spendingTotal,
    creditSpendingTotal,
    transactionDataLoaded
  }
}

/* select transactions by transaction type */
export const transactionsByTypeSelector = createSelector(
  dashboardSelector,
  ({ transactionsData: { earningTransactions, spendingTransactions, creditSpendingTransactions }, transactionDataLoaded }) => ({
    earningTransactions,
    spendingTransactions,
    creditSpendingTransactions,
    transactionDataLoaded
  })
)