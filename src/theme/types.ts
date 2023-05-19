export type BreakpointMap = {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
}

export type MediaQueries = {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
}

export type Colors = {
  primary_dark: string;
  primary: string;
  primary_light: string;
  secondary: string;
  secondary_light: string;
  success: string;
  warning: string;
  failure: string;
  sky_blue: string;
  sky_purple: string;
  white: string;
  text_grey: string;
  text_grey_light: string;
  text_grey_lighter: string;
  text_grey_dark: string;
}

export type Gradients = {
  primary: string;
  secondary: string;
  success: string;
  warning: string;
  failure: string;
  sky: string;
  purple: string;
}

export type Shadows = {
  grey: string,
  grey_dark: string,
  grey_blurry: string,
}

export type Layout = {
  max_width: string;
}

export type BooKeeTheme = {
  mediaQueries: MediaQueries,
  colors: Colors,
  gradients: Gradients,
  shadows: Shadows,
  layout: Layout,
}