import React, { useState } from "react";

import { FlexProps } from "@chakra-ui/core";
import { AnimatePresence, MotionProps } from "framer-motion";

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
  const [hovered, setHovered] = useState(false);

  return (
    <MotionFlex
      flexDirection="row"
      alignItems="center"
      cursor="pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileTap={{ scale: 1.05 }}
      transition={{ duration: "0.2" }}
      {...props}
    >
      <AnimatePresence>
        {hovered && (
          <MotionBox
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {expandChildren}
          </MotionBox>
        )}
      </AnimatePresence>
      {children}
    </MotionFlex>
  );
};
