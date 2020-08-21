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
import BaseCheckbox from "../../components/Shared/input/BaseCheckbox";
import {
  InfoFieldRow,
  InfoFieldText,
  InfoFieldLabel,
  InfoFieldInput,
} from "../../components/Shared/family/InfoField";

import { action, observable } from "mobx";
import { observer, useObserver } from "mobx-react";

import { ContactInfo } from "../../Models/ContactInfo";

type ContactInfoCardProps = {
  contactInfo: ContactInfo;
  isEditable: boolean;
} & FlexProps;

const ContactInfoCard: React.FC<ContactInfoCardProps> = observer(
  ({ contactInfo, isEditable, ...props }) => (
    <Flex
      direction="column"
      rounded="lg"
      backgroundColor="white"
      padding={6}
      {...props}
    >
      <InfoFieldRow fontSize="2xl" marginBottom={3}>
        <Text color="petcode.neutral.700">
          {contactInfo.level} Contact Information
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
        <BaseCheckbox
          isChecked={contactInfo.name.visible}
          isDisabled={!isEditable}
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
        <BaseCheckbox
          isChecked={contactInfo.address.visible}
          isDisabled={!isEditable}
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
        <BaseCheckbox
          isChecked={contactInfo.phoneNumber.visible}
          isDisabled={!isEditable}
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
        <BaseCheckbox
          isChecked={contactInfo.email.visible}
          isDisabled={!isEditable}
          onClick={action(
            () =>
              isEditable &&
              (contactInfo.email.visible = !contactInfo.email.visible)
          )}
        />
      </InfoFieldRow>
    </Flex>
  )
);

const ContactInfoSection = () => {
  const [contactInfos] = useState(() =>
    observable([
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
    ])
  );

  const [isEditable] = useState(() => observable.box(false));
  const toast = useToast();

  return useObserver(() => (
    <Stack
      flexGrow={1}
      backgroundColor="petcode.neutral.200"
      padding={10}
      spacing={5}
    >
      {contactInfos.map((contactInfo, idx) => (
        <ContactInfoCard
          key={idx}
          isEditable={isEditable.get()}
          contactInfo={contactInfo}
        />
      ))}
      <ExpandButton
        position="fixed"
        bottom={5}
        right={5}
        rounded="full"
        color="petcode.neutral.700"
        padding={4}
        backgroundColor="petcode.yellow.400"
        onClick={action(() => {
          if (isEditable.get()) {
            toast({
              title: "Contact information saved.",
              description: "Your contact information was saved successfully.",
              status: "success",
              duration: 5000,
              isClosable: true,
            });
          }
          isEditable.set(!isEditable.get());
        })}
        expandChildren={
          <Text
            fontSize="xl"
            fontWeight="thin"
            textTransform="uppercase"
            marginRight={2}
          >
            {isEditable.get() ? "Save" : "Edit"}
          </Text>
        }
      >
        <Icon name={isEditable.get() ? "checkmark" : "edit"} size="30px" />
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
