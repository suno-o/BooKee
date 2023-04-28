import { Transaction } from "./mockTypes"

/* helper: select from state and memoize later */
export const filterTransactionsByType = (transactions: Transaction[]) => {
  const earningTransactions: Transaction[] = [];
  const cashSpendingTransactions: Transaction[] = [];
  const creditSpendingTransactions: Transaction[] = [];

  transactions.forEach((transaction: Transaction) => {
    if (transaction.transaction_type === 'cash') {
      if (transaction.amount < 0) {
        cashSpendingTransactions.push(transaction);
      } else {
        earningTransactions.push(transaction);
      }
    } else if (transaction.transaction_type === 'credit' && transaction.amount < 0) {
      creditSpendingTransactions.push(transaction);
    }
  })

  return [earningTransactions, cashSpendingTransactions, creditSpendingTransactions];
}