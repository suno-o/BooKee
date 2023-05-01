import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit"
import { DashboardState, AccountsBalances, TransactionsData } from "./types"
import { getTransactionsData, getAccountsAndBalances } from "./api"

const initialState: DashboardState = {
  accounts: [],
  balanceSnapshots: [],
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
export const fetchDashboardData = createAsyncThunk<DashboardState, {month: number; year: number}>(
  'transactions/getAllData',
  async ({ month, year }) => {
    const [{accounts, balanceSnapshots}, transactionsData] = await Promise.all([getAccountsAndBalances(), getTransactionsData(month, year)]);

    return {
      accounts,
      balanceSnapshots,
      transactionsData
    }
  }
)

/* fetch accounts and balance snapshots */
const fetchAccountsAndBalances = createAsyncThunk<AccountsBalances>(
  'transactions/getAccountsAndBalanceSnapshots',
  async () => {
    const res = await getAccountsAndBalances();
    return res;
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
      .addCase(fetchAccountsAndBalances.fulfilled, (state, action: PayloadAction<AccountsBalances>) => {
        state.accounts = action.payload.accounts;
        state.balanceSnapshots = action.payload.balanceSnapshots;
      })
      
      .addCase(fetchDashboardData.fulfilled, (state, action: PayloadAction<DashboardState>) => {
        state.accounts = action.payload.accounts;
        state.balanceSnapshots = action.payload.balanceSnapshots;
        state.transactionsData = action.payload.transactionsData;
      })
  },
})

export default dashboadSlice.reducer;