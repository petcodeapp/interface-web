import React from "react";

import { ButtonProps } from "@chakra-ui/core";
import { MotionProps } from "framer-motion";

import Button from "../../../Motion/Button";

export type BaseButtonProps = ButtonProps & MotionProps;

const BaseButton: React.FunctionComponent<BaseButtonProps> = ({
  children,
  variant = "solid",
  ...props
}) => (
  <Button
    size="lg"
    variant={variant}
    rounded="full"
    whileHover={{
      scale: 1.05,
    }}
    transition={{
      duration: "0.2",
    }}
    {...props}
  >
    {children}
  </Button>
);

export default BaseButton;
