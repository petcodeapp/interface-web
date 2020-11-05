import React from "react";
import { StackProps } from "@chakra-ui/core";
import { MotionProps } from "framer-motion";

import { Stack } from "../Motion";

const OnboardingStepContainer: React.FC<StackProps & MotionProps> = (props) => (
  <Stack
    initial={{ x: 50, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    // @ts-ignore
    paddingY={8}
    paddingLeft={32}
    paddingRight={8}
    spacing={6}
    color="petcode.neutral.700"
    maxWidth="600px"
    {...props}
  />
);

export default OnboardingStepContainer;
