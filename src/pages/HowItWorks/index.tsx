import React, { useEffect } from "react";

import {
  Box,
  Flex,
  Heading,
  Icon,
  Stack,
  Text,
  ThemeProvider,
  useTheme,
} from "@chakra-ui/core";
import { useBreakpointValue, Hide } from "@chakra-ui/media-query";
import { motion, useAnimation, Transition } from "framer-motion";
import { IPhoneX } from "react-device-mockups";

import Link from "../../components/Shared/atoms/link";
import BaseButton from "../../components/Shared/atoms/button";
import MotionBox from "../../components/Motion/Box";
import MotionFlex from "../../components/Motion/Flex";
import Layout from "../../components/Shared/layouts/Layout";
import HowItWorksStep from "../../components/Shared/molecules/HowItWorksStep";
import ExclusiveUpdatesInput from "../../components/Shared/molecules/ExclusiveUpdatesInput";
import FeaturePoint from "../../components/Shared/molecules/FeaturePoint";
import IntegratedProgressiveImage from "../../components/Shared/atoms/IntegratedProgressiveImage";

import { useInView } from "react-intersection-observer";

import { PetCodeTheme } from "../../theme";
import { ActionButtonStyle } from "../../components/Shared/ions/button";

import "html5-device-mockups/dist/device-mockups.min.css";

const HowItWorksPage: React.FunctionComponent = () => {
  const theme = useTheme() as PetCodeTheme;
  const breakpoint = useBreakpointValue({ base: 0, sm: 1, md: 2, lg: 3, xl: 4 }) as number;
  const [ref, inView] = useInView();
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView]);

  const waveBounce = { y: [-3, 3] };
  const displayBounce = { y: [-5, 5] };

  const transition: Transition = {
    repeat: Infinity,
    repeatType: "reverse",
    duration: 2,
  };

  return (
    <ThemeProvider
      theme={{
        ...theme,
        fonts: {
          ...theme.fonts,
          heading: '"Open Sans", sans-serif',
        },
      }}
    >
      <Layout
        position="relative"
        headerProps={{
          position: "absolute",
          backgroundColor: "transparent",
        }}
      >
        <svg
          style={{
            position: "absolute",
            zIndex: 1,
            right: 0,
            top: 0,
          }}
          height={breakpoint > 1 ? "14.375rem" : "6rem"}
          viewBox={breakpoint > 1 ? "0 0 873 230" : "0 0 228 60"}
          fill={theme.colors.petcode.blue[400]}
          xmlns="http://www.w3.org/2000/svg"
        >
          {breakpoint > 1 ? (
            <ellipse cx="578" cy="-160.5" rx="578" ry="390.5" />
          ) : (
            <ellipse cx="151.378" cy="-42.239" rx="150.622" ry="101.761" />
          )}
        </svg>
        <svg
          style={{
            position: "absolute",
            zIndex: 1,
            right: 0,
            top: 0,
          }}
          height={breakpoint > 1 ? "18.625rem" : "7.8rem"}
          viewBox={breakpoint > 1 ? "0 0 984 298" : "0 0 257 78"}
          fill={theme.colors.petcode.blue[400]}
          opacity="0.4"
          xmlns="http://www.w3.org/2000/svg"
        >
          {breakpoint > 1 ? (
            <ellipse cx="598" cy="-116.5" rx="578" ry="390.5" />
          ) : (
            <ellipse cx="156.664" cy="-30.7729" rx="150.622" ry="101.761" />
          )}
        </svg>
        <IntegratedProgressiveImage
          delay={500}
          slug={`how-it-works-splash${breakpoint > 1 ? "" : "-mobile"}.png`}
        >
          {(src: string, loading: boolean) => (
            <Flex
              position="relative"
              flexDirection="column"
              boxSizing="border-box"
              paddingTop="18.625rem"
              backgroundImage={`url(${src})`}
              style={{ filter: loading ? "blur(-5px)" : "" }}
              backgroundSize="cover"
              paddingRight={{ base: 16, md: 40 }}
              paddingLeft={{ base: 16, md: 0 }}
              height="max(min(calc(100vw * 0.5875), 843px), 600px)"
            >
              <Box flexGrow={1} />
              <Stack
                alignSelf={{ base: "center", md: "flex-end" }}
                color="white"
                spacing={5}
                maxWidth={{ sm: "40rem", md: "26rem" }}
              >
                <Heading fontSize={{ base: "3.476rem", md: "2.8125rem" }}>
                  How It Works
                </Heading>
                <Text fontSize={{ base: "2xl", sm: "xl", md: "lg" }}>
                  The PetCode system offers a seamless connection between
                  software and a physical QR code tag, allowing you to easily
                  and effieciently manage your pet.
                </Text>
                <ExclusiveUpdatesInput
                  maxWidth={{ base: "auto", sm: "24.75rem" }}
                />
              </Stack>
              <Box flexGrow={7} />
            </Flex>
          )}
        </IntegratedProgressiveImage>
        <Box position="relative">
          <svg
            style={{ position: "absolute", bottom: 0 }}
            viewBox="0 0 1440 70"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="white"
              d="m943.849,36c-519.408,56.7529 -845.0064,0 -992.3011,-36l79.4616,116l1455.5005,-10l0,-70c-31.01,0 -166.67,-41.08235 -542.661,0z"
            />
          </svg>
        </Box>
        <Stack spacing={12} paddingY={12} alignItems="center">
          <Heading color="petcode.neutral.700" fontSize="5xl" paddingBottom={4}>
            Getting Started
          </Heading>
          <Stack isInline={breakpoint > 1} spacing={12}>
            <HowItWorksStep
              imageSlug="order-petcode-tag-step.svg"
              stepNumber={1}
              name="Sign Up with PetCode"
              description="Set up and create your beta account with PetCode"
              imageHeight="10.25rem"
            />
            <HowItWorksStep
              imageSlug="upload-information-step.svg"
              stepNumber={2}
              name="Upload Information"
              description="Once set up, add your info to the tag to access the full functionality of PetCode"
              imageHeight="10.6875rem"
            />
            <HowItWorksStep
              imageSlug="create-petcode-account-step.svg"
              stepNumber={3}
              headerWidth="15rem"
              name="You’re All Set!"
              description="That’s it! You’re ready to enjoy all of PetCode’s benefits"
              imageHeight="9.6875rem"
            />
          </Stack>
        </Stack>
        <Flex direction="column">
          <Box position="relative" paddingBottom={`${(126 / 1440) * 100}%`}>
            <svg
              style={{ position: "absolute", bottom: 0 }}
              viewBox="0 0 1440 75"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1440 16.1984C1340.95 0.65578 1089.74 -9.82133 865 19.2153C527.214 62.8572 248.968 40.7618 33.3533 23.6399L33.353 23.6399C22.0635 22.7434 10.9457 21.8605 0 21.0014V76.875H1440V16.1984Z"
                fill={theme.colors.petcode.blue[400]}
              />
            </svg>
            <motion.svg
              style={{ position: "absolute", bottom: 0 }}
              viewBox="0 0 1440 126"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              animate={waveBounce}
              transition={transition}
            >
              <path
                opacity="0.4"
                d="M0 125.875H1440V37.0214C1291.46 14.0773 929.032 57.6094 757 83.8455C393.389 97.6584 119.022 39.2724 0 0V125.875Z"
                fill={theme.colors.petcode.blue[400]}
              />
            </motion.svg>
          </Box>
          <Flex
            direction="row"
            justifyContent="center"
            backgroundColor="petcode.blue.400"
          >
            <Flex
              direction={{ base: "column-reverse", lg: "row" }}
              color="white"
              paddingLeft={{ lg: 8, xl: 40 }}
              alignItems={{ base: "center", lg: "stretch" }}
              paddingBottom={12}
              maxWidth="90rem"
              flexGrow={1}
            >
              <Stack
                paddingTop={{ base: 8, lg: 20 }}
                paddingX={{ base: 16, lg: 0 }}
                maxW="40.4375rem"
                spacing={3}
                marginRight={{ lg: 8 }}
              >
                <Heading fontSize="6xl">The QR Tag</Heading>
                <Text
                  fontSize={{ base: "2xl", lg: "xl" }}
                  fontWeight="thin"
                  paddingBottom={4}
                >
                  Got a new phone? Moved recently? PetCode’s durable QR tags
                  allow you to easily update your pet’s contact info with the
                  tap of finger—you’ll never need to buy another pet tag again.
                  Anyone can scan our smart QR tags to see your pet’s info in a
                  flash. Lost your pet? Our tags can reunite you with your furry
                  friend in a flash.
                </Text>
                <BaseButton
                  {...ActionButtonStyle}
                  height={{ base: "3.25rem", lg: "2.25rem" }}
                  paddingX={{ base: 16, lg: 8 }}
                  fontSize={{ base: "xl", lg: "lg" }}
                  alignSelf={{ base: "center", lg: "start" }}
                  variantColor="white"
                  color="petcode.blue.400"
                >
                  <Link to="/getstarted">Get Started</Link>
                </BaseButton>
              </Stack>
              <Box
                position="relative"
                height={{ base: "20.4375rem", lg: "23.4375rem" }}
                width="27.1875rem"
                paddingTop={{ base: 12, lg: 0 }}
              >
                <IntegratedProgressiveImage
                  slug="tag-front.png"
                  alt="Tag front"
                  size="15.625rem"
                />
                <MotionBox
                  ref={ref}
                  animate={controls}
                  position="absolute"
                  top="7.8125rem"
                  left="11.5625rem"
                >
                  <IntegratedProgressiveImage
                    slug="tag-back.png"
                    alt="Tag back"
                    size="15.625rem"
                  />
                  <Hide below="lg">
                    <Flex
                      direction="row"
                      position="absolute"
                      right="10.3125rem"
                      top="10.78125rem"
                      width="25.2395625rem"
                    >
                      <Box flexGrow={1} />
                      <MotionBox
                        alignSelf="flex-end"
                        initial="hidden"
                        variants={{
                          hidden: { opacity: 0 },
                          visible: { opacity: 1 },
                        }}
                        // @ts-ignore
                        transition={{ duration: 2 }}
                      >
                        <Text
                          marginRight={2}
                          transform="translateY(33%)"
                          color="petcode.neutral.300"
                          fontSize="md"
                        >
                          QR code syncs with pet profile
                        </Text>
                      </MotionBox>
                      <svg
                        width="10.6875rem"
                        height="4.5625rem"
                        viewBox="0 0 171 73"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="159"
                          cy="12"
                          r="10.5"
                          stroke={theme.colors.petcode.neutral[400]}
                          stroke-width="3"
                        />
                        <motion.path
                          d="M153 20L105 71H0"
                          stroke={theme.colors.petcode.neutral[400]}
                          strokeWidth="3"
                          initial="hidden"
                          variants={{
                            hidden: { pathLength: 0 },
                            visible: { pathLength: 1 },
                          }}
                          transition={{ duration: 2 }}
                        />
                      </svg>
                    </Flex>
                  </Hide>
                  <Hide below="xl">
                    <Flex
                      direction="row"
                      position="absolute"
                      left="5rem"
                      bottom="14.6875rem"
                      width="17.403125rem"
                    >
                      <svg
                        width="6.125rem"
                        height="5.75rem"
                        viewBox="0 0 98 92"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="12"
                          cy="80"
                          r="10.5"
                          stroke={theme.colors.petcode.neutral[400]}
                          stroke-width="3"
                        />
                        <motion.path
                          d="M18.0001 72L69.0001 2.00001L97.5 2"
                          stroke={theme.colors.petcode.neutral[400]}
                          strokeWidth="3"
                          initial="hidden"
                          variants={{
                            hidden: { pathLength: 0 },
                            visible: { pathLength: 1 },
                          }}
                          transition={{ duration: 2 }}
                        />
                      </svg>
                      <MotionBox
                        alignSelf="start"
                        initial="hidden"
                        variants={{
                          hidden: { opacity: 0 },
                          visible: { opacity: 1 },
                        }}
                        // @ts-ignore
                        transition={{ duration: 2 }}
                      >
                        <Text
                          marginLeft={2}
                          transform="translateY(-50%)"
                          color="petcode.neutral.300"
                          fontSize="md"
                        >
                          Made of durable epoxy
                        </Text>
                      </MotionBox>
                    </Flex>
                  </Hide>
                </MotionBox>
              </Box>
            </Flex>
          </Flex>
          <Box position="relative" paddingBottom={`${(125 / 1440) * 100}%`}>
            <svg
              style={{ position: "absolute", top: 0 }}
              viewBox="0 1 1440 82"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1440 0.875H0V82.9433C95.3623 69.6537 464.317 47.5142 790 36.4594C1064.63 27.1375 1205.09 44.4307 1333.7 60.2636C1369.18 64.6316 1403.76 68.8884 1440 72.4446V0.875Z"
                fill={theme.colors.petcode.blue[400]}
              />
            </svg>
            <motion.svg
              style={{ position: "absolute", top: 0 }}
              viewBox="0 0 1440 125"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              animate={waveBounce}
              transition={transition}
            >
              <path
                opacity="0.4"
                d="M1440 0.875H0V124.684C253.483 87.1289 356.86 73.675 681 54.8868C997.167 36.5609 1303.08 65.1192 1440 92.2188V0.875Z"
                fill={theme.colors.petcode.blue[400]}
              />
            </motion.svg>
          </Box>
        </Flex>
        <Flex direction="row" justifyContent="center">
          <Stack
            direction={breakpoint > 2 ? "row" : "column"}
            alignItems={{ base: "center", lg: "stretch" }}
            paddingRight={{ lg: 24, xl: 40 }}
            paddingTop={24}
            paddingBottom={16}
            justifyContent="center"
            maxWidth="90rem"
            spacing={16}
            flexGrow={1}
          >
            <MotionFlex
              position="relative"
              justifyContent="flex-end"
              alignSelf={{ lg: "flex-end" }}
              flexGrow={{ lg: 1 }}
              animate={displayBounce}
              // @ts-ignore
              transition={transition}
              width={{ base: "27.269rem", md: "49rem", lg: "auto" }}              
            >
              <IntegratedProgressiveImage
                transform="translateY(-20%)"
                rounded="lg"
                right={{ base: "2.5rem", md: "5rem" }}
                position="absolute"
                width={{ base: "24.729rem", md: "44rem" }}
                slug="reminders-web-screen.svg"
                alt="Scan locations web screen"
              />
              <IPhoneX
                height={breakpoint > 1 ? "30rem" : "16.553rem"}
                screenProps={{
                  style: { backgroundColor: theme.colors.petcode.blue[400] },
                }}
              >
                <IntegratedProgressiveImage
                  width="100%"
                  height="100%"
                  slug="reminders-mobile-screen.svg"
                  alt="Pet parks mobile screen"
                />
              </IPhoneX>
            </MotionFlex>
            <Stack
              maxWidth={{ sm: "45rem", lg: "29.125rem" }}
              paddingX={{ base: 16, md: 0 }}
              spacing={4}
              color="petcode.neutral.700"
            >
              <Heading fontSize="6xl">The Pet Portal</Heading>
              <Text
                fontSize={{ base: "4xl", sm: "3xl", md: "2xl" }}
                color="petcode.yellow.400"
              >
                A place your pet’s data can call home
              </Text>
              <Text fontSize={{ base: "2xl", lg: "xl" }} fontWeight="thin">
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
                  Provides fun oppertunities and events
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
                  fontSize={{ base: "xl", lg: "lg" }}
                  paddingX={{ base: 16, lg: 8 }}
                  variantColor="petcode.blue"
                >
                  <Link to="/getstarted">Get Started</Link>
                </BaseButton>
              </Flex>
            </Stack>
          </Stack>
        </Flex>
      </Layout>
    </ThemeProvider>
  );
};

export default HowItWorksPage;
