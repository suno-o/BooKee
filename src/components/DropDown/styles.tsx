import styled from "styled-components"

export const Select = styled.div<{width?: number; optionsVisible: boolean}>`
  cursor: pointer;
  display: inline-block;
  position: relative;
  outline: none;
  border: 1px solid ${p => p.theme.colors.text_grey_light};
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  border-bottom-left-radius: ${p => p.optionsVisible ? '0' : '16px'};
  border-bottom-right-radius: ${p => p.optionsVisible ? '0' : '16px'};
  width: ${p => p.width ? `${p.width}px` : '100%'};
  padding: 12px;
  font-size: 1rem;
  text-align: center;
  color: ${p => p.theme.colors.text_grey};

  transition: border-radius 30ms ease-out;

  &::after {
    content: ${p => p.optionsVisible ? '"\\25B2"' : '"\\25BC"'};
    position: absolute;
    right: 16px;
    font-size: 0.6rem;
    line-height: 1.4rem;
  }
`

export const Options = styled.div<{visible?: boolean; top?: number}>`
  z-index: 900;
  display: ${p => p.visible ? 'block' : 'none'};
  position: absolute;
  ${p => p.top && `top: ${p.top}px;`}
  left: -1px; // parent border size
  right: -1px; // parent border size
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  background-color: ${p => p.theme.colors.white};
  border: 1px solid ${p => p.theme.colors.text_grey_light};
  border-top: 0;
  color: black;
  text-align: left;

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
`

export const Option = styled.div`
  border-radius: 16px;
  margin: 8px;
  padding: 12px;
  text-align: center;

  &:hover {
    background-color: ${p => p.theme.colors.text_grey_lighter};
  }
`