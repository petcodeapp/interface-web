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

export const ActionButton: React.FC<BaseButtonProps> = (props) => (
  <BaseButton size="md" paddingX={8} textTransform="uppercase" {...props} />
);

export const HeaderButton: React.FC<BaseButtonProps> = (props) => (
  <ActionButton variantColor="petcode.yellow" textTransform="none" {...props} />
);

export default BaseButton;
