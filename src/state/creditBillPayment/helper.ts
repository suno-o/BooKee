import { TransactionType } from "@prisma/client";
import { TransactionResponse, TransactionsSum } from "./types"

export const mapTransactionSums = (sums: TransactionsSum[]) => {
  const newSums = { cashSpendingTotal: 0, creditSpendingTotal: 0, creditCarryoverTotal: 0 };

  sums.forEach(({type, total}: TransactionsSum) => {
    if (type === TransactionType.CASH_SPENDING)
      newSums['cashSpendingTotal'] = total;
    else if (type === TransactionType.CREDIT_SPENDING)
      newSums['creditSpendingTotal'] = total;
    else if (type === TransactionType.CREDIT_CARRYOVER)
      newSums['creditCarryoverTotal'] = total;
  })

  return newSums;
}

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