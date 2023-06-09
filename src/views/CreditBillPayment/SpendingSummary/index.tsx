import { useSpendingSummaryData } from "@/state/transactions/hooks";
import styled from "styled-components"
import Card from "@/components/Card"
import TransactionSummaryTable from "@/components/BooKeeTable/TransactionSummaryTable";
import { formatCash } from "@/utils/numbers"

const SpendingSummary = () => {
  const { cashSpendingTotal, creditSpendingTotal, creditSpendings, transactionsLoaded } = useSpendingSummaryData();

  const renderAmountCardContent = (amount: number) => (
    <Card.Content
      dataLoaded={transactionsLoaded}
      skeletonProps={{ width: 80, height: 26, mt: 4 }}
    >{formatCash(amount)}</Card.Content>
  )

  return (
    <Container>
      <CardWrapper>
        <TotalCard styles={{bgTheme:'primary', colorTheme:'white'}}>
          <Card.Header>Total Spending</Card.Header>
          {renderAmountCardContent(cashSpendingTotal + creditSpendingTotal)}
        </TotalCard>
        <SpendingCard styles={{bgTheme:'secondary', colorTheme:'white'}}>
          <Card.Header>Cash Spending</Card.Header>
          {renderAmountCardContent(cashSpendingTotal)}
        </SpendingCard>
        <SpendingCard styles={{bgTheme:'warning', colorTheme:'white'}}>
          <Card.Header>Credit Spending</Card.Header>
          {renderAmountCardContent(creditSpendingTotal)}
        </SpendingCard>
      </CardWrapper>

      <TableWrapper>
        <TransactionSummaryTable
          theme='warning'
          header='Credit Spending'
          transactions={creditSpendings}
          dataLoaded={transactionsLoaded}
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