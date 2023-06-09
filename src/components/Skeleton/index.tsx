import styled, { keyframes } from "styled-components"

export interface SkeletonProps {
  inline?: boolean;
  width?: number;
  height?: number;
  center?: boolean;
  mt?: number;
  mr?: number;
  br?: number;
}

const wave = keyframes`
  from { left: -160px; }
  to   { left: 100%; }
`

const Skeleton = styled.div<SkeletonProps>`
  position: relative;
  overflow: hidden;
  ${p => p.inline && `display: inline-block;`}
  border-radius: ${p => p.br ? p.br : 8}px;
  min-height: 16px;
  ${p => p.width ? `width: ${p.width}px` : '100%'};
  ${p => p.height && `height: ${p.height}px;`}
  background-color: ${p => p.theme.colors.text_grey_lighter}60;
  align-self: ${p => p.center === false ? 'normal' : 'center'};
  ${p => p.mt && `margin-top: ${p.mt}px;`}
  ${p => p.mr && `margin-right: ${p.mr}px;`}

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