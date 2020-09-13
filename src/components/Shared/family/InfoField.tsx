import React from "react";

import {
  Box,
  BoxProps,
  Flex,
  FlexProps,
  Input,
  InputProps,
  PseudoBoxProps,
  Select,
  SelectProps,
  Text,
} from "@chakra-ui/core";

export const InfoFieldRow: React.FC<FlexProps> = (props) => (
  <Flex
    direction="row"
    alignItems="center"
    justifyContent="space-between"
    {...props}
  />
);

export const InfoFieldText: React.FC<BoxProps> = (props) => (
  <Text color="petcode.blue.400" fontSize="xl" marginBottom={1} {...props} />
);

export const InfoFieldLabel: React.FC<PseudoBoxProps> = (props) => (
  <Text color="petcode.neutral.400" fontSize="sm" {...props} />
);

type InfoFieldProps = {
  text: string;
  label: string;
} & BoxProps;

export const InfoField: React.FC<InfoFieldProps> = ({
  text,
  label,
  ...props
}) => (
  <Box {...props}>
    <InfoFieldText>{text}</InfoFieldText>
    <InfoFieldLabel>{label}</InfoFieldLabel>
  </Box>
);

export const InfoFieldInput: React.FC<InputProps> = (props) => (
  <Input
    size="md"
    variant="flushed"
    color="petcode.blue.400"
    fontSize="xl"
    fontFamily="body"
    height="auto"
    borderColor="petcode.neutral.400"
    _focus={{ borderColor: "petcode.blue.400" }}
    {...props}
  />
);

export const InfoFieldSelect: React.FC<SelectProps> = (props) => (
  <Select
    size="md"
    variant="flushed"
    color="petcode.blue.400"
    fontSize="xl"
    fontFamily="body"
    height="auto"
    borderColor="petcode.neutral.400"
    _focus={{ borderColor: "petcode.blue.400" }}
    {...props}
  />
);
