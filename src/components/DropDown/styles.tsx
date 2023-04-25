import styled from "styled-components"

export const Select = styled.div<{width?: number; optionsVisible: boolean}>`
  cursor: pointer;
  display: inline-block;
  position: relative;
  outline: none;
  -webkit-tap-highlight-color: transparent;
  border: 1px solid ${p => p.theme.colors.text_grey_light};
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
  border-bottom-left-radius: ${p => p.optionsVisible ? '0' : '24px'};
  border-bottom-right-radius: ${p => p.optionsVisible ? '0' : '24px'};
  width: ${p => p.width ? `${p.width}px` : '100%'};
  padding: 4px 8px;
  font-size: 0.8rem;
  text-align: center;
  color: ${p => p.theme.colors.text_grey};

  transition: border-radius 30ms ease-out;

  &::after {
    content: ${p => p.optionsVisible ? '"\\25B2"' : '"\\25BC"'};
    position: absolute;
    right: 12px;
    font-size: 0.6rem;
    line-height: 1.4rem;
  }

  ${p => p.theme.mediaQueries.sm} {
    font-size: 1rem;
  }
`

export const Options = styled.div<{visible?: boolean; top?: number}>`
  z-index: 900;
  display: ${p => p.visible ? 'block' : 'none'};
  position: absolute;
  ${p => p.top && `top: ${p.top}px;`}
  left: -1px; // parent border size
  right: -1px; // parent border size
  border-bottom-left-radius: 24px;
  border-bottom-right-radius: 24px;
  background-color: ${p => p.theme.colors.white};
  border: 1px solid ${p => p.theme.colors.text_grey_light};
  border-top: 0;
  text-align: left;
  font-size: 0.7rem;

  animation: options-load 1s linear;
  
  @keyframes options-load {
    from {
      max-height: 30px;
      overflow-y: hidden;
    };
    to {
      max-height: 1000px;
      overflow-y: auto
    };
  }

  ${p => p.theme.mediaQueries.sm} {
    font-size: 0.9rem;
  }
`

export const Option = styled.div`
  border-radius: 16px;
  margin: 4px;
  padding: 4px;
  text-align: center;

  &:hover {
    background-color: ${p => p.theme.colors.text_grey_lighter};
  }
`