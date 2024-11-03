import { defineGlobalStyles } from '@pandacss/dev'

export const globalStyles = defineGlobalStyles({
  html: {
    fontFamily: 'sans'
  },
  body: {
    bg: { base: 'neutral.50', _dark: 'gray.900' },
    color: { base: 'neutral.900', _dark: 'neutral.50' }
  },
})