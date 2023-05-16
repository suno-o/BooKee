import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit"
import { UserState, Category, Account } from "./types"
import { getUserCategories, getUserAccounts } from "./api"

const initialState: UserState = {
  categories: [],
  accounts: [],
}

export const fetchCategories = createAsyncThunk<Category[]>(
  'user/fetchCategories',
  async () => {
    const categories = await getUserCategories();
    return categories;
  }
)

export const fetchAccounts = createAsyncThunk<Account[]>(
  'user/fetchAccounts',
  async () => {
    const accounts = await getUserAccounts();
    return accounts;
  }
)

/* user slice */
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.fulfilled, (state, action: PayloadAction<Category[]>) => {
        state.categories = action.payload;
      })

      .addCase(fetchAccounts.fulfilled, (state, action: PayloadAction<Account[]>) => {
        state.accounts = action.payload;
      })
  },
})

export default userSlice.reducer;