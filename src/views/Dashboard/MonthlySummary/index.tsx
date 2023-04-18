import { DashboardHeading } from "../styles"
import SummaryCards from "./SummaryCards"
import { aprilTransactionData } from "@/state/mockData"

export default function MonthlySummary() {
  const { transactions, ...summaryData } = aprilTransactionData;
  return (
    <>
      <DashboardHeading>Monthly Summary</DashboardHeading>
      {/* filter */}

      {/* earning, cash spending, credit spending, net income/loss */}
      <SummaryCards {...summaryData} />

      {/* tables */}
    </>
  )
}

