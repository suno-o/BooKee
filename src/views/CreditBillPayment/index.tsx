import { useFetchMonthlyTransactions, useCreditTransactionsByPayingStatus } from "@/state/transactionsV2/hooks"
import { useFetchAccounts } from "@/state/user/hooks"
import SpendingSummary from "./SpendingSummary"
import PaymentSummary from "./PaymentSummary"
import PayBill from "./PayBill"
import DropDown from "@/components/DropDown"
import { PageSection, PageSafeBottomArea } from "@/components/Layout/Page"
import { Heading, CenteredHeading, Note, Hr, LoadingWrapper, DropDownWrapper } from "./styles"
import LoadingIndicator from "@/components/LoadingIndicator"

export default function CreditBillPayment() {
  useFetchAccounts();
  const { selectedMonthyear, monthyears, setMonthyear } = useFetchMonthlyTransactions();
  const { unPaidTransactions, transactionsLoaded } = useCreditTransactionsByPayingStatus();
  
  return (
    <>
      <PageSection smallMargin>
        <DropDownWrapper>
          <DropDown
            selected={selectedMonthyear}
            onChange={setMonthyear}
            listItems={monthyears}
            customStyles={{ width: '150px' }}
          />
        </DropDownWrapper>
      </PageSection>

      {/* Spending Summary */}
      <PageSection smallMargin>
        <Heading>Spending Summary </Heading>
        <SpendingSummary />
        <Note>* Credit spending does not include carried over amounts</Note>
      </PageSection>

      {/* Payment Summary */}
      <PageSection>
        <Heading>Credit Bill Payment Summary </Heading>
        <PaymentSummary />
      </PageSection>

      {/* Pay Credit Bills */}
      {transactionsLoaded ? (
        unPaidTransactions.length > 0 && (
          <>
            <PageSection>
              <Hr />
            </PageSection>

            <PageSection>
              <CenteredHeading>Pay your credit bills for {selectedMonthyear}</CenteredHeading>
              <PayBill />
            </PageSection>
          </>
        )
      ) : (
        <LoadingWrapper>
          <LoadingIndicator width={32} height={32} />
        </LoadingWrapper>
      )}

      <PageSafeBottomArea />
    </>
  )
}