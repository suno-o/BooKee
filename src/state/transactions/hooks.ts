import { useMemo, useEffect } from 'react'
import { fetchTransactions, updateMonthyear } from '.'
import { useAppDispatch, useAppSelector } from '..'
import * as transactionsSelector from './selector'
import { getLastNMonthLabelsAndMap } from '@/utils/date'

export const useFetchMonthlyTransactions = () => {
  const dispatch = useAppDispatch();
  
  const selectedMonthyear = useAppSelector(transactionsSelector.selectMonthFilter);
  const { labels, labelValueMap } = useMemo(() => getLastNMonthLabelsAndMap(6), []); // note: using last 6 months for now fix later

  const refetchTransactions = useAppSelector(state => state.transactions.refetchTransactions);

  useEffect(() => {
    if (refetchTransactions === true)
      dispatch(fetchTransactions(labelValueMap[selectedMonthyear]));
  }, [selectedMonthyear, refetchTransactions])

  const setMonthyear = (newMonthyear: string) => dispatch(updateMonthyear(newMonthyear));

  return {
    selectedMonthyear,
    monthyears: labels,
    setMonthyear
  };
}

/**
 * Dashboard page
 */
export const useAllTransactionsTotalsByType = () => {
  return useAppSelector(transactionsSelector.selectTotalsByType);
}

export const useAllTransactionsByType = () => {
  return useAppSelector(transactionsSelector.selectTransactionsByType);
}

/**
 * Transactions page
 */
export const useAllTransactions = () => {
  return useAppSelector(transactionsSelector.selectAllTransactions);
}

export const useBankAndCategory = () => {
  return useAppSelector(transactionsSelector.selectBankAndCategoryFilters);
}

/**
 * Credit Payment page
 */
export const useSpendingSummaryData = () => {
  return useAppSelector(transactionsSelector.selectSpendingSummaryData);
}
export const useCreditTransactionsByPayingStatus = () => {
  return useAppSelector(transactionsSelector.selectCreditTransactionsByPayingStatus);
}

export const useCreditTransactionsTotalsByPayingStatus = () => {
  return useAppSelector(transactionsSelector.selectCreditTransactionsTotals);
}

export const useUnpaidTransactionsByAccount= () => {
  return useAppSelector(transactionsSelector.selectUnpaidCreditTransactionsByAccount);
}