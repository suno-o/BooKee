import { AccountType, TransactionType } from "@prisma/client";

export interface Transaction {
  id: number;
  transactionType: TransactionType;
  userId: number;
  accountId: number;
  categoryId: number;
  description: string;
  amount: number;
  created: string;
  account: Account;
}

export interface TransactionInput {
  transactionType: TransactionType;
  userId: string;
  accountId: string;
  categoryId: string;
  description: string;
  amount: number;
}

export interface Account {
  id: number;
  accountType: AccountType;
  name: string;
  userId: number;
  bankId: number;
  balance: number;
  bank: Bank
}

export interface Bank {
  id: number;
  name: string;
}