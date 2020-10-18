import React, { forwardRef } from "react";

import { Flex, Heading, Icon, Stack, Text } from "@chakra-ui/core";
import { useBreakpointValue } from "@chakra-ui/media-query";

import BaseButton from "../Shared/atoms/button";
import FeaturePoint from "../Shared/molecules/FeaturePoint";
import IntegratedProgressiveImage from "../Shared/atoms/IntegratedProgressiveImage";

import { ActionButtonStyle } from "../Shared/ions/button";

type SafetySectionProps = {
  scrollToSignUpSection: () => void;
};

const SafetySection = forwardRef<HTMLDivElement | undefined, SafetySectionProps>(({ scrollToSignUpSection }, ref) => {
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
        direction={breakpoint > 1 ? "row" : "column"}
        ref={ref}
        alignItems="center"
        paddingX={{ base: 16, md: 40, lg: 16 }}
        paddingY={8}
        flexGrow={1}
        width="100%"
        maxWidth="calc(1080px + 6rem)"
        boxSizing="border-box"
        spacing={{ base: 8, md: 16 }}
      >
        <IntegratedProgressiveImage
          slug="safety-image.svg"
          minWidth={{ md: "19.625rem" }}
          alt="Safety image"
          flexGrow={1}
        />
        <Stack
          maxWidth={{ md: "40.3125rem" }}
          color="petcode.neutral.700"
          spacing={4}
        >
          <Heading fontSize="3rem" textAlign={{ md: "right" }} paddingBottom={2}>
            Safety
          </Heading>
          <Text
            fontSize={{ base: "2xl", sm: "xl", md: "lg" }}
            fontWeight="thin"
          >
            It’s a scary world out there, but with PetCode, keeping your pet
            safer is no longer a struggle. Stay safe with PetCode’s products and
            services.
          </Text>
          <Stack spacing={3} marginLeft={{ md: 6 }} paddingBottom={4}>
            <FeaturePoint>Up-to-date contact info</FeaturePoint>
            <FeaturePoint>
              Tracks where and when your pet’s tag is scanned
            </FeaturePoint>
            <FeaturePoint>Generates “lost pet” posters</FeaturePoint>
          </Stack>
          {breakpoint > 1 ? (
            <Stack isInline alignItems="center" alignSelf="start" spacing={4} onClick={scrollToSignUpSection} cursor="pointer">
              <Text fontSize="xl">Sign Up Now</Text>
              <Icon size="36px" name="arrow" />
            </Stack>
          ) : (
            <BaseButton
              {...ActionButtonStyle}
              height={{ base: "3.25rem", lg: "2.25rem" }}
              fontSize={{ base: "xl", lg: "lg" }}
              textTransform="none"
              color="white"
              alignSelf="center"
              background="linear-gradient(90deg, #51BCDA 12.06%, #F3AD55 91.96%), #FBC658;"
              onClick={scrollToSignUpSection}
            >
              Get Started
            </BaseButton>
          )}
        </Stack>
      </Stack>
    </Flex>
  );
});

export default SafetySection;
