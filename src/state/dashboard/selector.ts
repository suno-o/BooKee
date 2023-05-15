import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "..";
import { Account } from "./types";
import { AccountType } from "@prisma/client";

const dashboardSelector = (state: RootState) => state.dashboard;
const accountSelector = (state: RootState) => state.dashboard.accounts;

/* cash and credit accounts */
export const selectAccountsByType = createSelector(
  accountSelector,
  (accounts) => ({
    cashAccounts: accounts.filter(account => account.accountType !== AccountType.CREDIT),
    creditAccounts: accounts.filter(account => account.accountType === AccountType.CREDIT),
  })
)

/* select accounts and month-end balances data */
export const accountsAndBalancesSelector = createSelector(
  dashboardSelector,
  selectAccountsByType,
  ({ balanceSnapshots, dashboardDataLoaded }, { cashAccounts }) => {
    const total = cashAccounts.reduce((total: number, account: Account) => account.balance + total, 0);

    return {
      total,
      accounts: cashAccounts,
      balanceSnapshots,
      dashboardDataLoaded
    }
  }
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