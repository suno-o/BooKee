import { AccountType } from "@prisma/client";

/* State */
export interface UserState {
  categories: Category[];
  accounts: Account[];
  yearlyBalances: YearlyBalance[];
  dataLoaded: boolean;
  refetch: boolean;
}

export interface UserData {
  categories: Category[];
  accounts: Account[];
  yearlyBalances: YearlyBalance[];
}

/* Account */
export interface Account {
  id: string;
  accountType: AccountType;
  accountName: string;
  bankId: string;
  bankName: string;
  balance: number;
}

export interface AccountResponse {
  id: string;
  accountType: AccountType;
  name: string;
  balance: number;
  bank: Bank;
}

/* Category */
export interface Category {
  id: string;
  name: string;
}

/* Bank */
interface Bank {
  id: string;
  name: string;
}

/* Balance snapshot */
export interface YearlyBalance {
  month: string;
  balance: number;
}

export interface YearlyBalanceResponse {
  month: number;
  balance: number;
}