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

import { useObserver } from "mobx-react";

import { Reminder } from "../../Models/Reminder";

type AddReminderModalProps = {
  isShown: boolean;
  setShown: (a: boolean) => void;
};

const AddReminderModal: React.FC<AddReminderModalProps> = ({
  isShown,
  setShown,
}) => {
  const DEFAULT_VALUES: Reminder = {
    name: "",
    date: "",
    time: "",
    frequency: "One-Time",
    notificationMethod: "Email",
    enabled: true,
  };

  const [reminder, setReminder] = useState({ ...DEFAULT_VALUES });
  const toast = useToast();

  return useObserver(() => (
    <Modal isOpen={isShown} onClose={() => setShown(false)} isCentered>
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
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setReminder({ ...reminder, name: e.target.value })
            }
          />
          <InfoFieldLabel>Reminder Name</InfoFieldLabel>
          <InfoFieldInput
            type="date"
            width="auto"
            display="inline"
            value={reminder.date}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setReminder({ ...reminder, date: e.target.value })
            }
          />
          <InfoFieldInput
            type="time"
            width="auto"
            display="inline"
            value={reminder.time}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setReminder({ ...reminder, time: e.target.value })
            }
          />
          <InfoFieldLabel>Reminder Date</InfoFieldLabel>
          <InfoFieldSelect
            value={reminder.frequency}
            onChange={(e) =>
              setReminder({ ...reminder, frequency: e.target.value })
            }
          >
            <option>One-Time</option>
            <option>Daily</option>
            <option>Weekly</option>
            <option>Monthly</option>
          </InfoFieldSelect>
          <InfoFieldLabel>Reminder Frequency</InfoFieldLabel>
          <InfoFieldSelect
            value={reminder.notificationMethod}
            onChange={(e) =>
              setReminder({ ...reminder, notificationMethod: e.target.value })
            }
          >
            <option>App Notification</option>
            <option>Email</option>
          </InfoFieldSelect>
          <InfoFieldLabel>Reminder Notification Method</InfoFieldLabel>
          <BaseButton
            variantColor="petcode.blue"
            color="white"
            marginTop={3}
            onClick={() => {
              // INSERT REMINDER TO BACKEND HERE
              setReminder({ ...DEFAULT_VALUES });
              setShown(false);
              toast({
                title: "Reminder created.",
                description: "Your reminder was created successfully.",
                status: "success",
                duration: 5000,
                isClosable: true,
              });
            }}
          >
            <Text>Save</Text>
          </BaseButton>
        </ModalBody>
      </ModalContent>
    </Modal>
  ));
};

type OverlaysProps = {
  setModalShown: (a: boolean) => void;
};

const Overlays: React.FC<OverlaysProps> = ({
  setModalShown,
}) => (
  <ExpandButton
    rounded="full"
    bottom={5}
    right={5}
    position="fixed"
    padding={4}
    backgroundColor="petcode.yellow.400"
    onClick={() => setModalShown(true)}
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
);

const RemindersSection = () => {
  const [reminders, setReminders] = useState([
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
  ] as Reminder[]);

  const [isModalShown, setModalShown] = useState(false);

  return (
    <Stack
      flexGrow={1}
      paddingX={10}
      zIndex={1}
      spacing={6}
    >
      <Text color="petcode.neutral.700" fontSize="3xl" marginBottom={3}>
        Reminders
      </Text>
      {reminders.map((reminder, idx) => (
        <ReminderItem
          marginLeft={3}
          key={idx}
          reminder={reminder}
          isEditable
          onSave={(newReminder) => {
            // EDIT REMINDER
            setReminders([
              ...reminders.slice(0, idx),
              newReminder,
              ...reminders.slice(idx + 1),
            ])
          }}
          onDelete={() => {
            // DELETE REMINDER
            setReminders([
              ...reminders.slice(0, idx),
              ...reminders.slice(idx + 1),
            ])
          }}
        />
      ))}
      <Overlays setModalShown={setModalShown} />
      <AddReminderModal isShown={isModalShown} setShown={setModalShown} />
    </Stack>
  );
};

const RemindersPage = () => (
  <AccountPageLayout>
    <RemindersSection />
  </AccountPageLayout>
);

export default RemindersPage;
