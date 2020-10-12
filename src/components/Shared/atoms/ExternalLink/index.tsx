import React from "react";

import {
  Link,
  LinkProps,
} from "@chakra-ui/core";

export type ExternalLinkProps = LinkProps;

const ExternalLink: React.FC<ExternalLinkProps> = (props) => (
  <Link
    target="_blank"
    rel="noopener noreferrer"
    {...props}
  />
);

export default ExternalLink;
