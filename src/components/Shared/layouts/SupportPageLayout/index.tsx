import React from "react";

import { useTheme } from "@chakra-ui/core";
import { useBreakpoint } from "@chakra-ui/media-query";

import Layout, { LayoutProps } from "../Layout";

import { PetCodeTheme } from "../../../../theme";

const LegalPageLayout: React.FC<LayoutProps> = ({ children, ...props }) => {
  const theme = useTheme() as PetCodeTheme;
  const breakpoint = parseInt(useBreakpoint() as string);

  return (
    <Layout
      headerProps={{
        position: "absolute",
        backgroundColor: "transparent",
      }}
      paddingTop="12.5rem"
      {...props}
    >
      <svg
        style={{ position: "absolute", top: 0 }}
        viewBox={breakpoint > 1 ? "0 0 1440 226" : "0 0 306 148"}
        fill={theme.colors.petcode.blue[400]}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d={
            breakpoint > 1
              ? "M-1 57V226C0.543137 225.271 2.09119 224.539 3.64427 223.805C149.034 155.07 338.636 65.4333 679 106C1177.11 165.368 1353 129 1440 105V57H-1Z"
              : "M-76 37.3271V148C-75.5834 147.523 -75.1655 147.043 -74.7463 146.562C-35.4982 101.55 15.6852 42.8503 107.567 69.4161C242.033 108.294 289.514 84.478 313 68.7612V37.3271H-76Z"
          }
          opacity="0.4"
        />
        <rect
          width={breakpoint > 1 ? "1440" : "306"}
          height={breakpoint > 1 ? "57" : "38"}
          fill="#51BCDA"
        />
        <path
          d={
            breakpoint > 1
              ? "M1440 57H-1V176C162.104 119 354.227 70.9999 705.451 112C1099.81 158.036 1318.33 113.723 1440 66.5334V57Z"
              : "M313 37.3276H-76V115.257C-31.9698 77.9295 19.8939 46.4959 114.707 73.3456C221.166 103.493 280.156 74.4736 313 43.5709V37.3276Z"
          }
        />
      </svg>
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
