import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit"
import { CreditBillPaymentState } from "./types"
import { getTransactionsData } from "./api"

const initialState: CreditBillPaymentState = {
  cashSpendingTotal: 0,
  creditSpendingTotal: 0,
  creditTransactions: [],
}

export const fetchTransactions = createAsyncThunk<CreditBillPaymentState, {month: number; year: number}>(
  'billPayment/getTransactions',
  async ({ month, year }) => {
    const transactionsData = await getTransactionsData(month, year);
    return transactionsData;
  }
)

const billPaymentSlice = createSlice({
  name: 'billPayment',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTransactions.fulfilled, (state, action: PayloadAction<CreditBillPaymentState>) => {
        const { cashSpendingTotal, creditSpendingTotal, creditTransactions } = action.payload;
        state.cashSpendingTotal = cashSpendingTotal;
        state.creditSpendingTotal = creditSpendingTotal;
        state.creditTransactions = creditTransactions;
      })

  },
})

export default billPaymentSlice.reducer;