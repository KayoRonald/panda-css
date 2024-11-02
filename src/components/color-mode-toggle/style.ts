import { css } from "../../../styled-system/css";

export const switchStyle = css({
  px: '2',
  py: '1',
  textStyle: 'xl',
  fontWeight: 'semibold',
  letterSpacing: 'tight',
  rounded: 'md',
  display: 'flex',
  alignItems: 'center',
  gap: '2',
  _hover: {
    bg: 'bg.emphasized.hover'
  }
});