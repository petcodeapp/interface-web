import React from "react";

import { ButtonProps } from "@chakra-ui/core";
import { MotionProps } from "framer-motion";
import Button from '../../Motion/Button';

interface SolidButtonProps {
    variant?: string
}

const SolidButton: React.FunctionComponent<SolidButtonProps & ButtonProps & MotionProps> = ({
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
