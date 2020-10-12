import React from "react";

import {
  IconButton,
  IconButtonProps,
  Stack,
  StackProps,
} from "@chakra-ui/core";
import Link from "../../atoms/ExternalLink";

export type SocialMediaButtonsProps = {
  buttonsAreFilled?: boolean;
  buttonSize?: "xs" | "sm" | "md" | "lg";
} & StackProps;

const SocialMediaButtons: React.FC<SocialMediaButtonsProps> = ({
  buttonsAreFilled = false,
  buttonSize = "md",
  ...props
}) => {
  const SocialMediaButtonStyle = {
    size: buttonSize,
    isRound: true,
    backgroundColor: buttonsAreFilled ? "petcode.blue.400" : "white",
    color: buttonsAreFilled ? "white" : "petcode.blue.400",
  } as IconButtonProps;

  return (
    <Stack isInline spacing={8} {...props}>
      <Link href="https://www.linkedin.com/company/petcode">
        <IconButton
          {...SocialMediaButtonStyle}
          aria-label="Linkedin"
          // @ts-ignore
          icon="linkedin"
        />
      </Link>
      <Link href="https://www.instagram.com/petcodeusa">
        <IconButton
          {...SocialMediaButtonStyle}
          aria-label="Instagram"
          // @ts-ignore
          icon="instagram"
        />
      </Link>
      <Link href="https://www.facebook.com/PetCode-107543294461501">
        <IconButton
          {...SocialMediaButtonStyle}
          aria-label="Facebook"
          // @ts-ignore
          icon="facebook"
        />
      </Link>
      <Link href="https://www.youtube.com/channel/UC4nWZIkubOUuII_36TzobRA">
        <IconButton
          {...SocialMediaButtonStyle}
          aria-label="Youtube"
          // @ts-ignore
          icon="youtube"
        />
      </Link>
      <Link href="https://twitter.com/PetCodeUSA">
        <IconButton
          {...SocialMediaButtonStyle}
          aria-label="Twitter"
          // @ts-ignore
          icon="twitter"
        />
      </Link>
    </Stack>
  );
};

export default SocialMediaButtons;
