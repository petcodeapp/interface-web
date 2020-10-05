import React, { useState, useRef } from "react";

import {
  Box,
  Flex,
  Heading,
  Icon,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Text,
  ThemeProvider,
  useTheme,
} from "@chakra-ui/core";
import { AnimatePresence, motion, Transition } from "framer-motion";
import { IPhoneX } from "react-device-mockups";

import BaseButton from "../../components/Shared/atoms/button";
import Layout from "../../components/Shared/layouts/LandingPageLayout";
import MotionImage from "../../components/Motion/Image";
import MotionBox from "../../components/Motion/Box";
import MotionFlex from "../../components/Motion/Flex";
import Feature from "../../components/Shared/molecules/Feature";
import FeatureDropDown from "../../components/Shared/molecules/FeatureDropdown";
import FeaturePoint from "../../components/Shared/molecules/FeaturePoint";
import ExclusiveUpdatesInput from "../../components/Shared/molecules/ExclusiveUpdatesInput";

import { PetCodeTheme } from "../../theme";
import { ActionButtonStyle } from "../../components/Shared/ions/button";

const LandingPage: React.FunctionComponent = () => {
  const theme = useTheme() as PetCodeTheme;

  const safetySectionRef = useRef<HTMLDivElement>();
  const healthSectionRef = useRef<HTMLDivElement>();
  const discoverySectionRef = useRef<HTMLDivElement>();

  const bounce = { y: [-5, 5] };
  const wave = { scaleY: [1, 1.1] };

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
        paddingTop={0}
      >
        <svg
          style={{
            position: "absolute",
            top: 0,
            zIndex: 1,
          }}
          height="17.8125rem"
          viewBox="0 0 612 285"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <ellipse
            cx="34"
            cy="-105.5"
            rx="578"
            ry="390.5"
            fill={theme.colors.petcode.blue[400]}
          />
        </svg>
        <svg
          style={{
            position: "absolute",
            top: 0,
            zIndex: 1,
          }}
          height="14.5625rem"
          viewBox="0 0 788 233"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <ellipse
            opacity="0.4"
            cx="190"
            cy="-181.5"
            rx="578"
            ry="390.5"
            fill={theme.colors.petcode.blue[400]}
          />
        </svg>
        <Image
          position="absolute"
          top="50%"
          right={0}
          zIndex={-1}
          transform="translateY(-50%)"
          src="/media/paw-print-background-rtl-up.svg"
          alt="Paw print background"
        />
        <Image
          position="absolute"
          top="55%"
          left={0}
          zIndex={-1}
          transform="translateY(-50%)"
          src="/media/paw-print-background-ltr-down.svg"
          alt="Paw print background"
        />
        <Flex
          flexDirection="row"
          boxSizing="border-box"
          paddingTop="20.5625rem"
          paddingRight={12}
          backgroundImage="url(/media/landing-splash.png)"
          backgroundSize="cover"
          minHeight="calc(100vw * 0.72083333333)"
        >
          <MotionFlex
            position="relative"
            top="-1rem"
            height="28.125rem"
            marginRight={20}
            flexGrow={1}
            justifyContent="end"
            alignItems="end"
            animate={bounce}
            // @ts-ignore
            transition={transition}
          >
            <Image
              position="absolute"
              right="7.5rem"
              src="/media/dashboard-web-screen.svg"
              alt="Dashboard web screen"
              height="28.125rem"
            />
            <IPhoneX
              height="22.125rem"
              wrapperProps={{
                style: { position: "absolute", right: "5rem" },
              }}
            >
              <Image
                src="/media/dashboard-mobile-screen.svg"
                alt="Dashboard mobile screen"
                width="100%"
              />
            </IPhoneX>
            <Image
              zIndex={1}
              width="8.625rem"
              src="/media/tag-front.png"
              alt="Petcode tag front"
            />
          </MotionFlex>
          <Stack maxW="28.375rem" color="white" spacing={5}>
            <Box fontWeight="bold">
              <Heading fontSize="2.8125rem">One Code</Heading>
              <Text fontSize="3xl">
                An endless suite of features for pet owners.
              </Text>
            </Box>
            <Text fontSize="lg" maxWidth="25rem">
              PetCode is a new pet management platform that allows pet owners to
              keep track of all aspects of their pet’s life. No matter your
              situation, PetCode can help you and your pet live happier, worry
              free lives.
            </Text>
            <ExclusiveUpdatesInput />
          </Stack>
        </Flex>
        <Flex direction="column">
          <Box position="relative">
            <svg
              style={{ position: "absolute", bottom: 0 }}
              viewBox="0 0 1440 75"
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
              animate={wave}
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
            alignItems="center"
            color="white"
            paddingY={16}
            paddingLeft={40}
            paddingRight={10}
            backgroundColor={theme.colors.petcode.blue[400]}
          >
            <Stack spacing={8} maxWidth="39.625rem" marginRight={16}>
              <Heading fontSize="3.125rem">
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
              <Text fontWeight="thin" fontSize="xl">
                Discover the endless suite of features from PetCode. Keep your
                pet safe, manage their health, and discover nearby pet
                opportunities, all from our easy-to-use app. Managing your pet’s
                life has never been easier. Learn more about us below.
              </Text>
            </Stack>
            <Stack spacing={10}>
              <Stack isInline spacing={10}>
                <Feature
                  image="/media/personal-pet-profile-feature.png"
                  name="Personal Pet Profile"
                />
                <Feature
                  image="/media/scan-locations-feature.png"
                  name="Scan Locations"
                />
                <Feature
                  image="/media/no-monthly-fees-feature.png"
                  name="No Monthly Fees"
                />
              </Stack>
              <Stack isInline marginLeft={16} spacing={10}>
                <Feature
                  image="/media/durable-qr-pet-tags-feature.png"
                  name="Durable QR Pet Tags"
                />
                <Feature
                  image="/media/vaccination-storage-feature.png"
                  name="Vaccination Storage"
                />
                <Feature
                  image="/media/discovery-feature.png"
                  name="Discovery Feature"
                />
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
              animate={wave}
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
        <Flex
          ref={(ref) => (safetySectionRef.current = ref)}
          direction="row"
          alignItems="center"
          paddingLeft={48}
          paddingRight={32}
          paddingTop={20}
          paddingBottom={8}
        >
          <Image
            src="/media/safety-image.svg"
            minWidth="19.625rem"
            alt="Safety image"
            marginRight={40}
          />
          <Stack maxWidth="40.3125rem" color="petcode.neutral.700" spacing={4}>
            <Heading fontSize="5xl" textAlign="right" paddingBottom={2}>
              Safety
            </Heading>
            <Text fontSize="xl" fontWeight="thin">
              It’s a scary world out there, but with PetCode, keeping your pet
              safer is no longer a struggle. Stay safe with PetCode’s products
              and services.
            </Text>
            <Stack spacing={3} marginLeft={6} paddingBottom={4}>
              <FeaturePoint>Up-to-date contact info</FeaturePoint>
              <FeaturePoint>
                Tracks where and when your pet’s tag is scanned
              </FeaturePoint>
              <FeaturePoint>Generates “lost pet” posters</FeaturePoint>
            </Stack>
            <Stack isInline alignItems="center" alignSelf="start" spacing={4}>
              <Text fontSize="xl">Sign Up Now</Text>
              <Icon size="36px" name="arrow" />
            </Stack>
          </Stack>
        </Flex>
        <Flex direction="column" overflow="hidden">
          <Box
            position="relative"
            paddingBottom={`${((197 * 1.1) / 1440) * 100}%`}
          >
            <svg
              style={{ position: "absolute", bottom: 0 }}
              viewBox="0 0 1440 158"
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
              animate={wave}
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
            ref={(ref) => (healthSectionRef.current = ref)}
            color="white"
            paddingTop={16}
            paddingLeft={40}
            backgroundColor={theme.colors.petcode.blue[400]}
          >
            <Stack width="35.875rem" marginRight={8}>
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
              flexGrow={1}
              animate={bounce}
              // @ts-ignore
              transition={transition}
            >
              <Image
                position="absolute"
                top="-25%"
                left="6.5rem"
                height="33.4375rem"
                src="/media/dashboard-web-screen.svg"
                alt="Dashboard web screen"
              />
              <IPhoneX
                height="31.25rem"
                screenProps={{
                  style: {
                    backgroundColor: theme.colors.petcode.blue[400],
                    overflow: "hidden",
                  },
                }}
              >
                <AnimatePresence>
                  <MotionImage
                    position="absolute"
                    top={0}
                    width="100%"
                    key={featureShown}
                    src={
                      featureShown == "vaccinations"
                        ? "/media/vaccinations-mobile-screen.svg"
                        : featureShown == "reminders"
                        ? "/media/reminders-mobile-screen.svg"
                        : "/media/medical-mobile-screen.svg"
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
              animate={wave}
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
        <Flex
          ref={(ref) => (discoverySectionRef.current = ref)}
          direction="row"
          paddingRight={24}
          paddingTop={20}
          paddingBottom={8}
        >
          <MotionFlex
            position="relative"
            justifyContent="end"
            flexGrow={1}
            animate={bounce}
            // @ts-ignore
            transition={transition}
          >
            <Image
              top="-15%"
              position="absolute"
              right="5rem"
              width="45.3125rem"
              src="/media/scan-locations-web-screen.svg"
              alt="Scan locations web screen"
            />
            <IPhoneX
              height="29rem"
              screenProps={{
                style: { backgroundColor: theme.colors.petcode.blue[400] },
              }}
            >
              <Image
                width="100%"
                height="100%"
                src="/media/pet-parks-mobile-screen.svg"
                alt="Pet parks mobile screen"
              />
            </IPhoneX>
          </MotionFlex>
          <Icon
            color="petcode.neutral.400"
            name="arrow-thin"
            size="40px"
            alignSelf="end"
            marginX={8}
          />
          <Stack maxWidth="25.625rem" spacing={4} color="petcode.neutral.700">
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
            <Text fontSize="xl" fontWeight="thin">
              With PetCode’s Discovery feature, you can explore nearby pet
              opportunities, all with the tap of a finger.
            </Text>
            <Stack spacing={3} marginLeft={6}>
              <FeaturePoint>Search for exciting events</FeaturePoint>
              <FeaturePoint>Find open pet parks</FeaturePoint>
              <FeaturePoint>Get premium discounts</FeaturePoint>
            </Stack>
          </Stack>
        </Flex>
        <Flex direction="column" color="white">
          <svg
            viewBox="0 0 1438 82"
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
            paddingTop={2}
            paddingBottom={`calc(${(87 / 1440) * 100}% + 5.3125rem)`}
            paddingX={40}
            backgroundColor="petcode.neutral.200"
            justifyContent="space-between"
          >
            <Stack spacing={4} color="petcode.neutral.700">
              <Text fontSize="3xl">Sign up for updates and more!</Text>
              <Stack spacing={3} marginLeft={6}>
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
            <InputGroup width="24.75rem" alignSelf="center">
              <Input
                type="email"
                rounded="1.25rem"
                height="3.625rem"
                fontWeight="thin"
                variant="filled"
                fontSize="xl"
                fontFamily="body"
                placeholder="Enter Your Email"
                _placeholder={{ color: "petcode.neutral.600" }}
                backgroundColor="white"
              />
              <InputRightElement
                alignSelf="center"
                top="auto"
                right="0.5rem"
                cursor="pointer"
              >
                <svg
                  width="40"
                  height="39"
                  viewBox="0 0 40 39"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M31.1737 18.9891H5.58887M21.224 9.08527L31.1737 18.9891L21.224 9.08527ZM31.1737 18.9891L21.224 28.8929L31.1737 18.9891Z"
                    stroke="#4A5568"
                    stroke-width="2.47595"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </InputRightElement>
            </InputGroup>
          </Flex>
        </Flex>
      </Layout>
    </ThemeProvider>
  );
};

export default LandingPage;
