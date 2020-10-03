import React from "react";

import { Icon, PseudoBox, PseudoBoxProps } from "@chakra-ui/core";

export type BaseCheckboxProps = {
  isChecked?: boolean;
  isDisabled?: boolean;
  size?: number;
} & PseudoBoxProps;

const BaseCheckbox: React.FC<BaseCheckboxProps> = ({
  isChecked,
  isDisabled,
  size = 100,
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
    cursor={isDisabled ? "default" : "pointer"}
    padding="6px"
    boxSizing="border-box"
    
    {...props}
  >
    {isChecked && (
      <Icon name="checkmark" size="100%" color={color} />
    )}
  </PseudoBox>
);

export default BaseCheckbox;
