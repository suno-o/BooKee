import React from 'react'
import styled, { css } from 'styled-components';

interface ButtonCSSProps {
  color?: string;
  disabled?: boolean;
}
const buttonCSS = css<ButtonCSSProps>`
  font-weight: bold;
  color: ${p => p.color ? p.color : 'white'};
  white-space: nowrap;
  outline: none;
  -webkit-tap-highlight-color: transparent;
  
  ${p => !p.disabled && css`
    cursor: pointer;

    &:hover {
    opacity: 0.8;
    }
    &:active {
      opacity: 0.6;
    }
  `}
`

interface ButtonProps {
  bgTheme?: string;
  width?: number;
  height?: number;
  br?: number;
}
const StyledButton = styled.button<ButtonProps>`
  box-shadow: ${p => p.theme.shadows.grey};
  border: 0;
  border-radius: ${p => p.br ? p.br : 8}px;
  background-color: ${p => p.theme.colors[p.bgTheme ? p.bgTheme : 'primary']};
  width: ${p => p.width ? `${p.width}px` : '100%'};
  height: ${p => p.height ? `${p.height}px` : 'auto'};
  padding: 12px;
  ${buttonCSS}
`

/* Button */
interface Props extends ButtonProps, ButtonCSSProps {
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

/* Wrapper */
const BasicButton = styled.button`
  all: unset;
  ${buttonCSS}
`

interface BasicButtonProps extends ButtonCSSProps {
  onClick?: () => void;
  children: React.ReactNode;
}

export const ButtonWrapper = ({
  onClick,
  children,
  ...rest
}: BasicButtonProps) => {
  return (
    <BasicButton
      onClick={onClick}
      {...rest}
    >
      {children}
    </BasicButton>
  );
}