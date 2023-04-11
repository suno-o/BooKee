import React from 'react'
import styled, { css } from 'styled-components';

interface ButtonProps {
  bgTheme?: string;
  width?: number;
  height?: number;
  color?: string;
}

export const StyledButton = styled.button<ButtonProps>`
  box-shadow: ${p => p.theme.shadows.grey};
  border: 0;
  border-radius: 8px;
  background-color: ${p => p.theme.colors[p.bgTheme ? p.bgTheme : 'primary']};
  width: ${p => p.width ? `${p.width}px` : '100%'};
  height: ${p => p.height ? `${p.height}px` : '100%'};
  padding: 12px;
  font-weight: bold;
  color: ${p => p.color ? p.color : 'white'};
  white-space: nowrap;
  
  ${props => !props.disabled && css`
    cursor: pointer;

    &:hover {
    opacity: 0.8;
    }
    &:active {
      opacity: 0.6;
    }
  `}
`

interface Props extends ButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
}

const Button = ({
  onClick,
  children,
  ...rest
}: Props) => {
  return (
    <StyledButton
      onClick={onClick}
      {...rest}
    >
      {children}
    </StyledButton>
  );
}

export default Button;