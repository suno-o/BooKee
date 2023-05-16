import { useEffect } from "react"
import { fetchCategories, fetchAccounts } from "."
import { useAppDispatch, useAppSelector } from ".."
import { cashAccountSelector } from "./selector"

export const useFetchCategories = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCategories())
  }, [])
}

export const useFetchAccounts = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAccounts())
  }, [])
}

export const useCategories = () => {
  const { categories } = useAppSelector(state => state.user);
  return categories;
}

export const useCashAccounts = () => {
  const accounts = useAppSelector(cashAccountSelector);
  return accounts;
}