import React, { useState, useRef } from "react";

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
import { AnimatePresence, motion, Transition } from "framer-motion";
import { IPhoneX } from "react-device-mockups";

import BaseButton from "../../components/Shared/atoms/button";
import Layout from "../../components/Shared/layouts";
import MotionImage from "../../components/Motion/Image";
import MotionBox from "../../components/Motion/Box";
import Footer from "../../components/Shared/organisms/Footer";
import Feature from "../../components/Shared/molecules/Feature";
import FeatureDropDown from "../../components/Shared/molecules/FeatureDropdown";

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
        paddingTop={0}
      >
        <svg
          style={{
            position: "absolute",
            top: 0,
            height: "23.125rem",
            zIndex: 1,
          }}
          viewBox="0 0 567 370"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <ellipse
            cx="-11"
            cy="-20.5"
            rx="578"
            ry="390.5"
            fill={theme.colors.petcode.blue[400]}
          />
        </svg>
        <svg
          style={{
            position: "absolute",
            top: 0,
            height: "19.875rem",
            zIndex: 1,
          }}
          viewBox="0 0 743 318"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <ellipse
            opacity="0.4"
            cx="145"
            cy="-96.5"
            rx="578"
            ry="390.5"
            fill={theme.colors.petcode.blue[400]}
          />
        </svg>
        <Flex
          flexDirection="column"
          boxSizing="border-box"
          paddingTop={24}
          paddingRight={40}
          backgroundImage="url(/media/landing-splash.png)"
          backgroundSize="cover"
          minHeight="calc(100vw * 0.70486111111)"
        >
          <Box flexGrow={5} />
          <Stack maxW="24rem" alignSelf="end" color="white" spacing={5}>
            <Heading fontSize="6xl" fontWeight="bold" lineHeight="none">
              One Code
            </Heading>
            <Text fontSize="2xl">
              An endless suite of features for pet owners.
            </Text>
            <Stack isInline spacing={4}>
              <BaseButton {...ActionButtonStyle} variantColor="petcode.yellow">
                Watch Video
              </BaseButton>
              <BaseButton {...ActionButtonStyle} variantColor="petcode.yellow">
                Get Started
              </BaseButton>
            </Stack>
          </Stack>
          <Box flexGrow={11} />
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
            justifyContent="space-between"
            paddingY={16}
            paddingLeft={40}
            paddingRight={20}
            backgroundColor={theme.colors.petcode.blue[400]}
          >
            <Stack spacing={8} maxWidth="39.625rem">
              <Heading fontSize="5xl">
                The Ultimate Pet Management System
              </Heading>
              <Stack isInline>
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
              <Text fontWeight="bold" fontSize="2xl">
                More Than Just A Tag
              </Text>
              <Text fontWeight="thin" fontSize="xl">
                Discover the endless suite of features from PetCode. Keep your
                pet safe, manage their health, and discover nearby pet
                opportunities, all from our easy-to-use app. Managing your pet’s
                life has never been easier. Learn more about us below.
              </Text>
            </Stack>
            <Stack flexGrow={1} spacing={10} alignItems="end">
              <Stack isInline marginRight={16} spacing={10}>
                <Feature />
                <Feature />
                <Feature />
              </Stack>
              <Stack isInline spacing={10}>
                <Feature />
                <Feature />
                <Feature />
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
          justifyContent="space-between"
          paddingLeft={48}
          paddingRight={32}
          paddingTop={20}
          paddingBottom={8}
        >
          <Image
            src="/media/safety-image.svg"
            width="19.625rem"
            alt="Safety image"
          />
          <Stack
            maxWidth="40.3125rem"
            color="petcode.neutral.700"
            textAlign="right"
            spacing={8}
          >
            <Heading fontSize="5xl">Safety</Heading>
            <Text fontSize="xl" fontWeight="thin">
              It’s a scary world out there, one you shouldn’t have to face
              alone. With PetCode, keeping your pet safer is no longer a
              struggle; our QR tags can help you find your pet faster, should
              you lose them. Your safety is our number one priority, which is
              why we never share your data with any third parties. Let us help
              you keep your pet safer and make life a more pleasant walk in the
              park!
            </Text>
            <Stack isInline alignItems="center" alignSelf="start" spacing={4}>
              <Text fontSize="xl">Learn More</Text>
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
          <Stack
            ref={(ref) => (healthSectionRef.current = ref)}
            isInline
            color="white"
            paddingTop={16}
            paddingLeft={40}
            backgroundColor={theme.colors.petcode.blue[400]}
          >
            <Stack width="37.875rem">
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
            <Box position="relative" flexBasis="44.75rem">
              <MotionBox
                position="relative"
                zIndex={1}
                animate={bounce}
                // @ts-ignore
                transition={transition}
              >
                <IPhoneX
                  height={500}
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
                      height="100%"
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
              <MotionImage
                position="absolute"
                top="-25%"
                animate={bounce}
                // @ts-ignore
                transition={transition}
                left="6.5rem"
                height="33.4375rem"
                src="/media/dashboard-web-screen.svg"
                alt="Dashboard web screen"
              />
            </Box>
          </Stack>
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
        <Stack
          ref={(ref) => (discoverySectionRef.current = ref)}
          isInline
          paddingRight={32}
          paddingTop={20}
          paddingBottom={48}
          spacing={16}
          justifyContent="space-between"
        >
          <Box height={400} position="relative" overflowY="visible">
            <MotionBox
              position="relative"
              zIndex={1}
              animate={bounce}
              // @ts-ignore
              transition={transition}
            >
              <IPhoneX
                height={475}
                wrapperProps={{
                  style: { position: "absolute", left: "32.5rem" },
                }}
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
            </MotionBox>
            <MotionImage
              top="-4rem"
              position="relative"
              animate={bounce}
              // @ts-ignore
              transition={transition}
              width="45.3125rem"
              src="/media/scan-locations-web-screen.svg"
              alt="Scan locations web screen"
            />
          </Box>
          <Stack
            alignItems="end"
            textAlign="right"
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
            <Text fontSize="xl" fontWeight="thin">
              With PetCode’s Discovery aspect, you can explore nearby pet
              opportunities, all with the tap of a finger. Search for exciting
              events, find open pet parks, and so much more with Discovery.
              Looking for savings? PetCode users get exclusive access to a whole
              world of incredible PetPerks. Get premium discounts on everything
              from cat food, dog toys, and grooming services at pet boutiques.
            </Text>
            <Icon
              color="petcode.neutral.400"
              name="arrow-thin"
              size="40px"
              alignSelf="start"
            />
          </Stack>
        </Stack>
        <Footer />
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
      </Layout>
    </ThemeProvider>
  );
};

export default LandingPage;
