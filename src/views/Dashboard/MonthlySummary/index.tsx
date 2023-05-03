import { useEffect } from "react"
import { useAppDispatch } from "@/state"
import { fetchDashboardData } from "@/state/dashboard"
import styled from "styled-components"
import { DashboardHeading } from "../styles"
import SummaryCards from "./SummaryCards"
import TransactionSummary from "./TransactionSummary"
import DropDown from "@/components/DropDown"
import { useLastNMonthDropdown } from "@/hooks/useLastNMonthDropdown"

export default function MonthlySummary() {
  const dispatch = useAppDispatch();
  const { selectedMonthLabel, setSelectedMonthLabel, labels, getLabelValue } = useLastNMonthDropdown(6);

  useEffect(() => {
    dispatch(fetchDashboardData(getLabelValue(selectedMonthLabel)));
  }, [selectedMonthLabel])

  const handleChange = (newMonthname: string) => {
    setSelectedMonthLabel(newMonthname);
  }

  return (
    <>
      <DashboardHeading>Monthly Summary</DashboardHeading>
      
      {/* month filter */}
      <DropDownWrapper>
        <DropDown
          width={150}
          selected={selectedMonthLabel}
          onChange={handleChange}
          listItems={labels}
        />
      </DropDownWrapper>

      {/* earning, cash spending, credit spending, net income/loss */}
      <SummaryCards />

      {/* tables */}
      <TransactionSummary />
    </>
  )
}

const DropDownWrapper = styled.div`
  margin-bottom: 32px;
  text-align: right;
`