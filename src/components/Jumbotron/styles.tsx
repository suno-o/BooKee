import NextImage from "next/image"
import styled from "styled-components"
import { Heading3 } from "../Heading"

/* helper */
const reverseDirection = (direction: string) => {
  const dirArr = direction.split('-'); // row-reverse -> row, reverse

  if (dirArr[0] == 'row')
    return 'column-reverse';
  else if (dirArr[0] == 'column')
    return 'row-reverse';
}

/* styles */
export const Container = styled.div<{direction: string}>`
  display: flex;
  flex-direction: ${p => reverseDirection(p.direction)};

  ${p => p.theme.mediaQueries.sm} {
    flex-direction: ${p => p.direction};
  }
`

export const Pane = styled.div<{align?: string}>`
  flex: 1;
  text-align: ${p => p.align && 'center'};

  ${p => p.theme.mediaQueries.sm} {
    text-align: ${p => p.align ? p.align : 'left'};
  }
`

export const Heading = styled(Heading3)`
  margin-bottom: 16px;
`

export const SubHeading = styled.p<{colorTheme?: string}>`
  margin-bottom: 8px;
  ${p => p.colorTheme && `color: ${p.theme.colors[p.colorTheme]};`}
`

export const Content = styled.div`
  color: ${p => p.theme.colors.text_grey};
`

export const Image = styled(NextImage)`
`