export interface AccountData {
  total: number;
  balances: Balance[];
}

export interface Balance {
  bankName: string;
  balance: number;
}

export interface MonthlySummary {
  cashEarning: number;
  cashSpending: number;
  creditSpending: number;
  total: number;
}

export interface Transaction {
  id: number;
  type: string;
  amount: number;
  date: string;
  category_id: number;
  category_name: string;
  bank_id: number;
  bank_name: string;
}

export interface MonthlyTransactions extends MonthlySummary {
  transactions: Transaction[];
};