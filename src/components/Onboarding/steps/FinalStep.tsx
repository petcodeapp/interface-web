import React from "react";
import { Box, Flex, Stack, Text } from "@chakra-ui/core";
import IntegratedProgressiveImage from "../../Shared/atoms/IntegratedProgressiveImage";

const FinalStep = () => {
  return (
    <Flex direction="row" justifyContent="center" width="100%" backgroundColor="petcode.blue.400">
      <Stack
        alignItems="center"
        color="white"
        paddingY={8}
        paddingX={16}
        maxWidth="350px"
        textAlign="center"
      >
        <Box flexGrow={1} />
        <IntegratedProgressiveImage
          slug="petcode-logo-with-qr-code.png"
          height="4rem"
        />
        <Box flexGrow={1} />
        <Text fontWeight="bold" fontSize="2.5rem">
          You're All Set!
        </Text>
        <Text fontSize="lg">
          Description here. Lorem ipsum dolor sit amet, cu diam dicat vix, ad
          integre.
        </Text>
        <Box flexGrow={1} />
        <IntegratedProgressiveImage slug="welcome-image.png" width="275px" />
        <Box flexGrow={2} />
      </Stack>
    </Flex>
  );
};

export default FinalStep;
