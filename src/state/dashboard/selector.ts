import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "..";

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

const dashboardSelector = (state: RootState) => state.dashboard;

/* select transactions by transaction type */
export const transactionsByTypeSelector = createSelector(
  dashboardSelector,
  ({ transactionsData: { earningTransactions, spendingTransactions, creditSpendingTransactions } }) => ({
    earningTransactions,
    spendingTransactions,
    creditSpendingTransactions
  })
)