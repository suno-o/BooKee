import { useState, useEffect } from "react"
import { useAppDispatch } from "@/state"
import { fetchDashboardData } from "@/state/dashboard"
import styled from "styled-components"
import { DashboardHeading } from "../styles"
import SummaryCards from "./SummaryCards"
import TransactionSummary from "./TransactionSummary"
import DropDown from "@/components/DropDown"
import { getLastNMonths } from "@/utils/date"

export default function MonthlySummary() {
  const dispatch = useAppDispatch();
  const [selected, setSelected] = useState(getLastNMonths(1)[0]);

  useEffect(() => {
    dispatch(fetchDashboardData({ month: 3, year: 2023 }));
  }, [])

  const handleChange = (newSelected: string) => () => {
    setSelected(newSelected);
  }

  return (
    <>
      <DashboardHeading>Monthly Summary</DashboardHeading>
      
      {/* month filter */}
      <DropDownWrapper>
        <DropDown
          width={150}
          selected={selected}
          onChange={handleChange}
          listItems={getLastNMonths(6)}
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