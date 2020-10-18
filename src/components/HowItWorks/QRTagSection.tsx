import React, { useEffect, useState } from "react";

import { Box, Flex, Heading, Stack, Text, useTheme } from "@chakra-ui/core";
import { useBreakpointValue, Hide } from "@chakra-ui/media-query";
import { motion, useAnimation, Transition } from "framer-motion";
import Observer from "@researchgate/react-intersection-observer";

import Link from "../Shared/atoms/link";
import BaseButton from "../Shared/atoms/button";
import MotionBox from "../Motion/Box";
import IntegratedProgressiveImage from "../Shared/atoms/IntegratedProgressiveImage";

import { PetCodeTheme } from "../../theme";
import { ActionButtonStyle } from "../Shared/ions/button";

const QRTagSection = () => {
  const theme = useTheme() as PetCodeTheme;
  const breakpoint = useBreakpointValue({
    base: 0,
    sm: 1,
    md: 2,
    lg: 3,
    xl: 4,
  }) as number;

  const controls = useAnimation();
  const [isIntersectingQRTag, setIsIntersectingQRTag] = useState(false);

  const waveBounce = { y: [-3, 3] };

  const transition: Transition = {
    repeat: Infinity,
    repeatType: "reverse",
    duration: 2,
  };

  useEffect(() => {
    if (isIntersectingQRTag && breakpoint >= 3) {
      controls.start("visible");
    }
  }, [breakpoint, isIntersectingQRTag]);

  return (
    <Flex direction="column">
      <Box position="relative" paddingBottom={`${(126 / 1440) * 100}%`}>
        <svg
          style={{ position: "absolute", bottom: 0 }}
          viewBox="0 0 1440 75"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1440 16.1984C1340.95 0.65578 1089.74 -9.82133 865 19.2153C527.214 62.8572 248.968 40.7618 33.3533 23.6399L33.353 23.6399C22.0635 22.7434 10.9457 21.8605 0 21.0014V76.875H1440V16.1984Z"
            fill={theme.colors.petcode.blue[400]}
          />
        </svg>
        <motion.svg
          style={{ position: "absolute", bottom: 0 }}
          viewBox="0 0 1440 126"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          animate={waveBounce}
          transition={transition}
        >
          <path
            opacity="0.4"
            d="M0 125.875H1440V37.0214C1291.46 14.0773 929.032 57.6094 757 83.8455C393.389 97.6584 119.022 39.2724 0 0V125.875Z"
            fill={theme.colors.petcode.blue[400]}
          />
        </motion.svg>
      </Box>
      <Flex
        direction="row"
        justifyContent="center"
        backgroundColor="petcode.blue.400"
      >
        <Observer
          onChange={({ isIntersecting }) => {
            setIsIntersectingQRTag(isIntersecting);
            if (isIntersecting) {
              controls.start("visible");
            }
          }}
        >
          <Flex
            direction={{ base: "column-reverse", lg: "row" }}
            color="white"
            paddingX={12}
            alignItems={{ base: "center", lg: "stretch" }}
            paddingBottom={12}
            maxWidth="calc(1080px + 6rem)"
            boxSizing="border-box"
            width="100%"
            flexGrow={1}
          >
            <Stack
              paddingTop={{ base: 8, lg: 20 }}
              paddingX={{ md: 24, lg: 0 }}
              maxW="40.4375rem"
              spacing={3}
              marginRight={{ lg: 8 }}
            >
              <Heading fontSize="3rem">The QR Tag</Heading>
              <Text
                fontSize={{ base: "2xl", sm: "xl", md: "lg" }}
                fontWeight="thin"
                paddingBottom={4}
              >
                Got a new phone? Moved recently? PetCode’s durable QR tags allow
                you to easily update your pet’s contact info with the tap of
                finger—you’ll never need to buy another pet tag again. Anyone
                can scan our smart QR tags to see your pet’s info in a flash.
                Lost your pet? Our tags can reunite you with your furry friend
                in a flash.
              </Text>
              <BaseButton
                {...ActionButtonStyle}
                height={{ base: "3.25rem", lg: "2.25rem" }}
                paddingX={{ base: 16, lg: 8 }}
                fontSize={{ base: "xl", lg: "lg" }}
                alignSelf={{ base: "center", lg: "start" }}
                variantColor="white"
                color="petcode.blue.400"
              >
                <Link to={{
                pathname: "/",
                state: { callToAction: true },
              }}>Get Started</Link>
              </BaseButton>
            </Stack>
            <Box
              position="relative"
              height={{ base: "20.4375rem", lg: "23.4375rem" }}
              width="27.1875rem"
              paddingTop={{ base: 12, lg: 0 }}
            >
              <IntegratedProgressiveImage
                slug="tag-front.png"
                alt="Tag front"
                size="15.625rem"
              />
              <MotionBox
                animate={controls}
                position="absolute"
                top="7.8125rem"
                left="11.5625rem"
              >
                <IntegratedProgressiveImage
                  slug="tag-back.png"
                  alt="Tag back"
                  size="15.625rem"
                />
                <Hide below="lg">
                  <Flex
                    direction="row"
                    position="absolute"
                    right="10.3125rem"
                    top="10.78125rem"
                    width="25.2395625rem"
                  >
                    <Box flexGrow={1} />
                    <MotionBox
                      alignSelf="flex-end"
                      initial="hidden"
                      variants={{
                        hidden: { opacity: 0 },
                        visible: { opacity: 1 },
                      }}
                      // @ts-ignore
                      transition={{ duration: 2 }}
                    >
                      <Text
                        marginRight={2}
                        transform="translateY(33%)"
                        color="petcode.neutral.300"
                        fontSize="md"
                      >
                        QR code syncs with pet profile
                      </Text>
                    </MotionBox>
                    <svg
                      width="10.6875rem"
                      height="4.5625rem"
                      viewBox="0 0 171 73"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="159"
                        cy="12"
                        r="10.5"
                        stroke={theme.colors.petcode.neutral[400]}
                        stroke-width="3"
                      />
                      <motion.path
                        d="M153 20L105 71H0"
                        stroke={theme.colors.petcode.neutral[400]}
                        strokeWidth="3"
                        initial="hidden"
                        variants={{
                          hidden: { pathLength: 0 },
                          visible: { pathLength: 1 },
                        }}
                        transition={{ duration: 2 }}
                      />
                    </svg>
                  </Flex>
                </Hide>
                <Hide below="xl">
                  <Flex
                    direction="row"
                    position="absolute"
                    left="5rem"
                    bottom="14.6875rem"
                    width="17.403125rem"
                  >
                    <svg
                      width="6.125rem"
                      height="5.75rem"
                      viewBox="0 0 98 92"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="12"
                        cy="80"
                        r="10.5"
                        stroke={theme.colors.petcode.neutral[400]}
                        stroke-width="3"
                      />
                      <motion.path
                        d="M18.0001 72L69.0001 2.00001L97.5 2"
                        stroke={theme.colors.petcode.neutral[400]}
                        strokeWidth="3"
                        initial="hidden"
                        variants={{
                          hidden: { pathLength: 0 },
                          visible: { pathLength: 1 },
                        }}
                        transition={{ duration: 2 }}
                      />
                    </svg>
                    <MotionBox
                      alignSelf="start"
                      initial="hidden"
                      variants={{
                        hidden: { opacity: 0 },
                        visible: { opacity: 1 },
                      }}
                      // @ts-ignore
                      transition={{ duration: 2 }}
                    >
                      <Text
                        marginLeft={2}
                        transform="translateY(-50%)"
                        color="petcode.neutral.300"
                        fontSize="md"
                      >
                        Made of durable epoxy
                      </Text>
                    </MotionBox>
                  </Flex>
                </Hide>
              </MotionBox>
            </Box>
          </Flex>
        </Observer>
      </Flex>
      <Box position="relative" paddingBottom={`${(125 / 1440) * 100}%`}>
        <svg
          style={{ position: "absolute", top: 0 }}
          viewBox="0 1 1440 82"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1440 0.875H0V82.9433C95.3623 69.6537 464.317 47.5142 790 36.4594C1064.63 27.1375 1205.09 44.4307 1333.7 60.2636C1369.18 64.6316 1403.76 68.8884 1440 72.4446V0.875Z"
            fill={theme.colors.petcode.blue[400]}
          />
        </svg>
        <motion.svg
          style={{ position: "absolute", top: 0 }}
          viewBox="0 0 1440 125"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          animate={waveBounce}
          transition={transition}
        >
          <path
            opacity="0.4"
            d="M1440 0.875H0V124.684C253.483 87.1289 356.86 73.675 681 54.8868C997.167 36.5609 1303.08 65.1192 1440 92.2188V0.875Z"
            fill={theme.colors.petcode.blue[400]}
          />
        </motion.svg>
      </Box>
    </Flex>
  );
};

export default QRTagSection;
