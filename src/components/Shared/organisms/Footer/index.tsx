import React from "react";

import { Flex, IconButton, Image, Stack, Text } from "@chakra-ui/core";

const SocialMediaButtonStyle = {
  size: "md",
  isRound: true,
  backgroundColor: "white",
  color: "petcode.blue.400",
};

const Footer = () => {
  return (
    <Flex
      direction="row"
      justifyContent="space-between"
      paddingX={40}
      color="white"
      position="relative"
      minHeight="calc(100vw * 0.21)"
      boxSizing="border-box"
      paddingTop={`${109 / 1440 * 100}%`}
      paddingBottom={16}
    >
      <svg
        style={{ position: "absolute", top: 0, left: 0, zIndex: -1 }}
        viewBox="0 0 1440 309"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M476.657 0.531032C327.339 -1.0681 96.0032 9.19299 -1 14.5234V308.364H1440V26.5169C1153 102.476 663.305 2.52995 476.657 0.531032Z" fill="#B9E4F0"/>
      </svg>
      <svg
        style={{ position: "absolute", top: 0, left: 0, zIndex: -1 }}
        viewBox="0 0 1440 311"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M911 38.3637C479 -31.7662 211.5 10.3637 -0.5 38.3637V311.364H1440V69.3637C1423.33 87.3637 1203 85.7663 911 38.3637Z" fill="#51BCDA"/>
      </svg>
      <Flex direction="column" justifyContent="space-between">
        <Image
          src="/media/petcode-logo-with-qr-code.png"
          alt="Petcode logo with QR code"
          width="10.25rem"
        />
        <Text fontSize="sm">
          © 2020 PetCode
        </Text>
      </Flex>
      <Stack spacing={2}>
        <Text fontSize="sm">Home</Text>
        <Text fontSize="sm">How It Works</Text>
        <Text fontSize="sm">Contact Us</Text>
      </Stack>
      <Stack spacing={2}>
        <Text fontSize="sm">FAQs</Text>
        <Text fontSize="sm">Terms and Conditions</Text>
        <Text fontSize="sm">Privacy Policy</Text>
      </Stack>
      <Stack isInline spacing={8} alignSelf="center">
        <IconButton
          {...SocialMediaButtonStyle}
          aria-label="Linkedin"
          // @ts-ignore
          icon="linkedin"
        />
        <IconButton
          {...SocialMediaButtonStyle}
          aria-label="Instagram"
          // @ts-ignore
          icon="instagram"
        />
        <IconButton
          {...SocialMediaButtonStyle}
          aria-label="Facebook"
          // @ts-ignore
          icon="facebook"
        />
        <IconButton
          {...SocialMediaButtonStyle}
          aria-label="Youtube"
          // @ts-ignore
          icon="youtube"
        />
        <IconButton
          {...SocialMediaButtonStyle}
          aria-label="Pinterest"
          // @ts-ignore
          icon="pinterest"
        />
      </Stack>
    </Flex>
  );
};

export default Footer;
