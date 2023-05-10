import { getBanks } from "./queries/banks"
import { getCategories } from "./queries/categories"
import { getAccounts } from "./queries/accounts"
import { getBalanceSnapshots } from "./queries/balanceSnapshots"
import { getTransactionsTotal, getTransactions } from "./queries/transactions"

export const resolvers = {
  Query: {
    banks: getBanks,
    categories: getCategories,
    accounts: getAccounts,
    balance_snapshots: getBalanceSnapshots,
    transactions_total: getTransactionsTotal,
    transactions: getTransactions,
  }
}