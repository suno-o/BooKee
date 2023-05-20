import { TransactionType } from "@prisma/client"

export interface TransactionsState {
  selectedMonthyear: string;
  data: Transaction[];
  transactionsLoaded: boolean;
  refetchTransactions: boolean;
}

export interface Transaction {
  id: string;
  transactionType: TransactionType;
  created: string;
  accountName: string;
  bankId: string;
  bankName: string;
  categoryId: string;
  categoryName: string;
  description: string;
  amount: number;
  paymentTransactionId?: string;
}

export interface Response {
  transactions: TransactionResponse[];
}

export interface TransactionResponse {
  id: string;
  transactionType: TransactionType;
  created: string;
  account: Account;
  category: Category;
  description: string;
  amount: number;
  creditPurchase?: CreditPurchase;
}

export interface TransactionInput {
  transactionType: TransactionType;
  userId: string;
  accountId: string;
  categoryId: string;
  description: string;
  amount: number;
}

interface Account {
  name: string;
  bank: Bank;
}

interface Bank {
  id: string;
  name: string;
}

interface Category {
  id: string;
  name: string;
}

interface CreditPurchase {
  paymentTransactionId: string;
}