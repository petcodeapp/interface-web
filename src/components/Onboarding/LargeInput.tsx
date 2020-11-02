import React from "react";
import { Input, InputProps } from "@chakra-ui/core";

const LargeInput: React.FC<InputProps> = (props) => {
  return (
    <Input
      height="4rem"
      fontSize="lg"
      border="none"
      backgroundColor="petcode.neutral.100"
      _placeholder={{ color: "petcode.neutral.500" }}
      fontFamily="body"
      fontWeight="semibold"
      paddingX={6}
      color="petcode.neutral.700"
      {...props}
    />
  );
};

export default LargeInput;
