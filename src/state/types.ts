export interface TransactionsState {
  transactions: Transaction[];
}

export interface Transaction {
  id: number;
  transaction_type: string;
  amount: number;
  description: string;
  date: string;
  category_id: number;
  category_name: string;
  bank_id: number;
  bank_name: string;
  account_type: string;
}