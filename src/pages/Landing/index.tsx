import React, { useState, useRef } from "react";

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
import { useBreakpoint, Hide } from "@chakra-ui/media-query";
import { AnimatePresence, motion, Transition } from "framer-motion";
import { IPhoneX } from "react-device-mockups";

import Link from "../../components/Shared/atoms/link";
import BaseButton from "../../components/Shared/atoms/button";
import Layout from "../../components/Shared/layouts/Layout";
import MotionBox from "../../components/Motion/Box";
import MotionFlex from "../../components/Motion/Flex";
import Feature from "../../components/Shared/molecules/Feature";
import FeatureDropDown from "../../components/Shared/molecules/FeatureDropdown";
import FeaturePoint from "../../components/Shared/molecules/FeaturePoint";
import ExclusiveUpdatesInput from "../../components/Shared/molecules/ExclusiveUpdatesInput";
import IntegratedProgressiveImage from "../../components/Shared/atoms/IntegratedProgressiveImage";

import { PetCodeTheme } from "../../theme";
import { ActionButtonStyle } from "../../components/Shared/ions/button";

const LandingPage: React.FC = () => {
  const theme = useTheme() as PetCodeTheme;
  const breakpoint = parseInt(useBreakpoint() as string);

  const safetySectionRef = useRef<HTMLDivElement>();
  const healthSectionRef = useRef<HTMLDivElement>();
  const discoverySectionRef = useRef<HTMLDivElement>();

  const waveBounce = { y: [-3, 3] };
  const displayBounce = { y: [-5, 5] };

  const transition: Transition = {
    repeat: Infinity,
    repeatType: "reverse",
    duration: 2,
  };

  const [featureShown, setFeatureShown] = useState("vaccinations");

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
        footerProps={{
          wavesArePadded: false,
        }}
      >
        <svg
          style={{
            position: "absolute",
            top: 0,
          }}
          height={breakpoint > 1 ? "17.8125rem" : "26rem"}
          viewBox={breakpoint > 1 ? "0 0 612 285" : "0 0 203 230"}
          xmlns="http://www.w3.org/2000/svg"
          fill={theme.colors.petcode.blue[400]}
        >
          {breakpoint > 1 ? (
            <ellipse cx="34" cy="-105.5" rx="578" ry="390.5" />
          ) : (
            <path d="M-1 229.817V0H202.415C187.138 111.352 105.681 201.609 -1 229.817Z" />
          )}
        </svg>
        <svg
          style={{
            position: "absolute",
            top: 0,
          }}
          height={breakpoint > 1 ? "14.5625rem" : "26rem"}
          viewBox={breakpoint > 1 ? "0 0 788 233" : "0 0 262 230"}
          fill={theme.colors.petcode.blue[400]}
          opacity="0.4"
          xmlns="http://www.w3.org/2000/svg"
        >
          {breakpoint > 1 ? (
            <ellipse cx="190" cy="-181.5" rx="578" ry="390.5" />
          ) : (
            <path d="M-1 188V0H261.392C224.323 109.324 120.85 188 -1 188Z" />
          )}
        </svg>
        <IntegratedProgressiveImage
          position="absolute"
          top="50%"
          width="50vw"
          right={0}
          zIndex={-1}
          transform="translateY(-50%)"
          slug="paw-print-background-rtl-up.svg"
          alt="Paw print background"
        />
        <IntegratedProgressiveImage
          position="absolute"
          top="55%"
          width="50vw"
          left={0}
          zIndex={-1}
          transform="translateY(-50%)"
          slug="paw-print-background-ltr-down.svg"
          alt="Paw print background"
        />
        <IntegratedProgressiveImage delay={500} slug="landing-splash.png">
          {(src: string, loading: boolean) => (
            <Flex
              direction="row"
              justifyContent="center"
              backgroundImage={`url(${src})`}
              style={{ filter: loading ? "blur(5px)" : "" }}
              backgroundSize="cover"
              height={{
                md: "max(min(calc(100vw * 0.72083333333), 1035px), 800px)",
              }}
              paddingBottom={{
                base: `calc(${(126 / 1440) * 100}% + 3rem)`,
                md: 0,
              }}
            >
              <Flex
                direction={{ base: "column", md: "row" }}
                alignItems={{ base: "center", md: "stretch" }}
                maxWidth="90rem"
                boxSizing="border-box"
                paddingTop={{ base: "12rem", md: "20.5625rem" }}
                paddingRight={{ md: 12 }}
                flexGrow={1}
              >
                <MotionFlex
                  position="relative"
                  top="-1rem"
                  height={{ base: "19.464rem", sm: "28.125rem" }}
                  width={{ base: "29.354rem", sm: "42.9375rem" }}
                  marginRight={{ md: 32 }}
                  flexGrow={{ md: 1 }}
                  alignItems="flex-end"
                  justifyContent="flex-end"
                  animate={displayBounce}
                  // @ts-ignore
                  transition={transition}
                >
                  <IntegratedProgressiveImage
                    position="absolute"
                    right={{ base: "5.5rem", sm: "8.5rem" }}
                    slug="dashboard-web-screen.svg"
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
                      slug="dashboard-mobile-screen.svg"
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
                  maxWidth={{ sm: "40rem", md: "28.375rem" }}
                  marginTop={{ base: 8, md: 0 }}
                  paddingX={{ base: 16, md: 0 }}
                  color="white"
                  spacing={5}
                >
                  <Box fontWeight="bold">
                    <Heading fontSize="2.8125rem">One Code.</Heading>
                    <Text fontSize="3xl">
                      An endless suite of features for pet owners.
                    </Text>
                  </Box>
                  <Text
                    fontSize={{ base: "2xl", sm: "xl", md: "lg" }}
                    maxWidth={{ base: "auto", md: "25rem" }}
                  >
                    PetCode is a new pet management platform that allows pet
                    owners to keep track of all aspects of their pet’s life. No
                    matter your situation, PetCode can help you and your pet
                    live happier, worry free lives.
                  </Text>
                  <ExclusiveUpdatesInput
                    maxWidth={{ base: "auto", md: "24.75rem" }}
                  />
                </Stack>
              </Flex>
            </Flex>
          )}
        </IntegratedProgressiveImage>
        <Flex direction="column">
          <Box position="relative">
            <svg
              style={{ position: "absolute", bottom: 0 }}
              viewBox="0 0 1440 74"
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
              viewBox="0 0 1440 126"
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
              paddingLeft={{ base: 12, xl: 40 }}
              paddingRight={12}
              spacing={16}
            >
              <Stack spacing={8} maxWidth="39.625rem">
                <Heading fontSize={{ base: "2.8rem", md: "3.125rem" }}>
                  The Ultimate Pet Management System
                </Heading>
                <Stack isInline spacing={4}>
                  <BaseButton
                    {...ActionButtonStyle}
                    variantColor="whiteAlpha"
                    variant="outline"
                    color="white"
                    fontWeight="thin"
                    onClick={() =>
                      safetySectionRef.current?.scrollIntoView({
                        behavior: "smooth",
                        block: "center",
                        inline: "center",
                      })
                    }
                  >
                    Safety
                  </BaseButton>
                  <BaseButton
                    {...ActionButtonStyle}
                    variantColor="whiteAlpha"
                    variant="outline"
                    color="white"
                    fontWeight="thin"
                    onClick={() =>
                      healthSectionRef.current?.scrollIntoView({
                        behavior: "smooth",
                        block: "center",
                        inline: "center",
                      })
                    }
                  >
                    Health
                  </BaseButton>
                  <BaseButton
                    {...ActionButtonStyle}
                    variantColor="whiteAlpha"
                    variant="outline"
                    color="white"
                    fontWeight="thin"
                    onClick={() =>
                      discoverySectionRef.current?.scrollIntoView({
                        behavior: "smooth",
                        block: "center",
                        inline: "center",
                      })
                    }
                  >
                    Discovery
                  </BaseButton>
                </Stack>
                <Text fontWeight="thin" fontSize={{ base: "2xl", md: "xl" }}>
                  Discover the endless suite of features from PetCode. Keep your
                  pet safe, manage their health, and discover nearby pet
                  opportunities, all from our easy-to-use app. Managing your
                  pet’s life has never been easier. Learn more about us below.
                </Text>
              </Stack>
              <Stack spacing={10}>
                <Stack isInline spacing={10}>
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
                <Stack isInline marginLeft={{ xl: 16 }} spacing={10}>
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
              viewBox="0 0 1440 83"
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
              viewBox="0 0 1440 116"
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
        <Flex direction="row" justifyContent="center">
          <Stack
            direction={breakpoint > 1 ? "row" : "column"}
            ref={(ref) => (safetySectionRef.current = ref)}
            alignItems="center"
            paddingLeft={{ base: 16, md: 32, lg: 48 }}
            paddingRight={{ base: 16, md: 32 }}
            paddingTop={16}
            paddingBottom={8}
            spacing={{ base: 16, md: 40 }}
          >
            <IntegratedProgressiveImage
              slug="safety-image.svg"
              minWidth={{ md: "19.625rem" }}
              maxWidth={{ base: "11.485rem", md: undefined }}
              alt="Safety image"
            />
            <Stack
              maxWidth="40.3125rem"
              color="petcode.neutral.700"
              spacing={4}
            >
              <Heading
                fontSize="5xl"
                textAlign={{ md: "right" }}
                paddingBottom={2}
              >
                Safety
              </Heading>
              <Text fontSize={{ base: "2xl", md: "xl" }} fontWeight="thin">
                It’s a scary world out there, but with PetCode, keeping your pet
                safer is no longer a struggle. Stay safe with PetCode’s products
                and services.
              </Text>
              <Stack spacing={3} marginLeft={{ md: 6 }} paddingBottom={4}>
                <FeaturePoint>Up-to-date contact info</FeaturePoint>
                <FeaturePoint>
                  Tracks where and when your pet’s tag is scanned
                </FeaturePoint>
                <FeaturePoint>Generates “lost pet” posters</FeaturePoint>
              </Stack>
              {breakpoint > 1 ? (
                <Link to="/signup">
                  <Stack
                    isInline
                    alignItems="center"
                    alignSelf="start"
                    spacing={4}
                  >
                    <Text fontSize="xl">Sign Up Now</Text>
                    <Icon size="36px" name="arrow" />
                  </Stack>
                </Link>
              ) : (
                <BaseButton
                  {...ActionButtonStyle}
                  height={{ base: "3.25rem", lg: "2.25rem" }}
                  fontSize={{ base: "xl", lg: "lg" }}
                  textTransform="none"
                  color="white"
                  alignSelf="center"
                  background="linear-gradient(90deg, #51BCDA 12.06%, #F3AD55 91.96%), #FBC658;"
                >
                  <Link to="/getstarted">Get Started</Link>
                </BaseButton>
              )}
            </Stack>
          </Stack>
        </Flex>
        <Flex direction="column" overflow="hidden">
          <Box
            position="relative"
            paddingBottom={`${((197 * 1.2) / 1440) * 100}%`}
          >
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
              alignItems={{ base: "center", md: "start", lg: "stretch" }}
              ref={(ref) => (healthSectionRef.current = ref)}
              color="white"
              paddingTop={{ base: 16, md: 24, lg: 16 }}
              paddingBottom={{ base: 16, lg: 0 }}
              paddingLeft={{ lg: 40 }}
              maxWidth="90rem"
              flexGrow={1}
              spacing={16}
            >
              <Stack
                paddingX={{ base: 16, md: 40, lg: 0 }}
                maxWidth={{ sm: "45rem", lg: "35.875rem" }}
              >
                <Heading fontSize="5xl" paddingBottom={4}>
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
                flexGrow={{ lg: 1 }}
                animate={displayBounce}
                // @ts-ignore
                transition={transition}
                alignSelf={{ md: "center", lg: "auto" }}
                width={{ base: "27.729rem", md: "51.1875rem", lg: "auto" }}
              >
                <IntegratedProgressiveImage
                  position="absolute"
                  top="-25%"
                  left={{ base: "3rem", md: "6.5rem" }}
                  width={{ base: "24.729rem", md: "44.6875rem" }}
                  slug="dashboard-web-screen.svg"
                  alt="Dashboard web screen"
                />
                <IPhoneX
                  height={breakpoint > 1 ? "31.25rem" : "17.607rem"}
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
                          ? "vaccinations-mobile-screen.svg"
                          : featureShown == "reminders"
                          ? "reminders-mobile-screen.svg"
                          : "medical-mobile-screen.svg"
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
          <Box
            position="relative"
            paddingBottom={`${((128 * 1.1) / 1440) * 100}%`}
          >
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
        <Flex direction="row" justifyContent="center">
          <Flex
            ref={(ref) => (discoverySectionRef.current = ref)}
            direction={{ base: "column", lg: "row" }}
            alignItems={{ base: "center", md: "start", lg: "stretch" }}
            paddingRight={{ lg: 24 }}
            paddingTop={20}
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
                top="-15%"
                position="absolute"
                right={{ base: "2.5rem", md: "5rem" }}
                width={{ base: "25.285rem", md: "45.3125rem" }}
                slug="scan-locations-web-screen.svg"
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
                  slug="pet-parks-mobile-screen.svg"
                  alt="Pet parks mobile screen"
                />
              </IPhoneX>
            </MotionFlex>
            <Hide below="lg">
              <Link to="#">
                <Icon
                  color="petcode.neutral.400"
                  name="arrow-thin"
                  size="40px"
                  alignSelf="flex-end"
                  marginX={8}
                />
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
        <Flex direction="column" color="white">
          <svg
            viewBox="0 0 1438 81"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1441 82V0.424805C1241.31 46.0334 878.931 73.426 587.897 42.617C263.328 8.25806 106.807 23.952 -2 50.3344V82H1441Z"
              fill={theme.colors.petcode.neutral[200]}
            />
          </svg>
          <Flex
            direction="row"
            justifyContent="center"
            backgroundColor="petcode.neutral.200"
          >
            <Stack
              direction={breakpoint > 1 ? "row" : "column"}
              paddingTop={{ base: 4, md: 2 }}
              paddingBottom={`calc(${(87 / 1440) * 100}% + 5.3125rem)`}
              paddingX={{ base: 20, md: 32, lg: 40 }}
              justifyContent="space-between"
              maxWidth="90rem"
              flexGrow={1}
              spacing={8}
            >
              <Stack spacing={4} color="petcode.neutral.700">
                <Text
                  fontSize={{ base: "4xl", md: "3xl" }}
                  fontWeight={{ base: "bold", md: "normal" }}
                >
                  Sign up for updates and more!
                </Text>
                <Stack spacing={3} marginLeft={{ md: 6 }}>
                  <FeaturePoint
                    checkBoxProps={{ backgroundColor: "petcode.blue.400" }}
                  >
                    Exclusive updates
                  </FeaturePoint>
                  <FeaturePoint
                    checkBoxProps={{ backgroundColor: "petcode.blue.400" }}
                  >
                    Hands-on opportunities with the system
                  </FeaturePoint>
                  <FeaturePoint
                    checkBoxProps={{ backgroundColor: "petcode.blue.400" }}
                  >
                    Discounts
                  </FeaturePoint>
                </Stack>
              </Stack>
              <ExclusiveUpdatesInput
                alignSelf={{ md: "center" }}
                width={{ base: "100%", md: "24.75rem" }}
                maxWidth="auto"
              />
            </Stack>
          </Flex>
        </Flex>
      </Layout>
    </ThemeProvider>
  );
};

export default LandingPage;
