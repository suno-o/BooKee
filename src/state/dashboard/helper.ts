import { TransactionType } from "@prisma/client"
import { AccountResponse, BalanceSnapshotResponse, TransactionsSum, TransactionResponse } from "./types"
import { monthToMonthName } from "@/utils/date"

export const mapAccount = (account: AccountResponse) => ({
  accountType: account.accountType,
  accountName: account.name,
  bankId: account.bank.id,
  bankName: account.bank.name,
  balance: account.balance,
})

export const mapBalanceSnapshot = (snapshot: BalanceSnapshotResponse) => ({
  month: monthToMonthName(snapshot.month),
  balance: snapshot.balance
})

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

export const mapTransaction = (transaction: TransactionResponse) => ({
  id: transaction.id,
  amount: transaction.amount,
  categoryId: transaction.category.id,
  categoryName: transaction.category.name,
  bankId: transaction.account.bank.id,
  bankName: transaction.account.bank.name,
})