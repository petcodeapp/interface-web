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
import { AuthContext } from '../../views/Auth/index';

type AddReminderModalProps = {
  isShown: IObservableValue<boolean>;
  reminders: Reminder[];
};

const AddReminderModal: React.FC<AddReminderModalProps> = ({
  isShown,
  reminders,
}) => {

  const service = React.useContext(AuthContext)

  const [n, setN] = useState("");
  const [d, setD] = useState("")
  const [nM, setNM] = useState("Email")
  const [f, setF] = useState("One-Time")
  const [e, setE] = useState(true)
  const [t, setT] = useState("")


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
            value={n}
            onChange={action(
              (e: React.ChangeEvent<HTMLInputElement>) =>
                setN(e.target.value)
            )}
          />
          <InfoFieldLabel>Reminder Name</InfoFieldLabel>
          <InfoFieldInput
            type="date"
            width="auto"
            display="inline"
            value={d}
            onChange={action(
              (e: React.ChangeEvent<HTMLInputElement>) =>
                setD(e.target.value)
            )}
          />
          <InfoFieldInput
            type="time"
            width="auto"
            display="inline"
            value={t}
            onChange={action(
              (e: React.ChangeEvent<HTMLInputElement>) =>
                setT(e.target.value)
            )}
          />
          <InfoFieldLabel>Reminder Date</InfoFieldLabel>
          <InfoFieldSelect
            value={f}
            onChange={e => (setF(e.target.value))}
          >
            <option>One-Time</option>
            <option>Daily</option>
            <option>Weekly</option>
            <option>Monthly</option>
          </InfoFieldSelect>
          <InfoFieldLabel>Reminder Frequency</InfoFieldLabel>
          <InfoFieldSelect
            value={nM}
            onChange={action(
              (e) => (setNM(e.target.value))
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
              service.addNewReminder({
                name: n,
                date: d,
                enabled: e,
                notificationMethod: nM,
                frequency: f,
                time: t
              })
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
  const service = React.useContext(AuthContext)
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
      backgroundColor="petcode.neutral.200"
      padding={10}
    >
      <Flex direction="column" rounded="lg" backgroundColor="white" padding={6}>
        <Text color="petcode.neutral.700" fontSize="3xl" marginBottom={3}>
          Reminders
        </Text>
        {service.pets[0].reminders.map((reminder: any, idx: number) => {
          console.log(idx)
          return (
          <ReminderItem
            index={idx}
            reminder={reminder}
            isEditable={isEditable.get()}
          />
        )})}
      </Flex>
      <Overlays isEditable={isEditable} isModalShown={isModalShown} />
      <AddReminderModal reminders={reminders} isShown={isModalShown} />
    </Flex>
  ));
};

const RemindersPage: React.FC<any> = ({ variants }) => (
  <AccountPageLayout variants={variants}>
    <RemindersSection />
  </AccountPageLayout>
);

export default RemindersPage;
