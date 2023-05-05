import styled from 'styled-components';

interface Props {
  thickness?: number;
  width: number;
  height: number;
}

const LoadingIndicator = styled.div<Props>`
  border: ${props => props.thickness ? props.thickness : 4}px solid ${props => props.theme.colors.text_grey_lighter};
  border-top: ${props => props.thickness ? props.thickness : 4}px solid ${props => props.theme.colors.primary};
  border-radius: 50%;
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`

export default LoadingIndicator;