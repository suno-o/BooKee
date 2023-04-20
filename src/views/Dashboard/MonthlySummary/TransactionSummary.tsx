import { useMemo } from "react"
import styled from "styled-components"
import TransactionSummaryTable from "./TransactionSummaryTable";
import { aprilTransactionData } from "@/state/mockData"
import { Transaction } from "@/state/mockTypes"

/* helper: move to selector later and memoize */
const filterTransactionsByType = (transactions: Transaction[]) => {
  const earningTransactions: Transaction[] = [];
  const cashSpendingTransactions: Transaction[] = [];
  const creditSpendingTransactions: Transaction[] = [];

  transactions.forEach((transaction: Transaction) => {
    if (transaction.type === 'cash') {
      if (transaction.amount < 0) {
        cashSpendingTransactions.push(transaction);
      } else {
        earningTransactions.push(transaction);
      }
    } else if (transaction.type === 'credit' && transaction.amount < 0) {
      creditSpendingTransactions.push(transaction);
    }
  })

  return [earningTransactions, cashSpendingTransactions, creditSpendingTransactions];
}

/**
 * TransactionSummary Component
 */
export default function TransactionSummary() {

  /* get from selector later, and remove memoization here once memoized in selector */
  const { transactions } = aprilTransactionData;
  const [earnings, cashSpendings, creditSpendings] = useMemo(() => filterTransactionsByType(transactions), [transactions]);

  return (
    <Container>
      <Item>
        <TransactionSummaryTable
          theme='primary'
          header='Earning'
          transactions={earnings}
        />
      </Item>
      <Item>
        <TransactionSummaryTable
          theme='secondary'
          header='Spending'
          transactions={cashSpendings}
        />
      </Item>
      <Item>
        <TransactionSummaryTable
          theme='warning'
          header='Credit'
          transactions={creditSpendings}
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