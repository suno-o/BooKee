import styled from "styled-components"
import Card from "@/components/Card"
import TransactionSummaryTable from "@/views/Dashboard/MonthlySummary/TransactionSummaryTable" // move this to components folder later
import { filterTransactionsByType } from "@/state/mockSelector"
import { formatCash } from "@/utils/numbers"
import { aprilTransactionData } from "@/state/mockData"

const SpendingSummary = () => {
  const { cashSpending, creditSpending, transactions } = aprilTransactionData;
  const [,,creditTransactions] = filterTransactionsByType(transactions);

  return (
    <Container>
      <CardWrapper>
        <TotalCard styles={{bgTheme:'primary', colorTheme:'white'}}>
          <Card.Header>Total Spending</Card.Header>
          <Card.Content>{formatCash(cashSpending + creditSpending)}</Card.Content>
        </TotalCard>
        <SpendingCard styles={{bgTheme:'secondary', colorTheme:'white'}}>
          <Card.Header>Cash Spending</Card.Header>
          <Card.Content>{formatCash(cashSpending)}</Card.Content>
        </SpendingCard>
        <SpendingCard styles={{bgTheme:'warning', colorTheme:'white'}}>
          <Card.Header>Credit Spending</Card.Header>
          <Card.Content>{formatCash(creditSpending)}</Card.Content>
        </SpendingCard>
      </CardWrapper>

      <TableWrapper>
        <TransactionSummaryTable
          theme='warning'
          header='Credit Spending'
          transactions={creditTransactions}
        />
      </TableWrapper>
    </Container>
  )
}

export default SpendingSummary


/* styles */
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;

  ${p => p.theme.mediaQueries.sm} {
    flex-direction: row;
  }
`

const CardWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`

const TotalCard = styled(Card)`
  flex: 1 0 100%;
`

const SpendingCard = styled(Card)`
  flex: 1;
`

const TableWrapper = styled.div`
  flex: 1;
  box-shadow: ${p => p.theme.shadows.grey_blurry};
  border-radius: 16px;
`