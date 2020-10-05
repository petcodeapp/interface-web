import React from "react";

import Flex from "../../../Motion/Flex";
import { FlexProps } from "@chakra-ui/core";

import { MotionProps } from "framer-motion";

import Header from "../../organisms/Header";
import Footer, { FooterProps } from "../../organisms/Footer";

type LayoutProps = {
  headerProps?: FlexProps;
  footerProps?: FooterProps;
} & FlexProps &
  MotionProps;

const Layout: React.FC<LayoutProps> = ({
  children,
  headerProps = {},
  footerProps = {},
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
    <Footer {...footerProps} />
  </Flex>
);

export default Layout;
