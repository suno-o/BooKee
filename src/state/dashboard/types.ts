import { AccountType, TransactionType } from "@prisma/client";

/* State */
export interface DashboardState {
  accounts: Account[];
  balanceSnapshots: BalanceSnapshot[];
  transactionsData: TransactionsData;
  accountDataLoaded: boolean;
  transactionDataLoaded: boolean;
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

export interface AccountsBalances {
  accounts: Account[];
  balanceSnapshots: BalanceSnapshot[];
}

export interface AccountsBalancesResponse {
  accounts: AccountResponse[];
  balanceSnapshots: BalanceSnapshotResponse[];
}

/* Account */
export interface Account {
  // total: number;
  accountType: AccountType;
  accountName: string;
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
  categoryName: string;
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

/* Etc */
interface Bank {
  name: string;
}

interface Category {
  name: string;
}