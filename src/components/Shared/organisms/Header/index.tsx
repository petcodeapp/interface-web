import React from "react";

import { Box, Image, StackProps, useTheme } from "@chakra-ui/core";
import BaseButton, { BaseButtonProps } from "../../atoms/button";
import Link from "../../atoms/link";
import { motion, MotionProps, useCycle } from "framer-motion";
import { useBreakpoint, Show } from "@chakra-ui/media-query";
import { Stack } from "../../../Motion";

import { AuthContext } from "../../../../views/Auth/index";
import { useObserver } from "mobx-react-lite";

import { PetCodeTheme } from "../../../../theme";
import { ActionButtonStyle } from "../../ions/button";

const HeaderButtonStyle = {
  ...ActionButtonStyle,
  variantColor: "petcode.yellow",
  fontSize: "xl",
  textTransform: "none",
  letterSpacing: "auto",
  height: "3.25rem",
  paddingX: 8,
  boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.2);",
} as BaseButtonProps;

export type HeaderProps = StackProps & MotionProps;

const Header: React.FC<HeaderProps> = (props) => {
  const auth = React.useContext(AuthContext);
  const [open, toggleOpen] = useCycle(false, true);

  const theme = useTheme() as PetCodeTheme;
  const breakpoint = parseInt(useBreakpoint() as string);

  return useObserver(() => (
    <Stack
      isInline
      initial="closed"
      animate={open ? "open" : "closed"}
      position="fixed"
      top={0}
      background="rgba(0, 0, 0, 0.4)"
      width="calc(100vw - 1rem)"
      boxSizing="border-box"
      paddingLeft={8}
      paddingRight={10}
      paddingY={4}
      zIndex={999}
      color="white"
      fontSize="2xl"
      {...props}
    >
      <Link to="/">
        <Image src="/media/petcode-logo-with-qr-code.png" height="4.75rem" />
      </Link>
      <Box flexGrow={1} />
      <Stack
        alignItems="center"
        spacing={8}
        {...(breakpoint < 2 ? {
          color: "petcode.neutral.700",
          position: "absolute",
          top: 0,
          left: 0,
          background: "white",
          width: "100vw",
          height: "100vh",
        } : {
          isInline: true,
        })}
        variants={{
          open: (height = 1000) => ({
            clipPath: `circle(${height * 2 + 200}px at right top)`,
            transition: {
              type: "spring",
              stiffness: 20,
              restDelta: 2
            }
          }),
          closed: {
            clipPath: "circle(0px at right top)",
            transition: {
              type: "spring",
              stiffness: 400,
              damping: 40
            }
          }
        }}
      >
        <Show below="md">
          <Link to="/">
            <Image src="/media/petcode-logo-with-qr-code-altered.png" height="4.75rem" />
          </Link>
        </Show>
        <Link to="/">Home</Link>
        <Link to="/howitworks">How It Works</Link>
        {!auth.isLoggedIn ? (
          <BaseButton
            {...HeaderButtonStyle}
            background="linear-gradient(90deg, #51BCDA 12.06%, #F3AD55 91.96%), #FBC658;"
          >
            Get Started
          </BaseButton>
        ) : (
          <BaseButton {...HeaderButtonStyle}>
            <Link to="/dashboard">Dashboard</Link>
          </BaseButton>
        )}
      </Stack>
      <Show below="md">
        <motion.svg
          style={{ cursor: "pointer", zIndex: 1000 }}
          onClick={() => toggleOpen()}
          variants={{ 
            open: { stroke: theme.colors.petcode.neutral[700] },
            closed: { stroke: "white", transition: {
              delay: 0.25
            } }
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
