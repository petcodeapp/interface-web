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
  useTheme,
} from "@chakra-ui/core";
import {
  InfoField,
  InfoFieldText,
  InfoFieldLabel,
} from "../../components/Shared/family/InfoField";

import BaseButton, {
  BaseButtonProps,
} from "../../components/Shared/button/BaseButton";
import Layout from "../../components/Shared/layout";

import moment from "moment";

import { ContactInfo } from "../../Models/ContactInfo";
import { Pet } from "../../Models/Pet";

import { PetCodeTheme } from "../../theme";

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
    boxSizing="border-box"
    padding={6}
    {...props}
  />
);

const ActionButton: React.FC<BaseButtonProps> = (props) => (
  <BaseButton
    size="sm"
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
    <InfoField text={contactInfo.name.value} label="Name" />
    <InfoField text={contactInfo.phoneNumber.value} label="Phone Number" />
    <InfoField text={contactInfo.email.value} label="Email" />
    <InfoField text={contactInfo.address.value} label="Address" />
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

  const [pet] = useState({
    name: "Max",
    temperament: "Friendly",
    isServiceAnimal: false,
    specialNeeds: {
      value: "Needs to remain cool; heat sensitivity",
      visible: true,
    },
    breed: "Weimararner",
    birthday: "08/31/2018",
    vaccinations: [
      {
        name: "Rabies",
      },
    ],
    vetName: {
      value: "Dr. Veterinarian",
      visible: true,
    },
    vetPhoneNumber: {
      value: "(408) 123 4567",
      visible: true,
    },
  } as Pet);

  const theme = useTheme() as PetCodeTheme;

  return (
    <Layout
      position="relative"
      backgroundColor="petcode.neutral.100"
      headerProps={{
        position: "absolute",
        backgroundColor: "transparent",
      }}
      paddingTop="12.85%"
    >
      <svg
        style={{ position: "absolute", top: 0 }}
        viewBox="0 0 1440 181"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M990 149C556.4 235.4 149.333 123.667 0 57V0H1440V123.5C1297.6 102.7 1144 118.314 990 149Z"
          fill={theme.colors.petcode.blue[400]}
        />
      </svg>
      <svg
        style={{ position: "absolute", top: 0 }}
        viewBox="0 0 1440 185"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          opacity={0.3}
          d="M720 179C380.8 201.4 118 143 0 114V0H1440V170.5C1330 132.5 1144 151 720 179Z"
          fill={theme.colors.petcode.blue[400]}
        />
      </svg>
      <Stack
        flexGrow={1}
        alignItems="center"
        padding={6}
        spacing={8}
      >
        <PrimaryHeader>Help Me Get Home!</PrimaryHeader>
        <Card paddingLeft={6} padding={0} overflow="hidden">
          <Stack justifyContent="center" flexBasis="60%" paddingY={6}>
            <Text fontSize="5xl" color="petcode.neutral.700" lineHeight="none">
              Max
            </Text>
            <Text color="petcode.neutral.600">
              Weimaraner &middot; 2 years old
            </Text>
            <Stack isInline>
              <ActionButton>
                <Text textTransform="uppercase" fontWeight="bold" letterSpacing="0.05em">
                  Contact Owner
                </Text>
              </ActionButton>
              <ActionButton>
                <Text textTransform="uppercase" fontWeight="bold" letterSpacing="0.05em">
                  Pet Info
                </Text>
              </ActionButton>
            </Stack>
          </Stack>
          <Box position="relative">
            <svg
              style={{ position: "absolute", left: 0 }}
              height="195px"
              viewBox="0 0 91 253"
              preserveAspectRatio="none"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M46.2 128.488C85 75 90.5333 27.6613 91 0H0V253C0.933333 224.664 7.4 181.976 46.2 128.488Z" fill="white"/>
            </svg>
            <svg
              style={{ position: "absolute", left: -10 }}
              height="195px"
              viewBox="0 0 131 248"
              preserveAspectRatio="none"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.3"
                d="M131 0H0.5V247.5H33C32.8333 220 32 155 67 116C102 77 128 21 131 0Z"
                fill="white"
              />
            </svg>
          </Box>
          <Box
            height="100%"
            flexGrow={1}
            backgroundImage="url(/media/placeholder-dog.png)"
            backgroundSize="cover"
            backgroundPosition="50% 50%"
            roundedRight="lg"
          />
        </Card>
        <PrimaryHeader>Contact Information</PrimaryHeader>
        <Card>
          <Stack width="100%" spacing={6}>
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
                  (acc, cur) => [acc, <Divider
                    alignSelf="stretch"
                    orientation="vertical"
                    color="petcode.neutral.300"
                    borderLeftWidth={2}
                  />, cur]
                )}
            </Stack>
          </Stack>
        </Card>
        <Card>
          <Stack spacing={3}>
            <SecondaryHeader>
              Veterinarian Contact Information
            </SecondaryHeader>
            <Stack isInline spacing={8}>
              {pet.vetName.visible && (
                <InfoField
                  text={pet.vetName.value}
                  label="Veterinarian Name"
                />
              )}
              {pet.vetPhoneNumber.visible && (
                <InfoField
                  text={pet.vetPhoneNumber.value}
                  label="Veterinarian Phone Number"
                />
              )}
            </Stack>
          </Stack>
        </Card>
        <PrimaryHeader>Pet Info</PrimaryHeader>
        <Card>
          <Flex direction="row" flexWrap="wrap">
            <InfoField flexBasis="25%" text={pet.name} label="Name" />
            <InfoField
              flexBasis="25%"
              text={pet.temperament}
              label="Temperament"
            />
            <InfoField
              flexBasis="25%"
              text={pet.isServiceAnimal ? "Yes" : "No"}
              label="Service Animal"
            />
            {pet.specialNeeds.visible && (
              <InfoField
                flexBasis="25%"
                text={pet.specialNeeds.value}
                label="Medical Needs"
              />
            )}
            <InfoField flexBasis="25%" text={pet.breed} label="Breed" />
            <InfoField
              flexBasis="25%"
              text={`${moment
                .duration(moment().diff(moment(pet.birthday)))
                .humanize()} old`}
              label="Breed"
            />
            {pet.vaccinations.map((vaccination, idx) => (
              <Box key={idx}>
                <InfoFieldText textDecoration="underline">
                  View Certificate
                </InfoFieldText>
                <InfoFieldLabel>{vaccination.name}</InfoFieldLabel>
              </Box>
            ))}
          </Flex>
        </Card>
      </Stack>
    </Layout>
  );
};

export default PetProfilePage;
