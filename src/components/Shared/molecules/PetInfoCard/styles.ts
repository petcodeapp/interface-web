import { BoxProps, InputProps, SelectProps } from "@chakra-ui/core";
import { BaseInputStyle, FlushedInputStyle } from "../../ions/input";

export const PetInfoInputStyle = {
  ...FlushedInputStyle,
  size: "lg",
  color: "petcode.neutral.700",
  fontSize: "4xl",
} as InputProps;

export const PetInfoSelectStyle = {
  ...BaseInputStyle,
  size: "lg",
  color: "petcode.neutral.700",
  fontSize: "2xl",
} as SelectProps;

export const PetInfoCardTextStyle = {
  color: "petcode.neutral.700",
  fontSize: "4xl",
} as BoxProps;

export const PetInfoCardLabelStyle = {
  color: "petcode.blue.400",
  fontSize: "lg",
} as BoxProps;
