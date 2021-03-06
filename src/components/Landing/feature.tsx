import React from "react";

import { Stack, StackProps, Text } from "@chakra-ui/core";
import IntegratedProgressiveImage from "../Shared/atoms/IntegratedProgressiveImage";

export type FeatureProps = {
  imageSlug: string;
  name: string;
} & StackProps;

const Feature: React.FC<FeatureProps> = ({ imageSlug, name, ...props }) => (
  <Stack alignItems="center" width="8.0625rem" spacing={5} {...props}>
    <IntegratedProgressiveImage
      size={{ base: "6.5rem", lg: "5.625rem" }}
      rounded="full"
      alt={name}
      slug={imageSlug}
    />
    <Text fontSize={{ base: "xl", md: "md" }} textAlign="center">
      {name}
    </Text>
  </Stack>
);

export default Feature;
