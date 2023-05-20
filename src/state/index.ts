import { configureStore } from "@reduxjs/toolkit"
import { TypedUseSelectorHook, useSelector, useDispatch } from "react-redux"
import user from "./user"
// import dashboard from "./dashboard"
// import transactions from './transactions'
// import creditBillPayment from './creditBillPayment'
import transactionsV2 from "./transactionsV2"

export const store = configureStore({
  reducer: {
    user,
    // dashboard,
    // transactions,
    // creditBillPayment,
    transactionsV2
  }
})

export type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch: () => AppDispatch = useDispatch;