import React from "react";

import { Flex } from "@chakra-ui/core";

import Layout from "../../../components/Shared/layout";
import Sidebar from "./Sidebar";

const AccountPageLayout: React.FC = ({ children }) => (
  <Layout>
    <Flex direction="row" flexGrow={1}>
      <Sidebar />
      {children}
    </Flex>
  </Layout>
);

export default AccountPageLayout;
