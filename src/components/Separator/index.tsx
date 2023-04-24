import styled from "styled-components"

const Separator = styled.div`
  display: flex;
  align-items: center;
  color: ${p => p.theme.colors.text_grey_light};

  &::before,
  &::after {
    content: '';
    flex: 1;
    border-bottom: 1px solid ${p => p.theme.colors.text_grey_lighter};
  }

  &::before {
    margin-right: 8px;
  }

  &::after {
    margin-left: 8px;
  }
`

export default Separator;