import styled from "styled-components";

interface TooltipProps {
  id: string;
  description: string;
  width: number;
  position?: string;
  children: React.ReactNode;
}

const Tooltip = ({ id, description, width, position, children }: TooltipProps) => {

  /* show transaction description when hovering tooltip */
  const onTransactionRowHoverHandler = (id: string, show?: boolean) => () => {
    const elem = document.getElementById(id);
    if (!elem) return;
    elem.style.display = show ? 'block' : 'none';
  }

  return (
    <TooltipWrapper
      onMouseEnter={onTransactionRowHoverHandler(id, true)}
      onMouseLeave={onTransactionRowHoverHandler(id)}
    >
      <Content>{children}</Content>
      <Description id={id} width={width} position={position}>{description}</Description>
    </TooltipWrapper>
  )
}

export default Tooltip;


const TooltipWrapper = styled.div`
  position: relative;
`

const Content = styled.div`
  cursor: pointer;
`

const Description = styled.div<{width: number; position?: string;}>`
  pointer-events: none;
  display: none;
  position: absolute;
  bottom: 32px;
  ${p => p.position === 'left' ? 'right: 0' : 'left: 0'};
  border-radius: 8px;
  background-color: ${p => p.theme.colors.white};
  box-shadow: ${p => p.theme.shadows.grey_blurry};
  width: ${p => p.width}px;
  padding: 8px 24px;
`