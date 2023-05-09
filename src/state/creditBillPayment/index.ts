import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit"
import { CreditBillPaymentState, CreditBillPaymentData } from "./types"
import { getTransactionsData } from "./api"
import { getCurrentMonthyear } from "@/utils/date"

const initialState: CreditBillPaymentState = {
  selectedMonthyear: getCurrentMonthyear(),
  cashSpendingTotal: 0,
  creditSpendingTotal: 0,
  creditCarryoverTotal: 0,
  creditTransactions: [],
  carryoverCreditTransactions: [],
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
  reducers: {
    updateMonthyear: (state, action) => {
      state.selectedMonthyear = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTransactions.pending, (state) => {
        state.creditTransactionLoaded = false;
      })
      .addCase(fetchTransactions.fulfilled, (state, action: PayloadAction<CreditBillPaymentData>) => {
        const { cashSpendingTotal, creditSpendingTotal, creditCarryoverTotal, creditTransactions, carryoverCreditTransactions } = action.payload;
        state.cashSpendingTotal = cashSpendingTotal;
        state.creditSpendingTotal = creditSpendingTotal;
        state.creditCarryoverTotal = creditCarryoverTotal;
        state.creditTransactions = creditTransactions;
        state.carryoverCreditTransactions = carryoverCreditTransactions;
        state.creditTransactionLoaded = true;
      })

  },
})

export const { updateMonthyear } = billPaymentSlice.actions;

export default billPaymentSlice.reducer;