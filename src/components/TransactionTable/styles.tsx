import styled from "styled-components"

export const Table = styled.table`
  width: 100%;
  table-layout: fixed;
  border-collapse: collapse;
  font-size: 0.8rem;
`

export const Th = styled.th`
  font-weight: 600;
  border-bottom: 1px solid ${p => p.theme.colors.text_grey_lighter};
  padding: 4px 0;
`

export const Td = styled.td`
  text-align: center;
  padding: 4px 0;
`

export const NoItem = styled.td`
  height: 40px;
  text-align: center;
  color: ${p => p.theme.colors.text_grey_lighter};
`