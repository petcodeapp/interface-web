import React from "react";
import { Box, Flex, Stack, StackProps } from "@chakra-ui/core";

import Sidebar from "./Sidebar";

const OnboardingStepContainer: React.FC<StackProps> = ({ children, ...props }) => (
  <Flex direction="row" minHeight="100vh">
    <Sidebar />
    <Box flexGrow={1} />
    <Stack
      paddingY={8}
      paddingLeft={32}
      paddingRight={8}
      spacing={6}
      color="petcode.neutral.700"
      maxWidth="600px"
    >
      {children}
    </Stack>
    <Box flexGrow={1} />
  </Flex>
);

export default OnboardingStepContainer;
