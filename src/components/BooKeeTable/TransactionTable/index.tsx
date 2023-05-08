import React from "react"
import Table from "@/components/Table"
import Skeleton from "@/components/Skeleton"
import { formatCash } from "@/utils/numbers"

interface Props {
  header: string;
  data: { [key: string]: number };
  dataLoaded?: boolean;
}

const TransactionTable = ({
  header,
  data,
  dataLoaded
}: Props) => {
  const dataKeys = Object.keys(data);
  
  return (
    <Table>
      <Table.Head>
        <Table.Tr>
          <Table.Th>{header}</Table.Th>
          <Table.Th>Amounts</Table.Th>
        </Table.Tr>
      </Table.Head>
      <Table.Body>
        {dataLoaded ? (
          dataKeys.length > 0 ? (
            dataKeys.map((key: string) => (
              <tr key={key}>
                <Table.Td>{key}</Table.Td>
                <Table.Td>{formatCash(data[key])}</Table.Td>
              </tr>
            ))
          ) : (
            <Table.EmptyRow colSpan={2}>No item</Table.EmptyRow>
          )
        ) : (
          <>
            <SkeletonRow />
            <SkeletonRow />
          </>
        )}
      </Table.Body>
    </Table>
  )
}

const SkeletonRow = () => (
  <Table.Tr>
    <Table.Td><Skeleton width={50} height={18} inline /></Table.Td>
    <Table.Td><Skeleton width={50} height={18} inline /></Table.Td>
  </Table.Tr>
)

export default React.memo(TransactionTable);