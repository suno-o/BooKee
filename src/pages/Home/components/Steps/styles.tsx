import styled from "styled-components"
import Button from "@/components/Button"

export const Note = styled.div`
  margin-top: 8px;
  margin-bottom: 16px;
  color: ${p => p.theme.colors.text_grey_light};
  font-size: 0.8rem;
`

export const StepButton = styled(Button)`
  width: 100%;

  ${p => p.theme.mediaQueries.sm} {
    width: 140px;
  }
`