import React from "react";
import { Box, Flex, Stack, Text } from "@chakra-ui/core";
import IntegratedProgressiveImage from "../../components/Shared/atoms/IntegratedProgressiveImage";

const Sidebar = () => {
  return (
    <Flex direction="row">
      <Stack
        backgroundColor="petcode.blue.400"
        alignItems="center"
        color="white"
        paddingY={8}
        paddingLeft={16}
        paddingRight={8}
        maxWidth="350px"
      >
        <Box flexGrow={1} />
        <IntegratedProgressiveImage
          slug="petcode-logo-with-qr-code.png"
          height="4rem"
        />
        <Box flexGrow={1} />
        <Text fontWeight="bold" fontSize="2.5rem">
          One step closer to getting your pet safer.
        </Text>
        <Text fontSize="lg">
          Description here. Lorem ipsum dolor sit amet, cu diam dicat vix, ad
          integre.
        </Text>
        <Box flexGrow={1} />
        <IntegratedProgressiveImage slug="welcome-image.png" width="275px" />
        <Box flexGrow={2} />
      </Stack>
      <Flex position="relative">
        <svg
          height="100%"
          style={{ position: "absolute" }}
          viewBox="470.484 0 153 1024"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M509.299 549.118C423.459 829.211 571.719 981.095 663.764 1062.71L470.484 1029.27L470.484 -13.5539L548.612 -4.76491C559.178 94.8489 587.233 294.826 509.299 549.118Z"
            fill="#B9E4F0"
          />
          <path
            d="M517.161 530.239C439.631 856.533 532.98 989.865 590.697 1054.08L470.484 1028.55L470.484 -42.6674C500.363 3.91947 597.17 193.508 517.161 530.239Z"
            fill="#51BCDA"
          />
        </svg>
      </Flex>
    </Flex>
  );
};

export default Sidebar;
