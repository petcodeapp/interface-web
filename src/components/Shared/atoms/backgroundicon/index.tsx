import React from "react";

import { Icon, IconProps } from "@chakra-ui/core";

const BackgroundIcon: React.FC<IconProps> = (props) => (
  <Icon
    color="petcode.neutral.700"
    position="absolute"
    opacity={0.05}
    {...props}
  />
);

export default BackgroundIcon;
