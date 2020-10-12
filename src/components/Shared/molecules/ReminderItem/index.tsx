import React, { useState } from "react";

import {
  Box,
  Divider,
  Flex,
  FlexProps,
  Icon,
  Input,
  InputProps,
  Select,
  SelectProps,
  Stack,
  Text,
} from "@chakra-ui/core";

import moment from "moment";

import { Reminder } from "../../../../Models/Reminder";

import { ReminderInputStyle, ReminderSelectStyle } from "./styles";

export const ReminderInput: React.FC<InputProps> = (props) => (
  <Input {...ReminderInputStyle} {...props} />
);

export const ReminderSelect: React.FC<SelectProps> = (props) => (
  <Select {...ReminderSelectStyle} {...props} />
);

type ReminderItemProps = {
  reminder: Reminder;
  isEditable?: boolean;
  onSave?: (reminder: Reminder) => void;
  onDelete?: () => void;
} & FlexProps;

const ReminderItem: React.FC<ReminderItemProps> = ({
  reminder,
  isEditable = false,
  onSave = () => {},
  onDelete = () => {},
  ...props
}) => {
  const [editedReminder, setEditedReminder] = useState(reminder);
  const [isBeingEdited, setIsBeingEdited] = useState(false);

  return (
    <Flex
      direction="row"
      rounded="lg"
      backgroundColor="white"
      paddingX={6}
      paddingY={3}
      boxShadow="0px 4px 20px rgba(0, 0, 0, 0.05)"
      fontSize="xl"
      {...props}
    >
      <Box>
        <Text color="petcode.blue.400">{reminder.name}</Text>
        <Text color="petcode.neutral.400">
          Recurring :{" "}
          {isBeingEdited ? (
            <ReminderSelect
              value={editedReminder.frequency}
              onChange={(e) =>
                setEditedReminder({
                  ...editedReminder,
                  frequency: e.target.value,
                })
              }
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
          {isBeingEdited ? (
            <ReminderInput
              type="date"
              value={editedReminder.date}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setEditedReminder({ ...editedReminder, date: e.target.value })
              }
            />
          ) : (
            moment(reminder.date).format("M/D")
          )}
        </Text>
        <Text color="petcode.yellow.400" fontSize="md">
          {isBeingEdited ? (
            <ReminderInput
              type="time"
              color="petcode.yellow.400"
              fontSize="md"
              value={editedReminder.time}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setEditedReminder({ ...editedReminder, time: e.target.value })
              }
            />
          ) : (
            moment(reminder.time, "HH:mm").format("LT")
          )}
        </Text>
      </Flex>
      {isEditable && (
        <Stack isInline alignItems="center" spacing={4}>
          <Divider
            alignSelf="stretch"
            orientation="vertical"
            color="petcode.neutral.300"
            borderLeftWidth={2}
            marginX={4}
            marginY={0}
          />
          {!isBeingEdited ? (
            <Icon
              name="edit"
              color="petcode.neutral.600"
              cursor="pointer"
              onClick={() => {
                setIsBeingEdited(true);
              }}
              size="28px"
            />
          ) : (
            <Icon
              name="checkmark"
              color="green.400"
              cursor="pointer"
              onClick={() => {
                setIsBeingEdited(false);
                onSave(editedReminder);
              }}
              size="28px"
            />
          )}
          <Icon
            name="delete"
            color="red.400"
            cursor="pointer"
            size="28px"
            onClick={onDelete}
          />
        </Stack>
      )}
    </Flex>
  );
};

export default ReminderItem;
