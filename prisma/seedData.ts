import { AccountType, TransactionType } from "@prisma/client";

export const banks = [
  { name: 'TD' },
  { name: 'CIBC' },
  { name: 'BMO' },
  { name: 'RBC' },
  { name: 'Scotia' },
  { name: 'EQ Bank' },
  { name: 'Simplii' },
  { name: 'Tangerine' },
]

export const userBalanceSnapshot = [
  {
    userId: 1,
    month: 6,
    year: 2022,
    balance: 18000,
  },
  {
    userId: 1,
    month: 7,
    year: 2022,
    balance: 20000,
  },
  {
    userId: 1,
    month: 8,
    year: 2022,
    balance: 25000,
  },
  {
    userId: 1,
    month: 9,
    year: 2022,
    balance: 30000,
  },
  {
    userId: 1,
    month: 10,
    year: 2022,
    balance: 35000,
  },
  {
    userId: 1,
    month: 11,
    year: 2022,
    balance: 40000,
  },
  {
    userId: 1,
    month: 0,
    year: 2023,
    balance: 45000,
  },
  {
    userId: 1,
    month: 1,
    year: 2023,
    balance: 50000,
  },
  {
    userId: 1,
    month: 2,
    year: 2023,
    balance: 55000,
  }
]

export const categories = [
  { userId: 1, name: 'Payroll deposit' },
  { userId: 1, name: 'Grocery' },
  { userId: 1, name: 'Utility' },
  { userId: 1, name: 'Subscription' },
  { userId: 1, name: 'Kijiji sales'}
];

export const accounts = [
  {
    accountType: AccountType.CHEQUING,
    name: 'TD Chequing',
    userId: 1,
    bankId: 1,
    balance: 10000,
  },
  {
    accountType: AccountType.CHEQUING,
    name: 'CIBC Chequing',
    userId: 1,
    bankId: 2,
    balance: 10000,
  },
  {
    accountType: AccountType.CHEQUING,
    name: 'BMO Chequing',
    userId: 1,
    bankId: 3,
    balance: 10000,
  },
  {
    accountType: AccountType.CHEQUING,
    name: 'RBC Chequing',
    userId: 1,
    bankId: 4,
    balance: 10000,
  },
  {
    accountType: AccountType.CHEQUING,
    name: 'Scotia Chequing',
    userId: 1,
    bankId: 5,
    balance: 10000,
  },
  {
    accountType: AccountType.SAVINGS,
    name: 'Tangerine Savings',
    userId: 1,
    bankId: 6,
    balance: 10000,
  },
  {
    accountType: AccountType.CREDIT,
    name: 'TD Aeroplan Visa',
    userId: 1,
    bankId: 1,
    balance: -118.63,
  },
  {
    accountType: AccountType.CREDIT,
    name: 'Scotia Momentum Visa',
    userId: 1,
    bankId: 5,
    balance: -350.45,
  },
];

export const transactions = [
  {
    transactionType: TransactionType.CASH,
    userId: 1,
    accountId: 1,
    categoryId: 1,
    description: 'Pay cheque deposit',
    amount: 2500,
    created: new Date('2023-04-15 20:00:00.550000-04'),
  },
  {
    transactionType: TransactionType.CASH,
    userId: 1,
    accountId: 5,
    categoryId: 4,
    description: 'Netflix subs',
    amount: -24.99,
    created: new Date('2023-04-12 20:00:00.550000-04'),
  },
  {
    transactionType: TransactionType.CASH,
    userId: 1,
    accountId: 5,
    categoryId: 4,
    description: 'Amazon prime',
    amount: -10.5,
    created: new Date('2023-04-11 20:00:00.550000-04'),
  },
  {
    transactionType: TransactionType.CREDIT,
    userId: 1,
    accountId: 7,
    categoryId: 3,
    description: 'Internet bill',
    amount: -55.5,
    created: new Date('2023-04-09 20:00:00.550000-04'),
  },
  {
    transactionType: TransactionType.CREDIT,
    userId: 1,
    accountId: 7,
    categoryId: 3,
    description: 'Hydro bill',
    amount: -63.13,
    created: new Date('2023-04-08 20:00:00.550000-04'),
  },
  {
    transactionType: TransactionType.CASH,
    userId: 1,
    accountId: 4,
    categoryId: 5,
    description: 'Sold monitor',
    amount: 200,
    created: new Date('2023-04-07 20:00:00.550000-04'),
  },
  {
    transactionType: TransactionType.CREDIT,
    userId: 1,
    accountId: 8,
    categoryId: 2,
    description: 'Food basics again..',
    amount: -100.11,
    created: new Date('2023-04-06 20:00:00.550000-04'),
  },
  {
    transactionType: TransactionType.CREDIT,
    userId: 1,
    accountId: 8,
    categoryId: 2,
    description: 'Food basics',
    amount: -120.11,
    created: new Date('2023-04-05 20:00:00.550000-04'),
  },
  {
    transactionType: TransactionType.CREDIT,
    userId: 1,
    accountId: 8,
    categoryId: 2,
    description: 'Walmart',
    amount: -130.23,
    created: new Date('2023-04-02 20:00:00.550000-04'),
  },
  {
    transactionType: TransactionType.CASH,
    userId: 1,
    accountId: 1,
    categoryId: 1,
    description: 'Pay cheque deposit',
    amount: 2500,
    created: new Date('2023-04-01 20:00:00.550000-04'),
  },
];