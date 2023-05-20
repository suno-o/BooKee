import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit"
import { getTransactions, postTransaction, payBillRequest } from "./api"
import { getCurrentMonthyear } from "@/utils/date"
import { PayBillInput } from "../../../graphql/types"
import { TransactionsState, Transaction, TransactionInput } from "./types"

const initialState: TransactionsState = {
  selectedMonthyear: getCurrentMonthyear(),
  data: [],
  transactionsLoaded: true,
  refetchTransactions: true,
}

/* Actions */
export const fetchTransactions = createAsyncThunk<Transaction[], {month: number; year: number}>(
  'transactions/getTransactions',
  async ({ month, year }) => {
    const transactions = await getTransactions(month, year);
    return transactions;
  }
)

export const addTransaction = createAsyncThunk<{}, {transactionInput: TransactionInput}>(
  'transactions/addTransaction',
  async ({ transactionInput }) => {
    await postTransaction(transactionInput);
    return {};
  }
)

export const payBill = createAsyncThunk<{}, PayBillInput>(
  'billPayment/payBill',
  async (args) => {
    await payBillRequest(args);
    return;
  }
)

/* Slice */
const transactionsSlice = createSlice({
  name: 'transacations',
  initialState,
  reducers: {
    updateMonthyear: (state, action) => {
      state.selectedMonthyear = action.payload;
      state.refetchTransactions = true;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTransactions.pending, (state) => {
        state.refetchTransactions = false;
        state.transactionsLoaded = false;
      })
      .addCase(fetchTransactions.fulfilled, (state, action: PayloadAction<Transaction[]>) => {
        state.data = action.payload;
        state.transactionsLoaded = true;
      })

      .addCase(addTransaction.fulfilled, (state) => {
        state.refetchTransactions = true;
      })

      .addCase(payBill.fulfilled, (state) => {
        state.refetchTransactions = true;
      })
  },
})

export const { updateMonthyear } = transactionsSlice.actions;

export default transactionsSlice.reducer;