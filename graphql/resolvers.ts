import { getAccounts } from "./queries/accounts"
import { getTransactionsTotal, getTransactions } from "./queries/transactions"

export const resolvers = {
  Query: {
    accounts: getAccounts,
    transactions_total: getTransactionsTotal,
    transactions: getTransactions,
  }
}