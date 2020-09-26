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
    <Flex direction="row" fontSize="xl">
      <Box>
        <Text color="petcode.blue.400">
          {reminder.name}
        </Text>
        <Text color="petcode.neutral.400">
          Recurring : {isEditable ? (
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
          )}
        </Text>
      </Box>
      <Box flexGrow={1} />
      <Flex direction="column" justifyContent="space-between" alignItems="end">
        <Text color="petcode.blue.400">
          {isEditable ? (
            <ReminderInput
              type="date"
              value={reminder.date}
              onChange={action(
                (e: React.ChangeEvent<HTMLInputElement>) =>
                  (reminder.date = e.target.value)
              )}
            />
          ) : (
            moment(reminder.date).format("M/D")
          )}
        </Text>
        <Text color="petcode.yellow.400" fontSize="md">
          {isEditable ? (
            <ReminderInput
              type="time"
              color="petcode.yellow.400"
              fontSize="md"
              value={reminder.time}
              onChange={action(
                (e: React.ChangeEvent<HTMLInputElement>) =>
                  (reminder.time = e.target.value)
              )}
            />
          ) : (
            moment(reminder.time, "HH:mm").format("LT")
          )}
        </Text>
      </Flex>
    </Flex>
  )
);

export default ReminderItem;
