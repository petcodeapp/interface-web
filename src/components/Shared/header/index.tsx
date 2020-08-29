import React from "react";

import { Box, BoxProps, Flex, FlexProps, Image, Text } from "@chakra-ui/core";
import { useObserver } from "mobx-react-lite";
import { AuthContext } from "../../../views/Auth/index";

import BaseButton, { BaseButtonProps } from "../button/BaseButton";

const HeaderText: React.FC<BoxProps> = (props) => (
  <Text
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
    <Flex
      position="fixed"
      alignItems="center"
      top={0}
      background="rgba(0, 0, 0, 0.4)"
      width="calc(100% - 4rem)"
      paddingX={8}
      paddingY={2}
      zIndex={999}
      color="white"
      fontWeight="bold"
      {...props}
    >
      <Image src="/media/petcode-logo-with-qr-code.png" height="40px" />
      <Box flexGrow={1} />
      <HeaderText marginRight={8}>Home</HeaderText>
      <HeaderText marginRight={8}>About Us</HeaderText>
      <HeaderText marginRight={8}>Purchase</HeaderText>
      {!auth.isLoggedIn ? (
        <>
          <HeaderButton>
            <HeaderText fontWeight="thin" color="petcode.neutral.700">
              Register
            </HeaderText>
          </HeaderButton>
          <HeaderButton>
            <HeaderText fontWeight="thin" color="petcode.neutral.700">
              Sign In
            </HeaderText>
          </HeaderButton>
        </>
      ) : (
        <HeaderButton>
          <HeaderText fontWeight="thin" color="petcode.neutral.700">
            Dashboard
          </HeaderText>
        </HeaderButton>
      )}
    </Flex>
  ));
};

export default Header;
