import React, { useRef } from "react";

import { ThemeProvider, useTheme } from "@chakra-ui/core";
import { useBreakpointValue } from "@chakra-ui/media-query";

import Layout from "../../components/Shared/layouts/Layout";
import IntegratedProgressiveImage from "../../components/Shared/atoms/IntegratedProgressiveImage";

import Hero from "../../components/Landing/Hero";
import FeaturesSection from "../../components/Landing/FeaturesSection";
import SafetySection from "../../components/Landing/SafetySection";
import HealthSection from "../../components/Landing/HealthSection";
import DiscoverySection from "../../components/Landing/DiscoverySection";
import SignUpForUpdatesSection from "../../components/Landing/SignUpForUpdatesSection";

import { PetCodeTheme } from "../../theme";

import "html5-device-mockups/dist/device-mockups.min.css";

const LandingPage: React.FC = () => {
  const theme = useTheme() as PetCodeTheme;
  const breakpoint = useBreakpointValue({
    base: 0,
    sm: 1,
    md: 2,
    lg: 3,
    xl: 4,
  }) as number;

  const safetySectionRef = useRef<HTMLDivElement>();
  const healthSectionRef = useRef<HTMLDivElement>();
  const discoverySectionRef = useRef<HTMLDivElement>();

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
        <Hero />
        <FeaturesSection
          safetySectionRef={safetySectionRef}
          healthSectionRef={healthSectionRef}
          discoverySectionRef={discoverySectionRef}
        />
        <SafetySection ref={safetySectionRef} />
        <HealthSection ref={healthSectionRef} />
        <DiscoverySection ref={discoverySectionRef} />
        <SignUpForUpdatesSection />
      </Layout>
    </ThemeProvider>
  );
};

export default LandingPage;
