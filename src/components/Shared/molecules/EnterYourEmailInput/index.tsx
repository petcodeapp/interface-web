import React from "react";

import { Input, InputGroup, InputProps, InputRightElement, useTheme } from "@chakra-ui/core";

import { PetCodeTheme } from "../../../../theme";

export type EnterYourEmailInputProps = {
  inputProps?: InputProps;
  iconProps?: React.SVGProps<SVGSVGElement>;
};

const EnterYourEmailInput: React.FC<EnterYourEmailInputProps> = ({ inputProps = {}, iconProps = {} }) => {
  const theme = useTheme() as PetCodeTheme;

  return (
    <InputGroup maxWidth="24.75rem">
      <Input
        type="email"
        rounded="1.25rem"
        height="3.625rem"
        fontWeight="thin"
        variant="filled"
        fontSize="lg"
        fontFamily="body"
        placeholder="Sign up for exclusive updates now"
        backgroundColor="rgba(255, 255, 255, 0.75)"
        _focus={{ backgroundColor: "white" }}
        _placeholder={{ color: "black" }}
        {...inputProps}
      />
      <InputRightElement alignSelf="center" top="auto" right="0.5rem" cursor="pointer">
        <svg width="2.375rem" height="2.3125rem" viewBox="0 0 38 37" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="19.25" cy="18.5" r="18.5" fill={theme.colors.petcode.blue[400]} />
          <path d="M29.6667 19H9M21.6296 11L29.6667 19L21.6296 11ZM29.6667 19L21.6296 27L29.6667 19Z" stroke="white" stroke-width="3.23108" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </InputRightElement>
    </InputGroup>
  );
}

export default EnterYourEmailInput;
