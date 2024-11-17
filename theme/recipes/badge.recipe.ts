import { defineRecipe } from "@pandacss/dev";

export const badgeRecipe = defineRecipe({
  className: "badge",
  base: {
    display: "inline-flex",
    alignItems: "center",
    borderRadius: "2px",
    gap: "1",
    fontWeight: "medium",
    fontVariantNumeric: "tabular-nums",
    justifyContent: "space-between",
    whiteSpace: "nowrap",
    userSelect: "none",
    py: 1,
    px: 1,
    pr: 4,
    mb: 7,
  },
  variants: {
    variant: {
      solid: {
        bg: "red.500",
        color: "white",
      },
      subtle: {
        bg: "gray.100",
        color: "gray.900",
      },
      outline: {
        color: "gray.700",
        shadow: "inset 0 0 0px 1px var(--shadow-color)",
        shadowColor: "gray.500",
      },
      surface: {
        bg: "gray.50",
        color: "gray.800",
        shadow: "inset 0 0 0px 1px var(--shadow-color)",
        shadowColor: "gray.400",
      },
      plain: {
        color: "gray.700",
      },
    },
    size: {
      xs: {
        textStyle: "2xs",
        px: "1",
        minH: "4",
      },
      sm: {
        textStyle: "xs",
        px: "1.5",
        minH: "5",
      },
      md: {
        textStyle: "sm",
        px: "2",
        minH: "6",
      },
      lg: {
        textStyle: "sm",
        px: "2.5",
        minH: "7",
      },
    },
  },
  defaultVariants: {
    variant: "subtle",
    size: "sm",
  },
});
