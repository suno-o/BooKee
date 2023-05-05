import styled, { keyframes } from "styled-components"

interface Props {
  width?: number;
  height?: number;
}

const wave = keyframes`
  from { left: -160px; }
  to   { left: 100%; }
`

const Skeleton = styled.div<Props>`
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  min-height: 24px;
  ${p => p.width ? `width: ${p.width}px` : '100%'};
  ${p => p.height && `height: ${p.height}px;`}
  background-color: ${p => p.theme.colors.text_grey_lighter}60;

  &:before {
    content: "";
    position: absolute;
    background: linear-gradient(90deg, transparent, #ffffff60, transparent);
    top: 0;
    left: -160px;
    height: 100%;
    width: 160px;
    animation: ${wave} 1s cubic-bezier(0.4, 0, 0.2, 1) infinite;
  }
`

export default Skeleton;