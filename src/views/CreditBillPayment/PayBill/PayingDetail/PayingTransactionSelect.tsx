import styled from "styled-components"
import { Transaction } from "@/state/creditBillPayment/types"
import { prettifyDateConcise } from "@/utils/date"
import { formatCash } from "@/utils/numbers"

interface Props {
  transactions: Transaction[];
  transactionSelectHandler: (id: string) => (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function PayingTransactionSelect({
  transactions,
  transactionSelectHandler
}: Props) {
  
  /* show transaction description when hovering tooltip */
  const onTransactionRowHoverHandler = (id: string, show?: boolean) => () => {
    const elem = document.getElementById(`transaction-description-${id}`);
    if (!elem) return;
    elem.style.display = show ? 'block' : 'none';
  }
  
  return (
    <Container>
      <Table>
        <thead>
          <tr>
            <Th></Th>
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
                <TooltipWrapper
                  onMouseEnter={onTransactionRowHoverHandler(transaction.id, true)}
                  onMouseLeave={onTransactionRowHoverHandler(transaction.id)}
                >
                  <Tooltip>?</Tooltip>
                  <Description id={`transaction-description-${transaction.id}`}>{transaction.description}</Description>
                </TooltipWrapper>
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

const TooltipWrapper = styled.div`
  position: relative;
`

const Tooltip = styled.div`
  cursor: pointer;
  border-radius: 50%;
  font-weight: bold;
  color: ${p => p.theme.colors.primary};
`

const Description = styled.div`
  pointer-events: none;
  display: none;
  position: absolute;
  bottom: 32px;
  right: 0;
  border-radius: 8px;
  background-color: ${p => p.theme.colors.white};
  box-shadow: ${p => p.theme.shadows.grey_blurry};
  width: 200px;
  padding: 8px 24px;
`