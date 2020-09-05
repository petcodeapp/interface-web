import React from "react";

import {
  Box,
  Flex,
  Input,
  InputProps,
  Select,
  SelectProps,
  Text,
} from "@chakra-ui/core";
import BaseCheckbox from "../../../components/Shared/input/BaseCheckbox";
import DatePicker from "../../../components/Shared/input/DatePicker";

import { action } from "mobx";
import { observer } from "mobx-react";
import moment from "moment";

import { Reminder } from "../../../Models/Reminder";

const ReminderInput: React.FC<InputProps> = (props) => (
  <Input
    size="sm"
    variant="flushed"
    color="petcode.blue.400"
    fontSize="xl"
    fontFamily="body"
    height="auto"
    width="auto"
    display="inline"
    borderColor="petcode.neutral.400"
    _focus={{ borderColor: "petcode.blue.400" }}
    {...props}
  />
);

const ReminderSelect: React.FC<SelectProps> = (props) => (
  <Select
    variant="flushed"
    size="sm"
    color="petcode.blue.400"
    fontFamily="body"
    fontSize="xl"
    borderColor="petcode.neutral.400"
    paddingLeft={3}
    _focus={{ borderColor: "petcode.blue.400" }}
    rootProps={{ width: "auto", display: "inline-block" }}
    {...props}
  />
);

type ReminderItemProps = {
  reminder: Reminder;
  isEditable?: boolean;
};

const ReminderItem: React.FC<ReminderItemProps> = observer(
  ({ reminder, isEditable = false }) => (
    <Flex direction="column" fontSize="xl">
      <Flex direction="row" alignItems="center">
        <BaseCheckbox
          size={24}
          isChecked={reminder.enabled}
          isDisabled={!isEditable}
          onClick={action(
            () => isEditable && (reminder.enabled = !reminder.enabled)
          )}
        />
        <Text color="petcode.blue.400" marginLeft={2}>
          {reminder.name}
        </Text>
      </Flex>
      <Flex direction="row" color="petcode.neutral.400" marginLeft={8}>
        {isEditable ? (
          <DatePicker
            selected={reminder.date}
            onChange={action((date) => (reminder.date = date as Date))}
            customInput={<ReminderInput />}
          />
        ) : (
          moment(reminder.date).format("M/D/YY")
        )}{" "}
        @{" "}
        {isEditable ? (
          <ReminderInput
            type="time"
            value={reminder.time}
            onChange={action(
              (e: React.ChangeEvent<HTMLInputElement>) =>
                (reminder.time = e.target.value)
            )}
          />
        ) : (
          moment(reminder.time, "HH:mm").format("LT")
        )}{" "}
        /{" "}
        {isEditable ? (
          <ReminderSelect
            value={reminder.frequency}
            onChange={action(
              (e: React.ChangeEvent<HTMLSelectElement>) =>
                (reminder.frequency = e.target.value)
            )}
          >
            <option>One-Time</option>
            <option>Daily</option>
            <option>Weekly</option>
            <option>Monthly</option>
          </ReminderSelect>
        ) : (
          reminder.frequency
        )}{" "}
        /{" "}
        {isEditable ? (
          <ReminderSelect
            value={reminder.notificationMethod}
            onChange={action(
              (e: React.ChangeEvent<HTMLSelectElement>) =>
                (reminder.notificationMethod = e.target.value)
            )}
          >
            <option>App Notification</option>
            <option>Email</option>
          </ReminderSelect>
        ) : (
          reminder.notificationMethod
        )}
      </Flex>
    </Flex>
  )
);

export default ReminderItem;
