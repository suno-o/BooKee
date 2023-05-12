import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit"
import { DashboardState, DashboardData, TransactionsData, Transaction, TransactionInput } from "./types"
import { getDashboardData, getTransactionsData, postTransaction } from "./api"
import { getCurrentMonthyear } from "@/utils/date"

/* NOTE: move some states to user reducer later */
const initialState: DashboardState = {
  selectedMonthyear: getCurrentMonthyear(),
  categories: [],
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
  refetchTransactionData: false,
  postTransactionLoading: false,
}

/* fetch accounts and transactions data */
export const fetchDashboardData = createAsyncThunk<DashboardData, {month: number; year: number}>(
  'dashboard/getAllData',
  async ({ month, year }) => {
    const dashboardData = await getDashboardData(month, year);
    return dashboardData;
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

/* post transaction */
export const addTransaction = createAsyncThunk<{}, {transactionInput: TransactionInput}>(
  'dashboard/addTransaction',
  async ({ transactionInput }) => {
    await postTransaction(transactionInput);
    // handle later
    return {};
  }
)

/* dashboard slice */
const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    updateMonthyear: (state, action) => {
      state.selectedMonthyear = action.payload;
      state.refetchTransactionData = true;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDashboardData.fulfilled, (state, action: PayloadAction<DashboardData>) => {
        state.categories = action.payload.categories;
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
        state.refetchTransactionData = false;
      })

      .addCase(addTransaction.pending, (state) => {
        state.postTransactionLoading = true;
      })
      .addCase(addTransaction.fulfilled, (state, action) => {
        state.postTransactionLoading = false;
      })
  },
})

export const { updateMonthyear } = dashboardSlice.actions;

export default dashboardSlice.reducer;