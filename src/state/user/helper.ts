import { AccountResponse } from "./types"
import { monthToMonthName } from "@/utils/date"
import { YearlyBalanceResponse } from "./types"

export const mapAccount = (account: AccountResponse) => ({
  id: account.id,
  accountType: account.accountType,
  accountName: account.name,
  bankId: account.bank.id,
  bankName: account.bank.name,
  balance: account.balance,
})

export const reformYearlyBalances = (yearlyBalances: YearlyBalanceResponse[]) => {
  return yearlyBalances.map(yearlyBalance => ({
    month: monthToMonthName(yearlyBalance.month),
    balance: yearlyBalance.balance
  })).reverse(); // reverse for recharts graph - data comes in desc order;
}