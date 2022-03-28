import breakpoints from "../breakpoints"

export const theme = {
  colors: {
    text: "#000",
    background: "#A3CD31",
  },
  mediaQueries: {
    sm: `min-width: ${breakpoints.sm}px`,
    md: `min-width: ${breakpoints.md}px`,
    lg: `min-width: ${breakpoints.lg}px`,
    xl: `min-width: ${breakpoints.xl}px`,
    xxl: `min-width: ${breakpoints.xxl}px`,
  },
}
