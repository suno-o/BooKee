import React from "react"
import { Table as StyledTable, Head, Body, Tr, Th, Td, EmptyTd } from "./styles"

interface TableProps {
  layout?: string;
  children: React.ReactNode;
}

const Table = ({ layout, children }: TableProps)  => (
  <StyledTable layout={layout}>{children}</StyledTable>
)

Table.Head = Head;
Table.Body = Body;
Table.Tr = Tr;
Table.Th = Th;
Table.Td = Td;

interface EmptyRowProps {
  colSpan: number;
  children: React.ReactNode;
}

Table.EmptyRow = function EmptyRow({
  colSpan,
  children
}: EmptyRowProps) {
  return (
    <Tr>
      <EmptyTd colSpan={colSpan}>{children}</EmptyTd>
    </Tr>
  )
}

export default Table;