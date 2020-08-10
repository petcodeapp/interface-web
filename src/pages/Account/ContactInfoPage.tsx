import React, { useState } from "react";

import { Box, Flex, FlexProps, Icon, Text } from "@chakra-ui/core";

import ExpandButton from "../../components/Shared/button/ExpandButton";
import AccountPageLayout from "./components/AccountPageLayout";
import Checkbox from "./components/Checkbox";
import {
  InfoFieldRow,
  InfoFieldText,
  InfoFieldLabel,
  InfoFieldInput,
} from "./components/InfoField";

import { action, observable, IObservableValue } from "mobx";
import { observer, useObserver } from "mobx-react";

import { ContactInfo } from "../../Models/ContactInfo";

type ContactInfoCardProps = {
  contactInfo: ContactInfo;
  isEditable: IObservableValue<boolean>;
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
          {isEditable.get() ? (
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
          cursor={isEditable.get() ? "pointer" : "default"}
          onClick={action(
            () =>
              isEditable.get() &&
              (contactInfo.name.visible = !contactInfo.name.visible)
          )}
        />
      </InfoFieldRow>
      <InfoFieldRow>
        <Box flexBasis="60%">
          {isEditable.get() ? (
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
          cursor={isEditable.get() ? "pointer" : "default"}
          onClick={action(
            () =>
              isEditable.get() &&
              (contactInfo.address.visible = !contactInfo.address.visible)
          )}
        />
      </InfoFieldRow>
      <InfoFieldRow>
        <Box flexBasis="60%">
          {isEditable.get() ? (
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
          cursor={isEditable.get() ? "pointer" : "default"}
          onClick={action(
            () =>
              isEditable.get() &&
              (contactInfo.phoneNumber.visible = !contactInfo.phoneNumber
                .visible)
          )}
        />
      </InfoFieldRow>
      <InfoFieldRow>
        <Box flexBasis="60%">
          {isEditable.get() ? (
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
          cursor={isEditable.get() ? "pointer" : "default"}
          onClick={action(
            () =>
              isEditable.get() &&
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

  return useObserver(() => (
    <Flex
      direction="column"
      flexGrow={1}
      backgroundColor="petcode.neutral.200"
      padding={10}
    >
      {contactInfos.map((contactInfo, idx) => (
        <ContactInfoCard
          key={idx}
          isEditable={isEditable}
          contactInfo={contactInfo}
          marginBottom={contactInfos.length - 1 != idx ? 10 : 0}
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
        onClick={action(() => isEditable.set(!isEditable.get()))}
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
    </Flex>
  ));
};

const ContactInfoPage = () => (
  <AccountPageLayout>
    <ContactInfoSection />
  </AccountPageLayout>
);

export default ContactInfoPage;
