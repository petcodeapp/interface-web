import React from "react";

import { Flex, FlexProps } from "@chakra-ui/core";

import Header from "../header";

type LayoutProps = {
  headerProps?: FlexProps;
} & FlexProps;

const Layout: React.FC<LayoutProps> = ({
  children,
  headerProps = {},
  ...props
}) => (
  <Flex
    direction="column"
    minHeight="calc(100% - 57px)"
    paddingTop="57px"
    {...props}
  >
    <Header backgroundColor="petcode.neutral.700" {...headerProps} />
    {children}
  </Flex>
);

export default Layout;
