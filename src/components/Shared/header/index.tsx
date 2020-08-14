import React from "react";

import { Box, Flex, FlexProps, Icon, Text } from "@chakra-ui/core";
import { useObserver } from "mobx-react-lite";
import { AuthContext } from "../../../views/Auth/index";

const Header: React.FC<FlexProps> = (props) => {
  const auth = React.useContext(AuthContext);

  return useObserver(() => (
    <Flex
      position="fixed"
      top={0}
      background="rgba(0, 0, 0, 0.4)"
      width="calc(100% - 4rem)"
      paddingX={8}
      paddingY={4}
      zIndex={999}
      color="white"
      fontSize="lg"
      textTransform="uppercase"
      {...props}
    >
      <Text>PetCode</Text>
      <Box flexGrow={1} />
      <Text marginRight={8}>Home</Text>
      <Text marginRight={8}>About Us</Text>
      <Text marginRight={8}>Purchase</Text>
      {!auth.isLoggedIn && (
        <>
          <Text display="flex" alignItems="center" marginRight={8}>
            <Icon name="template" size="15px" marginRight={2} />
            Register
          </Text>
          <Text display="flex" alignItems="center">
            <Icon name="user-circle" size="16px" marginRight={2} />
            Sign In
          </Text>
        </>
      )}
    </Flex>
  ));
};

export default Header;
