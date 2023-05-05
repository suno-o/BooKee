import { useEffect } from "react"
import { useAppDispatch } from "@/state"
import { fetchTransactions } from "@/state/creditBillPayment"
import { PageSection } from "@/components/Layout/Page"
import { Heading, PayBillHeading, Hr } from "./styles"
import SpendingSummary from "./SpendingSummary"
import PayBill from "./PayBill"
import { getCurrentMonthyear } from "@/utils/date"

export default function CreditBillPayment() {
  const dispatch = useAppDispatch();
  const selectedMonthLabel = getCurrentMonthyear(); // add dropdown later

  useEffect(() => {
    dispatch(fetchTransactions({month: 3, year: 2023})); // hardcode for now fix later
  }, [])
  
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