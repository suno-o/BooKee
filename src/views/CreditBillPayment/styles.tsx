import styled, { css } from "styled-components"
import { Heading3 } from "@/components/Heading"

const headingCSS = css`
  margin: 32px 0;
`

export const Heading = styled(Heading3)`
  ${headingCSS};
`

export const PayBillHeading = styled(Heading3)`
  ${headingCSS};
  text-align: center;
`

export const Hr = styled.hr`
  border: 0;
  height: 1px;
  background-color: ${p => p.theme.colors.text_grey_lighter};
`