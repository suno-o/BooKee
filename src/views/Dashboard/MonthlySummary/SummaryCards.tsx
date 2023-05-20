import { useAllTransactionsTotalsByType } from "@/state/transactionsV2/hooks"
import styled from "styled-components"
import Card from "@/components/Card"
import { formatCash } from "@/utils/numbers"

export default function SummaryCards() {
  const { cashEarningsTotal, cashSpendingsTotal, creditSpendingsTotal, total, transactionsLoaded } = useAllTransactionsTotalsByType();

  const renderAmountCardContent = (amount: number) => (
    <Card.Content
      dataLoaded={transactionsLoaded}
      skeletonProps={{ width: 80, height: 26, mt: 4 }}
    >{formatCash(amount)}</Card.Content>
  )
  
  return (
    <CardSection>
      <MonthlySummaryCard styles={{bgTheme:'primary', colorTheme:'white'}}>
        <Card.Header>Earning</Card.Header>
        {renderAmountCardContent(cashEarningsTotal)}
      </MonthlySummaryCard>
      <MonthlySummaryCard styles={{bgTheme:'secondary', colorTheme:'white'}}>
        <Card.Header>Cash Spending</Card.Header>
        {renderAmountCardContent(cashSpendingsTotal)}
      </MonthlySummaryCard>
      <MonthlySummaryCard styles={{bgTheme:'warning', colorTheme:'white'}}>
        <Card.Header>Credit Spending</Card.Header>
        {renderAmountCardContent(creditSpendingsTotal)}
      </MonthlySummaryCard>
      <MonthlySummaryCard styles={{bgTheme:'failure', colorTheme:'white'}}>
        <Card.Header>{total > 0 ? 'Net Income' : 'Net Loss'}</Card.Header>
        {renderAmountCardContent(total)}
      </MonthlySummaryCard>
    </CardSection>
  )
}

/* styles */
const CardSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;

  ${p => p.theme.mediaQueries.md} {
    gap: 32px;
  }
`

const MonthlySummaryCard = styled(Card)`
  flex: 0 0 auto;
  width: calc(50% - 16px / 2);

  ${p => p.theme.mediaQueries.md} {
    flex: 1;
  }
`