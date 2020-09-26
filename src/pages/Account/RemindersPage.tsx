import React, { useState } from "react";

import {
  Flex,
  Icon,
  Modal,
  ModalOverlay,
  ModalCloseButton,
  ModalContent,
  ModalBody,
  ModalHeader,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/core";

import AccountPageLayout from "./components/AccountPageLayout";
import ReminderItem from "./components/ReminderItem";
import BaseButton from "../../components/Shared/button/BaseButton";
import ExpandButton from "../../components/Shared/button/ExpandButton";
import {
  InfoFieldLabel,
  InfoFieldInput,
  InfoFieldSelect,
} from "./components/InfoField";

import { action, observable, IObservableValue } from "mobx";
import { useObserver } from "mobx-react";

import { Reminder } from "../../Models/Reminder";

type AddReminderModalProps = {
  isShown: IObservableValue<boolean>;
  reminders: Reminder[];
};

const AddReminderModal: React.FC<AddReminderModalProps> = ({
  isShown,
  reminders,
}) => {
  const DEFAULT_VALUES = {
    name: "",
    date: "",
    time: "",
    frequency: "One-Time",
    notificationMethod: "Email",
    enabled: true,
  };

  const [reminder] = useState(() =>
    observable({ ...DEFAULT_VALUES } as Reminder)
  );
  const toast = useToast();

  return useObserver(() => (
    <Modal
      isOpen={isShown.get()}
      onClose={action(() => isShown.set(false))}
      isCentered
    >
      <ModalOverlay />
      <ModalContent rounded="lg">
        <ModalHeader
          color="petcode.neutral.700"
          fontSize="3xl"
          fontWeight="normal"
        >
          <Text>Create Reminder</Text>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <InfoFieldInput
            placeholder="Reminder Name"
            value={reminder.name}
            onChange={action(
              (e: React.ChangeEvent<HTMLInputElement>) =>
                (reminder.name = e.target.value)
            )}
          />
          <InfoFieldLabel>Reminder Name</InfoFieldLabel>
          <InfoFieldInput
            type="date"
            width="auto"
            display="inline"
            value={reminder.date}
            onChange={action(
              (e: React.ChangeEvent<HTMLInputElement>) =>
                (reminder.date = e.target.value)
            )}
          />
          <InfoFieldInput
            type="time"
            width="auto"
            display="inline"
            value={reminder.time}
            onChange={action(
              (e: React.ChangeEvent<HTMLInputElement>) =>
                (reminder.time = e.target.value)
            )}
          />
          <InfoFieldLabel>Reminder Date</InfoFieldLabel>
          <InfoFieldSelect
            value={reminder.frequency}
            onChange={action((e) => (reminder.frequency = e.target.value))}
          >
            <option>One-Time</option>
            <option>Daily</option>
            <option>Weekly</option>
            <option>Monthly</option>
          </InfoFieldSelect>
          <InfoFieldLabel>Reminder Frequency</InfoFieldLabel>
          <InfoFieldSelect
            value={reminder.notificationMethod}
            onChange={action(
              (e) => (reminder.notificationMethod = e.target.value)
            )}
          >
            <option>App Notification</option>
            <option>Email</option>
          </InfoFieldSelect>
          <InfoFieldLabel>Reminder Notification Method</InfoFieldLabel>
          <BaseButton
            variantColor="petcode.blue"
            color="white"
            marginTop={3}
            onClick={action(() => {
              reminders.push({ ...reminder });
              Object.assign(reminder, DEFAULT_VALUES);
              isShown.set(false);
              toast({
                title: "Reminder created.",
                description: "Your reminder was created successfully.",
                status: "success",
                duration: 5000,
                isClosable: true,
              });
            })}
          >
            <Text>Save</Text>
          </BaseButton>
        </ModalBody>
      </ModalContent>
    </Modal>
  ));
};

type OverlaysProps = {
  isEditable: IObservableValue<boolean>;
  isModalShown: IObservableValue<boolean>;
};

const Overlays: React.FC<OverlaysProps> = ({ isEditable, isModalShown }) => {
  const toast = useToast();

  return (
    <Stack
      alignItems="end"
      spacing={2}
      position="fixed"
      bottom={5}
      right={5}
      color="petcode.neutral.700"
    >
      <ExpandButton
        rounded="full"
        padding={4}
        backgroundColor="petcode.yellow.400"
        onClick={action(() => {
          if (isEditable.get()) {
            toast({
              title: "Reminders saved.",
              description: "Your reminders was saved successfully.",
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
      <ExpandButton
        rounded="full"
        padding={4}
        backgroundColor="petcode.yellow.400"
        onClick={action(() => isModalShown.set(!isModalShown.get()))}
        expandChildren={
          <Text
            fontSize="xl"
            fontWeight="thin"
            textTransform="uppercase"
            whiteSpace="nowrap"
            marginRight={2}
          >
            Add Reminder
          </Text>
        }
      >
        <Text fontSize="5xl" lineHeight={0.5}>
          +
        </Text>
      </ExpandButton>
    </Stack>
  );
};

const RemindersSection = () => {
  const [reminders] = useState(
    observable([
      {
        name: "Example reminder",
        date: "2020-08-02",
        time: "09:00",
        frequency: "Weekly",
        notificationMethod: "Email",
        enabled: true,
      },
      {
        name: "Example reminder",
        date: "2020-08-02",
        time: "09:00",
        frequency: "Weekly",
        notificationMethod: "Email",
        enabled: true,
      },
      {
        name: "Example reminder",
        date: "2020-08-02",
        time: "09:00",
        frequency: "Weekly",
        notificationMethod: "Email",
        enabled: true,
      },
      {
        name: "Example reminder",
        date: "2020-08-02",
        time: "09:00",
        frequency: "Weekly",
        notificationMethod: "Email",
        enabled: true,
      },
      {
        name: "Example reminder",
        date: "2020-08-02",
        time: "09:00",
        frequency: "Weekly",
        notificationMethod: "Email",
        enabled: true,
      },
    ] as Reminder[])
  );

  const [isEditable] = useState(() => observable.box(false));
  const [isModalShown] = useState(() => observable.box(false));

  return useObserver(() => (
    <Flex
      direction="column"
      flexGrow={1}
      paddingX={10}
      zIndex={1}
    >
      <Flex
        direction="column"
        rounded="lg"
        backgroundColor="white"
        padding={6}
        boxShadow="0px 4px 20px rgba(0, 0, 0, 0.05)"
      >
        <Text color="petcode.neutral.700" fontSize="3xl" marginBottom={3}>
          Reminders
        </Text>
        {reminders.map((reminder, idx) => (
          <ReminderItem
            key={idx}
            reminder={reminder}
            isEditable={isEditable.get()}
          />
        ))}
      </Flex>
      <Overlays isEditable={isEditable} isModalShown={isModalShown} />
      <AddReminderModal reminders={reminders} isShown={isModalShown} />
    </Flex>
  ));
};

const RemindersPage = () => (
  <AccountPageLayout>
    <RemindersSection />
  </AccountPageLayout>
);

export default RemindersPage;
