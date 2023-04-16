export interface AccountData {
  total: number;
  balanceByBank: Balance[];
}

export interface Balance {
  bankName: string;
  balance: number;
}