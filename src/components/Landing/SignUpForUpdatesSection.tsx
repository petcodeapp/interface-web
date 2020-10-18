import React from "react";

import { Flex, Stack, Text, useTheme } from "@chakra-ui/core";
import { useBreakpointValue } from "@chakra-ui/media-query";

import FeaturePoint from "../Shared/molecules/FeaturePoint";
import ExclusiveUpdatesInput from "../Shared/molecules/ExclusiveUpdatesInput";

import { PetCodeTheme } from "../../theme";

const SignUpForUpdatesSection: React.FC = () => {
  const theme = useTheme() as PetCodeTheme;
  const breakpoint = useBreakpointValue({
    base: 0,
    sm: 1,
    md: 2,
    lg: 3,
    xl: 4,
  }) as number;

  return (
    <Flex direction="column" color="white">
      <svg viewBox="0 0 1438 81" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M1441 82V0.424805C1241.31 46.0334 878.931 73.426 587.897 42.617C263.328 8.25806 106.807 23.952 -2 50.3344V82H1441Z"
          fill={theme.colors.petcode.neutral[200]}
        />
      </svg>
      <Flex
        direction="row"
        justifyContent="center"
        backgroundColor="petcode.neutral.200"
      >
        <Stack
          direction={breakpoint > 1 ? "row" : "column"}
          paddingTop={{ base: 4, md: 2 }}
          paddingBottom={`calc(${(87 / 1440) * 100}% + 5.3125rem)`}
          paddingX={12}
          justifyContent="space-between"
          width="100%"
          maxWidth="calc(1080px + 6rem)"
          boxSizing="border-box"
          flexGrow={1}
          spacing={8}
        >
          <Stack spacing={4} color="petcode.neutral.700">
            <Text
              fontSize={{ base: "4xl", md: "3xl" }}
              fontWeight={{ base: "bold", md: "normal" }}
            >
              Sign up for updates and more!
            </Text>
            <Stack spacing={3} marginLeft={{ md: 6 }}>
              <FeaturePoint
                checkBoxProps={{ backgroundColor: "petcode.blue.400" }}
              >
                Exclusive updates
              </FeaturePoint>
              <FeaturePoint
                checkBoxProps={{ backgroundColor: "petcode.blue.400" }}
              >
                Hands-on opportunities with the system
              </FeaturePoint>
              <FeaturePoint
                checkBoxProps={{ backgroundColor: "petcode.blue.400" }}
              >
                Discounts
              </FeaturePoint>
            </Stack>
          </Stack>
          <ExclusiveUpdatesInput
            alignSelf={{ md: "center" }}
            width={{ base: "100%", md: "24.75rem" }}
            maxWidth="auto"
          />
        </Stack>
      </Flex>
    </Flex>
  );
};

export default SignUpForUpdatesSection;
