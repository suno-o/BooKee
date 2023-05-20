import { request, gql } from "graphql-request"
import { PayBillInput } from "../../../graphql/types"
import { Response, TransactionResponse, TransactionInput } from "./types"
import { mapTransactions } from "./helper"

/* Query */
export const getTransactions = async (month: number, year: number) => {
  const res = await request<Response>(
    '/api/graphql',
    gql`
      query getTransactions($month: Int!, $year: Int!) {
        transactions(month: $month, year: $year) {
          id,
          amount,
          account {
            name,
            bank {
              id
              name
            }
          }
          category {
            id
            name
          }
          transactionType,
          created,
          description,
          amount,
          creditPurchase {
            paymentTransactionId
          }
        }
      }
    `,
    { month, year }
  )
 
  return res?.transactions ? res.transactions.map(mapTransactions) : [];
}

interface AddTransactionResponse {
  newTransaction: TransactionResponse;
}

/* Mutation */
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

export const payBillRequest = (input: PayBillInput) => {
  return request<Response>(
    '/api/graphql',
    gql`
      mutation payBill($input: PayBillInput!) {
        payBill(input: $input) {
          id
        }
      }
    `,
    { input }
  )
}