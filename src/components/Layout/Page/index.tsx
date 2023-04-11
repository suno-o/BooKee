import styled from "styled-components"

export const PageSection = styled.div<{bigMargin?: boolean}>`
  margin: ${p => p.bigMargin ? '88px 16px' : '56px 16px'};

  ${p => p.theme.mediaQueries.sm} {
    max-width: 100%;
    margin: ${p => p.bigMargin ? '128px 16px' : '64px 16px'};
  }

  ${props => props.theme.mediaQueries.lg} {
    margin-left: auto;
    margin-right: auto;
    max-width: ${p => p.theme.layout.max_width};
  }
`

export const PaddedInner = styled.div`
  padding: 0;

  ${p => p.theme.mediaQueries.sm} {
    padding: 0 32px;
  }

  ${p => p.theme.mediaQueries.md} {
    padding: 0 64px;
  }

  ${p => p.theme.mediaQueries.lg} {
    padding: 0 80px;
  }
`
