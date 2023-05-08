import styled from "styled-components"
import { Transaction } from "@/state/creditBillPayment/types"
import Table from "@/components/Table"
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
      <Table layout='auto'>
        <Table.Head>
          <Table.Tr>
            <Table.Th>Pay</Table.Th>
            <Table.Th>Date</Table.Th>
            <Table.Th>Category</Table.Th>
            <Table.Th>Amounts</Table.Th>
            <Table.Th></Table.Th>
          </Table.Tr>
        </Table.Head>
        <Table.Body>
          {transactions.map((transaction: Transaction) => (
            <Table.Tr key={transaction.id}>
              <Table.Td><Checkbox type='checkbox' defaultChecked onChange={transactionSelectHandler(transaction.id)} /></Table.Td>
              <Table.Td>{prettifyDateConcise(transaction.created)}</Table.Td>
              <Table.Td>{transaction.categoryName}</Table.Td>
              <Table.Td>{formatCash(transaction.amount)}</Table.Td>
              <Table.Td>
                <Tooltip
                  id={`transaction-description-${transaction.id}`}
                  description={transaction.description}
                  width={200}
                  position='left'
                ><b>?</b></Tooltip>
              </Table.Td>
            </Table.Tr>
          ))}
        </Table.Body>
      </Table>
    </Container>
  )
}


/* styles */
const Container = styled.div`
  flex: 3;
`

const Checkbox = styled.input`
  cursor: pointer;
  accent-color: ${p => p.theme.colors.primary};
`