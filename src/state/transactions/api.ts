import { request, gql } from "graphql-request"
import { Response } from "./types"
import { mapTransactions } from "./helper"


export const getTransactions = async (month: number, year: number) => {
  const res = await request<Response>(
    '/api/graphql',
    gql`
      query getTransactions($month: Int!, $year: Int!) {
        transactions(month: $month, year: $year) {
          id,
          transactionType,
          created,
          account {
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
      }
    `,
    { month, year }
  )
 
  return res?.transactions ? res.transactions.map(mapTransactions) : [];
}