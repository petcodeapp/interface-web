import { BoxProps, InputProps } from "@chakra-ui/core";
import { FlushedInputStyle } from "../../ions/input";

export const InfoFieldTextStyle = {
  color: "petcode.blue.400",
  fontSize: "xl",
} as BoxProps;

export const InfoFieldLabelStyle = {
  color: "petcode.neutral.400",
  fontSize: "sm",
} as BoxProps;

export const InfoFieldInputStyle = {
  ...FlushedInputStyle,
  size: "md",
  color: "petcode.blue.400",
  fontSize: "xl",
  borderColor: "petcode.neutral.400",
  _focus: { borderColor: "petcode.blue.400" },
} as InputProps;
