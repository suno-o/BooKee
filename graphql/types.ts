export interface Transaction {
  id: number;
  transactionType: string;
  userId: number;
  accountId: number;
  categoryId: number;
  description: string;
  amount: number;
  created: string;
  account: Account;
}

export interface Account {
  id: number;
  accountType: string;
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