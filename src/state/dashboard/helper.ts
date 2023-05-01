import { TransactionType } from "@prisma/client"
import { AccountResponse, TransactionsSum, TransactionResponse } from "./types"

export const mapTransactionSums = (sums: TransactionsSum[]) => {
  const newSums = { earningTotal: 0,  spendingTotal: 0, creditSpendingTotal: 0 };

  sums.forEach(({type, total}: TransactionsSum) => {
    if (type === TransactionType.CASH_EARNING)
      newSums['earningTotal'] = total;
    else if (type === TransactionType.CASH_SPENDING)
      newSums['spendingTotal'] = total;
    else if (type === TransactionType.CREDIT_SPENDING)
      newSums['creditSpendingTotal'] = total;
  })

  return newSums;
}

export const mapAccount = (account: AccountResponse) => ({
  accountType: account.accountType,
  accountName: account.name,
  bankName: account.bank.name,
  balance: account.balance,
})

export const mapTransaction = (transaction: TransactionResponse) => ({
  id: transaction.id,
  amount: transaction.amount,
  categoryName: transaction.category.name,
  bankName: transaction.account.bank.name,
})