import { request, gql } from "graphql-request"
import { Response } from "./types"
import { mapTransactionSums, mapTransactions } from "./helper"

export const getTransactionsData = async (month: number, year: number) => {
  const res = await request<Response>(
    '/api/graphql',
    gql`
      query getTransactions($month: Int!, $year: Int!) {
        sums: transactions_total(month: $month, year: $year) {
          type,
          total
        }
        creditTransactions: transactions(month: $month, year: $year, type: CREDIT_SPENDING) {
          ...filteredTransaction,
          creditPurchase, {
            paymentTransactionId
          }
        }
        carryoverCreditTransactions: transactions(month: $month, year: $year, type: CREDIT_CARRYOVER) {
          ...filteredTransaction,
        }
      }

      fragment filteredTransaction on Transaction {
          id,
          transactionType,
          created,
          account {
            name,
            bank {
              id,
              name
            }
          }
          category {
            id,
            name
          }
          description,
          amount,
        }
    `,
    { month, year }
  )

  const { sums, creditTransactions, carryoverCreditTransactions } = res;
 
  return {
    ...mapTransactionSums(sums),
    creditTransactions: creditTransactions.map(mapTransactions),
    carryoverCreditTransactions: carryoverCreditTransactions.map(mapTransactions)
  };
}