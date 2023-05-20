import { configureStore } from "@reduxjs/toolkit"
import { TypedUseSelectorHook, useSelector, useDispatch } from "react-redux"
import user from "./user"
import transactions from "./transactions"

export const store = configureStore({
  reducer: {
    user,
    transactions
  }
})

export type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch: () => AppDispatch = useDispatch;