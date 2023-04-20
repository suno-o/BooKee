import { DashboardHeading } from "../styles"
import SummaryCards from "./SummaryCards"
import TransactionSummary from "./TransactionSummary"

export default function MonthlySummary() {
  return (
    <>
      <DashboardHeading>Monthly Summary</DashboardHeading>
      
      {/* dropdown */}
      

      {/* earning, cash spending, credit spending, net income/loss */}
      <SummaryCards />

      {/* tables */}
      <TransactionSummary />
    </>
  )
}