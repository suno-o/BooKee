import { getAccounts } from "./queries/accounts"
import { getBalanceSnapshots } from "./queries/balanceSnapshots"
import { getTransactionsTotal, getTransactions } from "./queries/transactions"

export const resolvers = {
  Query: {
    accounts: getAccounts,
    balance_snapshots: getBalanceSnapshots,
    transactions_total: getTransactionsTotal,
    transactions: getTransactions,
  }
}