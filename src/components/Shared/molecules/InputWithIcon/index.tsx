import React from "react";

import {
  InputGroup,
  InputLeftElement,
  Icon,
  InputProps,
  InputGroupProps,
} from "@chakra-ui/core";
import RoundedInput from "../../atoms/roundedinput";

export type InputWithIconProps = {
  iconName: string;
  inputGroupProps?: Omit<InputGroupProps, "children">;
  inputProps?: InputProps;
};

const InputWithIcon: React.FC<InputWithIconProps> = ({
  iconName,
  inputGroupProps = {},
  inputProps = {},
}) => (
  <InputGroup size="lg" width="100%" {...inputGroupProps}>
    <InputLeftElement
      children={
        <Icon size="25px" name={iconName} color="petcode.neutral.400" />
      }
    />
    <RoundedInput paddingLeft={12} {...inputProps} />
  </InputGroup>
);

export default InputWithIcon;
