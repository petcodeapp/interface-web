import React, { useState } from "react";

import {
  Box,
  Flex,
  FlexProps,
  Icon,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/core";

import ExpandButton from "../../components/Shared/button/ExpandButton";
import AccountPageLayout from "./components/AccountPageLayout";
import Checkbox from "./components/Checkbox";
import {
  InfoFieldRow,
  InfoFieldText,
  InfoFieldLabel,
  InfoFieldInput,
} from "./components/InfoField";

import { action, observable } from "mobx";
import { observer, useObserver } from "mobx-react";

import { ContactInfo } from "../../Models/ContactInfo";
import useEffect from "react";
import { AuthContext } from "../../views/Auth/index";

type ContactInfoCardProps = {
  contactInfo: ContactInfo;
  isEditable: boolean;
} & FlexProps;

const ContactInfoCard: React.FC<ContactInfoCardProps> = ({
  contactInfo,
  isEditable,
  ...props
}) =>{
  console.log(contactInfo)
  return useObserver(() => (
    <Flex
      direction="column"
      rounded="lg"
      backgroundColor="white"
      padding={6}
      {...props}
    >
      <InfoFieldRow fontSize="2xl" marginBottom={3}>
        <Text color="petcode.neutral.700">
          Contact Information
        </Text>
        <Text color="petcode.neutral.400">Visibility</Text>
      </InfoFieldRow>
      <InfoFieldRow>
        <Box flexBasis="60%">
          {isEditable ? (
            <InfoFieldInput
              value={contactInfo.name.value}
              onChange={action(
                (e: React.ChangeEvent<HTMLInputElement>) =>
                  (contactInfo.name.value = e.target.value)
              )}
            />
          ) : (
            <InfoFieldText>{contactInfo.name.value}</InfoFieldText>
          )}
          <InfoFieldLabel>Name</InfoFieldLabel>
        </Box>
        <Checkbox
          checked={contactInfo.name.visible}
          cursor={isEditable ? "pointer" : "default"}
          onClick={action(
            () =>
              isEditable &&
              (contactInfo.name.visible = !contactInfo.name.visible)
          )}
        />
      </InfoFieldRow>
      <InfoFieldRow>
        <Box flexBasis="60%">
          {isEditable ? (
            <InfoFieldInput
              value={contactInfo.address.value}
              onChange={action(
                (e: React.ChangeEvent<HTMLInputElement>) =>
                  (contactInfo.address.value = e.target.value)
              )}
            />
          ) : (
            <InfoFieldText>{contactInfo.address.value}</InfoFieldText>
          )}
          <InfoFieldLabel>Address</InfoFieldLabel>
        </Box>
        <Checkbox
          checked={contactInfo.address.visible}
          cursor={isEditable ? "pointer" : "default"}
          onClick={action(
            () =>
              isEditable &&
              (contactInfo.address.visible = !contactInfo.address.visible)
          )}
        />
      </InfoFieldRow>
      <InfoFieldRow>
        <Box flexBasis="60%">
          {isEditable ? (
            <InfoFieldInput
              value={contactInfo.phoneNumber.value}
              onChange={action(
                (e: React.ChangeEvent<HTMLInputElement>) =>
                  (contactInfo.phoneNumber.value = e.target.value)
              )}
            />
          ) : (
            <InfoFieldText>{contactInfo.phoneNumber.value}</InfoFieldText>
          )}
          <InfoFieldLabel>Phone Number</InfoFieldLabel>
        </Box>
        <Checkbox
          checked={contactInfo.phoneNumber.visible}
          cursor={isEditable ? "pointer" : "default"}
          onClick={action(
            () =>
              isEditable &&
              (contactInfo.phoneNumber.visible = !contactInfo.phoneNumber
                .visible)
          )}
        />
      </InfoFieldRow>
      <InfoFieldRow>
        <Box flexBasis="60%">
          {isEditable ? (
            <InfoFieldInput
              value={contactInfo.email.value}
              onChange={action(
                (e: React.ChangeEvent<HTMLInputElement>) =>
                  (contactInfo.email.value = e.target.value)
              )}
            />
          ) : (
            <InfoFieldText>{contactInfo.email.value}</InfoFieldText>
          )}
          <InfoFieldLabel>Email</InfoFieldLabel>
        </Box>
        <Checkbox
          checked={contactInfo.email.visible}
          cursor={isEditable ? "pointer" : "default"}
          onClick={action(
            () =>
              isEditable &&
              (contactInfo.email.visible = !contactInfo.email.visible)
          )}
        />
      </InfoFieldRow>
    </Flex>
  ))};

const ContactInfoSection = () => {
  const service = React.useContext(AuthContext);

  const [isEditable, setEditable] = useState(false);
  const [contactInfo, setContactInfo] = useState(service.pets[0].contacts)
  const toast = useToast();

  return useObserver(() => (
    <Stack
      flexGrow={1}
      backgroundColor="petcode.neutral.200"
      padding={10}
      spacing={5}
    >
      
      {
        service.pets[0]?.contacts.map((value: any, index: number) => {
          console.log(JSON.parse(JSON.stringify(service.pets[0]?.contacts[index])))
          return (
            <ContactInfoCard
            contactInfo={contactInfo[index]}
            setContactInfo={(property, visible) => {
              const arr = [...contactInfo[index]]
              
            }}
            
            isEditable={isEditable}
            key={index}
            />
          )
        })
      }
      <ExpandButton
        position="fixed"
        bottom={5}
        right={5}
        rounded="full"
        color="petcode.neutral.700"
        padding={4}
        backgroundColor="petcode.yellow.400"
        onClick={action(async () => {
          if (isEditable) {
            toast({
              title: "Contact information saved.",
              description: "Your contact information was saved successfully.",
              status: "success",
              duration: 5000,
              isClosable: true,
            });
          }
          setEditable(!isEditable);
        })}
        expandChildren={
          <Text
            fontSize="xl"
            fontWeight="thin"
            textTransform="uppercase"
            marginRight={2}
          >
            {isEditable ? "Save" : "Edit"}
          </Text>
        }
      >
        <Icon name={isEditable ? "checkmark" : "edit"} size="30px" />
      </ExpandButton>
    </Stack>
  ));
};

const ContactInfoPage = () => (
  <AccountPageLayout>
    <ContactInfoSection />
  </AccountPageLayout>
);

export default ContactInfoPage;
