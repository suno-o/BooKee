import styled from "styled-components"

export const Table = styled.table<{layout?: string}>`
  width: 100%;
  table-layout: ${p => p.layout ? p.layout : 'fixed'};
  border-collapse: collapse;
  font-size: 0.7rem;

  ${p => p.theme.mediaQueries.sm} {
    font-size: 0.8rem;
  }
`

export const Head = styled.thead``

export const Body = styled.tbody``

export const Tr = styled.tr``

export const Th = styled.th`
  font-weight: 600;
  border-bottom: 1px solid ${p => p.theme.colors.text_grey_lighter};
  padding: 4px 0;
`

export const Td = styled.td`
  text-align: center;
  padding: 4px 0;
`

export const EmptyTd = styled.td`
  height: 40px;
  text-align: center;
  color: ${p => p.theme.colors.text_grey_lighter};
`