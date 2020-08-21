import React, { useState, useEffect } from "react";

import { Box, Flex, Image, Stack, Text } from "@chakra-ui/core";
import QRCode from "qrcode.react";

import AccountPageLayout from "./components/AccountPageLayout";
import {
  InfoFieldText,
  InfoFieldLabel,
} from "../../components/Shared/family/InfoField";
import ReminderItem from "./components/ReminderItem";

import { observable } from "mobx";
import { withTheme } from "emotion-theming";

import { Reminder } from "../../Models/Reminder";
import * as firebase from "firebase";
import { AuthContext } from "../../views/Auth/index";
import { Redirect } from "react-router-dom";

const Dashboard = withTheme(({ theme }) => {
  const [newUser, setNewUser] = useState(false);

  useEffect(() => {
    const ref = firebase
      .firestore()
      .collection(`${firebase.auth().currentUser?.uid}`);

    ref.onSnapshot((s) => setNewUser(s.empty));
  }, [newUser]);

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

  return !newUser ? (
    <Stack
      flexGrow={1}
      backgroundColor="petcode.neutral.200"
      padding={10}
      spacing={5}
    >
      <Flex
        direction="row"
        alignItems="center"
        rounded="lg"
        backgroundColor="#F3C66B"
        backgroundImage="url(/media/paw-icon.png)"
        backgroundRepeat="no-repeat"
        backgroundPosition="0% 50%"
        width="100%"
      >
        <Flex direction="column" marginLeft={40}>
          <Text color="petcode.neutral.700" fontSize="5xl" fontWeight="bold">
            Max
          </Text>
          <Text color="petcode.neutral.500" fontSize="2xl" fontWeight="thin">
            Weimaraner &middot; John Doe
          </Text>
        </Flex>
        <Box flexGrow={1} />
        <Image
          rounded="lg"
          alt="Dog on yellow background"
          src="/media/dog-on-yellow-background-full.png"
        />
      </Flex>
      <Stack isInline justifyContent="space-between" spacing={5}>
        <Flex
          direction="row"
          rounded="lg"
          backgroundColor="white"
          flexBasis="50%"
          padding={6}
        >
          <Flex direction="column" marginRight={4}>
            <Text color="petcode.neutral.700" fontSize="3xl">
              Max's Code
            </Text>
            <Text color="petcode.neutral.500" fontSize="xl" fontWeight="thin">
              Scan this code to view your pet's public profile.
            </Text>
          </Flex>
          <Box alignSelf="center">
            <QRCode
              value="https://petcodeusa.com"
              size={200}
              fgColor={theme.colors.petcode.blue[400]}
            />
          </Box>
        </Flex>
        <Flex
          direction="column"
          rounded="lg"
          backgroundColor="white"
          flexBasis="50%"
          padding={6}
        >
          <Text color="petcode.neutral.700" fontSize="3xl" marginBottom={3}>
            Account Information
          </Text>
          <Box>
            <InfoFieldText>John Doe</InfoFieldText>
            <InfoFieldLabel>Name</InfoFieldLabel>
          </Box>
          <Box>
            <InfoFieldText>example@gmail.com</InfoFieldText>
            <InfoFieldLabel>Email</InfoFieldLabel>
          </Box>
          <Box>
            <InfoFieldText>*******</InfoFieldText>
            <InfoFieldLabel>Password</InfoFieldLabel>
          </Box>
          <Box>
            <InfoFieldText>Max</InfoFieldText>
            <InfoFieldLabel>Pet Name</InfoFieldLabel>
          </Box>
        </Flex>
      </Stack>
      <Flex
        direction="column"
        rounded="lg"
        backgroundColor="white"
        flexBasis="100%"
        padding={6}
      >
        <Text color="petcode.neutral.700" fontSize="3xl" marginBottom={3}>
          Reminders
        </Text>
        {reminders.map((reminder, idx) => (
          <ReminderItem key={idx} reminder={reminder} />
        ))}
      </Flex>
    </Stack>
  ) : (
    <Redirect to="/petinfo" />
  );
});

const DashboardPage = () => (
  <AccountPageLayout>
    <Dashboard />
  </AccountPageLayout>
);

export default DashboardPage;
