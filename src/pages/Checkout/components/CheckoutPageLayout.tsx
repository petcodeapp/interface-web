import React from "react";

import { Flex } from "@chakra-ui/core";

import Header from "../../../components/Shared/header";
import ProgressTracker from "./ProgressTracker";

const AccountPageLayout: React.FC = ({ children }) => (
  <Flex direction="column" minHeight="calc(100% - 57px)" paddingTop="57px">
    <Header backgroundColor="petcode.neutral.700" />
    <ProgressTracker />
    {children}
  </Flex>
);

export default AccountPageLayout;
