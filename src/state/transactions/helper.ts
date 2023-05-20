import { TransactionResponse, Transaction } from "./types"

export const mapTransactions = (transaction: TransactionResponse) => ({
  id: transaction.id,
  transactionType: transaction.transactionType,
  created: transaction.created,
  accountName: transaction.account.name,
  bankId: transaction.account.bank.id,
  bankName: transaction.account.bank.name,
  categoryId: transaction.category.id,
  categoryName: transaction.category.name,
  description: transaction.description,
  amount: transaction.amount,
  paymentTransactionId: transaction?.creditPurchase?.paymentTransactionId,
})

export const getUniqueValues = (values: string[]) => {
  return [...new Set(values)];
}

export const getTransactionsByAccount = (transactions: Transaction[]) => {
  const result: { [key: string]: Transaction[] } = {};

  transactions.forEach((transaction: Transaction) => {
    const key = `${transaction.bankName} ${transaction.accountName}`;
    if (result[key]) {
      result[key].push(transaction);
    } else {
      result[key] = [transaction];
    }
  })

  return result;
}