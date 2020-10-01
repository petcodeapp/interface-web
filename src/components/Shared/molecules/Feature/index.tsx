import React from "react";

import { Box, Stack, StackProps, Text } from "@chakra-ui/core";

const Feature: React.FC<StackProps> = (props) => (
  <Stack alignItems="center" spacing={5} {...props}>
    <Box size="6.5rem" backgroundColor="#C4C4C4" rounded="full" />
    <Text fontSize="2xl">Subtitle</Text>
  </Stack>
);

export default Feature;
