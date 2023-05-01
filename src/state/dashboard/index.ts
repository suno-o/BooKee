import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit"
import { DashboardState, DashboardData, Account, TransactionsData } from "./types"
import { getTransactionsData, getAccounts } from "./api"

const initialState: DashboardState = {
  accounts: [],
  monthlyBalanceSnapshots: [],
  transactionsData: {
    earningTotal: 0,
    spendingTotal: 0,
    creditSpendingTotal: 0,
    earningTransactions: [],
    spendingTransactions: [],
    creditSpendingTransactions: []
  }
}

/* fetch accounts and transactions data */
export const fetchDashboardData = createAsyncThunk<DashboardData, {month: number; year: number}>(
  'transactions/getAllData',
  async ({ month, year }) => {
    const [accounts, transactionsData] = await Promise.all([getAccounts(), getTransactionsData(month, year)]);

    return {
      accounts,
      transactionsData
    }
  }
)

/* fetch accounts */
const fetchAccounts = createAsyncThunk<Account[]>(
  'transactions/getAccounts',
  async () => {
    const accounts = await getAccounts();
    return accounts;
  }
)

/* fetch transactions data */
export const fetchTransactions = createAsyncThunk<TransactionsData, {month: number; year: number}>(
  'transactions/getTransactions',
  async ({ month, year }) => {
    const transactions = await getTransactionsData(month, year);
    return transactions;
  }
)

/* dashboard slice */
const dashboadSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDashboardData.fulfilled, (state, action: PayloadAction<DashboardData>) => {
        state.accounts = action.payload.accounts;
        state.transactionsData = action.payload.transactionsData;
      })

  },
})

export default dashboadSlice.reducer;