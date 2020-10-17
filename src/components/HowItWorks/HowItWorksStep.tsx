import React from "react";

import { Box, Heading, Stack, StackProps, Text } from "@chakra-ui/core";

import IntegratedProgressiveImage from "../Shared/atoms/IntegratedProgressiveImage";

export type HowItWorksStepProps = {
  imageSlug: string;
  stepNumber: number;
  name: string;
  description: string;
  imageHeight: number | string;
  imageBoxHeight?: number | string;
  headerWidth?: number | string;
} & StackProps;

const HowItWorksStep: React.FC<HowItWorksStepProps> = ({
  imageSlug,
  stepNumber,
  name,
  description,
  imageHeight,
  imageBoxHeight = "11.125rem",
  headerWidth = "100%",
  ...props
}) => (
  <Stack
    alignItems="center"
    textAlign="center"
    spacing={2}
    maxWidth={{ base: "24.113rem", md: "21.5625rem" }}
    {...props}
  >
    <Box minHeight={imageBoxHeight}>
      <IntegratedProgressiveImage
        height={imageHeight}
        slug={imageSlug}
        alt={`Step ${stepNumber}`}
      />
    </Box>
    <Text color="petcode.yellow.400" fontSize={{ base: "3xl", md: "2xl" }}>
      Step {stepNumber}
    </Text>
    <Heading
      color="petcode.neutral.700"
      fontSize={{ base: "2.755rem", md: "4xl" }}
      maxWidth={headerWidth}
    >
      {name}
    </Heading>
    <Text
      color="black"
      fontWeight="thin"
      fontSize={{ base: "xl", md: "lg" }}
      marginX={3}
    >
      {description}
    </Text>
  </Stack>
);

export default HowItWorksStep;
