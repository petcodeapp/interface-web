import React from "react";

import { ButtonProps } from "@chakra-ui/core";
import { MotionProps } from "framer-motion";
import Button from '../../Motion/Button';

export type SolidButtonProps = ButtonProps & MotionProps;

const SolidButton: React.FunctionComponent<SolidButtonProps> = ({
  children,
  variant = "solid",
  ...props
}) => (
  <Button
    size="lg"
    variant={variant}
    border="none"
    rounded="full"
    width="100%"
    height="52px"
    whileHover={{
        scale: 1.05,
        cursor: "pointer",
    }}
    transition={{
        duration: "0.2"
    }}
    {...props}
  >
    {children}
  </Button>
);

export default SolidButton;
