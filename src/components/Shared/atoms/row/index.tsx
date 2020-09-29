import React from "react";

import { Flex, FlexProps } from "@chakra-ui/core";

const Row: React.FC<FlexProps> = (props) => (
  <Flex
    direction="row"
    alignItems="center"
    justifyContent="space-between"
    {...props}
  />
);

export default Row;
