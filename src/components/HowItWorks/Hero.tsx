import React from "react";

import { Box, Flex, Heading, Stack, Text } from "@chakra-ui/core";
import { useBreakpointValue } from "@chakra-ui/media-query";

import ExclusiveUpdatesInput from "../Shared/molecules/ExclusiveUpdatesInput";
import IntegratedProgressiveImage from "../Shared/atoms/IntegratedProgressiveImage";

const Hero = () => {
  const breakpoint = useBreakpointValue({
    base: 0,
    sm: 1,
    md: 2,
    lg: 3,
    xl: 4,
  }) as number;

  return (
    <IntegratedProgressiveImage
      delay={500}
      slug={`how-it-works-splash${breakpoint > 1 ? "" : "-mobile"}.png`}
    >
      {(src: string, loading: boolean) => (
        <Flex
          direction="row"
          justifyContent="center"
          backgroundImage={`url(${src})`}
          style={{ filter: loading ? "blur(-5px)" : "" }}
          backgroundSize="cover"
          backgroundPosition="50% 50%"
          height="100vh"
        >
          <Flex
            direction="column"
            width="100%"
            maxWidth="calc(1080px + 6rem)"
            boxSizing="border-box"
            paddingX={12}
          >
            <Box flexGrow={1} />
            <Stack
              alignSelf={{ base: "center", md: "flex-end" }}
              color="white"
              spacing={5}
              maxWidth={{ md: "26rem" }}
            >
              <Heading fontSize="5xl">
                How It Works
              </Heading>
              <Text fontSize={{ base: "2xl", sm: "xl", md: "lg" }}>
                The PetCode system offers a seamless connection between software
                and a physical QR code tag, allowing you to easily and
                efficiently manage your pet.
              </Text>
              <ExclusiveUpdatesInput
                maxWidth={{ base: "auto", sm: "24.75rem" }}
              />
            </Stack>
            <Box flexGrow={1} />
          </Flex>
        </Flex>
      )}
    </IntegratedProgressiveImage>
  );
};

export default Hero;
