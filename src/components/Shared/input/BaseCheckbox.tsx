import React from "react";

import { PseudoBox, PseudoBoxProps, Icon } from "@chakra-ui/core";

type BaseCheckboxProps = {
  isChecked?: boolean;
  isDisabled?: boolean;
  size?: number;
} & PseudoBoxProps;

const BaseCheckbox: React.FC<BaseCheckboxProps> = ({
  isChecked,
  isDisabled,
  size = 32,
  ...props
}) => (
  <PseudoBox
    display="flex"
    alignItems="center"
    justifyContent="center"
    rounded="full"
    backgroundColor="petcode.yellow.400"
    _hover={{ backgroundColor: "petcode.yellow.500" }}
    minWidth={size + "px"}
    minHeight={size + "px"}
    cursor={isDisabled ? "default" : "pointer"}
    {...props}
  >
    {isChecked && (
      <Icon
        name="checkmark"
        size={size - 12 + "px"}
        color="petcode.neutral.700"
      />
    )}
  </PseudoBox>
);

export default BaseCheckbox;
