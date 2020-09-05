import React, { useState, useEffect } from "react";

import { Box, Flex, Image, Stack, Text } from "@chakra-ui/core";
import QRCode from "qrcode.react";

import AccountPageLayout from "./components/AccountPageLayout";
import { InfoFieldText, InfoFieldLabel } from "./components/InfoField";
import ReminderItem from "./components/ReminderItem";

import { observable } from "mobx";
import { withTheme } from "emotion-theming";

import { Reminder } from "../../Models/Reminder";
import * as firebase from "firebase";
import { AuthContext } from "../../views/Auth/index";
import { Redirect } from "react-router-dom";
import { auth } from "../../firebase/index";

const Dashboard = withTheme(({ theme }) => {
  const [loading, setLoading] = useState(true);
  const [newUser, setNewUser] = useState<boolean | null>(null);
  const [user, setUser] = useState<any>({});
  const [pets, setPets] = useState<any>([]);

  useEffect(() => {
    const fetchData = async () => {
      const ref = firebase
        .firestore()
        .collection(`users`)
        .doc(`${firebase.auth().currentUser?.uid}`);

      ref.onSnapshot((s) => {
        setNewUser(s.exists);
        setUser(s.data());

        // console.log(s.exists);

        if (s.exists) {
          const d: Array<any> = s.data()?.pets;

          // d.forEach(const petRef = firebase.firestore().collection('pets').doc(d).onSnapshot(z => console.log(z))
          d.forEach((x) => {
            firebase
              .firestore()
              .collection("pets")
              .doc(x)
              .onSnapshot((z) => {
                // console.log(z.data());
                setPets(pets.concat(z.data()));
              });
          });
        }

        setLoading(false);
      });
    };

    fetchData();
  }, [newUser, pets]);

  return !loading ? (
    newUser ? (
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
              {pets[0]?.name}
            </Text>
            <Text color="petcode.neutral.500" fontSize="2xl" fontWeight="thin">
              {pets[0]?.breed} &middot; {pets[0]?.contact_1.name}
            </Text>
          </Flex>
          <Box flexGrow={1} />
          <Image
            rounded="lg"
            alt="Dog on yellow background"
            src={pets[0]?.profileUrl}
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
              <InfoFieldText>
                {firebase.auth().currentUser?.displayName}
              </InfoFieldText>
              <InfoFieldLabel>Name</InfoFieldLabel>
            </Box>
            <Box>
              <InfoFieldText>
                {firebase.auth().currentUser?.email}
              </InfoFieldText>
              <InfoFieldLabel>Email</InfoFieldLabel>
            </Box>
            <Box>
              <InfoFieldText>*******</InfoFieldText>
              <InfoFieldLabel>Password</InfoFieldLabel>
            </Box>
            <Box>
              <InfoFieldText>{pets[0]?.name}</InfoFieldText>
              <InfoFieldLabel>Pet Name</InfoFieldLabel>
            </Box>
          </Flex>
        </Stack>
        {pets[0]?.reminders.length > 0 && (
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
            {pets[0]?.reminders.map((reminder: any, idx: number) => (
              <ReminderItem key={idx} reminder={reminder} />
            ))}
          </Flex>
        )}
      </Stack>
    ) : (
      <Redirect to="/petinfo" />
    )
  ) : (
    <Text>Loading </Text>
  );
});

const DashboardPage = () => (
  <AccountPageLayout>
    <Dashboard />
  </AccountPageLayout>
);

export default DashboardPage;
