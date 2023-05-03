import { PageSection } from "@/components/Layout/Page"
import { Heading, PayBillHeading, Hr } from "./styles"
import SpendingSummary from "./SpendingSummary"
import PayBill from "./PayBill"
import { useLastNMonthDropdown } from "@/hooks/useLastNMonthDropdown"

export default function CreditBillPayment() {
  const { selectedMonthLabel } = useLastNMonthDropdown(1); // add dropdown later
  
  return (
    <>
      <PageSection>
        <Heading>Spending Summary </Heading>
        <SpendingSummary />
      </PageSection>

      <PageSection>
        <Hr />
      </PageSection>

      <PageSection>
        <PayBillHeading>Pay your credit bills for {selectedMonthLabel}</PayBillHeading>
        <PayBill />
      </PageSection>
    </>
  )
}