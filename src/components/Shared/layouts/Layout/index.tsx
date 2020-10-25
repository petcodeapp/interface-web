import React from "react";

import Flex from "../../../Motion/Flex";
import { FlexProps } from "@chakra-ui/core";

import { MotionProps } from "framer-motion";

import Header, { HeaderProps } from "../../organisms/Header";
import Footer, { FooterProps } from "../../organisms/Footer";

export type LayoutProps = {
  headerProps?: HeaderProps;
  footerProps?: FooterProps;
} & FlexProps &
  MotionProps;

const Layout: React.FC<LayoutProps> = ({
  children,
  headerProps = {},
  footerProps = {},
  ...props
}) => (
  <Flex direction="column" minHeight="100vh" boxSizing="border-box" {...props}>
    <Header {...headerProps} />
    {children}
    <Footer {...footerProps} />
  </Flex>
);

export default Layout;
