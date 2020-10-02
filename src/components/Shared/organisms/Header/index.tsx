import React from "react";

import { Box, FlexProps, Image, Stack } from "@chakra-ui/core";
import { useObserver } from "mobx-react-lite";
import { AuthContext } from "../../../../views/Auth/index";
import BaseButton, { BaseButtonProps } from "../../atoms/button";
import Link from "../../atoms/link";

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

const Header: React.FC<FlexProps> = (props) => {
  const auth = React.useContext(AuthContext);

  return useObserver(() => (
    <Stack
      isInline
      position="fixed"
      alignItems="center"
      top={0}
      background="rgba(0, 0, 0, 0.4)"
      width="calc(100vw - 1rem)"
      boxSizing="border-box"
      paddingLeft={8}
      paddingRight={10}
      paddingY={4}
      zIndex={999}
      spacing={8}
      color="white"
      fontSize="2xl"
      {...props}
    >
      <Link to="/">
        <Image src="/media/petcode-logo-with-qr-code.png" height="4.75rem" />
      </Link>
      <Box flexGrow={1} />
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
  ));
};

export default Header;
