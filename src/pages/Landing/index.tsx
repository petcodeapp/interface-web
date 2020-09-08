import React from "react";

import { Box, Heading, Image, Stack, ThemeProvider, Text, useTheme } from "@chakra-ui/core";
import { motion } from "framer-motion";

import MotionImage from "../../components/Motion/Image";
import BaseButton from "../../components/Shared/button/BaseButton";
import Layout from "../../components/Shared/layout";
import Footer from "./Footer";

import { PetCodeTheme } from "../../theme";

const LandingPage: React.FunctionComponent = () => {
  const theme = useTheme() as PetCodeTheme;

  return (
    <ThemeProvider theme={{ ...theme, fonts: { ...theme.fonts, body: "Open Sans" } }}>
      <Layout
        headerProps={{ backgroundColor: "transparent", color: "petcode.neutral.700" }}
        paddingTop="200px"
      >
        <svg
          style={{ position: "absolute", left: 0, top: 0, width: 300 }}
          viewBox="0 0 567 370"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <ellipse cx="-11" cy="-20.5" rx="578" ry="390.5" fill="#51BCDA"/>
        </svg>
        <svg
          style={{ position: "absolute", left: 75, top: 0, width: 300, opacity: 0.4 }}
          viewBox="0 0 743 318"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <ellipse cx="145" cy="-96.5" rx="578" ry="390.5" fill="#51BCDA"/>
        </svg>
        <Stack isInline paddingX={10}>
          <Image
            flexBasis="70%"
            alignSelf="start"
            src="/media/hero-image.png"
            alt="Hero image"
          />
          <Stack position="relative" top={-30} color="petcode.neutral.600">
            <Text
              fontSize="5xl"
              fontWeight="bold"
            >
              One Code
            </Text>
            <Text
              fontSize="xl"
            >
              An endless suite of features for pet owners.
            </Text>
            <Stack isInline>
              <BaseButton
                variantColor="petcode.yellow"
                size="md"
                paddingX={10}
                textTransform="uppercase"
              >
                Watch Video
              </BaseButton>
              <BaseButton
                variantColor="petcode.yellow"
                size="md"
                paddingX={10}
                textTransform="uppercase"
              >
                Get Started
              </BaseButton>
            </Stack>
          </Stack>
        </Stack>
        <Box position="relative" textAlign="center" paddingBottom="51.84%">
          <Box
            position="absolute"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
            color="white"
          >
            <Heading>Hello</Heading>
          </Box>
          <svg
            style={{ position: "absolute", left: 0, top: "7.68%", zIndex: -1 }}
            viewBox="0 0 1440 915"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M865 24.142C497 84.9112 199.667 45.9566 -23 24.142V697.278C-7 683.255 419.5 651.578 790 636.78C1152.15 622.316 1281 662.309 1457 681.008V24.142C1373 2.3274 1104.03 -15.3298 865 24.142Z"
              fill={theme.colors.petcode.blue[400]}
            />
          </svg>
          <svg
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              zIndex: -1,
              opacity: 0.4,
            }}
            viewBox="0 0 1440 976"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.path
              d="M757 116.864C357 135.562 65 46.7456 -31 0L-59 790C47.6667 780.651 345 751.669 681 710.533C1017 669.396 1343.67 727.673 1465 761.953V65.4438C1337 24.3077 939.667 82.5838 757 116.864Z"
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
        <MotionImage
          position="relative"
          width="50%"
          zIndex={-2}
          alignSelf="start"
          src="/media/app-designs.png"
          alt="App Designs"
          animate={{ top: [-195, -200] }}
          // @ts-ignore
          transition={{ repeat: Infinity, repeatType: "reverse", duration: 2 }}
        />
        <Footer/>
      </Layout>
    </ThemeProvider>
  );
};

export default LandingPage;
