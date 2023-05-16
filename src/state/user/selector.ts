import { createSelector } from "@reduxjs/toolkit"
import { RootState } from "..";
import { AccountType } from "@prisma/client";

const accountsSelector = (state: RootState) => state.user.accounts;

export const cashAccountSelector = createSelector(
  accountsSelector,
  (accounts) => accounts.filter(account => account.accountType !== AccountType.CREDIT)
)