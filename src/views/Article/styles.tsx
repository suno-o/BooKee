import Image from "next/image"
import styled from "styled-components"
import { Heading3 } from "@/components/Heading"

export const Header = styled.div`
`

export const Date = styled.p`
  font-size: 0.9rem;
  color: ${p => p.theme.colors.text_grey_light};
`

export const Img = styled(Image)`
  width: 100%;
  height: auto;
  border-radius: 16px;
`

export const Content = styled.div`
  margin: 32px 0;
  color: ${p => p.theme.colors.text_grey_dark};
`

const ContentHeading = styled(Heading3)`
  margin: 32px 0;
`

const P = styled.p`
  margin: 24px 0;
  line-height: 2rem;
`

const Ol = styled.ol`
  margin: 16px;
  font-size: 0.95rem;
`

const Ul = styled.ul`
  margin: 16px;
  color: ${p => p.theme.colors.text_grey};
  font-size: 0.9rem;
`

const Li = styled.li`
  margin: 16px;
`

export const markdownComponents = {
  h3: ContentHeading,
  p: P,
  ol: Ol,
  ul: Ul,
  li: Li
}