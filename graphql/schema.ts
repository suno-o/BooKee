export const typeDefs = `
  scalar Date
  
  type Transaction {
    id: ID
    transactionType: String
    userId: ID
    accountId: ID
    categoryId: ID
    description: String
    amount: Float
    created: Date
    account: Account
    category: Category
  }

  type TransactionSum {
    type: TransactionType
    total: Float
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

  type UserBalanceSnapshot {
    id: ID
    userId: ID
    month: Int
    year: Int
    balance: Float
  }

  type Bank {
    id: ID
    name: String
  }

  type Category {
    id: ID
    name: String
  }

  enum AccountType {
    CHEQUING,
    SAVINGS,
    CREDIT
  }

  enum TransactionType {
    CASH_EARNING,
    CASH_SPENDING,
    CREDIT_SPENDING,
    CREDIT_BILL_PAYMENT
  }

  type Query {
    accounts: [Account]!
    balance_snapshots: [UserBalanceSnapshot]!
    transactions_total(month: Int!, year: Int!): [TransactionSum]!
    transactions(month: Int!, year: Int!, type: TransactionType): [Transaction]!
  }
`