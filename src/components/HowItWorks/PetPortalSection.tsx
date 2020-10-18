import React from "react";

import {
  Flex,
  Heading,
  Icon,
  Stack,
  Text,
  useTheme,
} from "@chakra-ui/core";
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

const PetPortalSection = () => {
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
        direction={breakpoint > 2 ? "row" : "column"}
        alignItems={{ base: "center", lg: "stretch" }}
        paddingX={12}
        paddingTop={24}
        paddingBottom={16}
        justifyContent="center"
        maxWidth="calc(1080px + 6rem)"
boxSizing="border-box"
        width="100%"
        spacing={{ base: 8, lg: 16 }}
        flexGrow={1}
      >
        <MotionFlex
          position="relative"
          justifyContent="flex-end"
          alignSelf={{ lg: "flex-end" }}
          animate={displayBounce}
          // @ts-ignore
          transition={transition}
          width={{ base: "28rem", md: "49.5rem" }}
        >
          <IntegratedProgressiveImage
            rounded="lg"
            position="absolute"
            right={{ base: "3rem", md: "7rem" }}
            bottom="15%"
            width={{ base: "25rem", md: "42.5rem" }}
            slug="reminders-web-screen.png"
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
              slug="reminders-mobile-screen.png"
              alt="Pet parks mobile screen"
            />
          </IPhoneX>
        </MotionFlex>
        <Stack
          maxWidth={{ lg: "29.125rem" }}
          paddingX={{ md: 24, lg: 0 }}
          spacing={4}
          color="petcode.neutral.700"
        >
          <Heading fontSize="5xl">The Pet Portal</Heading>
          <Text
            fontSize={{ base: "3xl", md: "2xl" }}
            color="petcode.yellow.400"
          >
            A place your pet’s data can call home
          </Text>
          <Text fontSize={{ base: "2xl", sm: "xl", md: "lg" }} fontWeight="thin">
            All your pet’s info—from contact and medical info to name, age,
            and breed—in one place. Your PetPortal syncs with the PetCode QR
            tag and is easily accessible through our app, giving you access
            to the full suite of features whenever, wherever. Get started
            with PetCode today to unlock all the features we have to offer!
          </Text>
          <Stack spacing={3} marginLeft={{ lg: 6 }} paddingBottom={8}>
            <FeaturePoint>Keeps your pet safe</FeaturePoint>
            <FeaturePoint>Tracks medical records</FeaturePoint>
            <FeaturePoint>
              Provides fun opportunities and events
            </FeaturePoint>
          </Stack>
          <Flex
            direction="row"
            justifyContent="space-between"
            alignSelf={{ base: "center", md: "stretch" }}
          >
            <Hide below="md">
              <Link to="#">
                <Icon
                  color="petcode.neutral.400"
                  name="arrow-thin"
                  size="40px"
                  alignSelf="start"
                />
              </Link>
            </Hide>
            <BaseButton
              {...ActionButtonStyle}
              height={{ base: "3.25rem", lg: "2.25rem" }}
              paddingX={{ base: 16, lg: 8 }}
              fontSize={{ base: "xl", lg: "lg" }}
              variantColor="petcode.blue"
            >
              <Link to="/getstarted">Get Started</Link>
            </BaseButton>
          </Flex>
        </Stack>
      </Stack>
    </Flex>
  );
}

export default PetPortalSection;
