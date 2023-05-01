import { request, gql } from "graphql-request"
import { mapAccount, mapTransactionSums, mapTransaction } from "./helper"
import { AccountResult, TransactionResult } from "./types";

export const getAccounts = async () => {
  const res = await request<AccountResult>(
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
      }
    `
  )
  
  const accounts = res?.accounts;
  return accounts ? accounts.map(mapAccount) : [];
}

export const getTransactionsData = async (month: number, year: number) => {
  const res = await request<TransactionResult>(
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