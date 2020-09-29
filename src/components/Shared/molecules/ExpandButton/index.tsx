import React, { useState } from "react";

import { FlexProps } from "@chakra-ui/core";
import { MotionProps } from "framer-motion";

import MotionFlex from "../../../Motion/Flex";
import MotionBox from "../../../Motion/Box";

type ExpandButtonProps = {
  expandChildren: React.ReactNode;
} & FlexProps &
  MotionProps;

export const ExpandButton: React.FC<ExpandButtonProps> = ({
  children,
  expandChildren,
  ...props
}) => {
  const variants = {
    open: { opacity: 1, width: "100%" },
    closed: { opacity: 0, width: 0 },
  };

  const [hovered, setHovered] = useState(false);

  return (
    <MotionFlex
      flexDirection="row"
      alignItems="center"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileTap={{ scale: 1.05 }}
      transition={{ duration: "0.2" }}
      {...props}
    >
      <MotionBox animate={hovered ? "open" : "closed"} variants={variants}>
        {expandChildren}
      </MotionBox>
      {children}
    </MotionFlex>
  );
};
