import React, { forwardRef } from "react";

import { Flex, Heading, Stack, Text, useTheme } from "@chakra-ui/core";
import { useBreakpointValue } from "@chakra-ui/media-query";
import { Transition } from "framer-motion";
import { IPhoneX } from "react-device-mockups";

import BaseButton from "../Shared/atoms/button";
import MotionFlex from "../Motion/Flex";
import FeaturePoint from "../Shared/molecules/FeaturePoint";
import IntegratedProgressiveImage from "../Shared/atoms/IntegratedProgressiveImage";

import { PetCodeTheme } from "../../theme";
import { ActionButtonStyle } from "../Shared/ions/button";

const DiscoverySection = forwardRef<HTMLDivElement | undefined>((_, ref) => {
  const theme = useTheme() as PetCodeTheme;
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
    <Flex direction="row" justifyContent="center">
      <Stack
        ref={ref}
        direction={breakpoint > 2 ? "row" : "column"}
        alignItems={{ base: "center", lg: "stretch" }}
        paddingX={12}
        paddingTop={{ base: 20, md: 32 }}
        paddingBottom={8}
        width="100%"
        maxWidth="calc(1080px + 6rem)"
        boxSizing="border-box"
        flexGrow={1}
        spacing={{ base: 8, lg: 16 }}
      >
        <MotionFlex
          position="relative"
          justifyContent="flex-end"
          animate={displayBounce}
          // @ts-ignore
          transition={transition}
          alignSelf={{ md: "center", lg: "auto" }}
          width={{ base: "28rem", md: "49.5rem" }}
        >
          <IntegratedProgressiveImage
            rounded="lg"
            position="absolute"
            right={{ base: "3rem", md: "7rem" }}
            bottom="15%"
            width={{ base: "25rem", md: "42.5rem" }}
            slug="scan-locations-web-screen.png"
            alt="Scan locations web screen"
          />
          <IPhoneX
            height={breakpoint > 1 ? "30rem" : "17.5rem"}
            screenProps={{
              style: { backgroundColor: theme.colors.petcode.blue[400] },
            }}
          >
            <IntegratedProgressiveImage
              width="100%"
              height="100%"
              slug="pet-parks-mobile-screen.png"
              alt="Pet parks mobile screen"
            />
          </IPhoneX>
        </MotionFlex>
        <Stack
          maxWidth={{ lg: "25.625rem" }}
          paddingX={{ md: 24, lg: 0 }}
          spacing={4}
          color="petcode.neutral.700"
        >
          <Heading fontSize="3rem">Discovery</Heading>
          <Stack isInline>
            <BaseButton
              {...ActionButtonStyle}
              variant="outline"
              borderColor="petcode.neutral.700"
              backgroundColor="transparent"
              fontWeight="thin"
            >
              Pet Parks
            </BaseButton>
            <BaseButton
              {...ActionButtonStyle}
              variant="outline"
              borderColor="petcode.neutral.700"
              backgroundColor="transparent"
              fontWeight="thin"
            >
              Pet Perks
            </BaseButton>
          </Stack>
          <Text
            fontSize={{ base: "2xl", sm: "xl", md: "lg" }}
            fontWeight="thin"
          >
            With PetCode’s Discovery feature, you can explore nearby pet
            opportunities, all with the tap of a finger.
          </Text>
          <Stack spacing={3} marginLeft={{ lg: 6 }}>
            <FeaturePoint>Search for exciting events</FeaturePoint>
            <FeaturePoint>Find open pet parks</FeaturePoint>
            <FeaturePoint>Get premium discounts</FeaturePoint>
          </Stack>
        </Stack>
      </Stack>
    </Flex>
  );
});

export default DiscoverySection;
