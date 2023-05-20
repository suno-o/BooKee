import { useAllTransactionsByType } from "@/state/transactionsV2/hooks"
import styled from "styled-components"
import TransactionSummaryTable from "@/components/BooKeeTable/TransactionSummaryTable"

/**
 * TransactionSummary Component
 */
export default function TransactionSummary() {
  const {
    cashEarnings,
    cashSpendings,
    creditSpendings,
    transactionsLoaded
  } = useAllTransactionsByType();

  return (
    <Container>
      <Item>
        <TransactionSummaryTable
          theme='primary'
          header='Earning'
          transactions={cashEarnings}
          dataLoaded={transactionsLoaded}
        />
      </Item>
      <Item>
        <TransactionSummaryTable
          theme='secondary'
          header='Spending'
          transactions={cashSpendings}
          dataLoaded={transactionsLoaded}
        />
      </Item>
      <Item>
        <TransactionSummaryTable
          theme='warning'
          header='Credit'
          transactions={creditSpendings}
          dataLoaded={transactionsLoaded}
        />
      </Item>
    </Container>
  )
}


/* styles */
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  margin: 32px 0;
`

const Item = styled.div`
  box-shadow: ${p => p.theme.shadows.grey_blurry};
  border-radius: 16px;
  flex: 0 0 auto;
  width: 100%;

  ${p => p.theme.mediaQueries.sm} {
    width: calc(50% - 32px / 2);
  }

  ${p => p.theme.mediaQueries.md} {
    flex: 1;
  }
`