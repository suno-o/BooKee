import { request, gql } from "graphql-request"
import { mapAccount, mapBalanceSnapshot, mapTransactionSums, mapTransaction } from "./helper"
import { TransactionType } from "@prisma/client";
import { DashboardDataResponse, TransactionsResponse, TransactionResponse, TransactionInput } from "./types";
import {
  dashboardTransactionsFragment,
  transactionsSumQuery,
  transactionsQueryByType
} from '../helper/transactionsGraphQuery'

/* Helpers */
const transactionsQueryHelper = `
  ${transactionsSumQuery}
  ${transactionsQueryByType('earningTransactions', TransactionType.CASH_EARNING, dashboardTransactionsFragment)}
  ${transactionsQueryByType('spendingTransactions', TransactionType.CASH_SPENDING, dashboardTransactionsFragment)}
  ${transactionsQueryByType('creditSpendingTransactions', TransactionType.CREDIT_SPENDING, dashboardTransactionsFragment)}
`

const mapTransactionsResponse = (transactionsData: TransactionsResponse) => ({
  ...mapTransactionSums(transactionsData.sums),
  earningTransactions: transactionsData.earningTransactions.map(mapTransaction),
  spendingTransactions: transactionsData.spendingTransactions.map(mapTransaction),
  creditSpendingTransactions: transactionsData.creditSpendingTransactions.map(mapTransaction),
})

/* dashboard query */
export const getDashboardData = async (month: number, year: number) => {
  const res = await request<DashboardDataResponse>(
    'api/graphql',
    gql`
      query getDashboardData($month: Int!, $year: Int!) {
        categories {
          id,
          name
        }
        accounts {
          id,
          accountType,
          name,
          balance,
          bank {
            id
            name
          }
        }
        balanceSnapshots: balance_snapshots {
          month,
          balance
        }
        ${transactionsQueryHelper}
      }
    `,
    { month, year }
  )
  
  const { categories, accounts, balanceSnapshots, ...transactionsData } = res;
  return {
    categories,
    accounts: accounts.map(mapAccount),
    balanceSnapshots: balanceSnapshots.map(mapBalanceSnapshot).reverse(), // reverse for recharts graph - data comes in desc order
    transactionsData: mapTransactionsResponse(transactionsData),
  }
}

/* transactions query */
export const getTransactionsData = async (month: number, year: number) => {
  const res = await request<TransactionsResponse>(
    '/api/graphql',
    gql`
      query getDashboardData($month: Int!, $year: Int!) {
        ${transactionsQueryHelper}
      }
    `,
    { month, year }
  )
 
  return mapTransactionsResponse(res);
}

/* transaction mutation */
interface AddTransactionResponse {
  newTransaction: TransactionResponse;
}

export const postTransaction = (transactionInput: TransactionInput) => {
  return request<AddTransactionResponse>(
    '/api/graphql',
    gql`
      mutation addTransaction($transactionInput: TransactionInput!) {
        newTransaction: addTransaction(input: $transactionInput) {
          id
        }
      }
    `,
    { transactionInput }
  )
}