import React from "react";

import { Box, Flex, Heading, Stack, Text, useTheme } from "@chakra-ui/core";
import { useBreakpointValue } from "@chakra-ui/media-query";
import { motion, Transition } from "framer-motion";

import BaseButton from "../Shared/atoms/button";
import Feature from "./Feature";

import { PetCodeTheme } from "../../theme";
import { ActionButtonStyle } from "../Shared/ions/button";

type FeaturesSectionProps = {
  scrollToSafetySection: () => void;
  scrollToHealthSection: () => void;
  scrollToDiscoverySection: () => void;
};

const FeaturesSection: React.FC<FeaturesSectionProps> = ({
  scrollToSafetySection,
  scrollToHealthSection,
  scrollToDiscoverySection,
}) => {
  const theme = useTheme() as PetCodeTheme;
  const breakpoint = useBreakpointValue({
    base: 0,
    sm: 1,
    md: 2,
    lg: 3,
    xl: 4,
  }) as number;

  const waveBounce = { y: [-3, 3] };

  const transition: Transition = {
    repeat: Infinity,
    repeatType: "reverse",
    duration: 2,
  };

  return (
    <Flex direction="column">
      <Box position="relative">
        <svg
          style={{ position: "absolute", bottom: 0 }}
          viewBox="2 0 1438 74"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1440 15.3234C1340.95 -0.21926 1089.74 -10.6964 865 18.3403C527.214 61.9822 248.968 39.8867 33.3533 22.7648L33.353 22.7648C22.0635 21.8683 10.9457 20.9855 0 20.1264V76H1440V15.3234Z"
            fill={theme.colors.petcode.blue[400]}
          />
        </svg>
        <motion.svg
          style={{ position: "absolute", bottom: 0 }}
          viewBox="2 0 1438 126"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          animate={waveBounce}
          transition={transition}
        >
          <path
            opacity="0.4"
            d="M0 126H1440V37.1463C1291.46 14.2022 929.032 57.7343 757 83.9704C393.389 97.7833 119.022 39.3974 0 0.124929V126Z"
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
          direction={breakpoint > 2 ? "row" : "column"}
          alignItems="center"
          color="white"
          paddingY={{ base: 8, lg: 16 }}
          flexGrow={1}
          paddingX={12}
          width="100%"
          maxWidth="calc(1080px + 6rem)"
          boxSizing="border-box"
          spacing={{ base: 8, lg: 16 }}
        >
          <Stack
            spacing={8}
            maxWidth={{ lg: "39.625rem" }}
            paddingX={{ md: 24, lg: 0 }}
          >
            <Heading fontSize="2.5rem">
              The Ultimate Pet Management System
            </Heading>
            <Stack isInline spacing={4}>
              <BaseButton
                {...ActionButtonStyle}
                variantColor="whiteAlpha"
                variant="outline"
                color="white"
                fontWeight="thin"
                onClick={scrollToSafetySection}
              >
                Safety
              </BaseButton>
              <BaseButton
                {...ActionButtonStyle}
                variantColor="whiteAlpha"
                variant="outline"
                color="white"
                fontWeight="thin"
                onClick={scrollToHealthSection}
              >
                Health
              </BaseButton>
              <BaseButton
                {...ActionButtonStyle}
                variantColor="whiteAlpha"
                variant="outline"
                color="white"
                fontWeight="thin"
                onClick={scrollToDiscoverySection}
              >
                Discovery
              </BaseButton>
            </Stack>
            <Text
              fontWeight="thin"
              fontSize={{ base: "2xl", sm: "xl", md: "lg" }}
            >
              Discover the endless suite of features from PetCode. Keep your pet
              safe, manage their health, and discover nearby pet opportunities,
              all from our easy-to-use app. Managing your pet’s life has never
              been easier. Learn more about us below.
            </Text>
          </Stack>
          <Stack spacing={10}>
            <Stack isInline spacing={8}>
              <Feature
                imageSlug="personal-pet-profile-feature.png"
                name="Personal Pet Profile"
              />
              <Feature
                imageSlug="scan-locations-feature.png"
                name="Scan Locations"
              />
              <Feature
                imageSlug="no-monthly-fees-feature.png"
                name="No Monthly Fees"
              />
            </Stack>
            <Stack isInline marginLeft={{ lg: 12 }} spacing={8}>
              <Feature
                imageSlug="durable-qr-pet-tags-feature.png"
                name="Durable QR Pet Tags"
              />
              <Feature
                imageSlug="vaccination-storage-feature.png"
                name="Vaccination Storage"
              />
              <Feature
                imageSlug="discovery-feature.png"
                name="Discovery Feature"
              />
            </Stack>
          </Stack>
        </Stack>
      </Flex>
      <Box position="relative" paddingBottom={`${(116 / 1440) * 100}%`}>
        <svg
          style={{ position: "absolute", top: 0 }}
          viewBox="3 4 1434 81"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1440 -3.05176e-05H0V82.0683C95.3623 68.7786 464.317 46.6392 790 35.5844C1064.63 26.2625 1205.09 43.5557 1333.7 59.3885C1369.18 63.7565 1403.76 68.0134 1440 71.5695V-3.05176e-05Z"
            fill={theme.colors.petcode.blue[400]}
          />
        </svg>
        <motion.svg
          style={{ position: "absolute", top: 0 }}
          viewBox="2 0 1434 116"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          animate={waveBounce}
          transition={transition}
        >
          <path
            opacity="0.4"
            d="M1440 0H0V115.533C136.023 104.934 394.45 83.1432 681 54.0118C996.083 21.9797 1302.96 62.5395 1440 91.187V0Z"
            fill={theme.colors.petcode.blue[400]}
          />
        </motion.svg>
      </Box>
    </Flex>
  );
};

export default FeaturesSection;
