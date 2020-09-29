import React from "react";
import {
  Flex,
  FlexProps,
  Input,
  Select,
  InputProps,
  SelectProps,
  Text,
  IconProps,
} from "@chakra-ui/core";

import BackgroundIcon from "../../atoms/backgroundicon";

import {
  PetInfoInputStyle,
  PetInfoSelectStyle,
  PetInfoCardTextStyle,
  PetInfoCardLabelStyle,
} from "./styles";
import { Icons } from "@chakra-ui/core/dist/theme/icons";

export type PetInfoCardProps = {
  isBeingEdited?: boolean;
  inputChild: React.ReactNode;
  value: string;
  label: string;
  iconProps: IconProps;
} & FlexProps;

const PetInfoCard: React.FC<PetInfoCardProps> = ({
  isBeingEdited = false,
  inputChild,
  value,
  label,
  iconProps,
  ...props
}) => (
  <Flex
    direction="column"
    justifyContent="center"
    rounded="lg"
    background="white"
    height="100px"
    padding={6}
    marginTop={10}
    boxShadow="0px 4px 20px rgba(0, 0, 0, 0.05)"
    {...props}
  >
    {isBeingEdited ? (
      inputChild
    ) : (
      <Text {...PetInfoCardTextStyle}>{value}</Text>
    )}
    <Text {...PetInfoCardLabelStyle}>Species</Text>
    <BackgroundIcon alignSelf="end" size="120px" {...iconProps} />
  </Flex>
);

export const PetInfoSelect: React.FC<SelectProps> = (props) => (
  <Select {...PetInfoSelectStyle} {...props} />
);

export const PetInfoInput: React.FC<InputProps> = (props) => (
  <Input {...PetInfoInputStyle} {...props} />
);

export default PetInfoCard;
