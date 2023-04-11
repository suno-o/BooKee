import styled from "styled-components"

export const Heading1 = styled.h1`
  margin-bottom: 16px;
  font-size: 1.25rem;

  ${p => p.theme.mediaQueries.md} {
    font-size: 1.5rem;
  }
`

export const Heading2 = styled.h2`
  font-size: 1.2rem;

  ${p => p.theme.mediaQueries.md} {
    font-size: 1.4rem;
  }
`

export const Heading3 = styled.h3`
  font-size: 1.1rem;

  ${p => p.theme.mediaQueries.md} {
    font-size: 1.3rem;
  }
`
