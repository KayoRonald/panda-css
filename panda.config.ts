import { defineConfig } from "@pandacss/dev";
import { colors } from "./theme/colors";
import { semanticTokens as semanticColor } from "./theme/semantic-tokens";
import { recipes } from './theme/recipes'
export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],

  jsxFactory: "panda",
  conditions: {
    extend: {
      dark: '.dark &, [data-theme="dark"] &',
      light: ".light &",
      supportsBackdrop:
        "@supports ((-webkit-backdrop-filter: blur(1px)) or (backdrop-filter: blur(1px)))",
    },
  },
  // Useful for theme customization
  theme: {
    extend: {
      breakpoints: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px'
      },
      tokens: {
        colors,
      },
      semanticTokens:{
        colors: semanticColor,
      },
      recipes
    },
  },

  jsxFramework: "react",
  // The output directory for your css system
  outdir: "styled-system",
  // custom theme
   // Global CSS here
   globalCss: {
    body: {
      bg: { base: '#F8FAFC', _dark: 'black' },
      color: { base: 'black', _dark: 'white' },
    },
  },
});
