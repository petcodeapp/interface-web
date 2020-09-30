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
  fontSize: "2xl",
  fontWeight: "normal",
  textTransform: "none",
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
      paddingRight={20}
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
      <Link to="/products">Purchase</Link>
      {!auth.isLoggedIn ? (
        <Stack isInline spacing={8}>
          <BaseButton {...HeaderButtonStyle}>
            <Link to="/signup">Register</Link>
          </BaseButton>
          <BaseButton {...HeaderButtonStyle}>
            <Link to="/login">Sign In</Link>
          </BaseButton>
        </Stack>
      ) : (
        <BaseButton {...HeaderButtonStyle}>
          <Link to="/dashboard">Dashboard</Link>
        </BaseButton>
      )}
    </Stack>
  ));
};

export default Header;
