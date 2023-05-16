import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit"
import { CreditBillPaymentState, CreditBillPaymentData } from "./types"
import { getTransactionsData, payBillRequest } from "./api"
import { getCurrentMonthyear } from "@/utils/date"
import { PayBillInput } from "@/../graphql/types"

const initialState: CreditBillPaymentState = {
  selectedMonthyear: getCurrentMonthyear(),
  cashSpendingTotal: 0,
  creditSpendingTotal: 0,
  creditCarryoverTotal: 0,
  creditTransactions: [],
  carryoverCreditTransactions: [],
  creditTransactionLoaded: false,
  transactionDataFetchNeeded: true,
}

export const fetchTransactions = createAsyncThunk<CreditBillPaymentData, {month: number; year: number}>(
  'billPayment/getTransactions',
  async ({ month, year }) => {
    const transactionsData = await getTransactionsData(month, year);
    return transactionsData;
  }
)

export const payBill = createAsyncThunk<{}, PayBillInput>(
  'billPayment/payBill',
  async (args) => {
    await payBillRequest(args);
    return;
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
        state.transactionDataFetchNeeded = false;
      })

      .addCase(payBill.fulfilled, (state) => {
        state.transactionDataFetchNeeded = true;
      })
  },
})

export const { updateMonthyear } = billPaymentSlice.actions;

export default billPaymentSlice.reducer;