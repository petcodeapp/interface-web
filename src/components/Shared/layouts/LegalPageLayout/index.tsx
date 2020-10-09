import React from "react";

import { Image, useTheme } from "@chakra-ui/core";

import Layout from "../LandingPageLayout";

import { PetCodeTheme } from "../../../../theme";

const LegalPageLayout: React.FC = ({ children }) => {
  const theme = useTheme() as PetCodeTheme;

  return (
    <Layout
      headerProps={{
        position: "absolute",
        backgroundColor: "transparent",
      }}
      footerProps={{
        marginTop: 40,
      }}
      paddingTop="11rem"
      minHeight="calc(100% - 11rem)"
    >
      <svg
        style={{ position: "absolute", left: 0, top: 0, height: "11rem" }}
        viewBox="0 0 1440 176"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M705.451 112C354.227 70.9999 162.104 119 -1 176V0H1567C1507.63 36 1320.15 183.757 705.451 112Z"
          fill={theme.colors.petcode.blue[400]}
        />
      </svg>
      <svg
        style={{ position: "absolute", left: 0, top: 0, height: "14.125rem" }}
        viewBox="0 0 1440 226"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M679 106C335 65 145 157 -1 226V0H1440V105C1353 129 1177.11 165.368 679 106Z"
          fill={theme.colors.petcode.blue[400]}
          opacity={0.4}
        />
      </svg>
      {children}
      <Image
        position="absolute"
        bottom={0}
        right={0}
        src="/media/paw-print-background-ltr-up.svg"
      />
    </Layout>
  );
};

export default LegalPageLayout;
