import React, { forwardRef, useState } from "react";

import { Box, Flex, Heading, Stack, useTheme } from "@chakra-ui/core";
import { useBreakpointValue } from "@chakra-ui/media-query";
import { Transition, AnimatePresence, motion } from "framer-motion";
import { IPhoneX } from "react-device-mockups";

import MotionBox from "../Motion/Box";
import FeatureDropDown from "./FeatureDropdown";
import IntegratedProgressiveImage from "../Shared/atoms/IntegratedProgressiveImage";

import { PetCodeTheme } from "../../theme";

const HealthSection = forwardRef<HTMLDivElement | undefined>((_, ref) => {
  const theme = useTheme() as PetCodeTheme;
  const breakpoint = useBreakpointValue({
    base: 0,
    sm: 1,
    md: 2,
    lg: 3,
    xl: 4,
  }) as number;

  const waveBounce = { y: [-3, 3] };
  const displayBounce = { y: [-5, 5] };

  const transition: Transition = {
    repeat: Infinity,
    repeatType: "reverse",
    duration: 2,
  };

  const [featureShown, setFeatureShown] = useState("vaccinations");

  return (
    <Flex direction="column" overflow="hidden">
      <Box position="relative" paddingBottom={`${((197 * 1.2) / 1440) * 100}%`}>
        <svg
          style={{ position: "absolute", bottom: 0 }}
          viewBox="0 0 1440 157"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1440 7.81967C1232.66 -11.121 917.682 2.17599 572.5 71.7313C356.208 115.315 159.365 130.813 0 130.634V159H1440V7.81967Z"
            fill={theme.colors.petcode.blue[400]}
          />
        </svg>
        <motion.svg
          style={{ position: "absolute", bottom: 0 }}
          viewBox="0 0 1440 197"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          animate={waveBounce}
          transition={transition}
        >
          <path
            opacity="0.4"
            d="M1440 14.0655C1238.49 -9.55997 934.104 -9.08726 575.5 83.559C345.303 143.031 150.587 166.72 0 166.98V197H1440V14.0655Z"
            fill={theme.colors.petcode.blue[400]}
          />
        </motion.svg>
      </Box>
      <Flex
        direction="row"
        justifyContent="center"
        backgroundColor="petcode.blue.400"
      >
        <Stack
          direction={breakpoint > 2 ? "row" : "column-reverse"}
          alignItems={{ base: "center", lg: "stretch" }}
          ref={ref}
          color="white"
          paddingTop={{ base: 20, md: 32, lg: 16 }}
          paddingBottom={{ base: 16, lg: 0 }}
          paddingX={12}
          width="100%"
          maxWidth="calc(1080px + 6rem)"
          boxSizing="border-box"
          flexGrow={1}
          spacing={{ base: 8, lg: 16 }}
        >
          <Stack
            paddingX={{ md: 24, lg: 0 }}
            minWidth={{ lg: "35.875rem" }}
            alignSelf="stretch"
          >
            <Heading fontSize="3rem" paddingBottom={4}>
              Health
            </Heading>
            <FeatureDropDown
              open={featureShown == "vaccinations"}
              onClick={() => setFeatureShown("vaccinations")}
              name="Vaccinations"
              description="Access your pet’s vaccination records and stay up-to-date on upcoming events, anytime, anywhere."
            />
            <FeatureDropDown
              open={featureShown == "reminders"}
              onClick={() => setFeatureShown("reminders")}
              name="Reminders"
              description="Turn on notifications for PetCode to receive reminders for upcoming and overdue wellness checks."
            />
            <FeatureDropDown
              open={featureShown == "share-records"}
              onClick={() => setFeatureShown("share-records")}
              name="Share Records"
              description="Easily share records with your pet’s health team through PetCode."
            />
          </Stack>
          <MotionBox
            position="relative"
            animate={displayBounce}
            // @ts-ignore
            transition={transition}
            alignSelf={{ md: "center", lg: "auto" }}
            width={{ base: "28rem", md: "49.5rem" }}
          >
            <AnimatePresence>
              <IntegratedProgressiveImage
                position="absolute"
                rounded="lg"
                left={{ base: "3rem", md: "7rem" }}
                bottom="15%"
                width={{ base: "25rem", md: "42.5rem" }}
                key={featureShown}
                slug={
                  featureShown == "vaccinations"
                    ? "dashboard-web-screen.png"
                    : featureShown == "reminders"
                    ? "reminders-web-screen.png"
                    : "medical-info-web-screen.png"
                }
                alt={`${featureShown} web screen`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                // @ts-ignore
                transition={{ duration: 0.5 }}
              />
            </AnimatePresence>
            <IPhoneX
              height={breakpoint > 1 ? "30rem" : "17.5rem"}
              screenProps={{
                style: {
                  backgroundColor: theme.colors.petcode.blue[400],
                  overflow: "hidden",
                },
              }}
            >
              <AnimatePresence>
                <IntegratedProgressiveImage
                  position="absolute"
                  top={0}
                  width="100%"
                  key={featureShown}
                  slug={
                    featureShown == "vaccinations"
                      ? "vaccinations-mobile-screen.png"
                      : featureShown == "reminders"
                      ? "reminders-mobile-screen.png"
                      : "medical-info-mobile-screen.png"
                  }
                  alt={`${featureShown} mobile screen`}
                  initial={{ x: "100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: "-100%", opacity: 0 }}
                  // @ts-ignore
                  transition={{ duration: 0.5 }}
                />
              </AnimatePresence>
            </IPhoneX>
          </MotionBox>
        </Stack>
      </Flex>
      <Box position="relative" paddingBottom={`${((128 * 1.1) / 1440) * 100}%`}>
        <svg
          style={{ position: "absolute", top: 0 }}
          viewBox="0 70 1440 109"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 0V135.886C42.159 128.246 95.0876 123.642 163 123.642C273.07 123.642 396.65 135.44 529.45 148.117C805.912 174.509 1122.33 204.715 1440 140.241V0H0Z"
            fill={theme.colors.petcode.blue[400]}
          />
        </svg>
        <motion.svg
          style={{ position: "absolute", top: 0 }}
          viewBox="0 0 1440 128"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          animate={waveBounce}
          transition={transition}
        >
          <path
            opacity="0.4"
            d="M1440 0H0V62.3521C38.5679 59.8264 87.2821 58.7177 150 58.7177C249.053 58.7177 363.798 72.9229 488.855 88.4047L488.855 88.4048C773.611 123.657 1111.83 165.528 1440 61.3855V0Z"
            fill={theme.colors.petcode.blue[400]}
          />
        </motion.svg>
      </Box>
    </Flex>
  );
});

export default HealthSection;
