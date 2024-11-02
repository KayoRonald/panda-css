import { panda } from "../../../styled-system/jsx";
import { ButtonHTMLAttributes } from "react";
import { switchStyle } from "./style";

export const Button = ({
  children,
  ...props
}: {
  children: React.ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>) => (
  <panda.button
    bg="blue.500"
    color="white"
    rounded="md"
    px='2'
    py='1'
    textStyle='xl'
    fontWeight='semibold'
    letterSpacing='tight'
    display='flex'
    alignItems='center'
    gap='2'
    className={switchStyle}
    {...props}
  >
    {children}
  </panda.button>
);
