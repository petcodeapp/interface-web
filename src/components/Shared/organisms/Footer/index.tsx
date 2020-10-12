import React from "react";

import {
  Box,
  Flex,
  FlexProps,
  IconButton,
  Image,
  Stack,
  Text,
  useTheme,
} from "@chakra-ui/core";
import { useBreakpoint } from "@chakra-ui/media-query";
import { motion, Transition } from "framer-motion";
import Link from "../../atoms/link";

import { PetCodeTheme } from "../../../../theme";

const SocialMediaButtonStyle = {
  size: "md",
  isRound: true,
  backgroundColor: "white",
  color: "petcode.blue.400",
};

export type FooterProps = {
  wavesArePadded?: boolean;
} & FlexProps;

const Footer: React.FC<FooterProps> = ({ wavesArePadded = true, ...props }) => {
  const theme = useTheme() as PetCodeTheme;
  const breakpoint = parseInt(useBreakpoint() as string);

  const waveBounce = { y: [0, 6] };

  const transition: Transition = {
    repeat: Infinity,
    repeatType: "reverse",
    duration: 2,
  };

  return (
    <Flex direction="column" {...props}>
      <Box
        position="relative"
        paddingBottom={wavesArePadded ? `${(86 / 1440) * 100}%` : null}
      >
        <motion.svg
          style={{ position: "absolute", bottom: 0 }}
          viewBox="0 0 1440 86"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          animate={waveBounce}
          transition={transition}
        >
          <path
            d="m-1,17.5235c97.0032,-5.33048 328.339,-15.59158 477.657,-13.99244c55.019,0.58922 136.37,9.68914 231.1,20.28554c226.635,25.3514 529.843,59.2685 732.243,5.7003l0,281.8471l-1,0l0,-222.364l-1440,0l0,-71.4765z"
            fill={theme.colors.petcode.blue[400]}
            opacity={0.4}
          />
        </motion.svg>
        <svg
          style={{ position: "absolute", bottom: 0 }}
          viewBox="0 0 1440 86"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="m31.1935,34.2788c207.1715,-27.67497 469.3905,-62.7034 880.8065,4.0849c292,47.4026 512.33,49 529,31l0,242.0003l-1,0l0,-224.364l-1439.5,0l0,-48.6363c10.1012,-1.3341 20.3285,-2.7003 30.6935,-4.0849z"
            fill={theme.colors.petcode.blue[400]}
          />
        </svg>
      </Box>
      <Flex
        direction="row"
        justifyContent="center"
        backgroundColor="petcode.blue.400"
      >
        <Flex
          direction="row"
          justifyContent="space-between"
          paddingX={{ base: 8, md: 32, lg: 40 }}
          color="white"
          paddingTop={6}
          paddingBottom={16}
          fontSize={{ base: "xl", md: "md", lg: "sm" }}
          maxWidth="90rem"
          flexGrow={1}
        >
          <Flex
            direction="column"
            flexGrow={1}
            marginRight={4}
            justifyContent="space-between"
          >
            <Image
              src="/media/petcode-logo-with-qr-code.png"
              alt="Petcode logo with QR code"
              width="10.25rem"
              marginBottom={16}
            />
            <Text>© 2020 PetCode</Text>
          </Flex>
          <Stack
            direction={breakpoint > 1 ? "row" : "column"}
            flexGrow={3}
            justifyContent="space-between"
            spacing={{ base: 4, md: 0 }}
          >
            <Stack spacing={{ base: 4, md: 2 }}>
              <Link to="/">Home</Link>
              <Link to="/howitoworks">How It Works</Link>
              <Link to="/contactus">Contact Us</Link>
            </Stack>
            <Stack spacing={{ base: 4, md: 2 }}>
              <Link to="/faqs">FAQs</Link>
              <Link to="/terms">Terms and Conditions</Link>
              <Link to="/privacypolicy">Privacy Policy</Link>
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
          </Stack>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Footer;
