import React, { forwardRef } from "react";

import { Flex, Heading, Icon, Stack, Text, useTheme } from "@chakra-ui/core";
import { useBreakpointValue, Hide } from "@chakra-ui/media-query";
import { Transition } from "framer-motion";
import { IPhoneX } from "react-device-mockups";

import Link from "../../components/Shared/atoms/link";
import BaseButton from "../../components/Shared/atoms/button";
import MotionFlex from "../../components/Motion/Flex";
import FeaturePoint from "../../components/Shared/molecules/FeaturePoint";
import IntegratedProgressiveImage from "../../components/Shared/atoms/IntegratedProgressiveImage";

import { PetCodeTheme } from "../../theme";
import { ActionButtonStyle } from "../../components/Shared/ions/button";

const DiscoverySection = forwardRef((_, ref) => {
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
      <Flex
        ref={ref}
        direction={{ base: "column", lg: "row" }}
        alignItems={{ base: "center", md: "start", lg: "stretch" }}
        paddingRight={{ lg: 24 }}
        paddingTop={40}
        paddingBottom={8}
        maxWidth="90rem"
        flexGrow={1}
      >
        <MotionFlex
          position="relative"
          justifyContent="flex-end"
          flexGrow={{ lg: 1 }}
          animate={displayBounce}
          // @ts-ignore
          transition={transition}
          alignSelf={{ md: "center", lg: "auto" }}
          width={{ base: "27.785rem", md: "50.3125rem", lg: "auto" }}
        >
          <IntegratedProgressiveImage
            transform="translateY(-25%)"
            rounded="lg"
            position="absolute"
            right={{ base: "2.5rem", md: "5rem" }}
            width={{ base: "25.285rem", md: "45.3125rem" }}
            slug="scan-locations-web-screen.png"
            alt="Scan locations web screen"
          />
          <IPhoneX
            height={breakpoint > 1 ? "29rem" : "17.363rem"}
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
        <Hide below="lg">
          <Link to="#" alignSelf="flex-end" marginX={8}>
            <Icon color="petcode.neutral.400" name="arrow-thin" size="40px" />
          </Link>
        </Hide>
        <Stack
          maxWidth={{ sm: "45rem", lg: "25.625rem" }}
          paddingX={{ base: 16, md: 40, lg: 0 }}
          spacing={4}
          color="petcode.neutral.700"
        >
          <Heading fontSize="5xl">Discovery</Heading>
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
          <Text fontSize={{ base: "2xl", md: "xl" }} fontWeight="thin">
            With PetCode’s Discovery feature, you can explore nearby pet
            opportunities, all with the tap of a finger.
          </Text>
          <Stack spacing={3} marginLeft={{ lg: 6 }}>
            <FeaturePoint>Search for exciting events</FeaturePoint>
            <FeaturePoint>Find open pet parks</FeaturePoint>
            <FeaturePoint>Get premium discounts</FeaturePoint>
          </Stack>
        </Stack>
      </Flex>
    </Flex>
  );
});

export default DiscoverySection;
