import React from "react";

import { Divider, Flex, Image, Text } from "@chakra-ui/core";

import IconBadge from "../../components/Shared/badge/IconBadge";

const Footer = () => (
  <Flex
    direction="column"
    backgroundColor="petcode.neutral.700"
    paddingX={{ xs: 6, md: 40 }}
    paddingY={10}
  >
    <Flex direction={{ xs: "column", md: "row" }} alignItems="start">
      <Image
        alt="PetCode Logo with QR Code"
        src="/media/petcode-logo-with-qr-code.png"
        height="45px"
        marginBottom={{ xs: 4, md: 0 }}
      />
      <Flex
        direction="row"
        wrap="wrap"
        fontSize="sm"
        color="white"
        fontWeight="thin"
        textTransform="uppercase"
        marginX={{ md: 6 }}
        marginBottom={{ xs: 4, md: 0 }}
      >
        <Text flexBasis="33%" marginBottom={2}>
          Home
        </Text>
        <Text flexBasis="33%" marginBottom={2}>
          Purchase
        </Text>
        <Text flexBasis="33%" marginBottom={2}>
          FAQs
        </Text>
        <Text flexBasis="33%" marginBottom={2}>
          About Us
        </Text>
        <Text flexBasis="33%" marginBottom={2}>
          Register
        </Text>
        <Text flexBasis="33%" marginBottom={2}>
          Shipping and Returns
        </Text>
        <Text flexBasis="33%" marginBottom={2}>
          Contact Us
        </Text>
        <Text flexBasis="33%" marginBottom={2}>
          Login
        </Text>
      </Flex>
      <Flex direction="row" alignItems="center">
        <IconBadge
          iconName="instagram"
          iconSize="20px"
          color="white"
          backgroundColor="#125687"
          iconPadding={4}
          marginRight={3}
        />
        <IconBadge
          iconName="facebook"
          iconSize="20px"
          color="white"
          backgroundColor="#6077A9"
          iconPadding={4}
        />
      </Flex>
    </Flex>
    <Divider
      orientation="horizontal"
      border="1px solid"
      borderColor="white"
      width="100%"
    />
    <Flex
      direction="row"
      justifyContent="space-between"
      fontSize="xs"
      fontWeight="thin"
      color="white"
    >
      <Text>© 2020 PetCode</Text>
      <Text>Terms and Conditions | Privacy Policy</Text>
    </Flex>
  </Flex>
);

export default Footer;
