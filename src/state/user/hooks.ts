import { useEffect } from "react"
import { fetchAllUserData, fetchAccounts } from "."
import { useAppDispatch, useAppSelector } from ".."
import { selectAccountsByType, selectBalancesByAccounts, selectYearlyBalances } from "./selector"

/* fetch hooks */
export const useFetchUserData = () => {
  const dispatch = useAppDispatch();
  const { refetch } = useAppSelector(state => state.user);

  useEffect(() => {
    if (refetch) {
      dispatch(fetchAllUserData())
    }
  }, [refetch])
}

export const useFetchAccounts = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAccounts())
  }, [])
}

/* state hooks */
export const useCategories = () => {
  const { categories } = useAppSelector(state => state.user);
  return categories;
}

export const useAccountsByType = () => {
  return useAppSelector(selectAccountsByType);
}

export const useCashAccounts = () => {
  const { cashAccounts } = useAppSelector(selectAccountsByType);
  return cashAccounts;
}

export const useBalancesByAccounts = () => {
  return useAppSelector(selectBalancesByAccounts);
}

export const useYearlyBalances = () => {
  return useAppSelector(selectYearlyBalances);
}