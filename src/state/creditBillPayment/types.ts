import { TransactionType } from "@prisma/client"

export interface CreditBillPaymentState {
  cashSpendingTotal: number;
  creditSpendingTotal: number;
  creditCarryoverTotal: number;
  creditTransactions: Transaction[];
  carryoverCreditTransactions: Transaction[];
  creditTransactionLoaded: boolean;
}

export interface CreditBillPaymentData {
  cashSpendingTotal: number;
  creditSpendingTotal: number;
  creditCarryoverTotal: number;
  creditTransactions: Transaction[];
  carryoverCreditTransactions: Transaction[];
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
  sums: TransactionsSum[];
  creditTransactions: TransactionResponse[];
  carryoverCreditTransactions: TransactionResponse[];
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

export interface TransactionsSum {
  type: TransactionType;
  total: number;
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