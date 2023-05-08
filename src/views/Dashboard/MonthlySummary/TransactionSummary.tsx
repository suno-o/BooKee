import { useAppSelector } from "@/state"
import { transactionsByTypeSelector } from "@/state/dashboard/selector"
import styled from "styled-components"
import TransactionSummaryTable from "@/components/BooKeeTable/TransactionSummaryTable";

/**
 * TransactionSummary Component
 */
export default function TransactionSummary() {
  const {
    earningTransactions,
    spendingTransactions,
    creditSpendingTransactions,
    transactionDataLoaded
  } = useAppSelector(transactionsByTypeSelector);

  return (
    <Container>
      <Item>
        <TransactionSummaryTable
          theme='primary'
          header='Earning'
          transactions={earningTransactions}
          dataLoaded={transactionDataLoaded}
        />
      </Item>
      <Item>
        <TransactionSummaryTable
          theme='secondary'
          header='Spending'
          transactions={spendingTransactions}
          dataLoaded={transactionDataLoaded}
        />
      </Item>
      <Item>
        <TransactionSummaryTable
          theme='warning'
          header='Credit'
          transactions={creditSpendingTransactions}
          dataLoaded={transactionDataLoaded}
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