import { TransactionResponse } from "./types"

export const mapTransactions = (transaction: TransactionResponse) => ({
  id: transaction.id,
  transactionType: transaction.transactionType,
  created: transaction.created,
  bankId: transaction.account.bank.id,
  bankName: transaction.account.bank.name,
  categoryId: transaction.category.id,
  categoryName: transaction.category.name,
  description: transaction.description,
  amount: transaction.amount,
})