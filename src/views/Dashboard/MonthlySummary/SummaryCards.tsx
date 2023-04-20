import styled from "styled-components"
import Card from "@/components/Card"
import { formatCash } from "@/utils/numbers"
import { aprilTransactionData } from "@/state/mockData"

export default function SummaryCards() {
  const { cashEarning, cashSpending, creditSpending, total } = aprilTransactionData;
  
  return (
    <CardSection>
      <MonthlySummaryCard styles={{bgTheme:'primary', colorTheme:'white'}}>
        <CardHeader>Earning</CardHeader>
        <CardContent>{formatCash(cashEarning)}</CardContent>
      </MonthlySummaryCard>
      <MonthlySummaryCard styles={{bgTheme:'secondary', colorTheme:'white'}}>
        <CardHeader>Cash Spending</CardHeader>
        <CardContent>{formatCash(cashSpending)}</CardContent>
      </MonthlySummaryCard>
      <MonthlySummaryCard styles={{bgTheme:'warning', colorTheme:'white'}}>
        <CardHeader>Credit Spending</CardHeader>
        <CardContent>{formatCash(creditSpending)}</CardContent>
      </MonthlySummaryCard>
      <MonthlySummaryCard styles={{bgTheme:'failure', colorTheme:'white'}}>
        <CardHeader>{total > 0 ? 'Net Income' : 'Net Loss'}</CardHeader>
        <CardContent>{formatCash(total)}</CardContent>
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

const CardHeader = styled(Card.Header)`
  white-space: nowrap;
  font-size: 0.9rem;
  ${p => p.theme.mediaQueries.sm} {
    font-size: 1rem;
  }
`

const CardContent = styled(Card.Content)`
  font-weight: bold;
  font-size: 1.3rem;
  ${p => p.theme.mediaQueries.sm} {
    font-size: 1.5rem;
  }
`