import { useAppSelector } from "@/state"
import { unpaidCreditTransactionsByAccountSelector } from "@/state/creditBillPayment/selector"
import styled from "styled-components"
import PayingDetail from "./PayingDetail"

export default function PayBill() {
  const transactionsByAccount = useAppSelector(unpaidCreditTransactionsByAccountSelector);

  return (
    <>
      <Note>
        BooKee strongly recommends you to pay off your credit bills in full end of each month, so that you are paying for the purchase you&apos;ve made in the <b>same month</b> the purchase was made.
        But, we still provide you an option to carry over some transactions to upcoming month in case you are unable to pay off in full. Please note that your credit card issuers may charge fees for any unpaid amount.
      </Note>
      {Object.keys(transactionsByAccount).map((accountName: string) => (
        <PayingDetailWrapper key={accountName}>
          <Account>{accountName}</Account>
          <PayingDetail
            transactions={transactionsByAccount[accountName]}
          />
        </PayingDetailWrapper>
      ))}
    </>
  )
}

/* styles */
const Note = styled.p`
  margin: 16px;
  font-size: 0.8rem;
  color: ${p => p.theme.colors.text_grey};

  ${p => p.theme.mediaQueries.sm} {
    margin: 32px;
    font-size: 0.9rem;
  }
`

const PayingDetailWrapper = styled.div`
  box-shadow: ${p => p.theme.shadows.grey_blurry};
  border-radius: 16px;
  margin: 32px 0;
  padding: 32px 16px;

  ${p => p.theme.mediaQueries.sm} {
    padding: 32px;
  }
`

const Account = styled.p`
  margin-bottom: 32px;
  text-align: center;
  font-weight: 600;
  font-size: 1rem;
  color: ${p => p.theme.colors.primary};

  ${p => p.theme.mediaQueries.md} {
    text-align: left;
    font-size: 1.1rem;
  }
`