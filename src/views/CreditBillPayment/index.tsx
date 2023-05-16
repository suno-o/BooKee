import { useEffect, useMemo } from "react"
import { useAppDispatch, useAppSelector } from "@/state"
import { creditTransactionsSelector } from "@/state/creditBillPayment/selector"
import { fetchTransactions, updateMonthyear } from "@/state/creditBillPayment"
import { useFetchAccounts } from "@/state/user/hooks"
import SpendingSummary from "./SpendingSummary"
import PaymentSummary from "./PaymentSummary"
import PayBill from "./PayBill"
import DropDown from "@/components/DropDown"
import { PageSection } from "@/components/Layout/Page"
import { Heading, CenteredHeading, Note, Hr, LoadingWrapper, DropDownWrapper } from "./styles"
import LoadingIndicator from "@/components/LoadingIndicator"
import { getLastNMonthLabelsAndMap } from "@/utils/date"

export default function CreditBillPayment() {
  const dispatch = useAppDispatch();
  
  useFetchAccounts();

  const { unPaidTransactions } = useAppSelector(creditTransactionsSelector);
  const { selectedMonthyear, creditTransactionLoaded } = useAppSelector(state => state.creditBillPayment);
  const { labels, labelValueMap } = useMemo(() => getLastNMonthLabelsAndMap(6), []);

  useEffect(() => {
    dispatch(fetchTransactions(labelValueMap[selectedMonthyear]));
  }, [selectedMonthyear])

  const handleChange = (newMonthname: string) => {
    dispatch(updateMonthyear(newMonthname));
  }
  
  return (
    <>
      {/* Spending Summary */}
      <PageSection>
        <DropDownWrapper>
          <DropDown
            selected={selectedMonthyear}
            onChange={handleChange}
            listItems={labels}
            customStyles={{ width: '150px' }}
          />
        </DropDownWrapper>
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
      {creditTransactionLoaded ? (
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
    </>
  )
}