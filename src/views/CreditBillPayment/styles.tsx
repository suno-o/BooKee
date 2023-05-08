import styled, { css } from "styled-components"
import { Heading3 } from "@/components/Heading"

const headingCSS = css`
  margin: 32px 0;
`

export const Heading = styled(Heading3)`
  ${headingCSS};
`

export const CenteredHeading = styled(Heading3)`
  ${headingCSS};
  text-align: center;
`

export const Note = styled.p`
  margin: 16px 0;
  font-size: 0.8rem;
  color: ${p => p.theme.colors.text_grey_light};
`

export const Hr = styled.hr`
  border: 0;
  height: 1px;
  background-color: ${p => p.theme.colors.text_grey_lighter};
`

export const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
`

export const DropDownWrapper = styled.div`
  text-align: right;
`