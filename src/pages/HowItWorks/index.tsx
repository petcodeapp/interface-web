import React, { useEffect } from "react";

import { Box, Flex, Heading, Image, Stack, Text, ThemeProvider, useTheme } from "@chakra-ui/core";
import { motion, useAnimation } from "framer-motion";

import BaseButton, {
  BaseButtonProps,
} from "../../components/Shared/button/BaseButton";
import MotionBox from "../../components/Motion/Box";
import MotionFlex from "../../components/Motion/Flex";
import Layout from "../../components/Shared/layout";

import { useInView } from "react-intersection-observer";

import { PetCodeTheme } from "../../theme";

const ActionButton: React.FC<BaseButtonProps> = (props) => (
  <BaseButton size="md" paddingX={10} textTransform="uppercase" {...props} />
);

const HowItWorksPage: React.FunctionComponent = () => {
  const theme = useTheme() as PetCodeTheme;
  const [ref, inView] = useInView();
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView]);

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
        }}
        paddingTop={200}
      >
        <svg
          style={{ position: "absolute", zIndex: 1, right: 0, top: 0, height: 140 }}
          viewBox="0 0 873 230"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <ellipse cx="578" cy="-160.5" rx="578" ry="390.5" fill={theme.colors.petcode.blue[400]} />
        </svg>
        <svg
          style={{ position: "absolute", zIndex: 1, right: 0, top: 0, height: 200 }}
          viewBox="0 0 984 298"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <ellipse opacity="0.4" cx="598" cy="-116.5" rx="578" ry="390.5" fill={theme.colors.petcode.blue[400]} />
        </svg>
        <Flex
          direction="row"
          backgroundImage="url(/media/how-it-works-splash.png)"
          backgroundSize="cover"
          position="relative"
          top={-200}
          height="calc(100vw * 0.5875)"
        >
          <Box flexBasis="55%" />
          <Stack color="white">
            <Box flexGrow={2} />
            <Heading fontSize="6xl">How It Works</Heading>
            <Stack isInline>
              <ActionButton variantColor="petcode.yellow">Watch Video</ActionButton>
              <ActionButton variantColor="petcode.yellow">Get Started</ActionButton>
            </Stack>
            <Box flexGrow={3} />
          </Stack>
        </Flex>
        {/* <Box position="relative" paddingBottom="47%">
          <MotionFlex
            ref={ref}
            animate={controls}
            direction="row"
            position="absolute"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
            color="white"
          >
            <MotionBox
              alignSelf="end"
              width="300px"
              initial="hidden"
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 },
              }}
              // @ts-ignore
              transition={{ duration: 2 }}
            >
              <Text>
                Each QR code is unique to that pet. I’m not sure what else to
                write here
              </Text>
            </MotionBox>
            <svg
              style={{ marginBottom: 23 }}
              width="155"
              height="55"
              viewBox="0 0 155 55"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <motion.path
                d="M 0,55H 105L 153 2"
                stroke={theme.colors.petcode.neutral[400]}
                strokeWidth={2}
                initial="hidden"
                variants={{
                  hidden: { pathLength: 0 },
                  visible: { pathLength: 1 },
                }}
                transition={{ duration: 2 }}
              />
            </svg>
          </MotionFlex>
          <svg
            style={{ position: "absolute", left: 0, top: "7.68%", zIndex: -1 }}
            viewBox="0 0 1440 597"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M878 20.9999C510 72.9999 212.667 39.6666 -10 20.9999V597C6 585 466 597 818 561C1178.23 524.158 1294 545 1470 561V20.9999C1386 2.33328 1117.03 -12.776 878 20.9999Z"
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
            viewBox="0 0 1440 676"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.path
              d="M770 100C370 116 78 40 -18 0L-46 676C60.6667 668 358 643.2 694 608C1030 572.8 1356.67 622.667 1478 652V56C1350 20.8 952.667 70.6667 770 100Z"
              fill={theme.colors.petcode.blue[400]}
              animate={{ scale: [0.995, 1.015] }}
              transition={{
                repeat: Infinity,
                repeatType: "reverse",
                duration: 2,
              }}
            />
          </svg>
            </Box> */ }
      </Layout>
    </ThemeProvider>
  );
};

export default HowItWorksPage;
