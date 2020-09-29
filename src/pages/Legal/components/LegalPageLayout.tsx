import React from "react";

import { Image, useTheme } from "@chakra-ui/core";

import Layout from "../../../components/Shared/layouts";

import { PetCodeTheme } from "../../../theme";

const LegalPageLayout: React.FC = ({ children }) => {
  const theme = useTheme() as PetCodeTheme;

  return (
    <Layout
      headerProps={{
        position: "absolute",
        backgroundColor: "transparent",
      }}
      paddingTop={100}
      minHeight="calc(100% - 100px)"
    >
      <svg
        style={{ position: "absolute", left: 0, top: 0, height: 210 }}
        viewBox="0 0 1352 268"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M706 112C231.86 40.9299 79.3333 201.333 0 268V0H1352C1292.67 36 1173 182 706 112Z"
          fill={theme.colors.petcode.blue[400]}
        />
      </svg>
      <svg
        style={{ position: "absolute", left: 0, top: 0 }}
        width="100%"
        viewBox="0 0 1440 364"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M679 106C282.983 48.7242 97.0681 260 -1 364V0H1440V63C1305.24 85 1038.54 158 679 106Z"
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
