import styled from "styled-components"
import Table from "@/components/Table"
import Tooltip from "@/components/Tooltip"
import Skeleton from "@/components/Skeleton"
import { getMonthDate } from "@/utils/date"
import { formatCash } from "@/utils/numbers"
import { Transaction } from "@/state/transactions/types"

interface Props {
  className?: string;
  theme?: string;
  header: string;
  transactions: Transaction[];
  dataLoaded?: boolean;
}

const PaymentTable = ({
  className,
  theme,
  header,
  transactions,
  dataLoaded
}: Props) => (
  <Container className={className}>
    <Header colorTheme={theme}>{header}</Header>
    <Table layout='auto'>
      <Table.Head>
        <Table.Tr>
          <Table.Th>Date</Table.Th>
          <Table.Th>Bank</Table.Th>
          <Table.Th>Category</Table.Th>
          <Table.Th align='right'>Amounts</Table.Th>
          <Table.Th></Table.Th>
        </Table.Tr>
      </Table.Head>
      <Table.Body>
        {(dataLoaded === false) ? (
          <>
            <SkeletonRow />
            <SkeletonRow />
          </>
        ) : (
          transactions.length > 0 ? (
            transactions.map((transaction: Transaction) => (
              <Table.Tr key={transaction.id}>
                <Table.Td>{getMonthDate(transaction.created)}</Table.Td>
                <Table.Td>{transaction.bankName}</Table.Td>
                <Table.Td>{transaction.categoryName}</Table.Td>
                <StyledTd bold>{formatCash(Math.abs(transaction.amount))}</StyledTd>
                <Table.Td>
                  <Tooltip
                    id={`transaction-${header.split(' ').join('-')}-${transaction.id}`}
                    description={transaction.description}
                    width={200}
                    position='left'
                  ><b>?</b></Tooltip>
                </Table.Td>
              </Table.Tr>
            ))
          ) : (
            <Table.EmptyRow colSpan={5}>No item</Table.EmptyRow>
          )
        )}
      </Table.Body>
    </Table>
  </Container>
)

const SkeletonRow = () => (
  <Table.Tr>
    <Table.Td><Skeleton width={50} height={18} inline /></Table.Td>
    <Table.Td><Skeleton width={40} height={18} inline /></Table.Td>
    <Table.Td><Skeleton width={70} height={18} inline /></Table.Td>
    <Table.Td><Skeleton width={40} height={18} inline /></Table.Td>
  </Table.Tr>
)

export default PaymentTable;


/* styles */
const Container = styled.div`
  box-shadow: ${p => p.theme.shadows.grey_blurry};
  border-radius: 16px;
  padding: 16px;
`

const Header = styled.div<{colorTheme?: string}>`
  margin-bottom: 8px;
  color: ${p => p.theme.colors[p.colorTheme || 'primary']};
`

const StyledTd = styled(Table.Td)<{bold?: boolean}>`
  ${p => p.bold && 'font-weight: bold'};
`