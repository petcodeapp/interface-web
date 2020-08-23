import React from "react";

import { Input, InputProps } from "@chakra-ui/core";

const RoundedInput: React.FC<InputProps> = (props) => (
  <Input
    rounded="full"
    _placeholder={{ color: "petcode.neutral.500" }}
    fontWeight="thin"
    fontFamily="body"
    color="petcode.neutral.700"
    borderColor="petcode.neutral.400"
    focusBorderColor="petcode.neutral.500"
    {...props}
  />
);

export default RoundedInput;
