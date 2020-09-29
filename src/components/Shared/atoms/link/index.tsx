import React from "react";

import {
  Link as ChakraLink,
  LinkProps as ChakraLinkProps,
} from "@chakra-ui/core";

import {
  Link as RouterLink,
  LinkProps as RouterLinkProps,
} from "react-router-dom";

export type LinkProps = ChakraLinkProps & RouterLinkProps;

const Link: React.FC<LinkProps> = (props) => (
  <ChakraLink
    // @ts-ignore
    as={RouterLink}
    {...props}
  />
);

export default Link;
