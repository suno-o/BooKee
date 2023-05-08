import React from "react"
import { Table, Head, Body, Tr, Th, Td, EmptyTd } from "./styles"

interface TableProps {
  children: React.ReactNode;
}

const TableComponent = ({ children }: TableProps)  => (
  <Table>{children}</Table>
)

TableComponent.Head = Head;
TableComponent.Body = Body;
TableComponent.Tr = Tr;
TableComponent.Th = Th;
TableComponent.Td = Td;

interface EmptyRowProps {
  colSpan: number;
  children: React.ReactNode;
}

TableComponent.EmptyRow = ({
  colSpan,
  children
}: EmptyRowProps) => (
  <Tr>
    <EmptyTd colSpan={colSpan}>{children}</EmptyTd>
  </Tr>
)

export default TableComponent;