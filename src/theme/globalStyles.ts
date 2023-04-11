import { createGlobalStyle } from "styled-components"
import { BooKeeTheme } from "./types"

export default createGlobalStyle<{theme: BooKeeTheme}>`
  body {
    margin: 0;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  b {
    color: ${p => p.theme.colors.primary};
    white-space: nowrap;
  }
`;