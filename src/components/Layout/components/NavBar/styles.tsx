import styled from "styled-components"

export const NavBarContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${p => p.theme.colors.primary_light};
  height: 80px;
  padding: 0 32px;
`

export const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
`