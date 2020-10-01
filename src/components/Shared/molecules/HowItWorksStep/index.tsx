import React from "react";

import { Box, Heading, Image, Stack, StackProps, Text } from "@chakra-ui/core";

export type HowItWorksStepProps = {
  image: string;
  stepNumber: number;
  name: string;
  description: string;
  imageHeight: number | string;
  imageBoxHeight?: number | string;
} & StackProps;

const HowItWorksStep: React.FC<HowItWorksStepProps> = ({
  image,
  stepNumber,
  name,
  description,
  imageHeight,
  imageBoxHeight = "12.25rem",
  ...props
}) => (
  <Stack
    alignItems="center"
    textAlign="center"
    spacing={2}
    maxWidth={345}
    {...props}
  >
    <Box minHeight={imageBoxHeight}>
      <Image height={imageHeight} src={image} alt={`Step ${stepNumber}`} />
    </Box>
    <Text color="petcode.yellow.400" fontSize="2xl">
      Step {stepNumber}
    </Text>
    <Heading color="petcode.neutral.700" fontSize="4xl">
      {name}
    </Heading>
    <Text color="black" fontWeight="thin" fontSize="lg" marginX={3}>
      {description}
    </Text>
  </Stack>
);

export default HowItWorksStep;
