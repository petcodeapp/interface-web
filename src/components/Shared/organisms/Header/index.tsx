import React from "react";

import { Box, FlexProps, Image, Stack, Text } from "@chakra-ui/core";
import { useObserver } from "mobx-react-lite";
import { AuthContext } from "../../../../views/Auth/index";
import { HeaderButton } from "../../atoms/button";
import Link from "../../atoms/link";

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
      <Link to="/">
        <Text>Home</Text>
      </Link>
      <Link to="/howitworks">
        <Text>How It Works</Text>
      </Link>
      <Link to="/products">
        <Text>Purchase</Text>
      </Link>
      {!auth.isLoggedIn ? (
        <Stack isInline spacing={8}>
          <HeaderButton>
            <Link to="/signup">
              <Text fontSize="2xl" fontWeight="normal">
                Register
              </Text>
            </Link>
          </HeaderButton>
          <HeaderButton>
            <Link to="/login">
              <Text fontSize="2xl" fontWeight="normal">
                Sign In
              </Text>
            </Link>
          </HeaderButton>
        </Stack>
      ) : (
        <HeaderButton>
          <Link to="/dashboard">
            <Text fontSize="2xl" fontWeight="normal">
              Dashboard
            </Text>
          </Link>
        </HeaderButton>
      )}
    </Stack>
  ));
};

export default Header;
