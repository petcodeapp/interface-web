import React from "react";

import {
  Box,
  BoxProps,
  Input,
  InputProps,
  Text,
  Select,
  SelectProps,
} from "@chakra-ui/core";

import {
  InfoFieldTextStyle,
  InfoFieldLabelStyle,
  InfoFieldInputStyle,
} from "./styles";

export const InfoFieldText: React.FC<BoxProps> = (props) => (
  <Text {...InfoFieldTextStyle} {...props} />
);

export const InfoFieldLabel: React.FC<BoxProps> = (props) => (
  <Text {...InfoFieldLabelStyle} {...props} />
);

export const InfoFieldInput: React.FC<InputProps> = (props) => (
  <Input {...InfoFieldInputStyle} {...props} />
);

export const InfoFieldSelect: React.FC<SelectProps> = (props) => (
  <Select {...InfoFieldInputStyle} {...props} />
);

type InfoFieldProps = {
  text: string;
  label: string;
} & BoxProps;

const InfoField: React.FC<InfoFieldProps> = ({ text, label, ...props }) => (
  <Box {...props}>
    <InfoFieldText marginBottom={1}>{text}</InfoFieldText>
    <InfoFieldLabel>{label}</InfoFieldLabel>
  </Box>
);

export default InfoField;
