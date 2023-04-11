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
  primary: string;
  primary_light: string;
  secondary: string;
  secondary_light: string;
  success: string;
  warning: string;
  failure: string;
  sky_blue: string;
  sky_purple: string;
  text_grey: string;
  text_grey_light: string;
  text_grey_dark: string;
}

export type Gradients = {
  sky: string;
  purple: string;
}

export type Shadows = {
  grey: '1px 1px 5px 2px rgba(100,100,100,0.1)',
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