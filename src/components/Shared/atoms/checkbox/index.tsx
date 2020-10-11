import React from "react";

import { Icon, PseudoBox, PseudoBoxProps } from "@chakra-ui/core";

export type BaseCheckboxProps = {
  isChecked?: boolean;
  isDisabled?: boolean;
} & PseudoBoxProps;

const BaseCheckbox: React.FC<BaseCheckboxProps> = ({
  isChecked,
  isDisabled,
  size = "1.625rem",
  color,
  ...props
}) => (
  <PseudoBox
    display="flex"
    alignItems="center"
    justifyContent="center"
    rounded="full"
    backgroundColor="petcode.yellow.400"
    _hover={isDisabled ? {} : { backgroundColor: "petcode.yellow.500" }}
    size={size}
    minWidth={size}
    cursor={isDisabled ? "default" : "pointer"}
    padding="0.375rem"
    boxSizing="border-box"
    {...props}
  >
    {isChecked && <Icon name="checkmark" size="100%" color={color} />}
  </PseudoBox>
);

export default BaseCheckbox;
