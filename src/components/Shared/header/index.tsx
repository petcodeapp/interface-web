import React from "react";

import {
  Box,
  FlexProps,
  Image,
  Link,
  LinkProps,
  Stack,
} from "@chakra-ui/core";
import { useObserver } from "mobx-react-lite";
import { AuthContext } from "../../../views/Auth/index";
import { Link as RouterLink, LinkProps as RouterLinkProps } from "react-router-dom";

import BaseButton, { BaseButtonProps } from "../button/BaseButton";

const HeaderLink: React.FC<LinkProps & RouterLinkProps> = (props) => (
  <Link
    // @ts-ignore
    as={RouterLink}
    fontSize="lg"
    textTransform="uppercase"
    fontFamily="Open Sans"
    {...props}
  />
);

const HeaderButton: React.FC<BaseButtonProps> = (props) => (
  <BaseButton size="sm" variantColor="petcode.yellow" paddingY={4} {...props} />
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
      width="calc(100% - 4rem)"
      paddingX={8}
      paddingY={2}
      zIndex={999}
      spacing={4}
      color="white"
      fontWeight="bold"
      {...props}
    >
      <Image src="/media/petcode-logo-with-qr-code.png" height="40px" />
      <Box flexGrow={1} />
      <HeaderLink to="/">Home</HeaderLink>
      <HeaderLink to ="/">About Us</HeaderLink>
      <HeaderLink to="/products">Purchase</HeaderLink>
      {!auth.isLoggedIn ? (
        <Stack isInline spacing={4}>
          <HeaderButton>
            <HeaderLink
              to="/signup"
              fontWeight="thin"
              color="petcode.neutral.700"
            >
              Register
            </HeaderLink>
          </HeaderButton>
          <HeaderButton>
            <HeaderLink
              to="/login"
              fontWeight="thin"
              color="petcode.neutral.700"
            >
              Sign In
            </HeaderLink>
          </HeaderButton>
        </Stack>
      ) : (
        <HeaderButton>
          <HeaderLink
            to="/dashboard"
            fontWeight="thin"
            color="petcode.neutral.700"
          >
            Dashboard
          </HeaderLink>
        </HeaderButton>
      )}
    </Stack>
  ));
};

export default Header;
