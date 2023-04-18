export interface AccountData {
  total: number;
  balances: Balance[];
}

export interface Balance {
  bankName: string;
  balance: number;
}