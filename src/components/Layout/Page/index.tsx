import styled from "styled-components"

export const PageSection = styled.div<{bigMargin?: boolean}>`
  width: 100%;
  max-width: ${p => p.theme.layout.max_width};
  margin: ${p => p.bigMargin ? '88px auto' : '56px auto'};
  padding: 0 16px;

  ${p => p.theme.mediaQueries.sm} {
    margin: ${p => p.bigMargin ? '128px auto' : '64px auto'};
  }
`

export const PageSafeBottomArea = styled.div`
  height: 50px;
  ${p => p.theme.mediaQueries.md} {
    height: 0;
  }
`

export const PaddedInner = styled.div`
  position: relative;
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
