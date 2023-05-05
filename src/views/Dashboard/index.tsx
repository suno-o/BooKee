import { useEffect } from "react"
import { useAppDispatch } from "@/state"
import { fetchDashboardData } from "@/state/dashboard"
import { DashboardHeading, DropDownWrapper } from "./styles"
import { PageSection } from "@/components/Layout/Page"
import Accounts from "./Accounts"
import MonthlySummary from "./MonthlySummary"
import DropDown from "@/components/DropDown"
import { useLastNMonthDropdown } from "@/hooks/useLastNMonthDropdown"

export default function Dashboard() {
  const dispatch = useAppDispatch();
  const { selectedMonthLabel, setSelectedMonthLabel, labels, getLabelValue } = useLastNMonthDropdown(6);

  useEffect(() => {
    /* fetch accounts, monthly balances and transactions data on initial load */
    dispatch(fetchDashboardData(getLabelValue(selectedMonthLabel)));
  }, [])

  const handleChange = (newMonthname: string) => {
    setSelectedMonthLabel(newMonthname);
  }

  return (
    <>
      <PageSection>
        <DashboardHeading>Accounts</DashboardHeading>
        <Accounts />
      </PageSection>

      <PageSection>
        <DashboardHeading>Monthly Summary</DashboardHeading>
        <DropDownWrapper>
          <DropDown
            width={150}
            selected={selectedMonthLabel}
            onChange={handleChange}
            listItems={labels}
          />
        </DropDownWrapper>
        <MonthlySummary
          monthValue={getLabelValue(selectedMonthLabel)}
        />
      </PageSection>
    </>
  )
}