import React, { useEffect, useRef } from "react";

import { Box, StackProps, useTheme } from "@chakra-ui/core";
import BaseButton, { BaseButtonProps } from "../../atoms/button";
import Link from "../../atoms/link";
import { AnimatePresence, motion, MotionProps, useCycle } from "framer-motion";
import { useBreakpoint, Show, Hide } from "@chakra-ui/media-query";
import { Flex, Stack } from "../../../Motion";
import SocialMediaButtons from "../../molecules/SocialMediaButtons";
import IntegratedProgressiveImage from "../../atoms/IntegratedProgressiveImage";
import { useHistory } from "react-router-dom";

import { AuthContext } from "../../../../views/Auth/index";
import { useObserver } from "mobx-react-lite";
import { disableBodyScroll, clearAllBodyScrollLocks } from "body-scroll-lock";

import { PetCodeTheme } from "../../../../theme";
import { ActionButtonStyle } from "../../ions/button";

const HeaderButtonStyle = {
  ...ActionButtonStyle,
  variantColor: "petcode.yellow",
  fontSize: { base: "xl", sm: "lg" },
  textTransform: "none",
  letterSpacing: "auto",
  height: { base: "3rem", sm: "2.75rem" },
  paddingX: { base: 12, sm: 8 },
  boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.2);",
} as BaseButtonProps;

export type HeaderProps = StackProps & MotionProps;

const MobileMenu: React.FC = () => {
  const theme = useTheme() as PetCodeTheme;

  const history = useHistory();

  const auth = React.useContext(AuthContext);

  const menuRef = useRef<HTMLElement>();

  useEffect(() => {
    setTimeout(() => disableBodyScroll(menuRef.current as HTMLDivElement), 100);
    return () => clearAllBodyScrollLocks();
  });

  return useObserver(() => (
    <IntegratedProgressiveImage slug="mobile-menu-paw-print-background.svg">
      {(src: string) => (
        <Flex
          direction="column"
          animate={{
            clipPath: `circle(${2200}px at right top)`,
            transition: {
              type: "spring",
              stiffness: 20,
              restDelta: 2,
            },
          }}
          exit={{
            clipPath: "circle(0px at right top)",
            transition: {
              type: "spring",
              stiffness: 400,
              damping: 40,
            },
          }}
          // @ts-ignore
          ref={(ref) => (menuRef.current = ref)}
          position="absolute"
          top={0}
          left={0}
          width="100%"
          height="100vh"
          backgroundColor="white"
          backgroundImage={`url(${src})`}
          backgroundSize="cover"
        >
          <Box backgroundColor="petcode.blue.400" paddingX={6} paddingTop={6}>
            <Link to="/" paddingBottom={8}>
              <IntegratedProgressiveImage
                slug="petcode-logo-with-qr-code.png"
                height="4.75rem"
              />
            </Link>
          </Box>
          <Box position="relative" paddingBottom={`${(50 / 306) * 100}%`}>
            <svg
              style={{ position: "absolute", top: 0 }}
              viewBox="0 10 306 101"
              xmlns="http://www.w3.org/2000/svg"
              fill={theme.colors.petcode.blue[400]}
              opacity="0.4"
            >
              <path d="M-76 0.327148V111C-75.5834 110.523 -75.1655 110.043 -74.7463 109.562C-35.4982 64.5505 15.6852 5.85031 107.567 32.4161C242.033 71.2943 289.514 47.478 313 31.7612V0.327148H-76Z" />
            </svg>
            <svg
              style={{ position: "absolute", top: 0 }}
              viewBox="0 11 306 67"
              xmlns="http://www.w3.org/2000/svg"
              fill={theme.colors.petcode.blue[400]}
            >
              <path d="M313 0.327637H-76V78.257C-31.9698 40.9295 19.8939 9.49593 114.707 36.3456C221.166 66.493 280.156 37.4736 313 6.57093V0.327637Z" />
            </svg>
          </Box>
          <Stack
            spacing={12}
            color="petcode.neutral.700"
            fontSize="2.5rem"
            alignItems="start"
            paddingX={16}
            paddingBottom={8}
            boxSizing="border-box"
            flexGrow={1}
            zIndex={1}
          >
            <Link to="/">Home</Link>
            <Link to="/howitworks">How It Works</Link>
            {!auth.isLoggedIn ? (
              <BaseButton
                {...HeaderButtonStyle}
                background="linear-gradient(90deg, #51BCDA 12.06%, #F3AD55 91.96%), #FBC658;"
                onClick={() =>
                  history.push({
                    pathname: "/",
                    state: { callToAction: true },
                  })
                }
              >
                Get Started
              </BaseButton>
            ) : (
              <BaseButton {...HeaderButtonStyle}>
                <Link to="/dashboard">Dashboard</Link>
              </BaseButton>
            )}
            <Show below="sm">
              <Box flexGrow={1} />
              <SocialMediaButtons
                alignSelf="center"
                buttonsAreFilled
                buttonSize="lg"
              />
            </Show>
          </Stack>
        </Flex>
      )}
    </IntegratedProgressiveImage>
  ));
};

const Header: React.FC<HeaderProps> = (props) => {
  const theme = useTheme() as PetCodeTheme;
  const breakpoint = parseInt(useBreakpoint() as string);

  const history = useHistory();

  const auth = React.useContext(AuthContext);

  const [open, toggleOpen] = useCycle(false, true);
  useEffect(() => {
    if (breakpoint >= 1 && open) {
      toggleOpen();
    }
  }, [breakpoint]);

  return useObserver(() => (
    <Stack
      isInline
      initial="closed"
      animate={open ? "open" : "closed"}
      position="fixed"
      top={0}
      background="rgba(0, 0, 0, 0.4)"
      width="100%"
      boxSizing="border-box"
      paddingLeft={8}
      paddingRight={10}
      paddingY={{ base: 8, sm: 4 }}
      zIndex={999}
      color="white"
      fontSize="xl"
      {...props}
    >
      <Link to="/">
        <IntegratedProgressiveImage
          slug="petcode-logo-with-qr-code.png"
          height="3.5rem"
        />
      </Link>
      <Box flexGrow={1} />
      <Hide below="sm">
        <Stack alignItems="center" spacing={8} isInline>
          <Link to="/">Home</Link>
          <Link to="/howitworks">How It Works</Link>
          {!auth.isLoggedIn ? (
            <BaseButton
              {...HeaderButtonStyle}
              background="linear-gradient(90deg, #51BCDA 12.06%, #F3AD55 91.96%), #FBC658;"
              onClick={() =>
                history.push({
                  pathname: "/",
                  state: { callToAction: true },
                })
              }
            >
              Get Started
            </BaseButton>
          ) : (
            <BaseButton {...HeaderButtonStyle}>
              <Link to="/dashboard">Dashboard</Link>
            </BaseButton>
          )}
        </Stack>
      </Hide>
      <AnimatePresence>{open && <MobileMenu />}</AnimatePresence>
      <Show below="sm">
        <motion.svg
          style={{ cursor: "pointer", zIndex: 1000 }}
          onClick={() => toggleOpen()}
          variants={{
            open: { stroke: theme.colors.petcode.neutral[700] },
            closed: {
              stroke: "white",
              transition: {
                delay: 0.25,
              },
            },
          }}
          width="36"
          height="36"
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6 27H30M6 9H30H6ZM6 18H30H6Z"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </motion.svg>
      </Show>
    </Stack>
  ));
};

export default Header;
