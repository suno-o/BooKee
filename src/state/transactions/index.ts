import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit"
import { TransactionsState, Transaction } from "./types"
import { getTransactions } from "./api"

const initialState: TransactionsState = {
  transactions: []
}

export const fetchTransactions = createAsyncThunk<Transaction[], {month: number; year: number}>(
  'transactions/getTransactions',
  async ({ month, year }) => {
    const transactions = await getTransactions(month, year);
    return transactions;
  }
)

const transactionsSlice = createSlice({
  name: 'transacations',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTransactions.fulfilled, (state, action: PayloadAction<Transaction[]>) => {
        state.transactions = action.payload;
      })

  },
})

export default transactionsSlice.reducer;