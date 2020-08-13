import React from "react";

import { Box, Flex, Stack, Text } from "@chakra-ui/core";

import { withRouter, RouteComponentProps } from "react-router";

type ProgressStepProps = {
  name: string;
  isCurrent: boolean;
};

const ProgressStep: React.FC<ProgressStepProps> = ({
  name,
  isCurrent,
  ...props
}) => (
  <Flex alignItems="center" {...props}>
    <Box
      rounded="full"
      size="30px"
      borderWidth="3px"
      borderStyle="solid"
      borderColor="currentColor"
      backgroundColor={isCurrent ? "currentColor" : "transparent"}
      marginRight={3}
    />
    <Text fontSize="xl" textTransform="uppercase">
      {name}
    </Text>
  </Flex>
);

const ProgressTracker: React.FC<{ step: number } & RouteComponentProps> = ({
  step,
  location,
}) => (
  <Stack
    backgroundColor="petcode.neutral.200"
    color="petcode.neutral.500"
    justifyContent="center"
    isInline
    padding={8}
    spacing={20}
  >
    <ProgressStep name="Shipping" isCurrent={step == 0} />
    <ProgressStep name="Billing" isCurrent={step == 1} />
    <ProgressStep name="Review & Confirmation" isCurrent={step == 2} />
  </Stack>
);

export default withRouter(ProgressTracker);
