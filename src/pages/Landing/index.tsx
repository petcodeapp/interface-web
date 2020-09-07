import React from "react";

import { Box, Heading, useTheme } from "@chakra-ui/core";
import { motion } from "framer-motion";

import Image from "../../components/Motion/Image";
import Layout from "../../components/Shared/layout";

import { PetCodeTheme } from "../../theme";

const LandingPage: React.FunctionComponent = () => {
  const theme = useTheme() as PetCodeTheme;

  return (
    <Layout>
      <Box position="relative" textAlign="center" paddingBottom="68%">
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
          style={{ position: "absolute", left: 0, top: "6.14%", zIndex: -1 }}
          viewBox="0 0 1440 915"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M581.187 68.5299C1040 -37 1446.77 -2.47391 1617 54.516L1486.92 765.722C1009.97 894.65 568.628 860.882 224 827.383C-68 799 -134.128 858.01 -208 915L-339 121.783C-207.315 165.693 147.112 168.37 581.187 68.5299Z"
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
            d="M597.025 114.208C1024 -29 1420.13 6.46188 1582 82.5082L1458.31 862.79C1004.76 1034.83 493.69 912.381 160 862.79C-124 820.585 -207.754 744.538 -278 820.585V169.268C-152.778 227.861 174.527 255.915 597.025 114.208Z"
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
      <Image
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
    </Layout>
  );
};

export default LandingPage;
