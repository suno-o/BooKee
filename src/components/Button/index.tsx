import React from 'react'
import styled, { css } from 'styled-components';
import LoadingIndicator from '../LoadingIndicator';

interface CustomStyles {
  width?: string;
  height?: string;
  shadow?: boolean;
  br?: number;
  p?: number;
  color?: string;
}

type ButtonProps = {
  bgTheme?: string;
  inactive?: boolean;
  disabled?: boolean;
};

const StyledButton = styled.button<ButtonProps & CustomStyles>`
  white-space: nowrap;
  outline: none;
  -webkit-tap-highlight-color: transparent;
  box-shadow: ${p => p.shadow && p.theme.shadows.grey};
  border: 0;
  border-radius: ${p => p.br !== undefined ? p.br : 8}px;
  display: inline-flex;
  justify-content: center;
  background-color: ${p => p.bgTheme === 'none' ? 'transparent' : p.theme.colors[p.bgTheme ? p.bgTheme : 'primary']};
  width: ${p => p.width ? `${p.width}` : '100%'};
  height: ${p => p.height ? `${p.height}` : 'auto'};
  padding: ${p => p.p !== undefined ? p.p : 12}px;
  font-family: inherit;
  font-weight: bold;
  color: ${p => p.color ? p.color : 'white'};
  
  ${p => (!p.inactive && !p.disabled) && css`
    cursor: pointer;

    &:hover {
    opacity: 0.8;
    }
    &:active {
      opacity: 0.6;
    }
  `}

  ${p => p.disabled && css`
    background-color: ${p.theme.colors.text_grey_light};
  `}
`

/* Button */
interface Props extends ButtonProps {
  loading?: boolean;
  customStyles?: CustomStyles;
  onClick?: () => void;
  children: React.ReactNode;
}

const Button = ({
  loading,
  onClick,
  children,
  customStyles,
  ...rest
}: Props) => {
  return (
    <StyledButton
      onClick={onClick}
      {...customStyles}
      {...rest}
    >
      {loading ? (
        <LoadingIndicator thickness={2} width={15} height={15} />
      ) : children}
    </StyledButton>
  );
}

export default Button;