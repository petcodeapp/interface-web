import React, { useContext } from "react";

import { Box, Flex, Icon, Image, Link, Stack, Text } from "@chakra-ui/core";
import { Link as RouterLink, LinkProps, withRouter } from "react-router-dom";

import BaseButton from "../../../components/Shared/button/BaseButton";

import { AuthContext } from "../../../views/Auth";

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
    // @ts-ignore
    as={RouterLink}
    display="flex"
    flexDirection="row"
    fontWeight="thin"
    color={selected ? "petcode.blue.400" : "petcode.neutral.500"}
    {...props}
  >
    <Icon name={iconName} size="19px" marginRight={3} />
    <Text>{text}</Text>
  </Link>
);

const Sidebar = withRouter(({ location }) => {
  const service = useContext(AuthContext);

  return (
    <Stack
      backgroundColor="white"
      minWidth="180px"
      boxShadow="0px 4px 20px rgba(0, 0, 0, 0.05)"
      rounded="lg"
      padding={10}
      maxHeight="calc(846px - 5rem)"
      zIndex={1}
      spacing={6}
    >
      <Image
        src="/media/petcode-logo-with-qr-code-altered.png"
        alt="Petcode logo with QR code altered"
        width={180}
      />
      <Box
        rounded="full"
        size="89px"
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundImage="url(/media/placeholder-dog.png)"
        marginBottom={3}
      />
      <Flex direction="row" justifyContent="space-between">
        <Flex direction="column">
          <Text color="petcode.neutral.700" fontSize="3xl" fontWeight="bold">
            Max
          </Text>
          <Text color="petcode.neutral.500" fontSize="xl" fontWeight="thin">
            John Doe
          </Text>
        </Flex>
        <Icon
          name="dropdown-arrow"
          color="petcode.neutral.700"
          size="24px"
          marginTop={2}
        />
      </Flex>
      <Box flexGrow={1} />
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
      <Box flexGrow={3} />
      <Stack spacing={3}>
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
    </Stack>
  );
});

export default Sidebar;
