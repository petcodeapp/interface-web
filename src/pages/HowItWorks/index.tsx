import React from "react";

import { Box, Flex, Text, useTheme } from "@chakra-ui/core";
import { motion } from "framer-motion";

import MotionBox from "../../components/Motion/Box";
import Layout from "../../components/Shared/layout";

import { PetCodeTheme } from "../../theme";

const HowItWorksPage: React.FunctionComponent = () => {
  const theme = useTheme() as PetCodeTheme;

  return (
    <Layout>
      <Box position="relative" paddingBottom="47%">
        <Flex
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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            // @ts-ignore
            transition={{ duration: 2 }}
          >
            <Text>
              Each QR code is unique to that pet. I’m not sure what else to write here 
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
              d="M 0,55
              H 105
              L 153 2"
              stroke={theme.colors.petcode.neutral[400]}
              strokeWidth={2}
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2 }}
            />
          </svg>
        </Flex>
        <svg
          style={{ position: "absolute", left: 0, top: '7.68%', zIndex: -1 }}
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
          style={{ position: "absolute", left: 0, top: 0, zIndex: -1, opacity: 0.4 }}
          viewBox="0 0 1440 676"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            d="M770 100C370 116 78 40 -18 0L-46 676C60.6667 668 358 643.2 694 608C1030 572.8 1356.67 622.667 1478 652V56C1350 20.8 952.667 70.6667 770 100Z"
            fill={theme.colors.petcode.blue[400]}
            animate={{ scale: [0.995, 1.015] }}
            transition={{ repeat: Infinity, repeatType: "reverse", duration: 2 }}
          />
        </svg>
      </Box>
    </Layout>
  );
};

export default HowItWorksPage;