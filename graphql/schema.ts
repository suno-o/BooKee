export const typeDefs = `
  type Transaction {
    id: ID
    transactionType: String
    userId: ID
    accountId: ID
    categoryId: ID
    description: String
    amount: Float
    created: String
    account: Account
  }

  type Account {
    id: ID
    accountType: String
    name: String
    userId: ID
    bankId: ID
    balance: Float
    bank: Bank
  }

  type Bank {
    id: ID
    name: String
  }

  type Query {
    accounts: [Account]!
    transactions(month: Int!, year: Int!): [Transaction]!
  }
`