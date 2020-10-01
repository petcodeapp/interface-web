import React, { useState } from "react";

import {
  Box,
  BoxProps,
  Divider,
  Flex,
  FlexProps,
  Heading,
  HeadingProps,
  Image,
  SimpleGrid,
  Stack,
  Text,
  useTheme,
} from "@chakra-ui/core";
import { useBreakpoint } from "@chakra-ui/media-query";

import InfoField, {
  InfoFieldText,
  InfoFieldLabel,
} from "../../components/Shared/molecules/InfoField";
import BaseButton, {
  BaseButtonProps,
} from "../../components/Shared/atoms/button";
import Layout from "../../components/Shared/layouts/LandingPageLayout";

import moment from "moment";

import { ContactInfo } from "../../Models/ContactInfo";
import { Pet } from "../../Models/Pet";

import { PetCodeTheme } from "../../theme";

const PrimaryHeader: React.FC<HeadingProps> = (props) => (
  <Heading
    textAlign="center"
    fontSize="4xl"
    color="petcode.blue.400"
    fontFamily={{ xs: "body", md: "heading" }}
    fontWeight={{ xs: 600, md: "bold" }}
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
    width={{ xs: "95%", md: "75%" }}
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
  const breakpoint = useBreakpoint() as string;

  return (
    <Layout
      position="relative"
      backgroundColor="petcode.neutral.100"
      headerProps={{
        position: "absolute",
        backgroundColor: "transparent",
        display: parseInt(breakpoint) > 0 ? "flex" : "none",
      }}
      paddingTop={{ md: "12.85%" }}
    >
      {parseInt(breakpoint) > 0 ? (
        <>
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
        </>
      ) : (
        <>
          <svg
            style={{ position: "absolute", top: 0, height: 250 }}
            viewBox="0 0 204 230"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 229.817V0H203.415C188.138 111.352 106.681 201.609 0 229.817Z"
              fill={theme.colors.petcode.blue[400]}
            />
          </svg>
          <svg
            style={{ position: "absolute", top: 0, height: 200 }}
            viewBox="0 0 263 188"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity={0.3}
              d="M0 188V0H262.392C225.323 109.324 121.85 188 0 188Z"
              fill={theme.colors.petcode.blue[400]}
            />
          </svg>
          <svg
            style={{ position: "absolute", bottom: 0, right: 0, height: 150 }}
            viewBox="0 0 178 145"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M177.846 0C98.44 22.9317 33.7 80.4363 0.982422 155.157L177.846 155.157L177.846 0Z"
              fill={theme.colors.petcode.blue[400]}
            />
          </svg>
          <svg
            style={{ position: "absolute", bottom: 0, right: 0, height: 125 }}
            viewBox="0 0 239 125"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity={0.3}
              d="M238.847 0.126253C226.454 0.0971291 213.915 0.89946 201.289 2.58038C114.133 14.1844 41.8682 65.1332 0 135.158L238.847 135.158L238.847 0.126253Z"
              fill={theme.colors.petcode.blue[400]}
            />
          </svg>
        </>
      )}
      <Stack
        zIndex={1}
        flexGrow={1}
        alignItems="center"
        padding={6}
        spacing={8}
      >
        {parseInt(breakpoint) > 0 ? (
          <PrimaryHeader>Help Me Get Home!</PrimaryHeader>
        ) : (
          <Image
            src="/media/petcode-logo-with-qr-code-altered.png"
            alt="Petcode logo with QR code"
            height={54}
          />
        )}
        <Card paddingLeft={6} padding={0} overflow="hidden">
          <Stack justifyContent="center" flexBasis="60%" paddingY={6}>
            <Text fontSize="5xl" color="petcode.neutral.700" lineHeight="none">
              Max
            </Text>
            <Text color="petcode.neutral.600">
              Weimaraner &middot; 2 years old
            </Text>
            {parseInt(breakpoint) > 0 && (
              <Stack isInline>
                <ActionButton>
                  <Text
                    textTransform="uppercase"
                    fontWeight="bold"
                    letterSpacing="0.05em"
                  >
                    Contact Owner
                  </Text>
                </ActionButton>
                <ActionButton>
                  <Text
                    textTransform="uppercase"
                    fontWeight="bold"
                    letterSpacing="0.05em"
                  >
                    Pet Info
                  </Text>
                </ActionButton>
              </Stack>
            )}
          </Stack>
          {parseInt(breakpoint) > 0 && (
            <Box position="relative">
              <svg
                style={{ position: "absolute", left: 0 }}
                height="195px"
                viewBox="0 0 91 253"
                preserveAspectRatio="none"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M46.2 128.488C85 75 90.5333 27.6613 91 0H0V253C0.933333 224.664 7.4 181.976 46.2 128.488Z"
                  fill="white"
                />
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
          )}
          <Box
            backgroundSize="cover"
            backgroundPosition="center"
            backgroundImage="url(/media/placeholder-dog.png)"
            {...(parseInt(breakpoint) > 0
              ? {
                  height: "100%",
                  flexGrow: 1,
                  roundedRight: "lg",
                }
              : {
                  margin: 6,
                  size: "100px",
                  minWidth: "100px",
                  rounded: "full",
                })}
          />
        </Card>
        <PrimaryHeader>Contact Information</PrimaryHeader>
        {parseInt(breakpoint) > 1 ? (
          <Card>
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
                  (acc, cur) => [
                    acc,
                    <Divider
                      alignSelf="stretch"
                      orientation="vertical"
                      color="petcode.neutral.300"
                      marginLeft={10}
                      borderLeftWidth={2}
                    />,
                    cur,
                  ]
                )}
            </Stack>
          </Card>
        ) : (
          contactInfos.map((contactInfo, idx) => (
            <Card key={idx}>
              <ContactInfoStack key={idx} contactInfo={contactInfo} />
            </Card>
          ))
        )}
        <Card>
          <Stack spacing={3}>
            <SecondaryHeader>Veterinarian Contact Information</SecondaryHeader>
            <Stack isInline={parseInt(breakpoint) > 1} spacing={{ md: 8 }}>
              {pet.vetName.visible && (
                <InfoField text={pet.vetName.value} label="Veterinarian Name" />
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
        <PrimaryHeader>Pet Information</PrimaryHeader>
        <Card>
          <SimpleGrid columns={{ xs: 2, md: 3, lg: 4 }} spacing={3}>
            <InfoField text={pet.name} label="Name" />
            <InfoField text={pet.breed} label="Breed" />
            <InfoField
              text={`${moment
                .duration(moment().diff(moment(pet.birthday)))
                .humanize()} old`}
              label="Age"
            />
            <InfoField text={pet.temperament} label="Temperament" />
            <InfoField
              text={pet.isServiceAnimal ? "Yes" : "No"}
              label="Service Animal"
            />
            {pet.vaccinations.map((vaccination, idx) => (
              <Box key={idx}>
                <InfoFieldText textDecoration="underline">
                  View Certificate
                </InfoFieldText>
                <InfoFieldLabel>{vaccination.name}</InfoFieldLabel>
              </Box>
            ))}
            {pet.specialNeeds.visible && (
              <InfoField text={pet.specialNeeds.value} label="Medical Needs" />
            )}
          </SimpleGrid>
        </Card>
      </Stack>
    </Layout>
  );
};

export default PetProfilePage;
