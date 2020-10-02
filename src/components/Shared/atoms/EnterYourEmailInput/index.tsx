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
        fontSize="xl"
        fontFamily="body"
        placeholder="Enter Your Email"
        _placeholder={{ color: "petcode.neutral.600" }}
        _focus={{ backgroundColor: "white" }}
        {...inputProps}
      />
      <InputRightElement alignSelf="center" top="auto" right="0.5rem" cursor="pointer">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" {...iconProps}>
            <g filter="url(#filter0_d)">
            <path d="M30.954 19.886H5.36914M21.0043 9.98218L30.954 19.886L21.0043 9.98218ZM30.954 19.886L21.0043 29.7898L30.954 19.886Z" stroke={theme.colors.petcode.neutral[700]} stroke-width="2.47595" stroke-linecap="round" stroke-linejoin="round"/>
          </g>
          <defs>
            <filter id="filter0_d" x="-3.58203" y="0.903809" width="46.7899" height="46.7899" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
              <feOffset dy="4"/>
              <feGaussianBlur stdDeviation="2"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
            </filter>
          </defs>
        </svg>
      </InputRightElement>
    </InputGroup>
  );
}

export default EnterYourEmailInput;
