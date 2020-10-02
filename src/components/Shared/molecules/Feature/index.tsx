import React from "react";

import { Image, Stack, StackProps, Text } from "@chakra-ui/core";

export type FeatureProps = {
  image: string;
  name: string;
} & StackProps;

const Feature: React.FC<FeatureProps> = ({ image, name, ...props }) => (
  <Stack alignItems="center" width="8.0625rem" spacing={5} {...props}>
    <Image size="6.5rem" rounded="full" alt={name} src={image} />
    <Text fontSize="lg" textAlign="center">{name}</Text>
  </Stack>
);

export default Feature;
