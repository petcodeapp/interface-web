import React, { useState } from "react";

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
import { IPhoneX } from "react-device-mockups";

import BaseButton, {
  BaseButtonProps,
} from "../../components/Shared/button/BaseButton";
import BaseCheckbox from "../../components/Shared/input/BaseCheckbox";
import Layout from "../../components/Shared/layout";
import Footer from "./Footer";

import { PetCodeTheme } from "../../theme";

import "html5-device-mockups/dist/device-mockups.min.css";

const LongButton: React.FC<BaseButtonProps> = (props) => (
  <BaseButton size="sm" paddingX={10} textTransform="uppercase" {...props} />
);

const Feature: React.FC<StackProps> = (props) => (
  <Stack alignItems="center" {...props}>
    <Box size="90px" backgroundColor="#C4C4C4" rounded="full" />
    <Text fontSize="xl" fontWeight="bold">
      Subtitle
    </Text>
  </Stack>
);

const FeatureDropDown: React.FC<{
  name: string;
  description: string;
  initiallyOpen?: boolean;
}> = ({ name, description, initiallyOpen = false }) => {
  const theme = useTheme() as PetCodeTheme;

  const [open, setOpen] = useState(initiallyOpen);

  return (
    <Stack>
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
          paddingLeft={ open ? 3 : 0 }
          paddingBottom={1}
          onClick={ () => setOpen(!open) }
          transform={ open ? null : "rotate(-90deg)" }
          transition="0.2s all"
        />
      </Stack>
      {open && <Text fontWeight="thin">{description}</Text>}
    </Stack>
  );
};

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
          <Image src="/media/hero-image.png" alt="Hero image" />
          <Stack position="relative" top={-20} color="petcode.neutral.600">
            <Heading fontSize="5xl" fontWeight="bold">
              One Code
            </Heading>
            <Text fontSize="xl">
              An endless suite of features for pet owners.
            </Text>
            <Stack isInline>
              <LongButton variantColor="petcode.yellow">Watch Video</LongButton>
              <LongButton variantColor="petcode.yellow">Get Started</LongButton>
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
              <Heading paddingBottom={4}>
                The Ultimate Pet Management System
              </Heading>
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
        <Stack
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
        <Flex direction="column">
          <Box position="relative" paddingBottom="16.46%">
            <svg
              style={{ position: "absolute", bottom: 0 }}
              viewBox="0 0 1440 158"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1607 36.1487C1436.77 -13.7789 1031.31 -20.7212 572.5 71.7313C138.425 159.199 -217.315 133.549 -349 95.0797L-336.95 159H1578.01L1607 36.1487Z"
                fill={theme.colors.petcode.blue[400]}
              />
            </svg>
            <svg
              style={{ position: "absolute", bottom: 0 }}
              viewBox="0 0 1440 237"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <motion.path
                opacity="0.4"
                d="M1572 51.4354C1388.5 12.0588 1024.5 -16.4413 575.5 99.5591C144.038 211.028 -162.778 196.788 -288 138.195V213H1546.39L1572 51.4354Z"
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
            paddingLeft={32}
            backgroundColor={theme.colors.petcode.blue[400]}
            spacing={10}
          >
            <Stack spacing={4} flexBasis="50%">
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
            <Box height={400} flexGrow={1} position="relative" overflowY="visible">
              <IPhoneX
                height={400}
                wrapperProps={{ style: { position: "absolute", right: 250, zIndex: 1 } }}
                screenProps={{ style: { backgroundColor: theme.colors.petcode.blue[400] } }}
              >
                <Image
                  width="100%"
                  height="100%"
                  src="/media/scan-locations-mobile-screen.svg"
                  alt="Scan locations mobile screen"
                />
              </IPhoneX>
              <Image
                position="absolute"
                top="-25%"
                right={0}
                height={450}
                src="/media/dashboard-web-screen.svg"
                alt="Dashboard web screen"
              />
            </Box>
          </Stack>
          <Box position="relative" paddingBottom="10.55%">
            <svg
              style={{ position: "absolute", top: 0 }}
              viewBox="0 528 1440 185"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 112.893C-160.464 112.73 -282.931 98.1003 -349 80.5344L-218 713C-201.819 703.047 -188.522 691.151 -174.54 678.642C-124.687 634.043 -66.1147 581.642 163 581.642C273.07 581.642 396.65 593.44 529.45 606.117C811.691 633.061 1135.58 663.98 1459.92 594.073L1607 26.8998C1564.43 15.5361 1507.15 6.61907 1438 0.95166V528H0V112.893Z"
                fill={theme.colors.petcode.blue[400]}
              />
            </svg>
            <svg
              style={{ position: "absolute", top: 0 }}
              viewBox="0 743 1440 152"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <motion.path
                opacity="0.4"
                d="M-288 743V759.512C-281.42 752.389 -274.749 746.971 -267.826 743H-288ZM-180.746 743C-169.951 746.018 -158.314 749.623 -145.665 753.541C-81.1042 773.542 9.84814 801.718 150 801.718C249.053 801.718 363.798 815.923 488.855 831.405C776.014 866.955 1117.55 909.235 1448.31 801.718L1457.61 743H-180.746ZM1547 179.139L1572 21.4355C1564.01 19.7202 1555.67 18.0255 1547 16.3626V179.139Z"
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
        <Footer />
      </Layout>
    </ThemeProvider>
  );
};

export default LandingPage;
