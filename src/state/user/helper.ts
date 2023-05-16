import { AccountResponse } from "./types"

export const mapAccount = (account: AccountResponse) => ({
  id: account.id,
  accountType: account.accountType,
  accountName: account.name,
  bankId: account.bank.id,
  bankName: account.bank.name,
  balance: account.balance,
})