import { css } from "../../styled-system/css";

export const styledBage = css({
  fontSize: "sm",
  color: "gray.700",
  bg: "gray.300",
  _hover: {
    bg: "gray.200",
  },
  rounded: "full",
  _dark: {
    color: "white",
    bg: "gray.700",
    _hover: {
      bg: "gray.600",
    },
  },
});

export const styledSpan = css({
  px: 4,
  mr: 2,
  rounded: "full",
  fontWeight: "bold",
  bgSize: "200% 100%",
  bgImage: "linear-gradient(110deg, #d4a017 45%, #d1d5db 55%, #eab308)",
  _dark: {
    bgImage: "linear-gradient(110deg, #d4af37 45%, #4b5563 55%, #facc15)",
  },
  animation: "shine",
});