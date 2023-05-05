import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit"
import { DashboardState, DashboardData, AccountsBalances, TransactionsData } from "./types"
import { getTransactionsData, getAccountsAndBalances } from "./api"

const initialState: DashboardState = {
  accounts: [],
  balanceSnapshots: [],
  accountDataLoaded: false,
  transactionsData: {
    earningTotal: 0,
    spendingTotal: 0,
    creditSpendingTotal: 0,
    earningTransactions: [],
    spendingTransactions: [],
    creditSpendingTransactions: []
  },
  transactionDataLoaded: false,
}

/* fetch accounts and transactions data */
export const fetchDashboardData = createAsyncThunk<DashboardData, {month: number; year: number}>(
  'dashboard/getAllData',
  async ({ month, year }) => {
    const [{accounts, balanceSnapshots}, transactionsData] = await Promise.all([getAccountsAndBalances(), getTransactionsData(month, year)]);

    return {
      accounts,
      balanceSnapshots,
      transactionsData
    }
  }
)

/* fetch transactions data */
export const fetchTransactions = createAsyncThunk<TransactionsData, {month: number; year: number}>(
  'dashboard/getTransactions',
  async ({ month, year }) => {
    const transactionsData = await getTransactionsData(month, year);
    return transactionsData;
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
        state.balanceSnapshots = action.payload.balanceSnapshots;
        state.transactionsData = action.payload.transactionsData;
        state.accountDataLoaded = true;
        state.transactionDataLoaded = true;
      })

      .addCase(fetchTransactions.pending, (state) => {
        state.transactionDataLoaded = false;
      })
      .addCase(fetchTransactions.fulfilled, (state, action: PayloadAction<TransactionsData>) => {
        state.transactionsData = action.payload;
        state.transactionDataLoaded = true;
      })
  },
})

export default dashboadSlice.reducer;