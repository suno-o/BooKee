import styled from "styled-components"
import { CustomStyles } from "."

type SelectStyles = CustomStyles & {optionsVisible: boolean};

export const Select = styled.div<SelectStyles>`
  cursor: pointer;
  display: inline-flex;
  justify-content: ${p => p.align ? p.align : 'center'};
  align-items: center;
  position: relative;
  outline: none;
  -webkit-tap-highlight-color: transparent;
  border: 1px solid ${p => p.theme.colors.text_grey_light};
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
  border-bottom-left-radius: ${p => p.optionsVisible ? '0' : '24px'};
  border-bottom-right-radius: ${p => p.optionsVisible ? '0' : '24px'};
  width: ${p => p.width ? `${p.width}` : '100%'};
  padding: ${p => p.p ? p.p : '6px 8px'};
  font-size: 0.8rem;
  color: ${p => p.theme.colors.text_grey};
  transition: border-radius ${p => p.optionsVisible ? '100ms' : '100ms 100ms'};

  &::after {
    content: ${p => p.optionsVisible ? '"\\25B2"' : '"\\25BC"'};
    position: absolute;
    right: 10px;
    font-size: 0.6rem;
    line-height: 1.4rem;
  }

  ${p => p.theme.mediaQueries.sm} {
    font-size: 0.9rem;
  }
`

export const OptionsWrapper = styled.div<{visible?: boolean; top?: number; maxHeight?: number}>`
  z-index: 900;
  display: block;
  position: absolute;
  ${p => p.top && `top: ${p.top + 1}px;`}
  left: -1px; // parent border size
  right: -1px; // parent border size
  border-bottom-left-radius: 24px;
  border-bottom-right-radius: 24px;
  background-color: ${p => p.theme.colors.white};
  border: 1px solid ${p => p.theme.colors.text_grey_light};
  border-top: 0;
  text-align: left;
  font-size: 0.7rem;
  opacity: ${p => p.visible ? 1 : 0};
  max-height: ${p => p.visible ? (p.maxHeight ? p.maxHeight : 200) : 0}px;
  transition: opacity ${p => p.visible ? '100ms 100ms' : '100ms'}, max-height ${p => p.visible ? '100ms 100ms' : '100ms'};
  overflow-y: hidden;
  ${p => p.theme.mediaQueries.sm} {
    font-size: 0.8rem;
  }
`

export const Options = styled.div<{maxHeight?: number}>`
  max-height: ${p => p.maxHeight ? p.maxHeight : 200}px;
  overflow-y: auto;
`

export const Option = styled.div<CustomStyles>`
  border-radius: 16px;
  margin: 6px;
  padding: ${p => p.p ? p.p : '4px'};
  text-align: ${p => p.align ? p.align : 'center'};

  &:hover {
    background-color: ${p => p.theme.colors.text_grey_lighter};
  }
`