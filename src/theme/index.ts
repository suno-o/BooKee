import { BreakpointMap, MediaQueries, Colors, Gradients, Shadows, Layout } from "./types"

const generateGradient = (color: string) => `linear-gradient(135deg, ${color} 0%, ${color}aa 100%)`;

const breakpointMap: BreakpointMap = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
}

const mediaQueries: MediaQueries = {
  xs: `@media screen and (min-width: ${breakpointMap.xs}px)`,
  sm: `@media screen and (min-width: ${breakpointMap.sm}px)`,
  md: `@media screen and (min-width: ${breakpointMap.md}px)`,
  lg: `@media screen and (min-width: ${breakpointMap.lg}px)`,
  xl: `@media screen and (min-width: ${breakpointMap.xl}px)`,
}

const colors: Colors = {
  primary: '#7040d0',
  primary_light: '#7040d060',
  secondary: '#1ecccc',
  secondary_light: '#1ecccc60',
  success: '#31d0af',
  warning: '#ffb237',
  failure: '#ee4a9a',
  white: '#fff',
  sky_blue: '#e6faff',
  sky_purple: '#f3eeff',
  text_grey: '#707070',
  text_grey_light: '#969696',
  text_grey_lighter: '#d2d2d7',
  text_grey_dark: '#333333',
}

const gradients: Gradients = {
  primary: generateGradient(colors.primary),
  secondary: generateGradient(colors.secondary),
  success: generateGradient(colors.success),
  warning: generateGradient(colors.warning),
  failure: generateGradient(colors.failure),
  sky: `linear-gradient(60deg, ${colors.sky_blue} 0%, ${colors.sky_purple} 100%)`,
  purple: `linear-gradient(60deg, #fff 0%, ${colors.sky_purple} 100%)`,
}

const shadows: Shadows = {
  grey: '1px 1px 5px 2px rgba(100,100,100,0.1)',
  grey_dark: '4px 4px 16px 3px rgba(100,100,100,0.3)',
  grey_blurry: '1px 1px 10px 1px rgba(100,100,100,0.2)',
}

const layout: Layout = {
  max_width: `${breakpointMap.lg}px`,
}

export const BooKeeTheme = {
  mediaQueries,
  colors,
  gradients,
  shadows,
  layout,
}
