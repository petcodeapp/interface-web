import React from "react";

import { Box, FlexProps, Image, Link, LinkProps, Stack } from "@chakra-ui/core";
import { useObserver } from "mobx-react-lite";
import { AuthContext } from "../../../views/Auth/index";

import {
  Link as RouterLink,
  LinkProps as RouterLinkProps,
} from "react-router-dom";

import BaseButton, { BaseButtonProps } from "../button/BaseButton";

const HeaderLink: React.FC<LinkProps & RouterLinkProps> = (props) => (
  <Link
    // @ts-ignore
    as={RouterLink}
    fontSize="2xl"
    fontFamily="body"
    {...props}
  />
);

const HeaderButton: React.FC<BaseButtonProps> = (props) => (
  <BaseButton size="md" variantColor="petcode.yellow" paddingX={8} {...props} />
);

const Header: React.FC<FlexProps> = (props) => {
  const auth = React.useContext(AuthContext);

  return useObserver(() => (
    <Stack
      isInline
      position="fixed"
      alignItems="center"
      top={0}
      background="rgba(0, 0, 0, 0.4)"
      width="100vw"
      boxSizing="border-box"
      paddingLeft={8}
      paddingRight={16}
      paddingY={2}
      zIndex={999}
      spacing={8}
      color="white"
      {...props}
    >
      <HeaderLink to="/">
        <Image src="/media/petcode-logo-with-qr-code.png" height="4.75rem" />
      </HeaderLink>
      <Box flexGrow={1} />
      <HeaderLink to="/">Home</HeaderLink>
      <HeaderLink to="/howitworks">How It Works</HeaderLink>
      <HeaderLink to="/products">Purchase</HeaderLink>
      {!auth.isLoggedIn ? (
        <Stack isInline spacing={8}>
          <HeaderButton>
            <HeaderLink to="/signup" fontWeight="normal">
              Register
            </HeaderLink>
          </HeaderButton>
          <HeaderButton>
            <HeaderLink to="/login" fontWeight="normal">
              Sign In
            </HeaderLink>
          </HeaderButton>
        </Stack>
      ) : (
        <HeaderButton>
          <HeaderLink to="/dashboard" fontWeight="normal">
            Dashboard
          </HeaderLink>
        </HeaderButton>
      )}
    </Stack>
  ));
};

export default Header;
