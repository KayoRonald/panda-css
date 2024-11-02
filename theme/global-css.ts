import { defineGlobalStyles } from '@pandacss/dev'

export const globalStyles = defineGlobalStyles({
  '*, *::before, *::after': {
    borderColor: { base: 'neutral.200', _dark: 'neutral.800' }
  },
  html: {
    fontFamily: 'sans'
  },
  body: {
    bg: { base: 'neutral.50', _dark: 'neutral.900' },
    color: { base: 'neutral.900', _dark: 'neutral.50' }
  },
})