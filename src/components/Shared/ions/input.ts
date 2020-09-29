import { InputProps } from "@chakra-ui/core";

export const BaseInputStyle = {
  fontFamily: "body",
} as InputProps;

export const FlushedInputStyle = {
  ...BaseInputStyle,
  height: "auto",
  variant: "flushed",
} as InputProps;

export const InlineInputStyle = {
  ...BaseInputStyle,
  width: "auto",
  display: "inline",
} as InputProps;
