import { AccountType, TransactionType } from "@prisma/client";

/* State */
export interface DashboardState {
  accounts: Account[];
  monthlyBalanceSnapshots: BalanceSnapshots[];
  transactionsData: TransactionsData;
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
  transactionsData: TransactionsData;
}

/* Account */
export interface Account {
  // total: number;
  accountType: AccountType;
  accountName: string;
  bankName: string;
  balance: number;
}

export interface AccountResult {
  accounts: AccountResponse[];
}

export interface AccountResponse {
  // total: number;
  accountType: AccountType;
  name: string;
  balance: number;
  bank: Bank;
}

/* Balance snapshot */
export interface BalanceSnapshots {
  month: number;
  year: number;
  balance: number;
}

/* Transaction */
export interface Transaction {
  id: number;
  amount: number;
  categoryName: string;
  bankName: string;
}

export interface TransactionResult {
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
  id: number;
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