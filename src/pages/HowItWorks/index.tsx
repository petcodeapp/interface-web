import React, { useEffect } from "react";

import {
  Box,
  Flex,
  Heading,
  Icon,
  Image,
  Stack,
  Text,
  ThemeProvider,
  useTheme,
} from "@chakra-ui/core";
import { motion, useAnimation, Transition } from "framer-motion";
import { IPhoneX } from "react-device-mockups";

import BaseButton from "../../components/Shared/atoms/button";
import MotionImage from "../../components/Motion/Image";
import MotionBox from "../../components/Motion/Box";
import MotionFlex from "../../components/Motion/Flex";
import Layout from "../../components/Shared/layouts/LandingPageLayout";
import HowItWorksStep from "../../components/Shared/molecules/HowItWorksStep";
import ExclusiveUpdatesInput from "../../components/Shared/molecules/ExclusiveUpdatesInput";
import FeaturePoint from "../../components/Shared/molecules/FeaturePoint";

import { useInView } from "react-intersection-observer";

import { PetCodeTheme } from "../../theme";
import { ActionButtonStyle } from "../../components/Shared/ions/button";

import "html5-device-mockups/dist/device-mockups.min.css";

const HowItWorksPage: React.FunctionComponent = () => {
  const theme = useTheme() as PetCodeTheme;
  const [ref, inView] = useInView();
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView]);

  const bounce = { y: [-5, 5] };
  const wave = { scaleY: [1, 1.1] };

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
        paddingTop={0}
      >
        <svg
          style={{
            position: "absolute",
            zIndex: 1,
            right: 0,
            top: 0,
            height: "14.375rem",
          }}
          viewBox="0 0 873 230"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <ellipse
            cx="578"
            cy="-160.5"
            rx="578"
            ry="390.5"
            fill={theme.colors.petcode.blue[400]}
          />
        </svg>
        <svg
          style={{
            position: "absolute",
            zIndex: 1,
            right: 0,
            top: 0,
            height: "18.625rem",
          }}
          viewBox="0 0 984 298"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <ellipse
            opacity="0.4"
            cx="598"
            cy="-116.5"
            rx="578"
            ry="390.5"
            fill={theme.colors.petcode.blue[400]}
          />
        </svg>
        <Flex
          flexDirection="column"
          boxSizing="border-box"
          paddingTop="18.625rem"
          paddingRight={40}
          backgroundImage="url(/media/how-it-works-splash.svg)"
          backgroundSize="cover"
          height="max(calc(100vw * 0.5875), 600px)"
        >
          <Box flexGrow={1} />
          <Stack alignSelf="end" color="white" spacing={8}>
            <Heading fontSize="6xl">How It Works</Heading>
            <ExclusiveUpdatesInput />
          </Stack>
          <Box flexGrow={7} />
        </Flex>
        <Stack spacing={12} paddingY={12} alignItems="center">
          <Heading color="petcode.neutral.700" fontSize="5xl" paddingBottom={4}>
            Get Started
          </Heading>
          <Stack isInline spacing={12}>
            <HowItWorksStep
              image="/media/order-petcode-tag-step.svg"
              stepNumber={1}
              name="Sign Up with PetCode"
              description="Set up and create your beta account with PetCode"
              imageHeight="10.25rem"
            />
            <HowItWorksStep
              image="/media/upload-information-step.svg"
              stepNumber={2}
              name="Upload Information"
              description="Once set up, add your info to the tag to access the full functionality of PetCode"
              imageHeight="10.6875rem"
            />
            <HowItWorksStep
              image="/media/create-petcode-account-step.svg"
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
              viewBox="0 0 1440 76"
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
              animate={wave}
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
              direction="row"
              color="white"
              paddingLeft={40}
              paddingBottom={12}
              maxWidth="90rem"
              flexGrow={1}
            >
              <Stack paddingTop={20} maxW="40.4375rem" spacing={3} marginRight={8}>
                <Heading fontSize="6xl">The QR Tag</Heading>
                <Text fontSize="xl" fontWeight="thin" paddingBottom={4}>
                  Got a new phone? Moved recently? PetCode’s durable QR tags allow
                  you to easily update your pet’s contact info with the tap of
                  finger—you’ll never need to buy another pet tag again. Anyone
                  can scan our smart QR tags to see your pet’s info in a flash.
                  Lost your pet? Our tags can reunite you with your furry friend
                  in a flash.
                </Text>
                <BaseButton
                  {...ActionButtonStyle}
                  paddingX={10}
                  alignSelf="start"
                  variantColor="white"
                  color="petcode.blue.400"
                >
                  Get Started
                </BaseButton>
              </Stack>
              <Box position="relative" height="23.4375rem">
                <Image
                  src="/media/tag-front.png"
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
                  <Image
                    src="/media/tag-back.png"
                    alt="Tag back"
                    size="15.625rem"
                  />
                  <Flex
                    direction="row"
                    position="absolute"
                    right="10.3125rem"
                    top="10.78125rem"
                    width="25.2395625rem"
                  >
                    <Box flexGrow={1} />
                    <MotionBox
                      alignSelf="end"
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
              animate={wave}
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
        <Flex
          direction="row"
          justifyContent="center"
        >
          <Flex
            direction="row"
            paddingRight={40}
            paddingTop={24}
            paddingBottom={16}
            justifyContent="center"
            maxWidth="90rem"
            flexGrow={1}
          >
            <MotionFlex
              flexGrow={1}
              position="relative"
              alignItems="end"
              justifyContent="end"
              overflowY="visible"
              marginRight={16}
              animate={bounce}
              // @ts-ignore
              transition={transition}
            >
              <MotionImage
                top="-8.5%"
                right="6.5rem"
                position="absolute"
                height="33.3125rem"
                src="/media/reminders-web-screen.svg"
                alt="Scan locations web screen"
              />
              <IPhoneX
                height="30rem"
                screenProps={{
                  style: { backgroundColor: theme.colors.petcode.blue[400] },
                }}
              >
                <Image
                  width="100%"
                  height="100%"
                  src="/media/reminders-mobile-screen.svg"
                  alt="Pet parks mobile screen"
                />
              </IPhoneX>
            </MotionFlex>
            <Stack
              maxW="29.125rem"
              spacing={4}
              color="petcode.neutral.700"
            >
              <Heading fontSize="6xl">The Pet Portal</Heading>
              <Text fontSize="2xl" color="petcode.yellow.400">
                A place your pet’s data can call home
              </Text>
              <Text fontSize="xl" fontWeight="thin">
                All your pet’s info—from contact and medical info to name, age,
                and breed—in one place. Your PetPortal syncs with the PetCode QR
                tag and is easily accessible through our app, giving you access to
                the full suite of features whenever, wherever. Get started with
                PetCode today to unlock all the features we have to offer!
              </Text>
              <Stack spacing={3} marginLeft={6} paddingBottom={8}>
                <FeaturePoint>Keeps your pet safe</FeaturePoint>
                <FeaturePoint>Tracks medical records</FeaturePoint>
                <FeaturePoint>Provides fun oppertunities and events</FeaturePoint>
              </Stack>
              <Flex direction="row" justifyContent="space-between">
                <Icon
                  color="petcode.neutral.400"
                  name="arrow-thin"
                  size="40px"
                  alignSelf="start"
                />
                <BaseButton
                  {...ActionButtonStyle}
                  paddingX={10}
                  variantColor="petcode.blue"
                >
                  Get Started
                </BaseButton>
              </Flex>
            </Stack>
          </Flex>
        </Flex>
      </Layout>
    </ThemeProvider>
  );
};

export default HowItWorksPage;
