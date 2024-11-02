import { panda } from "../../../styled-system/jsx"
import type { ComponentProps, StyledComponent } from "../../../styled-system/types"
import { type TextVariantProps, text } from "../../../styled-system/recipes"

type TextProps = TextVariantProps & { as?: React.ElementType }

export type HeadingProps = ComponentProps<typeof Heading>
export const Heading = panda('h2', text, {
  defaultProps: { variant: 'heading' },
}) as StyledComponent<'h2', TextProps>