import styled from "styled-components"
import { Transaction } from "@/state/creditBillPayment/types"
import { prettifyDateConcise } from "@/utils/date"
import { formatCash } from "@/utils/numbers"
import Tooltip from "@/components/Tooltip"

interface Props {
  transactions: Transaction[];
  transactionSelectHandler: (id: string) => (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function PayingTransactionSelect({
  transactions,
  transactionSelectHandler
}: Props) {
  
  return (
    <Container>
      <Table>
        <thead>
          <tr>
            <Th>Pay</Th>
            <Th>Date</Th>
            <Th>Category</Th>
            <Th>Amounts</Th>
            <Th></Th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction: Transaction) => (
            <tr key={transaction.id}>
              <Td><Checkbox type='checkbox' defaultChecked onChange={transactionSelectHandler(transaction.id)} /></Td>
              <Td>{prettifyDateConcise(transaction.created)}</Td>
              <Td>{transaction.categoryName}</Td>
              <Td>{formatCash(transaction.amount)}</Td>
              <Td>
                <Tooltip
                  id={`transaction-description-${transaction.id}`}
                  description={transaction.description}
                  width={200}
                  position='left'
                ><b>?</b></Tooltip>
              </Td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  )
}


/* styles */
const Container = styled.div`
  flex: 3;
`

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 0.7rem;

  ${p => p.theme.mediaQueries.sm} {
    font-size: 0.8rem;
  }
`

const Th = styled.th`
  font-weight: 600;
  border-bottom: 1px solid ${p => p.theme.colors.text_grey_lighter};
  padding: 4px 0;
`

const Td = styled.td`
  text-align: center;
  padding: 4px 0;
`

const Checkbox = styled.input`
  cursor: pointer;
  accent-color: ${p => p.theme.colors.primary};
`