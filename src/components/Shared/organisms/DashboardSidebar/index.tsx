import React, { useContext } from "react";

import { Box, Flex, Icon, Stack, Text } from "@chakra-ui/core";
import { withRouter } from "react-router-dom";
import IntegratedProgressiveImage from "../../atoms/IntegratedProgressiveImage";

import BaseButton from "../../atoms/button";
import Link, { LinkProps } from "../../atoms/link";

import { AuthContext } from "../../../../views/Auth";

type SidebarLinkProps = {
  iconName: string;
  text: string;
  selected?: boolean;
} & LinkProps;

const SidebarLink: React.FC<SidebarLinkProps> = ({
  iconName,
  text,
  selected = false,
  ...props
}) => (
  <Link
    display="flex"
    flexDirection="row"
    alignItems="center"
    fontWeight="thin"
    color={selected ? "petcode.blue.400" : "petcode.neutral.500"}
    {...props}
  >
    <Icon name={iconName} size="1.25rem" marginRight={3} />
    <Text fontSize="xl" fontWeight="thin">
      {text}
    </Text>
  </Link>
);

const Sidebar = withRouter(({ location }) => {
  const service = useContext(AuthContext);

  return (
    <Stack
      backgroundColor="white"
      minWidth="16.875rem"
      boxShadow="0px 4px 20px rgba(0, 0, 0, 0.05)"
      rounded="lg"
      paddingY={8}
      paddingX={10}
      maxHeight="64.9375rem"
      zIndex={1}
      spacing={3}
      boxSizing="border-box"
    >
      <IntegratedProgressiveImage
        slug="petcode-logo-with-qr-code-altered.png"
        alt="Petcode logo with QR code altered"
        width="11.375rem"
        paddingBottom={6}
      />
      <IntegratedProgressiveImage slug="placeholder-dog.png">
        {(src: string, loading: boolean) => (
          <Box
            rounded="full"
            size="5.5625rem"
            backgroundSize="cover"
            backgroundPosition="center"
            backgroundImage={`url(${src})`}
            style={{ filter: loading ? "blur(5px)" : "blur(0)" }}
          />
        )}
      </IntegratedProgressiveImage>
      <Flex direction="row" justifyContent="space-between">
        <Flex direction="column">
          <Text color="petcode.neutral.700" fontSize="3xl">
            Max
          </Text>
          <Text color="petcode.neutral.500" fontSize="xl" fontWeight="thin">
            John Doe
          </Text>
        </Flex>
        <Icon
          name="dropdown-arrow"
          color="petcode.neutral.700"
          size="1.5rem"
          marginTop={2}
        />
      </Flex>
      <Box flexGrow={1} />
      <Stack spacing={6}>
        <SidebarLink
          selected={location.pathname == "/dashboard"}
          to="/dashboard"
          iconName="home"
          text="Dashboard"
        />
        <SidebarLink
          selected={location.pathname == "/contactinfo"}
          to="/contactinfo"
          iconName="phone"
          text="Contact Info"
        />
        <SidebarLink
          selected={location.pathname == "/petinfo"}
          to="/petinfo"
          iconName="heart"
          text="Pet Info"
        />
        <SidebarLink
          selected={location.pathname == "/medicalinfo"}
          to="/medicalinfo"
          iconName="clipboard-thin"
          text="Medical Info"
        />
        <SidebarLink
          selected={location.pathname == "/reminders"}
          to="/reminders"
          iconName="checkmark-clipboard"
          text="Reminders"
        />
        <SidebarLink
          selected={location.pathname == "/scanlocations"}
          to="/scanlocations"
          iconName="location"
          text="Scan Locations"
        />
      </Stack>
      <Box flexGrow={5} />
      <BaseButton
        size="md"
        variantColor="red"
        variant="outline"
        border="1px solid"
      >
        <Text>I Am Lost</Text>
      </BaseButton>
      <BaseButton
        size="md"
        variantColor="petcode.neutral"
        variant="outline"
        border="1px solid"
        onClick={service.signOut}
      >
        <Text>Sign Out</Text>
      </BaseButton>
    </Stack>
  );
});

export default Sidebar;
