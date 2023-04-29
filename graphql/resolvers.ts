import { getAccounts } from "./queries/getAccounts"
import { getTransactions } from "./queries/getTransactions"

export const resolvers = {
  Query: {
    accounts: getAccounts,
    transactions: getTransactions,
  }
}