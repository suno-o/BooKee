import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "@/state"
import { fetchTransactions } from "@/state/dashboard"
import SummaryCards from "./SummaryCards"
import TransactionSummary from "./TransactionSummary"

interface Props {
  monthValue: {
    month: number;
    year: number;
  }
}

export default function MonthlySummary({
  monthValue
}: Props) {
  const dispatch = useAppDispatch();
  const { refetchTransactionData } = useAppSelector(state => state.dashboard);

  // fetch new transactions data when month dropdown is updated
  // Note: refetchTransactionData state is updated in 'updateMonthyear' reducer when the user selects a new monthyear
  useEffect(() => {
    if (refetchTransactionData) {
      dispatch(fetchTransactions(monthValue));
    }
  }, [monthValue, refetchTransactionData])

  return (
    <>
      {/* earning, cash spending, credit spending, net income/loss */}
      <SummaryCards />

      {/* tables */}
      <TransactionSummary />
    </>
  )
}