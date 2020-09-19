import React, { useState, useRef } from "react";

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
import { motion, Transition } from "framer-motion";
import { IPhoneX } from "react-device-mockups";

import BaseButton, {
  BaseButtonProps,
} from "../../components/Shared/button/BaseButton";
import BaseCheckbox from "../../components/Shared/input/BaseCheckbox";
import Layout from "../../components/Shared/layout";
import MotionImage from "../../components/Motion/Image";
import MotionBox from "../../components/Motion/Box";
import Footer from "./Footer";

import { PetCodeTheme } from "../../theme";

import "html5-device-mockups/dist/device-mockups.min.css";

const ActionButton: React.FC<BaseButtonProps> = (props) => (
  <BaseButton size="md" paddingX={10} textTransform="uppercase" {...props} />
);

const Feature: React.FC<StackProps> = (props) => (
  <Stack alignItems="center" {...props}>
    <Box size="90px" backgroundColor="#C4C4C4" rounded="full" />
    <Text fontSize="xl" fontWeight="bold">
      Subtitle
    </Text>
  </Stack>
);

const FeatureDropDown: React.FC<StackProps & {
  name: string;
  description: string;
  initiallyOpen?: boolean;
}> = ({ name, description, initiallyOpen = false, ...props }) => {
  const theme = useTheme() as PetCodeTheme;

  const [open, setOpen] = useState(initiallyOpen);

  return (
    <Stack {...props}>
      <Stack isInline alignItems="center">
        <BaseCheckbox
          isChecked
          size={22}
          color={theme.colors.petcode.blue[400]}
        />
        <Text fontSize="xl">{name}</Text>
        <Icon
          name="dropdown-arrow"
          cursor="pointer"
          size="20px"
          paddingTop={3}
          paddingLeft={open ? 3 : 0}
          paddingBottom={1}
          onClick={() => setOpen(!open)}
          transform={open ? null : "rotate(-90deg)"}
          transition="0.2s all"
        />
      </Stack>
      {open && <Text fontWeight="thin">{description}</Text>}
    </Stack>
  );
};

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

  return (
    <ThemeProvider
      theme={{
        ...theme,
        fonts: { ...theme.fonts, heading: "Open Sans", body: "Open Sans" },
      }}
    >
      <Layout
        position="relative"
        headerProps={{
          position: "absolute",
          backgroundColor: "transparent",
          color: "petcode.neutral.700",
        }}
        paddingTop={200}
      >
        <svg
          style={{ position: "absolute", left: 0, top: 0, height: 200 }}
          viewBox="0 0 567 370"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <ellipse cx="-11" cy="-20.5" rx="578" ry="390.5" fill={theme.colors.petcode.blue[400]} />
        </svg>
        <svg
          style={{ position: "absolute", left: 75, top: 0, height: 150 }}
          viewBox="0 0 743 318"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <ellipse opacity="0.4" cx="145" cy="-96.5" rx="578" ry="390.5" fill={theme.colors.petcode.blue[400]} />
        </svg>
        <Stack isInline paddingX={10}>
          <Image src="/media/hero-image.png" alt="Hero image" />
          <Stack position="relative" top={-20} color="petcode.neutral.600">
            <Heading fontSize="5xl" fontWeight="bold">
              One Code
            </Heading>
            <Text fontSize="xl">
              An endless suite of features for pet owners.
            </Text>
            <Stack isInline>
              <ActionButton variantColor="petcode.yellow">Watch Video</ActionButton>
              <ActionButton variantColor="petcode.yellow">Get Started</ActionButton>
            </Stack>
          </Stack>
        </Stack>
        <Flex direction="column">
          <Box position="relative" paddingBottom="10.94%">
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
          <Stack
            isInline
            color="white"
            paddingY={10}
            paddingX={32}
            backgroundColor={theme.colors.petcode.blue[400]}
            spacing={10}
          >
            <Stack flexBasis="50%" spacing={4}>
              <Heading paddingBottom={4}>
                The Ultimate Pet Management System
              </Heading>
              <Stack isInline>
                <ActionButton
                  variantColor="whiteAlpha"
                  variant="outline"
                  color="white"
                  onClick={() =>
                    safetySectionRef.current?.scrollIntoView({
                      behavior: "smooth",
                      block: "center",
                      inline: "center",
                    })
                  }
                >
                  Safety
                </ActionButton>
                <ActionButton
                  variantColor="whiteAlpha"
                  variant="outline"
                  color="white"
                  onClick={() =>
                    healthSectionRef.current?.scrollIntoView({
                      behavior: "smooth",
                      block: "center",
                      inline: "center",
                    })
                  }
                >
                  Health
                </ActionButton>
                <ActionButton
                  variantColor="whiteAlpha"
                  variant="outline"
                  color="white"
                  onClick={() =>
                    discoverySectionRef.current?.scrollIntoView({
                      behavior: "smooth",
                      block: "center",
                      inline: "center",
                    })
                  }
                >
                  Discovery
                </ActionButton>
              </Stack>
              <Text fontWeight="bold" fontSize="xl">
                So Much More Than Just A Tag
              </Text>
              <Text fontWeight="thin">
                The PetCode system provides pet owners with an endless suite of
                feautres. PetCode keeps your pet safe and secure, stays on top
                of your pet’s health, and even allows you to discover events and
                rewards near you, all from our easy-to-use website and app.
                Scroll to learn more about each aspect of the PetCode system.
              </Text>
            </Stack>
            <Stack flexGrow={1} spacing={10} alignItems="end">
              <Stack isInline marginRight={12} spacing={6}>
                <Feature />
                <Feature />
                <Feature />
              </Stack>
              <Stack isInline spacing={6}>
                <Feature />
                <Feature />
                <Feature />
              </Stack>
            </Stack>
          </Stack>
          <Box position="relative" paddingBottom="10.07%">
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
        <Stack
          ref={(ref) => (safetySectionRef.current = ref)}
          isInline
          paddingX={32}
          paddingY={16}
          spacing={10}
          justifyContent="space-between"
        >
          <Image src="/media/safety-image.svg" alt="Safety image" />
          <Stack
            flexBasis="50%"
            color="petcode.neutral.700"
            textAlign="right"
            spacing={6}
          >
            <Heading fontSize="5xl">Safety</Heading>
            <Text fontWeight="thin">
              It’s a scary world out there, one you shouldn’t have to face
              alone. With PetCode, keeping your pet safer is no longer a
              struggle; our QR tags can help you find your pet faster, should
              you lose them. Your safety is our number one priority, which is
              why we never share your data with any third parties. Let us help
              you keep your pet safer and make life a more pleasant walk in the
              park!
            </Text>
            <Stack isInline alignSelf="start">
              <Text>Learn More</Text>
              <Icon size="30px" name="arrow" />
            </Stack>
          </Stack>
        </Stack>
        <Flex direction="column" overflow="hidden">
          <Box position="relative" paddingBottom="17.1%">
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
            paddingTop={10}
            paddingLeft={32}
            backgroundColor={theme.colors.petcode.blue[400]}
            spacing={16}
          >
            <Stack flexGrow={1}>
              <Heading fontSize="5xl" paddingBottom={4}>
                Health
              </Heading>
              <FeatureDropDown
                initiallyOpen
                name="Vaccinations"
                description="Access your pet’s vaccination records and stay up-to-date on upcoming events, anytime, anywhere."
              />
              <FeatureDropDown
                name="Reminders"
                description="Turn on notifications for PetCode to receive reminders for upcoming and overdue wellness checks."
              />
              <FeatureDropDown
                name="Share Records"
                description="Easily share records with your pet’s health team through PetCode."
              />
            </Stack>
            <Box position="relative" flexBasis={550}>
              <MotionBox
                position="relative"
                zIndex={1}
                animate={bounce}
                // @ts-ignore
                transition={transition}
              >
                <IPhoneX
                  height={400}
                  screenProps={{
                    style: { backgroundColor: theme.colors.petcode.blue[400] },
                  }}
                >
                  <Image
                    width="100%"
                    height="100%"
                    src="/media/scan-locations-mobile-screen.svg"
                    alt="Scan locations mobile screen"
                  />
                </IPhoneX>
              </MotionBox>
              <MotionImage
                position="absolute"
                top="-30%"
                animate={bounce}
                // @ts-ignore
                transition={transition}
                left={75}
                height={450}
                src="/media/dashboard-web-screen.svg"
                alt="Dashboard web screen"
              />
            </Box>
          </Stack>
          <Box position="relative" paddingBottom="12.43%">
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
          paddingY={12}
          spacing={16}
          justifyContent="space-between"
        >
          <Box
            height={400}
            flexGrow={1}
            position="relative"
            overflowY="visible"
          >
            <MotionBox
              position="relative"
              zIndex={1}
              animate={bounce}
              // @ts-ignore
              transition={transition}
            >
              <IPhoneX
                height={400}
                wrapperProps={{
                  style: { position: "absolute", left: 500 },
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
              top={-75}
              position="relative"
              animate={bounce}
              // @ts-ignore
              transition={transition}
              height={450}
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
              <ActionButton
                variant="outline"
                borderColor="petcode.neutral.700"
                backgroundColor="transparent"
              >
                Pet Parks
              </ActionButton>
              <ActionButton
                variant="outline"
                borderColor="petcode.neutral.700"
                backgroundColor="transparent"
              >
                Pet Perks
              </ActionButton>
            </Stack>
            <Text fontWeight="thin">
              With Discovery, you explore nearby pet parks, all with the tap of
              a finger. Search for park hours, locations, and pet events near
              you with the Discovery feature. In addition, PetCode users get
              exclusive access to a whole world of incredible PetPerks. Save on
              pet food and toys while also getting premium discounts at pet
              boutiques and groomers with PetCode.
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
          src="/media/paw-print-background-right.svg"
          alt="Paw print background"
        />
        <Image
          position="absolute"
          top="55%"
          left={0}
          zIndex={-1}
          transform="translateY(-50%)"
          src="/media/paw-print-background-left.svg"
          alt="Paw print background"
        />
      </Layout>
    </ThemeProvider>
  );
};

export default LandingPage;
