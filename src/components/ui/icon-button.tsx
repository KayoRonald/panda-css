import { ark } from '@ark-ui/react/factory'
import { panda } from '../../../styled-system/jsx'
import type { ComponentProps } from '../../../styled-system/types'
import { ButtonVariantProps } from '../../../styled-system/recipes'
import { button } from "../../../styled-system/recipes";

export type IconButtonProps = ComponentProps<typeof IconButton>
export const IconButton = panda(ark.button, button, {
  defaultProps: { px: '0' } as ButtonVariantProps,
})