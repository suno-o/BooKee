import { AccountType, TransactionType } from "@prisma/client";

/* State */
export interface DashboardState {
  selectedMonthyear: string;
  accounts: Account[];
  balanceSnapshots: BalanceSnapshot[];
  transactionsData: TransactionsData;
  accountDataLoaded: boolean;
  transactionDataLoaded: boolean;
  refetchTransactionData: boolean;
}

export interface TransactionsData {
  earningTotal: number;
  spendingTotal: number;
  creditSpendingTotal: number;
  earningTransactions: Transaction[];
  spendingTransactions: Transaction[];
  creditSpendingTransactions: Transaction[];
}

export interface DashboardData {
  accounts: Account[];
  balanceSnapshots: BalanceSnapshot[];
  transactionsData: TransactionsData;
}

export type DashboardDataResponse = {
  accounts: AccountResponse[];
  balanceSnapshots: BalanceSnapshotResponse[];
} & TransactionsResponse;

/* Account */
export interface Account {
  accountType: AccountType;
  accountName: string;
  bankId: string;
  bankName: string;
  balance: number;
}

export interface AccountResponse {
  accountType: AccountType;
  name: string;
  balance: number;
  bank: Bank;
}

/* Balance snapshot */
export interface BalanceSnapshot {
  month: string;
  balance: number;
}

export interface BalanceSnapshotResponse {
  month: number;
  balance: number;
}

/* Transaction */
export interface Transaction {
  id: string;
  amount: number;
  categoryId: string;
  categoryName: string;
  bankId: string;
  bankName: string;
}

export interface TransactionsResponse {
  sums: TransactionsSum[]
  earningTransactions: TransactionResponse[];
  spendingTransactions: TransactionResponse[];
  creditSpendingTransactions: TransactionResponse[];
}

export interface TransactionsSum {
  type: TransactionType;
  total: number;
}

export interface TransactionResponse {
  id: string;
  amount: number;
  account: AccountResponse;
  category: Category;
}

/* Bank */
interface Bank {
  id: string;
  name: string;
}

/* Category */
interface Category {
  id: string;
  name: string;
}