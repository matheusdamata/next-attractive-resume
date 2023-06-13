import { createStitches } from '@stitches/react'

export const {
  config,
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
} = createStitches({
  theme: {
    colors: {
      black: '#000',
      white: '#fff',

      blue100: '#dceaff',
      blue500: '#2c80ff',
      blue600: '#0d6efd',

      gray900: '#121214',
      gray850: '#121924',
      gray800: '#212428',
      gray700: '#202024',
      gray600: '#414150',
      gray500: '#565b63',
      gray300: '#c4c4cc',
      gray200: '#e1e1e6',
      gray100: '#f1f1f1',

      green100: '#c3ffed',
      green300: '#00B37E',
      green500: '#00875F',
      green700: '#015F43',

      purple800: '#DA00FE',
      purple600: '#A100ED',

      red100: '#FFE1E1',
      red300: '#F75A68',
      red400: '#FF1111',
      red500: '#AB222E',
      red700: '#7A1921',
    },

    fontSizes: {
      md: '1.125rem',
      lg: '1.25rem',
      xl: '1.5rem',
      '2xl': '2rem',
    },
  },
})
