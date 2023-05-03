import { TransactionType } from "@prisma/client"

export interface TransactionsState {
  transactions: Transaction[];
}

export interface Transaction {
  id: number;
  transactionType: TransactionType;
  created: string;
  bankId: number;
  bankName: string;
  categoryId: number;
  categoryName: string;
  description: string;
  amount: number;
}

export interface Response {
  transactions: TransactionResponse[];
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

interface Account {
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