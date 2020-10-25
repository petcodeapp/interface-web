import React from "react";

import { Flex, Heading, Stack } from "@chakra-ui/core";
import { useBreakpointValue } from "@chakra-ui/media-query";

import HowItWorksStep from "./HowItWorksStep";

const GettingStartedSection = () => {
  const breakpoint = useBreakpointValue({
    base: 0,
    sm: 1,
    md: 2,
    lg: 3,
    xl: 4,
  }) as number;

  return (
    <Flex direction="row" justifyContent="center">
      <Stack
        spacing={12}
        paddingY={12}
        paddingX={12}
        maxWidth="calc(1080px + 6rem)"
        boxSizing="border-box"
        width="100%"
        flexGrow={1}
      >
        <Heading
          color="petcode.neutral.700"
          fontSize="3rem"
          paddingBottom={4}
          textAlign="center"
        >
          Getting Started
        </Heading>
        <Stack
          isInline={breakpoint > 1}
          spacing={12}
          alignItems={{ base: "center", md: "stretch" }}
          justifyContent="space-between"
        >
          <HowItWorksStep
            imageSlug="order-petcode-tag-step.svg"
            stepNumber={1}
            name="Sign Up with PetCode"
            description="Set up and create your beta account with PetCode"
            imageHeight="10.25rem"
          />
          <HowItWorksStep
            imageSlug="upload-information-step.svg"
            stepNumber={2}
            name="Upload Information"
            description="Once set up, add your info to the tag to access the full functionality of PetCode"
            imageHeight="10.6875rem"
          />
          <HowItWorksStep
            imageSlug="create-petcode-account-step.svg"
            stepNumber={3}
            headerWidth="15rem"
            name="You’re All Set!"
            description="That’s it! You’re ready to enjoy all of PetCode’s benefits"
            imageHeight="9.6875rem"
          />
        </Stack>
      </Stack>
    </Flex>
  );
};

export default GettingStartedSection;
