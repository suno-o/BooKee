import { useEffect, useMemo } from "react"
import { useAppDispatch, useAppSelector } from "@/state"
import { fetchDashboardData, updateMonthyear } from "@/state/dashboard"
import { DashboardHeading, DropDownWrapper } from "./styles"
import { PageSection } from "@/components/Layout/Page"
import Accounts from "./Accounts"
import MonthlySummary from "./MonthlySummary"
import DropDown from "@/components/DropDown"
import { getLastNMonthLabelsAndMap } from "@/utils/date"

export default function Dashboard() {
  const dispatch = useAppDispatch();
  const { selectedMonthyear } = useAppSelector(state => state.dashboard);
  const { labels, labelValueMap } = useMemo(() => getLastNMonthLabelsAndMap(6), []);
  
  useEffect(() => {
    /* fetch accounts, monthly balances and transactions data on initial page load */
    dispatch(fetchDashboardData(labelValueMap[selectedMonthyear]));
  }, [])

  const handleChange = (newMonthname: string) => {
    dispatch(updateMonthyear(newMonthname));
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
            selected={selectedMonthyear}
            onChange={handleChange}
            listItems={labels}
          />
        </DropDownWrapper>
        <MonthlySummary
          monthValue={labelValueMap[selectedMonthyear]}
        />
      </PageSection>
    </>
  )
}