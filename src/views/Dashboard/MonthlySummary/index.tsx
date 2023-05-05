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
  const { accountDataLoaded } = useAppSelector(state => state.dashboard);

  // fetch new transactions data when month dropdown is updated
  // Note: accountDataLoaded state is used to make sure transaction data for the current month is not fetched twice on initial page load
  useEffect(() => {
    if (accountDataLoaded) {
      dispatch(fetchTransactions(monthValue));
    }
  }, [monthValue])

  return (
    <>
      {/* earning, cash spending, credit spending, net income/loss */}
      <SummaryCards />

      {/* tables */}
      <TransactionSummary />
    </>
  )
}