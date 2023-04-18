import { PageSection } from "@/components/Layout/Page"
import Accounts from "./Accounts"
import MonthlySummary from "./MonthlySummary"

export default function Dashboard() {

  return (
    <>
      <PageSection>
        <Accounts />
      </PageSection>

      <PageSection>
        <MonthlySummary />
      </PageSection>
    </>
  )
}