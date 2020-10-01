import React from "react";

import { Box, Flex, Icon, Stack, Text, useTheme } from "@chakra-ui/core";
import QRCode from "qrcode.react";

import AccountPageLayout from "../../components/Shared/layouts/AccountPageLayout";
import {
  InfoFieldText,
  InfoFieldLabel,
} from "../../components/Shared/molecules/InfoField";
import ReminderItem from "../../components/Shared/molecules/ReminderItem";

import { AuthContext } from "../../views/Auth/index";
import { useObserver } from "mobx-react";

import { PetCodeTheme } from "../../theme";

const DashboardPage = () => {
  // const [loading, setLoading] = useState(true);
  // const [newUser, setNewUser] = useState<boolean | null>(null);
  // const [user, setUser] = useState<any>({});
  // const [pets, setPets] = useState<any>([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const ref = firebase
  //       .firestore()
  //       .collection(`users`)
  //       .doc(`${firebase.auth().currentUser?.uid}`);

  //     ref.onSnapshot((s) => {
  //       setNewUser(s.exists);
  //       setUser(s.data());

  //       // console.log(s.exists);

  //       if (s.exists) {
  //         const d: Array<any> = s.data()?.pets;

  //         // d.forEach(const petRef = firebase.firestore().collection('pets').doc(d).onSnapshot(z => console.log(z))
  //         d.forEach((x) => {
  //           firebase
  //             .firestore()
  //             .collection("pets")
  //             .doc(x)
  //             .onSnapshot((z) => {
  //               // console.log(z.data());
  //               setPets(pets.concat(z.data()));
  //             });
  //         });
  //       }

  //       setLoading(false);
  //     });
  //   };

  //   fetchData();
  // }, [newUser, pets]);

  const theme = useTheme() as PetCodeTheme;
  const service = React.useContext(AuthContext);

  return useObserver(() => (
    <AccountPageLayout>
      <Stack flexGrow={1} paddingX={10} spacing={5} zIndex={1}>
        <Flex
          position="relative"
          rounded="lg"
          direction="row"
          boxShadow="0px 4px 20px rgba(0, 0, 0, 0.05)"
          overflow="hidden"
        >
          <Icon
            position="absolute"
            left={16}
            top="50%"
            color="petcode.neutral.700"
            opacity={0.05}
            size="100px"
            transform="translateY(-50%) matrix(-0.98, 0.2, 0.2, 0.98, 0, 0);"
            name="paw"
          />
          <Stack
            flexBasis="50%"
            backgroundColor="petcode.yellow.400"
            roundedLeft="lg"
            padding={10}
            paddingLeft={32}
          >
            <Text color="petcode.neutral.700" fontSize="5xl" lineHeight="none">
              {service.pets[0]?.name}
            </Text>
            <Text color="petcode.neutral.600" fontSize="2xl" fontWeight="thin">
              {service.pets[0]?.breed} &middot;{" "}
              {service.pets[0]?.contacts[0]?.name.value}
            </Text>
          </Stack>
          <Box position="relative">
            <svg
              style={{ position: "absolute", left: 0 }}
              width="63px"
              viewBox="0 0 91 253"
              preserveAspectRatio="none"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M46.2 128.488C85 75 90.5333 27.6613 91 0H0V253C0.933333 224.664 7.4 181.976 46.2 128.488Z"
                fill={theme.colors.petcode.yellow[400]}
              />
            </svg>
            <svg
              style={{ position: "absolute", left: -7.5 }}
              width="90px"
              viewBox="0 0 131 248"
              preserveAspectRatio="none"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.3"
                d="M131 0H0.5V247.5H33C32.8333 220 32 155 67 116C102 77 128 21 131 0Z"
                fill={theme.colors.petcode.yellow[400]}
              />
            </svg>
          </Box>
          <Box
            height="100%"
            flexGrow={1}
            backgroundImage={`url(${service.pets[0]?.profileUrl})`}
            backgroundSize="cover"
            backgroundPosition="center"
            roundedRight="lg"
          />
        </Flex>
        <Stack isInline justifyContent="space-between" spacing={5}>
          <Flex
            direction="row"
            rounded="lg"
            backgroundColor="white"
            flexBasis="50%"
            padding={6}
            boxShadow="0px 4px 20px rgba(0, 0, 0, 0.05)"
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
            boxShadow="0px 4px 20px rgba(0, 0, 0, 0.05)"
          >
            <Text color="petcode.neutral.700" fontSize="3xl" marginBottom={3}>
              Account Information
            </Text>
            <Box>
              <InfoFieldText>{service.user?.displayName}</InfoFieldText>
              <InfoFieldLabel>Name</InfoFieldLabel>
            </Box>
            <Box>
              <InfoFieldText>{service.user?.email}</InfoFieldText>
              <InfoFieldLabel>Email</InfoFieldLabel>
            </Box>
            <Box>
              <InfoFieldText>*******</InfoFieldText>
              <InfoFieldLabel>Password</InfoFieldLabel>
            </Box>
            <Box>
              <InfoFieldText>{service.pets[0]?.name}</InfoFieldText>
              <InfoFieldLabel>Pet Name</InfoFieldLabel>
            </Box>
          </Flex>
        </Stack>
        {service.pets[0]?.reminders.length > 0 && (
          <Stack
            rounded="lg"
            backgroundColor="white"
            padding={6}
            boxShadow="0px 4px 20px rgba(0, 0, 0, 0.05)"
          >
            <Text color="petcode.neutral.700" fontSize="3xl" marginBottom={3}>
              Upcoming Reminders
            </Text>
            {service.pets[0]?.reminders.map((reminder: any, idx: number) => (
              <ReminderItem key={idx} reminder={reminder} />
            ))}
          </Stack>
        )}
      </Stack>
    </AccountPageLayout>
  ));
};

export default DashboardPage;
