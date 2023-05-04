import { TransactionType } from "@prisma/client"

export interface CreditBillPaymentState {
  cashSpendingTotal: number;
  creditSpendingTotal: number;
  creditTransactions: Transaction[];
}

export interface Transaction {
  id: number;
  transactionType: TransactionType;
  created: string;
  accountName: string;
  bankId: number;
  bankName: string;
  categoryId: number;
  categoryName: string;
  description: string;
  amount: number;
}

export interface Response {
  sums: TransactionsSum[];
  creditTransactions: TransactionResponse[];
}

export interface TransactionResponse {
  id: number;
  transactionType: TransactionType;
  created: string;
  account: Account;
  category: Category;
  description: string;
  amount: number;
}

export interface TransactionsSum {
  type: TransactionType;
  total: number;
}

interface Account {
  name: string;
  bank: Bank;
}

interface Bank {
  id: number;
  name: string;
}

interface Category {
  id: number;
  name: string;
}