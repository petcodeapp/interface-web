import React from "react";

import { Box, ThemeProvider, useTheme } from "@chakra-ui/core";
import { useBreakpointValue } from "@chakra-ui/media-query";

import Layout from "../../components/Shared/layouts/Layout";

import Hero from "../../components/HowItWorks/Hero";
import GettingStartedSection from "../../components/HowItWorks/GettingStartedSection";
import QRTagsection from "../../components/HowItWorks/QRTagSection";
import PetPortalSection from "../../components/HowItWorks/PetPortalSection";

import { PetCodeTheme } from "../../theme";

import "html5-device-mockups/dist/device-mockups.min.css";

const HowItWorksPage: React.FunctionComponent = () => {
  const theme = useTheme() as PetCodeTheme;
  const breakpoint = useBreakpointValue({
    base: 0,
    sm: 1,
    md: 2,
    lg: 3,
    xl: 4,
  }) as number;

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
          becomesSticky: true,
        }}
      >
        <svg
          style={{
            position: "absolute",
            zIndex: 1,
            right: 0,
            top: 0,
          }}
          height={breakpoint > 1 ? "14.375rem" : "6rem"}
          viewBox={breakpoint > 1 ? "0 0 873 230" : "0 0 228 60"}
          fill={theme.colors.petcode.blue[400]}
          xmlns="http://www.w3.org/2000/svg"
        >
          {breakpoint > 1 ? (
            <ellipse cx="578" cy="-160.5" rx="578" ry="390.5" />
          ) : (
            <ellipse cx="151.378" cy="-42.239" rx="150.622" ry="101.761" />
          )}
        </svg>
        <svg
          style={{
            position: "absolute",
            zIndex: 1,
            right: 0,
            top: 0,
          }}
          height={breakpoint > 1 ? "18.625rem" : "7.8rem"}
          viewBox={breakpoint > 1 ? "0 0 984 298" : "0 0 257 78"}
          fill={theme.colors.petcode.blue[400]}
          opacity="0.4"
          xmlns="http://www.w3.org/2000/svg"
        >
          {breakpoint > 1 ? (
            <ellipse cx="598" cy="-116.5" rx="578" ry="390.5" />
          ) : (
            <ellipse cx="156.664" cy="-30.7729" rx="150.622" ry="101.761" />
          )}
        </svg>
        <Hero />
        <Box position="relative">
          <svg
            style={{ position: "absolute", bottom: 0 }}
            viewBox="0 0 1440 70"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <path
              fill="white"
              d="m943.849,36c-519.408,56.7529 -845.0064,0 -992.3011,-36l79.4616,116l1455.5005,-10l0,-70c-31.01,0 -166.67,-41.08235 -542.661,0z"
            />
          </svg>
        </Box>
        <GettingStartedSection />
        <QRTagsection />
        <PetPortalSection />
      </Layout>
    </ThemeProvider>
  );
};

export default HowItWorksPage;
