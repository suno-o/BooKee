import { RootState } from ".."
import { createSelector } from "@reduxjs/toolkit"
import { Transaction } from "./types";

const selectTransactions = (state: RootState) => state.creditBillPayment;

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

export const creditTransactionsByAccountSelector = createSelector(
  selectTransactions,
  ({ creditTransactions }) => getCreditTransactionsByAccount(creditTransactions)
)