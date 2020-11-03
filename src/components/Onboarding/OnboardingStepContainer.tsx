import React from "react";
import { Stack, StackProps } from "@chakra-ui/core";

const OnboardingStepContainer: React.FC<StackProps> = (props) => (
  <Stack
    paddingY={8}
    paddingLeft={32}
    paddingRight={8}
    spacing={6}
    color="petcode.neutral.700"
    maxWidth="800px"
    {...props}
  />
);

export default OnboardingStepContainer;
