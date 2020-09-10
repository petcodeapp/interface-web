import React from "react";

import {
  Box,
  Flex,
  Heading,
  Icon,
  Image,
  Stack,
  StackProps,
  ThemeProvider,
  Text,
  useTheme,
} from "@chakra-ui/core";
import { motion } from "framer-motion";

import BaseButton, { BaseButtonProps } from "../../components/Shared/button/BaseButton";
import Layout from "../../components/Shared/layout";
import Footer from "./Footer";

import { PetCodeTheme } from "../../theme";

const LongButton: React.FC<BaseButtonProps> = (props) => (
  <BaseButton
    size="sm"
    paddingX={10}
    textTransform="uppercase"
    {...props}
  />
);

const Feature: React.FC<StackProps> = (props) => (
  <Stack alignItems="center" {...props}>
    <Box size="90px" backgroundColor="#C4C4C4" rounded="full" />
    <Text fontSize="xl" fontWeight="bold">
      Subtitle
    </Text>
  </Stack>
);

const LandingPage: React.FunctionComponent = () => {
  const theme = useTheme() as PetCodeTheme;

  return (
    <ThemeProvider
      theme={{
        ...theme,
        fonts: { ...theme.fonts, heading: "Open Sans", body: "Open Sans" },
      }}
    >
      <Layout
        headerProps={{
          position: "absolute",
          backgroundColor: "transparent",
          color: "petcode.neutral.700",
        }}
        paddingTop={200}
      >
        <svg
          style={{ position: "absolute", left: 0, top: 0, width: 300 }}
          viewBox="0 0 567 370"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <ellipse cx="-11" cy="-20.5" rx="578" ry="390.5" fill="#51BCDA" />
        </svg>
        <svg
          style={{
            position: "absolute",
            left: 75,
            top: 0,
            width: 300,
            opacity: 0.4,
          }}
          viewBox="0 0 743 318"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <ellipse cx="145" cy="-96.5" rx="578" ry="390.5" fill="#51BCDA" />
        </svg>
        <Stack isInline paddingX={10}>
          <Image
            src="/media/hero-image.png"
            alt="Hero image"
          />
          <Stack position="relative" top={-20} color="petcode.neutral.600">
            <Heading fontSize="5xl" fontWeight="bold">
              One Code
            </Heading>
            <Text fontSize="xl">
              An endless suite of features for pet owners.
            </Text>
            <Stack isInline>
              <LongButton variantColor="petcode.yellow">
                Watch Video
              </LongButton>
              <LongButton variantColor="petcode.yellow">
                Get Started
              </LongButton>
            </Stack>
          </Stack>
        </Stack>
        <Flex direction="column">
          <Box position="relative" paddingBottom="9.44%">
            <svg
              style={{ position: "absolute", bottom: 0 }}
              viewBox="0 0 1440 75"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M33.3533 22.7649C248.968 39.8867 527.214 61.9822 865 18.3403C1104.03 -12.5423 1373 1.27264 1457 18.3403V532.27C1451.29 531.795 1445.62 531.303 1440 530.795V76H0V540.46C-13.1227 542.143 -21.0646 543.673 -23 545V18.3403C-4.71817 19.7416 14.067 21.2334 33.3533 22.7649Z"
                fill={theme.colors.petcode.blue[400]}
              />
            </svg>
            <svg
              style={{ position: "absolute", bottom: 0 }}
              viewBox="0 0 1440 136"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <motion.path
                opacity="0.4"
                d="M-31 0C65 37.9882 357 110.166 757 94.9704C939.667 67.1124 1337 19.7538 1465 53.1834V619.207C1457.45 617.473 1449.1 615.663 1440 613.802V137H0V637.628C-23.4734 639.418 -43.3016 640.882 -59 642L-31 0Z"
                fill={theme.colors.petcode.blue[400]}
                animate={{ scale: [0.995, 1.015] }}
                transition={{
                  repeat: Infinity,
                  repeatType: "reverse",
                  duration: 2,
                }}
              />
            </svg>
          </Box>
          <Stack
            isInline
            color="white"
            paddingY={10}
            paddingX={32}
            backgroundColor={theme.colors.petcode.blue[400]}
            spacing={10}
          >
            <Stack flexBasis="50%" spacing={4}>
              <Heading paddingBottom={4}>The Ultimate Pet Management System</Heading>
              <Stack isInline>
                <LongButton
                  variantColor="whiteAlpha"
                  variant="outline"
                  color="white"
                >
                  Safety
                </LongButton>
                <LongButton
                  variantColor="whiteAlpha"
                  variant="outline"
                  color="white"
                >
                  Health
                </LongButton>
                <LongButton
                  variantColor="whiteAlpha"
                  variant="outline"
                  color="white"
                >
                  Discovery
                </LongButton>
              </Stack>
              <Text fontWeight="bold" fontSize="xl">
                So Much More Than Just A Tag
              </Text>
              <Text fontWeight="thin">
                The PetCode system provides pet owners with an endless suite of feautres. PetCode keeps your pet safe and secure, stays on top of your pet’s health, and even allows you to discover events and rewards near you, all from our easy-to-use website and app. Scroll to learn more about each aspect of the PetCode system.
              </Text>
            </Stack>
            <Stack spacing={10}>
              <Stack isInline spacing={6}>
                <Feature/>
                <Feature/>
                <Feature/>
              </Stack>
              <Stack isInline marginLeft={12} spacing={6}>
                <Feature/>
                <Feature/>
                <Feature/>
              </Stack>
            </Stack>
          </Stack>
          <Box position="relative" paddingBottom="8.2%">
            <svg
              style={{ position: "absolute", top: 0 }}
              viewBox="0 489 1440 87"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 5.86201C-7.75309 5.20103 -15.4198 4.55301 -23 3.92187V576C-7 564.082 419.5 537.16 790 524.584C1064.63 515.263 1205.09 532.556 1333.7 548.389C1374.69 553.434 1414.47 558.332 1457 562.172V3.92187C1451.98 2.81368 1446.3 1.71811 1440 0.644775V489H0V5.86201Z"
                fill={theme.colors.petcode.blue[400]}
              />
            </svg>
            <svg
              style={{ position: "absolute", top: 0 }}
              viewBox="0 537 1440 119"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <motion.path
                opacity="0.4"
                d="M0 11.3675C-11.9113 7.35158 -22.2667 3.53123 -31 0L-59 656C47.6667 648.237 345 624.17 681 590.012C1017 555.853 1343.67 604.245 1465 632.71V54.3432C1457.55 52.3545 1449.18 50.6455 1440 49.1962V536H0V11.3675Z"
                fill={theme.colors.petcode.blue[400]}
                animate={{ scale: [0.995, 1.015] }}
                transition={{
                  repeat: Infinity,
                  repeatType: "reverse",
                  duration: 2,
                }}
              />
            </svg>
          </Box>
        </Flex>
        <Stack isInline paddingX={32} paddingY={16} spacing={10} justifyContent="space-between">
          <Image
            src="/media/safety-image.svg"
            alt="Safety image"
          />
          <Stack flexBasis="50%" color="petcode.neutral.700" textAlign="right" spacing={6}>
            <Heading fontSize="5xl">Safety</Heading>
            <Text fontWeight="thin">
              It’s a scary world out there, one you shouldn’t have to face alone. With PetCode, keeping your pet safer is no longer a struggle; our QR tags can help you find your pet faster, should you lose them. Your safety is our number one priority, which is why we never share your data with any third parties. Let us help you keep your pet safer and make life a more pleasant walk in the park!
            </Text>
            <Stack isInline alignSelf="start">
              <Text>Learn More</Text>
              <Icon size="30px" name="arrow" />
            </Stack>
          </Stack>
        </Stack>
        <Footer />
      </Layout>
    </ThemeProvider>
  );
};

export default LandingPage;
