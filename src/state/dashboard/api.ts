import { request, gql } from "graphql-request"
import { mapAccount, mapBalanceSnapshot, mapTransactionSums, mapTransaction } from "./helper"
import { AccountsBalancesResponse, TransactionsResponse } from "./types";

export const getAccountsAndBalances = async () => {
  const res = await request<AccountsBalancesResponse>(
    'api/graphql',
    gql`
      {
        accounts {
          accountType,
          name,
          balance,
          bank {
            name
          }
        }
        balanceSnapshots: balance_snapshots {
          month,
          balance
        }
      }
    `
  )
  
  const { accounts, balanceSnapshots } = res;

  return {
    accounts: accounts.map(mapAccount),
    balanceSnapshots: balanceSnapshots.map(mapBalanceSnapshot).reverse(), // reverse for recharts graph - data comes in desc order
  }
}

export const getTransactionsData = async (month: number, year: number) => {
  const res = await request<TransactionsResponse>(
    '/api/graphql',
    gql`
      query getTransactions($month: Int!, $year: Int!) {
        sums: transactions_total(month: $month, year: $year) {
          type,
          total
        }
        earningTransactions: transactions(month: $month, year: $year, type: CASH_EARNING) {
          ...filteredTransaction
        }
        spendingTransactions: transactions(month: $month, year: $year, type: CASH_SPENDING) {
          ...filteredTransaction
        }
        creditSpendingTransactions: transactions(month: $month, year: $year, type: CREDIT_SPENDING) {
          ...filteredTransaction
        }
      }

      fragment filteredTransaction on Transaction {
        id,
        amount,
        account {
          bank {
            name
          }
        }
        category {
          name
        }
      }
    `,
    { month, year }
  )
  
  const { sums, earningTransactions, spendingTransactions, creditSpendingTransactions } = res;
 
  return {
    ...mapTransactionSums(sums),
    earningTransactions: earningTransactions.map(mapTransaction),
    spendingTransactions: spendingTransactions.map(mapTransaction),
    creditSpendingTransactions: creditSpendingTransactions.map(mapTransaction),
  }
}