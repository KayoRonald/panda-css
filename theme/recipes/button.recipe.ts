import { createAnatomy } from '@ark-ui/anatomy'
import { defineParts, defineRecipe } from '@pandacss/dev'

const anatomy = createAnatomy('button', ['leftIcon', 'rightIcon'])
const parts = defineParts(anatomy.build())

export const buttonRecipe = defineRecipe({
  className: 'button',
  jsx: ['Button', 'IconButton', 'SubmitButton'],
  base: {
    display: "inline-flex",
    appearance: "none",
    alignItems: "center",
    justifyContent: "center",
    userSelect: "none",
    position: "relative",
    borderRadius: "l3px",
    whiteSpace: "nowrap",
    verticalAlign: "middle",
    cursor: "pointer",
    flexShrink: "0",
    outline: "0",
    lineHeight: "1.2",
    isolation: "isolate",
    fontWeight: "medium",
    transitionProperty: "common",
    transitionDuration: "moderate",
    focusVisibleRing: "outside",
    paddingX: 6,
    paddingY: 3,
    border: '3px solid var(--border-color, black)',
    boxShadow: '4px 4px 0px 0px var(--shadow-color, black)',
    transition: 'all',
    '&:is(a, button)': {
      _hover: {
        boxShadow: '6px 6px 0px 0px var(--shadow-color, black)'
      }
    },
    ...parts({
      leftIcon: {
        marginRight: 3
      },
      rightIcon: {
        marginLeft: 3
      }
    })
  },
  variants: {
    shape: {
      square: {},
      circle: {
        borderRadius: '50%',
        flexShrink: 0
      }
    },
    color: {
      main: {
        bg: 'bg.emphasized',
        color: 'black'
      },
      black: {
        bg: 'black',
        color: 'white',
        boxShadow: 'none'
      },
      white: {
        bg: 'white',
        color: 'black'
      },
      yellow: {
        bg: 'yellow.600',
        color: 'text.main',
      },
      border: {
        bg: 'transparent',
        color: 'text.main',
      },
      ghost: {
        bg: 'transparent',
        border: 'none',
        shadow: 'none',
        color: 'text.main'
      },
      'ghost.white': {
        bg: 'transparent',
        border: 'none',
        shadow: 'none',
        color: 'white'
      }
    },
    size: {
      sm: {
        paddingY: 3,
        textStyle: 'lg'
      },
      md: {
        textStyle: 'md',
        md: {
          textStyle: 'lg'
        },
        lg: {
          textStyle: 'xl'
        }
      },
      lg: {
        textStyle: '2xl'
      },
      xl: {
        fontSize: '2rem',
        fontWeight: 'bold'
      }
    }
  },
  defaultVariants: {
    shape: 'square',
    color: 'main',
    size: 'md'
  }
})