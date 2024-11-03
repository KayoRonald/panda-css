import { defineConfig } from "@pandacss/dev";
import { colors } from "./theme/tokens/colors";
import { semanticTokens as semanticColor } from "./theme/semantic-tokens/semantic-tokens";
import { recipes } from './theme/recipes'
import { globalStyles as  globalCss } from './theme/global-css'
import { zIndices } from "./theme/tokens/z-indeces";
import { keyframes, animations } from "./theme/animations/keyframes";

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
      keyframes,
      tokens: {
        colors,
        zIndex: zIndices,
        animations,
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
  globalCss,
});
