import styled, { css } from "styled-components"
import { Heading3 } from "@/components/Heading"

const headingCSS = css`
  margin: 16px 0;
  font-weight: 500;
`

export const Heading = styled(Heading3)`
  ${headingCSS};
`

export const PayBillHeading = styled(Heading3)`
  ${headingCSS};
  text-align: center;
`

export const Hr = styled.hr`
  background-color: ${p => p.theme.colors.text_grey};
`