import { createTheme, ThemeOptions } from '@mui/material/styles'

const customThemeOptions: ThemeOptions = {
  breakpoints: {
    values: {
      xs: 0,
      sm: 0, // not used
      md: 320,
      lg: 0, // not used
      xl: 768,
    },
  },
}

// Create a customized theme
export const theme = createTheme(customThemeOptions)
