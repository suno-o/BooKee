import { RootState } from ".."
import { createSelector } from "@reduxjs/toolkit"

const selectTransactions = (state: RootState) => state.transactions;

const getUniqueValues = (values: string[]) => {
  return [...new Set(values)];
}

export const bankAndCategorySelector = createSelector(
  selectTransactions,
  ({ transactions, transactionsLoaded }) => {
    const banks = transactions.map(transaction => transaction.bankName);
    const categories = transactions.map(transaction => transaction.categoryName);

    return {
      banks: getUniqueValues(banks),
      categories: getUniqueValues(categories),
      transactionsLoaded,
    }
  }
)