import {
  useCreditTransactionsTotalsByPayingStatus,
  useCreditTransactionsByPayingStatus
} from "@/state/transactions/hooks"
import styled from "styled-components"
import Card from "@/components/Card"
import PaymentTable from "./PaymentTable"
import { formatCash } from "@/utils/numbers"

const PaymentSummary = () => {
  const { paidCreditTotal, carryoverCreditTotal, transactionsLoaded } = useCreditTransactionsTotalsByPayingStatus();
  const { paidTransactions, carryoverTransactions } = useCreditTransactionsByPayingStatus();

  const renderAmountCardContent = (amount: number) => (
    <Card.Content
      dataLoaded={transactionsLoaded}
      skeletonProps={{ width: 80, height: 26, mt: 4 }}
    >{formatCash(amount)}</Card.Content>
  )

  return (
    <Container>
      <Item>
        <Card styles={{bgTheme:'success', colorTheme:'white'}}>
          <Card.Header>Payment Total</Card.Header>
          {renderAmountCardContent(Math.abs(paidCreditTotal))}
        </Card>
        <StyledPaymentTable
          theme='success'
          header='Paid'
          transactions={paidTransactions}
          dataLoaded={transactionsLoaded}
        />
      </Item>

      <Item>
        <Card styles={{bgTheme:'failure', colorTheme:'white'}}>
          <Card.Header>Carryover Total</Card.Header>
          {renderAmountCardContent(Math.abs(carryoverCreditTotal))}
        </Card>
        <StyledPaymentTable
          theme='failure'
          header='Carried Over'
          transactions={carryoverTransactions}
          dataLoaded={transactionsLoaded}
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