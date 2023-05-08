import { useAppSelector } from "@/state"
import { creditPaymentTotalSelector, creditTransactionsSelector } from "@/state/creditBillPayment/selector"
import styled from "styled-components"
import Card from "@/components/Card"
import PaymentTable from "./PaymentTable"
import { formatCash } from "@/utils/numbers"

const PaymentSummary = () => {
  const creditPaymentTotal = useAppSelector(creditPaymentTotalSelector);
  const { creditCarryoverTotal, creditTransactionLoaded } = useAppSelector(state => state.creditBillPayment);
  const { paidTransactions, carryoverTransactions} = useAppSelector(creditTransactionsSelector);

  const renderAmountCardContent = (amount: number) => (
    <Card.Content
      dataLoaded={creditTransactionLoaded}
      skeletonProps={{ width: 80, height: 26, mt: 4 }}
    >{formatCash(amount)}</Card.Content>
  )

  return (
    <Container>
      <Item>
        <Card styles={{bgTheme:'success', colorTheme:'white'}}>
          <Card.Header>Credit Payment Total</Card.Header>
          {renderAmountCardContent(Math.abs(creditPaymentTotal))}
        </Card>
        <StyledPaymentTable
          theme='success'
          header='Paid'
          transactions={paidTransactions}
        />
      </Item>

      <Item>
        <Card styles={{bgTheme:'failure', colorTheme:'white'}}>
          <Card.Header>Carryover Total</Card.Header>
          {renderAmountCardContent(Math.abs(creditCarryoverTotal))}
        </Card>
        <StyledPaymentTable
          theme='failure'
          header='Carried Over'
          transactions={carryoverTransactions}
        />
      </Item>
    </Container>
  )
}

export default PaymentSummary;


/* styles */
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;

  ${p => p.theme.mediaQueries.md} {
    flex-direction: row;
  }
`

const Item = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
`

const StyledPaymentTable = styled(PaymentTable)`
  flex: 1;
`