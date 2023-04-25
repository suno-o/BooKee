import styled from "styled-components"
import { CardStyles } from "./types"

export const Container = styled.div<{styles: CardStyles}>`
  border-radius: 16px;
  padding: 16px;
  text-align: center;
  
  background: ${p => p => p.styles.bgTheme && p.theme.gradients[p.styles.bgTheme]};
  color: ${p => p.styles.colorTheme && p.theme.colors[p.styles.colorTheme]};
  box-shadow: ${p => p.styles.shadow && p.theme.shadows.grey_blurry};

  ${p => p.theme.mediaQueries.md} {
    padding: 24px
  }
`

export const Header = styled.div`
  font-weight: 500;
  white-space: nowrap;
  font-size: 0.9rem;
  ${p => p.theme.mediaQueries.sm} {
    font-size: 1rem;
  }
`

export const Content = styled.div`
  font-weight: bold;
  font-size: 1.2rem;
  ${p => p.theme.mediaQueries.sm} {
    font-size: 1.4rem;
  }
`