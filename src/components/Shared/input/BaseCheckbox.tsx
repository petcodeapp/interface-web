import React from "react";

import { Flex, FlexProps, Icon } from "@chakra-ui/core";

type BaseCheckboxProps = {
  isChecked?: boolean;
  isDisabled?: boolean;
  size?: number;
} & FlexProps;

const BaseCheckbox: React.FC<BaseCheckboxProps> = ({
  isChecked,
  isDisabled,
  size = 32,
  ...props
}) => (
  <Flex
    alignItems="center"
    justifyContent="center"
    rounded="full"
    backgroundColor="petcode.yellow.400"
    size={size + "px"}
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
  </Flex>
);

export default BaseCheckbox;
