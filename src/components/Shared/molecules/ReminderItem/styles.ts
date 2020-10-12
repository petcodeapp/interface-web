import { InputProps, SelectProps } from "@chakra-ui/core";
import { FlushedInputStyle, InlineInputStyle } from "../../ions/input";

export const ReminderInputStyle = {
  ...InlineInputStyle,
  ...FlushedInputStyle,
  size: "sm",
  color: "petcode.blue.400",
  fontSize: "xl",
  borderColor: "petcode.neutral.400",
  _focus: { borderColor: "petcode.blue.400" },
} as InputProps;

export const ReminderSelectStyle = {
  ...ReminderInputStyle,
  paddingLeft: 3,
  rootProps: { width: "auto", display: "inline-block" },
} as SelectProps;
