import styled from "styled-components"
import Card from "@/components/Card"
import { formatCash } from "@/utils/numbers"
import { aprilTransactionData } from "@/state/mockData"

export default function SummaryCards() {
  const { cashEarning, cashSpending, creditSpending, total } = aprilTransactionData;
  
  return (
    <CardSection>
      <MonthlySummaryCard styles={{bgTheme:'primary', colorTheme:'white'}}>
        <Card.Header>Earning</Card.Header>
        <Card.Content>{formatCash(cashEarning)}</Card.Content>
      </MonthlySummaryCard>
      <MonthlySummaryCard styles={{bgTheme:'secondary', colorTheme:'white'}}>
        <Card.Header>Cash Spending</Card.Header>
        <Card.Content>{formatCash(cashSpending)}</Card.Content>
      </MonthlySummaryCard>
      <MonthlySummaryCard styles={{bgTheme:'warning', colorTheme:'white'}}>
        <Card.Header>Credit Spending</Card.Header>
        <Card.Content>{formatCash(creditSpending)}</Card.Content>
      </MonthlySummaryCard>
      <MonthlySummaryCard styles={{bgTheme:'failure', colorTheme:'white'}}>
        <Card.Header>{total > 0 ? 'Net Income' : 'Net Loss'}</Card.Header>
        <Card.Content>{formatCash(total)}</Card.Content>
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