import React from "react";

import Flex from "../../Motion/Flex";
import { FlexProps } from "@chakra-ui/core";

import { MotionProps } from "framer-motion";

import Header from "../organisms/Header";

type LayoutProps = {
  headerProps?: FlexProps;
} & FlexProps &
  MotionProps;

const Layout: React.FC<LayoutProps> = ({
  children,
  headerProps = {},
  ...props
}) => (
  <Flex
    direction="column"
    minHeight="calc(100% - 6.25rem)"
    paddingTop="6.25rem"
    {...props}
  >
    <Header backgroundColor="petcode.neutral.700" {...headerProps} />
    {children}
  </Flex>
);

export default Layout;
