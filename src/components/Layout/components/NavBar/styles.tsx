import styled, { css } from "styled-components"
import Link from "next/link"

export const NavBarContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${p => p.theme.colors.primary_light};
  height: 80px;
  padding: 0 16px;

  ${p => p.theme.mediaQueries.lg} {
    padding: 0 32px;
  }
`

export const Links = styled.div`
  z-index: 1000;
  position: fixed;
  bottom: 0px;
  left: 0px;
  right: 0px;
  display: flex;
  justify-content: space-evenly;
  box-shadow: ${p => p.theme.shadows.grey};
  background-color: ${p => p.theme.colors.sky_purple};
  font-size: 0.8rem;

  ${p => p.theme.mediaQueries.md} {
    position: static;
    box-shadow: none;
    background-color: transparent;
    font-size: 1rem;
  }
`

export const StyledLink = styled(Link)<{selected: boolean}>`
  text-decoration: none;
  color: ${p => p.theme.colors.primary_dark};
  border-radius: 16px;
  margin: 8px 0;
  padding: 8px 12px;

  &:active {
    color: ${p => p.theme.colors.failure};
  }
  
  ${p => p.selected === true && css`
    background-color: ${p.theme.colors.primary};
    font-weight: bold;
    color: white;
    
    ${p.theme.mediaQueries.md} {
      background-color: transparent;
      color: ${p => p.theme.colors.primary_dark};
    }
  `}
`