import React, { forwardRef } from "react";

import { Flex, Heading, Icon, Stack, Text } from "@chakra-ui/core";
import { useBreakpointValue } from "@chakra-ui/media-query";

import Link from "../Shared/atoms/link";
import BaseButton from "../Shared/atoms/button";
import FeaturePoint from "../Shared/molecules/FeaturePoint";
import IntegratedProgressiveImage from "../Shared/atoms/IntegratedProgressiveImage";

import { ActionButtonStyle } from "../Shared/ions/button";

const SafetySection = forwardRef((_, ref) => {
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
        paddingLeft={{ base: 16, md: 32, lg: 48 }}
        paddingRight={{ base: 16, md: 32 }}
        paddingTop={16}
        paddingBottom={8}
        spacing={{ base: 16, md: 40 }}
      >
        <IntegratedProgressiveImage
          slug="safety-image.svg"
          minWidth={{ md: "19.625rem" }}
          maxWidth={{ base: "11.485rem", md: undefined }}
          alt="Safety image"
        />
        <Stack maxWidth="40.3125rem" color="petcode.neutral.700" spacing={4}>
          <Heading fontSize="5xl" textAlign={{ md: "right" }} paddingBottom={2}>
            Safety
          </Heading>
          <Text fontSize={{ base: "2xl", md: "xl" }} fontWeight="thin">
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
            <Link to="/signup">
              <Stack isInline alignItems="center" alignSelf="start" spacing={4}>
                <Text fontSize="xl">Sign Up Now</Text>
                <Icon size="36px" name="arrow" />
              </Stack>
            </Link>
          ) : (
            <BaseButton
              {...ActionButtonStyle}
              height={{ base: "3.25rem", lg: "2.25rem" }}
              fontSize={{ base: "xl", lg: "lg" }}
              textTransform="none"
              color="white"
              alignSelf="center"
              background="linear-gradient(90deg, #51BCDA 12.06%, #F3AD55 91.96%), #FBC658;"
            >
              <Link to="/getstarted">Get Started</Link>
            </BaseButton>
          )}
        </Stack>
      </Stack>
    </Flex>
  );
});

export default SafetySection;
