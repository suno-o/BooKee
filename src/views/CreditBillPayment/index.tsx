import { PageSection } from "@/components/Layout/Page"
import { Heading, PayBillHeading, Hr } from "./styles"
import SpendingSummary from "./SpendingSummary"
import PayBill from "./PayBill"
import { getLastNMonths } from "@/utils/date"

export default function CreditBillPayment() {
  const month = getLastNMonths(1);
  
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
        <PayBillHeading>Pay your credit bills for {month}</PayBillHeading>
        <PayBill />
      </PageSection>
    </>
  )
}