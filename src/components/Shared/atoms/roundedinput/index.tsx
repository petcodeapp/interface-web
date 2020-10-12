import React from "react";

import { Input, InputProps } from "@chakra-ui/core";
import { BaseInputStyle } from "../../ions/input";

const RoundedInput: React.FC<InputProps> = (props) => (
  <Input
    {...BaseInputStyle}
    rounded="full"
    _placeholder={{ color: "petcode.neutral.500" }}
    fontWeight="thin"
    color="petcode.neutral.700"
    borderColor="petcode.neutral.400"
    focusBorderColor="petcode.neutral.500"
    {...props}
  />
);

export default RoundedInput;
