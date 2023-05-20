import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit"
import { UserState, UserData, Account } from "./types"
import { getAllUserData, getUserAccounts } from "./api"

const initialState: UserState = {
  categories: [],
  accounts: [],
  yearlyBalances: [],
  dataLoaded: false,
  refetch: true,
}

export const fetchAllUserData = createAsyncThunk<UserData>(
  'user/fetchAllUserData',
  async () => {
    return getAllUserData();
  }
)
export const fetchAccounts = createAsyncThunk<Account[]>(
  'user/fetchAccounts',
  async () => {
    return getUserAccounts();
  }
)

/* user slice */
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    refetchUserData: (state) => {
      state.refetch = true;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllUserData.fulfilled, (state, action: PayloadAction<UserData>) => {
        const { categories, accounts, yearlyBalances} = action.payload;
        state.categories = categories
        state.accounts = accounts;
        state.yearlyBalances = yearlyBalances;
        state.dataLoaded = true;
        state.refetch = false;
      })

      .addCase(fetchAccounts.pending, (state) => {
        state.dataLoaded = false;
      })
      .addCase(fetchAccounts.fulfilled, (state, action: PayloadAction<Account[]>) => {
        state.accounts = action.payload;
        state.dataLoaded = true;
      })
  },
})

export const { refetchUserData } = userSlice.actions;

export default userSlice.reducer;