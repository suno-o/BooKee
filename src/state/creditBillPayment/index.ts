import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit"
import { CreditBillPaymentState, CreditBillPaymentData } from "./types"
import { getTransactionsData } from "./api"

const initialState: CreditBillPaymentState = {
  cashSpendingTotal: 0,
  creditSpendingTotal: 0,
  creditTransactions: [],
  creditTransactionLoaded: false,
}

export const fetchTransactions = createAsyncThunk<CreditBillPaymentData, {month: number; year: number}>(
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
      .addCase(fetchTransactions.fulfilled, (state, action: PayloadAction<CreditBillPaymentData>) => {
        const { cashSpendingTotal, creditSpendingTotal, creditTransactions } = action.payload;
        state.cashSpendingTotal = cashSpendingTotal;
        state.creditSpendingTotal = creditSpendingTotal;
        state.creditTransactions = creditTransactions;
        state.creditTransactionLoaded = true;
      })

  },
})

export default billPaymentSlice.reducer;