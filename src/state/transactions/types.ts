import { TransactionType } from "@prisma/client"

export interface TransactionsState {
  transactions: Transaction[];
  transactionsLoaded: boolean;
}

export interface Transaction {
  id: string;
  transactionType: TransactionType;
  created: string;
  bankId: string;
  bankName: string;
  categoryId: string;
  categoryName: string;
  description: string;
  amount: number;
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
}

interface Account {
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