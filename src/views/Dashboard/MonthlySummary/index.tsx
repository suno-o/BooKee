import { useFetchMonthlyTransactions } from "@/state/transactionsV2/hooks"
import styled from "styled-components"
import DropDown from "@/components/DropDown"
import SummaryCards from "./SummaryCards"
import TransactionSummary from "./TransactionSummary"

export default function MonthlySummary() {
  const { selectedMonthyear, monthyears, setMonthyear } = useFetchMonthlyTransactions();

  return (
    <>
      <DropDownWrapper>
        <DropDown
          selected={selectedMonthyear}
          onChange={setMonthyear}
          listItems={monthyears}
          customStyles={{ width: '150px' }}
        />
      </DropDownWrapper>

      {/* earning, cash spending, credit spending, net income/loss */}
      <SummaryCards />

      {/* tables */}
      <TransactionSummary />
    </>
  )
}

export const DropDownWrapper = styled.div`
  margin-bottom: 32px;
  text-align: right;
`