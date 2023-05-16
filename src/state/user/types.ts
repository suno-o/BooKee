import { AccountType } from "@prisma/client";

/* State */
export interface UserState {
  categories: Category[];
  accounts: Account[];
}

export interface UserDataResponse {
  categories: Category[];
  accounts: AccountResponse[];
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