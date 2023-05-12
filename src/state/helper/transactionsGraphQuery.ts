import { TransactionType } from "@prisma/client"

/* Fragments */
export const dashboardTransactionsFragment = `
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
`

export const detailedTransactionsFragment = `
  ${dashboardTransactionsFragment}
  transactionType,
  created,
  description,
  amount,
`

export const creditTransactionFragment = `
  ${detailedTransactionsFragment}
  creditPurchase {
    paymentTransactionId
  }
`

/* Query helpers */
export const transactionsSumQuery = `
  sums: transactions_total(month: $month, year: $year) {
    type,
    total
  }
`

export const transactionsQueryByType = (name: string, type: TransactionType, fragment: string) => `
  ${name}: transactions(month: $month, year: $year, type: ${type}) {
    ${fragment}
  }
`