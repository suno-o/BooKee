import styled from "styled-components"
import Button from "@/components/Button"

export const Wrapper = styled.div`
  z-index: 100;
  margin: 16px 0;
`

export const Label = styled.label`
  font-size: 0.7rem;
`

export const TextInput = styled.input`
  display: block;
  width: 100%;
  border: 1px solid ${p => p.theme.colors.text_grey_light};
  border-radius: 16px;
  padding: 8px 16px;
  font-size: 0.9rem;
`

export const StyledButton = styled(Button)`
  display: inline-flex;
  justify-content: center;
  margin: 16px 0;
`