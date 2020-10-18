import React from "react";

import { Box, Flex, Heading, Stack, Text } from "@chakra-ui/core";
import { useBreakpointValue } from "@chakra-ui/media-query";
import { IPhoneX } from "react-device-mockups";
import { Transition } from "framer-motion";

import MotionFlex from "../Motion/Flex";
import ExclusiveUpdatesInput from "../Shared/molecules/ExclusiveUpdatesInput";
import IntegratedProgressiveImage from "../Shared/atoms/IntegratedProgressiveImage";

const Hero: React.FC = () => {
  const breakpoint = useBreakpointValue({
    base: 0,
    sm: 1,
    md: 2,
    lg: 3,
    xl: 4,
  }) as number;

  const displayBounce = { y: [-5, 5] };

  const transition: Transition = {
    repeat: Infinity,
    repeatType: "reverse",
    duration: 2,
  };

  return (
    <IntegratedProgressiveImage delay={500} slug="landing-splash.png">
      {(src: string, loading: boolean) => (
        <Flex
          direction="column"
          alignItems="center"
          backgroundImage={`url(${src})`}
          style={{ filter: loading ? "blur(-5px)" : "" }}
          backgroundSize="cover"
          backgroundPosition="50% 50%"
          height="100vh"
        >
          <Box flexGrow={1} />
          <Stack
            direction={breakpoint > 1 ? "row" : "column"}
            alignItems={{ base: "center", md: "stretch" }}
            width="100%"
            maxWidth="calc(1080px + 6rem)"
            boxSizing="border-box"
            paddingX={12}
            justifyContent="space-between"
            spacing={{ md: 8 }}
          >
            <MotionFlex
              position="relative"
              top="-1rem"
              height={{ base: "19.464rem", sm: "28.125rem" }}
              width={{ base: "29.354rem", sm: "42.9375rem" }}
              minWidth={{ lg: "42.9375rem" }}
              flexGrow={1}
              alignItems="flex-end"
              justifyContent="flex-end"
              animate={displayBounce}
              // @ts-ignore
              transition={transition}
            >
              <IntegratedProgressiveImage
                rounded="lg"
                position="absolute"
                right={{ base: "5.5rem", sm: "8.5rem" }}
                slug="dashboard-web-screen.png"
                alt="Dashboard web screen"
                width={{ base: "23.854rem", sm: "34.4375rem" }}
              />
              <IPhoneX
                height={breakpoint > 0 ? "22.125rem" : "15.326rem"}
                wrapperProps={{
                  style: {
                    position: "absolute",
                    right: breakpoint > 0 ? "5rem" : "3rem",
                    bottom: 0,
                  },
                }}
              >
                <IntegratedProgressiveImage
                  slug="dashboard-mobile-screen.png"
                  alt="Dashboard mobile screen"
                  width="100%"
                />
              </IPhoneX>
              <IntegratedProgressiveImage
                zIndex={1}
                width={{ base: "6rem", sm: "8.625rem" }}
                slug="tag-front.png"
                alt="Petcode tag front"
              />
            </MotionFlex>
            <Stack
              maxWidth={{ lg: "28.375rem" }}
              marginTop={{ base: 8, md: 0 }}
              color="white"
              spacing={5}
            >
              <Box>
                <Heading fontSize="6xl">One Code.</Heading>
                <Heading fontSize={{ base: "3xl", md: "2xl" }}>
                  An endless suite of features for pet owners.
                </Heading>
              </Box>
              <Text
                fontSize={{ base: "2xl", sm: "xl", md: "lg" }}
                maxWidth={{ md: "25rem" }}
              >
                PetCode is a new pet management platform that allows pet owners
                to keep track of all aspects of their pet’s life. No matter your
                situation, PetCode can help you and your pet live happier, worry
                free lives.
              </Text>
              <ExclusiveUpdatesInput
                maxWidth={{ base: "auto", md: "24.75rem" }}
              />
            </Stack>
          </Stack>
          <Box flexGrow={1} />
        </Flex>
      )}
    </IntegratedProgressiveImage>
  );
};

export default Hero;
