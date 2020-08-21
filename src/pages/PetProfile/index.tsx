import React, { useState } from "react";

import {
  Box,
  BoxProps,
  Divider,
  Flex,
  FlexProps,
  Heading,
  HeadingProps,
  Stack,
  Text,
} from "@chakra-ui/core";
import {
  InfoFieldLabel,
  InfoFieldText,
} from "../../components/Shared/family/InfoField";

import BaseButton, {
  BaseButtonProps,
} from "../../components/Shared/button/BaseButton";
import Layout from "../../components/Shared/layout";

import { ContactInfo } from "../../Models/ContactInfo";

const PrimaryHeader: React.FC<HeadingProps> = (props) => (
  <Heading
    textAlign="center"
    fontSize="4xl"
    color="petcode.blue.400"
    {...props}
  />
);

const SecondaryHeader: React.FC<BoxProps> = (props) => (
  <Text fontSize="2xl" color="petcode.neutral.700" {...props} />
);

const Card: React.FC<FlexProps> = (props) => (
  <Flex
    direction="row"
    rounded="lg"
    width="75%"
    backgroundColor="white"
    justifyContent="space-between"
    padding={6}
    {...props}
  />
);

const ActionButton: React.FC<BaseButtonProps> = (props) => (
  <BaseButton
    size="md"
    variantColor="petcode.yellow"
    paddingX={6}
    alignSelf="end"
    {...props}
  />
);

const ContactInfoStack: React.FC<{ contactInfo: ContactInfo }> = ({
  contactInfo,
}) => (
  <Stack>
    <SecondaryHeader>{contactInfo.level} Contact Information</SecondaryHeader>
    <Box>
      <InfoFieldText>{contactInfo.name.value}</InfoFieldText>
      <InfoFieldLabel>Name</InfoFieldLabel>
    </Box>
    <Box>
      <InfoFieldText>{contactInfo.phoneNumber.value}</InfoFieldText>
      <InfoFieldLabel>Phone Number</InfoFieldLabel>
    </Box>
    <Box>
      <InfoFieldText>{contactInfo.email.value}</InfoFieldText>
      <InfoFieldLabel>Email</InfoFieldLabel>
    </Box>
    <Box>
      <InfoFieldText>{contactInfo.address.value}</InfoFieldText>
      <InfoFieldLabel>Address</InfoFieldLabel>
    </Box>
  </Stack>
);

const PetProfilePage = () => {
  const [contactInfos] = useState([
    {
      level: "Primary",
      name: { value: "John Doe", visible: true },
      address: {
        value: "123 First Street, Cupertino, CA 94087",
        visible: true,
      },
      phoneNumber: { value: "(408) 123 4567", visible: true },
      email: { value: "example@gmail.com", visible: true },
    },
    {
      level: "Secondary",
      name: { value: "Jane Doe", visible: true },
      address: {
        value: "123 Second Street, Cupertino, CA 94087",
        visible: true,
      },
      phoneNumber: { value: "(408) 765 4321", visible: true },
      email: { value: "anotherexample@gmail.com", visible: true },
    },
  ] as ContactInfo[]);

  return (
    <Layout>
      <Stack
        flexGrow={1}
        backgroundColor="petcode.neutral.200"
        alignItems="center"
        padding={6}
        spacing={8}
      >
        <PrimaryHeader>Help Me Get Home!</PrimaryHeader>
        <Card>
          <Stack>
            <SecondaryHeader>My Name is</SecondaryHeader>
            <Text fontSize="5xl" color="petcode.blue.400">
              Max
            </Text>
            <Box flexGrow={1} />
            <Stack isInline>
              <ActionButton>
                <Text textTransform="uppercase" fontWeight="thin">
                  Contact Owner
                </Text>
              </ActionButton>
              <ActionButton>
                <Text textTransform="uppercase" fontWeight="thin">
                  Pet Info
                </Text>
              </ActionButton>
            </Stack>
          </Stack>
          <Box
            rounded="full"
            size="135px"
            backgroundSize="cover"
            backgroundPosition="center"
            backgroundImage="url(/media/placeholder-dog.png)"
            marginBottom={3}
          />
        </Card>
        <PrimaryHeader>Contact Information</PrimaryHeader>
        <Card>
          <Stack width="100%">
            <Stack
              width="100%"
              isInline
              justifyContent="space-between"
              spacing={10}
            >
              {contactInfos
                .map((contactInfo, idx) => (
                  <ContactInfoStack key={idx} contactInfo={contactInfo} />
                ))
                .reduce(
                  // @ts-ignore
                  (acc, cur) => [acc, <Divider orientation="vertical" />, cur]
                )}
            </Stack>
          </Stack>
        </Card>
      </Stack>
    </Layout>
  );
};

export default PetProfilePage;
