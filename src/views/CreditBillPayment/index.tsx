import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "@/state"
import { creditTransactionsSelector } from "@/state/creditBillPayment/selector"
import { fetchTransactions } from "@/state/creditBillPayment"
import SpendingSummary from "./SpendingSummary"
import PaymentSummary from "./PaymentSummary"
import PayBill from "./PayBill"
import { PageSection } from "@/components/Layout/Page"
import { Heading, CenteredHeading, Note, Hr, LoadingWrapper } from "./styles"
import LoadingIndicator from "@/components/LoadingIndicator"
import { getCurrentMonthyear } from "@/utils/date"

export default function CreditBillPayment() {
  const dispatch = useAppDispatch();
  const { paidTransactions, carryoverTransactions, unPaidTransactions } = useAppSelector(creditTransactionsSelector);
  const { creditTransactionLoaded } = useAppSelector(state => state.creditBillPayment);
  const selectedMonthLabel = getCurrentMonthyear(); // add dropdown later

  useEffect(() => {
    dispatch(fetchTransactions({month: 3, year: 2023})); // hardcode for now fix later
  }, [])
  
  return (
    <>
      {/* Spending Summary */}
      <PageSection>
        <Heading>Spending Summary </Heading>
        <SpendingSummary />
        <Note>* Credit spending does not include carried over amounts</Note>
      </PageSection>

      {creditTransactionLoaded ? (
        <>
          {/* Payment Summary */}
          {(paidTransactions.length > 0 || carryoverTransactions.length > 0) && (
            <PageSection>
              <Heading>Payment Summary </Heading>
              <PaymentSummary />
            </PageSection>
          )}

          {/* Pay Credit Bills */}
          {unPaidTransactions.length > 0 && (
            <>
              <PageSection>
                <Hr />
              </PageSection>

              <PageSection>
                <CenteredHeading>Pay your credit bills for {selectedMonthLabel}</CenteredHeading>
                <PayBill />
              </PageSection>
            </>
          )}
        </>
      ) : (
        <LoadingWrapper>
          <LoadingIndicator width={32} height={32} />
        </LoadingWrapper>
      )}
    </>
  )
}