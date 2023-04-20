import React from "react";
import {
  Table,
  Th,
  Td
} from "./styles"
import { formatCash } from "@/utils/numbers"

interface Props {
  header: string;
  data: { [key: string]: number };
}

const TransactionTable = ({
  header,
  data,
}: Props) => (
  <Table>
    <thead>
      <tr>
        <Th>{header}</Th>
        <Th>Amounts</Th>
      </tr>
    </thead>
    <tbody>
      {Object.keys(data).map((key: string) => (
        <tr key={key}>
          <Td>{key}</Td>
          <Td>{formatCash(data[key])}</Td>
        </tr>
      ))}
    </tbody>
  </Table>
)

export default React.memo(TransactionTable);