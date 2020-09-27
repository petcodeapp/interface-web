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
} from "../../components/Shared/family/InfoField";

import { useObserver } from "mobx-react";

import { Reminder } from "../../Models/Reminder";
import { AuthContext } from "../../views/Auth/index";

type AddReminderModalProps = {
  isShown: boolean;
  setShown: (a: boolean) => void;
};

const AddReminderModal: React.FC<AddReminderModalProps> = ({
  isShown,
  setShown,
}) => {
  const service = React.useContext(AuthContext);

  const [n, setN] = useState("");
  const [d, setD] = useState("");
  const [nM, setNM] = useState("Email");
  const [f, setF] = useState("One-Time");
  const [e, setE] = useState(true);
  const [t, setT] = useState("");

  const toast = useToast();

  return (
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
            value={n}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setN(e.target.value)
            }
          />
          <InfoFieldLabel>Reminder Name</InfoFieldLabel>
          <InfoFieldInput
            type="date"
            width="auto"
            display="inline"
            value={d}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setD(e.target.value)
            }
          />
          <InfoFieldInput
            type="time"
            width="auto"
            display="inline"
            value={t}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setT(e.target.value)
            }
          />
          <InfoFieldLabel>Reminder Date</InfoFieldLabel>
          <InfoFieldSelect value={f} onChange={(e) => setF(e.target.value)}>
            <option>One-Time</option>
            <option>Daily</option>
            <option>Weekly</option>
            <option>Monthly</option>
          </InfoFieldSelect>
          <InfoFieldLabel>Reminder Frequency</InfoFieldLabel>
          <InfoFieldSelect value={nM} onChange={(e) => setNM(e.target.value)}>
            <option>App Notification</option>
            <option>Email</option>
          </InfoFieldSelect>
          <InfoFieldLabel>Reminder Notification Method</InfoFieldLabel>
          <BaseButton
            variantColor="petcode.blue"
            color="white"
            marginTop={3}
            onClick={() => {
              service.addNewReminder({
                name: n,
                date: d,
                enabled: e,
                notificationMethod: nM,
                frequency: f,
                time: t,
              });
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
  );
};

type OverlaysProps = {
  setModalShown: (a: boolean) => void;
};

const Overlays: React.FC<OverlaysProps> = ({ setModalShown }) => (
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
  const service = React.useContext(AuthContext);
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
    <Stack flexGrow={1} paddingX={10} zIndex={1} spacing={6}>
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
            ]);
          }}
          onDelete={() => {
            // DELETE REMINDER
            setReminders([
              ...reminders.slice(0, idx),
              ...reminders.slice(idx + 1),
            ]);
          }}
        />
      ))}
      <Overlays setModalShown={setModalShown} />
      <AddReminderModal isShown={isModalShown} setShown={setModalShown} />
    </Stack>
  );
};

const RemindersPage: React.FC<any> = ({ variants }) => (
  <AccountPageLayout variants={variants}>
    <RemindersSection />
  </AccountPageLayout>
);

export default RemindersPage;
