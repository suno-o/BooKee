import { createSelector } from "@reduxjs/toolkit"
import { RootState } from "..";
import { AccountType } from "@prisma/client";

const selectAccounts = (state: RootState) => {
  const { accounts, dataLoaded } = state.user;
  return {
    accounts,
    dataLoaded
  }
}

/* cash and credit accounts */
export const selectAccountsByType = createSelector(
  selectAccounts,
  ({ accounts, dataLoaded }) => ({
    cashAccounts: accounts.filter(account => account.accountType !== AccountType.CREDIT),
    creditAccounts: accounts.filter(account => account.accountType === AccountType.CREDIT),
    dataLoaded,
  })
)

/* balance by accounts and total */
export const selectBalancesByAccounts = createSelector(
  selectAccountsByType,
  ({ cashAccounts, dataLoaded }) => {
    const total = cashAccounts.reduce((total, account) => account.balance + total, 0);
    return {
      total,
      accounts: cashAccounts,
      dataLoaded: dataLoaded,
    }
  }
)

export const selectYearlyBalances = (state: RootState) => state.user.yearlyBalances;