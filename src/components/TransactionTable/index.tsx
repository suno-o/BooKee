import React from "react"
import { Table, Th, Td, NoItem } from "./styles"
import Skeleton from "../Skeleton"
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
      <thead>
        <tr>
          <Th>{header}</Th>
          <Th>Amounts</Th>
        </tr>
      </thead>
      <tbody>
        {dataLoaded ? (
          dataKeys.length > 0 ? (
            dataKeys.map((key: string) => (
              <tr key={key}>
                <Td>{key}</Td>
                <Td>{formatCash(data[key])}</Td>
              </tr>
            ))
          ) : (
            <tr>
              <NoItem colSpan={2}>No item</NoItem>
            </tr>
          )
        ) : (
          <>
            <SkeletonRow />
            <SkeletonRow />
          </>
        )}
      </tbody>
    </Table>
  )
}

const SkeletonRow = () => (
  <tr>
    <Td><Skeleton width={50} height={18} inline /></Td>
    <Td><Skeleton width={50} height={18} inline /></Td>
  </tr>
)

export default React.memo(TransactionTable);