import React from "react";

import { Box, useTheme } from "@chakra-ui/core";
import { useBreakpoint } from "@chakra-ui/media-query";

import Layout, { LayoutProps } from "../LandingPageLayout";

import { PetCodeTheme } from "../../../../theme";

const LegalPageLayout: React.FC<LayoutProps> = ({ children, ...props }) => {
  const theme = useTheme() as PetCodeTheme;
  const breakpoint = parseInt(useBreakpoint() as string);

  return (
    <Layout
      headerProps={{
        position: "absolute",
        backgroundColor: breakpoint > 1 ? "transparent" : "petcode.blue.400",
      }}
      paddingTop={{
        base: `calc(${(52 / 306) * 100}% + 6.25rem)`,
        md: `${(226 / 1440) * 100}%`,
      }}
      {...props}
    >
      <Box position="absolute" top={{ base: "6.25rem", md: 0 }} width="100%">
        <svg
          style={{ position: "absolute", top: 0 }}
          width="100%"
          viewBox={breakpoint > 1 ? "0 0 1440 176" : "0 1 306 77"}
          fill={theme.colors.petcode.blue[400]}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d={
              breakpoint > 1
                ? "M705.451 112C354.227 70.9999 162.104 119 -1 176V0H1567C1507.63 36 1320.15 183.757 705.451 112Z"
                : "M313 0.327637H-76V78.257C-31.9698 40.9295 19.8939 9.49593 114.707 36.3456C221.166 66.493 280.156 37.4736 313 6.57093V0.327637Z"
            }
          />
        </svg>
        <svg
          style={{ position: "absolute", top: 0 }}
          width="100%"
          viewBox={breakpoint > 1 ? "0 0 1440 226" : "0 0 306 111"}
          fill={theme.colors.petcode.blue[400]}
          opacity={0.4}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d={
              breakpoint > 1
                ? "M679 106C335 65 145 157 -1 226V0H1440V105C1353 129 1177.11 165.368 679 106Z"
                : "M-76 0.327148V111C-75.5834 110.523 -75.1655 110.043 -74.7463 109.562C-35.4982 64.5505 15.6852 5.85031 107.567 32.4161C242.033 71.2943 289.514 47.478 313 31.7612V0.327148H-76Z"
            }
          />
        </svg>
      </Box>
      {children}
      {/*<IntegratedProgressiveImage
        position="absolute"
        bottom={0}
        right={0}
        slug="paw-print-background-ltr-up.svg"
      />*/}
    </Layout>
  );
};

export default LegalPageLayout;
