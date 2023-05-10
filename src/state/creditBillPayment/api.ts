import { request, gql } from "graphql-request"
import { TransactionType } from "@prisma/client"
import { Response } from "./types"
import { mapTransactionSums, mapTransactions } from "./helper"
import {
  transactionsSumQuery,
  transactionsQueryByType,
  creditTransactionFragment,
  detailedTransactionsFragment
} from "../helper/transactionsGraphQuery"

export const getTransactionsData = async (month: number, year: number) => {
  const res = await request<Response>(
    '/api/graphql',
    gql`
      query getTransactions($month: Int!, $year: Int!) {
        ${transactionsSumQuery}
        ${transactionsQueryByType('creditTransactions', TransactionType.CREDIT_SPENDING, creditTransactionFragment)}
        ${transactionsQueryByType('carryoverCreditTransactions', TransactionType.CREDIT_CARRYOVER, detailedTransactionsFragment)}
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