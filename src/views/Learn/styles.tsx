import Image from "next/image"
import styled from "styled-components"

export const Header = styled.div`
`

export const Date = styled.p`
  font-size: 0.9rem;
  color: ${p => p.theme.colors.text_grey_light};
`

export const Content = styled.div`
  margin: 32px 0;
  color: ${p => p.theme.colors.text_grey_dark};
`

export const P = styled.p`
  margin: 24px 0;
  line-height: 2rem;
`

export const Ol = styled.ol`
  margin: 16px;
  font-size: 0.95rem;
`

export const Ul = styled.ul`
  margin: 16px;
  color: ${p => p.theme.colors.text_grey};
  font-size: 0.9rem;
`

export const Li = styled.li`
  margin: 16px;
`

export const Img = styled(Image)`
  width: 100%;
  height: auto;
  border-radius: 16px;
`