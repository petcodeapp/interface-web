import React, { useState } from "react";

import { Box, Flex, Heading, Image, Link, Text } from "@chakra-ui/core";

import { AuthStore } from "../../views/Auth/";
import InputWithIcon from "../../components/Shared/molecules/InputWithIcon";
import BaseButton from "../../components/Shared/atoms/button";
import IntegratedProgressiveImage from "../../components/Shared/atoms/IntegratedProgressiveImage";
import { motion } from "framer-motion";

const LeftContainer: React.FunctionComponent = ({ children }) => (
  <Flex
    direction="column"
    flexGrow={1}
    flexBasis="calc(50% - 96px)"
    alignItems="center"
    justifyContent="center"
    marginX={{ xs: 4, md: 32 }}
  >
    {children}
  </Flex>
);

const HeaderTextGroup = () => (
  <>
    <Text
      color="petcode.neutral.400"
      fontSize="2xl"
      fontWeight="bold"
      textTransform="uppercase"
    >
      Welcome to
    </Text>
    <Box fontSize={{ xs: "6xl", md: "7xl", lg: "8xl" }}>
      <Heading as="span" color="petcode.yellow.400" fontSize="inherit">
        Pet
      </Heading>
      <Heading as="span" color="petcode.blue.400" fontSize="inherit">
        Code
      </Heading>
    </Box>
    <Text
      color="petcode.neutral.600"
      fontSize={{ xs: "xl", md: "3xl" }}
      fontWeight="thin"
      textAlign="center"
      lineHeight="shorter"
    >
      Log in to view and update your pet profile with the latest information.
    </Text>
  </>
);

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Flex
      direction="column"
      alignItems="center"
      width={{ xs: "90%", md: "80%", lg: "70%" }}
      marginY={3}
    >
      <InputWithIcon
        iconName="user"
        inputGroupProps={{ marginY: 2 }}
        inputProps={{
          placeholder: "Username",
          onChange: (e: any) => setUsername(e.target.value),
          value: username,
        }}
      />
      <InputWithIcon
        iconName="lock-closed"
        inputGroupProps={{ marginY: 2 }}
        inputProps={{
          type: "password",
          placeholder: "Password",
          onChange: (e: any) => setPassword(e.target.value),
          value: password,
        }}
      />
      <Text color="petcode.blue.400" fontSize="lg" alignSelf="flex-end">
        <Link href="/forgotpassword">Forgot Password?</Link>
      </Text>
      <BaseButton
        variantColor="petcode.blue"
        width="100%"
        height="52px"
        marginY={3}
        onClick={async () => {
          await AuthStore.signInWithEmail(username, password);
        }}
      >
        <Text fontSize="xl" fontWeight="thin" textTransform="uppercase">
          Sign In
        </Text>
      </BaseButton>
      <Text color="petcode.neutral.500" fontSize="lg">
        Don't have an account yet?{" "}
        <Link color="petcode.blue.400" href="/signup">
          Sign Up
        </Link>
      </Text>
    </Flex>
  );
};

const RightContainer: React.FunctionComponent = ({ children }) => (
  <Flex
    display={{ xs: "none", lg: "flex" }}
    flexDir="column"
    flexBasis="720px"
    flexShrink={1}
    alignItems="center"
    justifyContent="center"
    backgroundImage="url(dogs-on-yellow-wall.png)"
    backgroundPosition="center"
  >
    {children}
  </Flex>
);

const LogoWithTagLine = () => (
  <>
    <IntegratedProgressiveImage alt="PetCode Logo" slug="petcode-logo.png" />
    <Heading
      color="petcode.neutral.700"
      fontSize={{ lg: "3xl", xl: "4xl" }}
      fontWeight="thin"
      textAlign="center"
      marginX={{ lg: 4, xl: 24 }}
    >
      One Code. An endless suite of features for pet owners.
    </Heading>
  </>
);

const F = motion.custom(Flex);

const LoginPage: React.FC<any> = ({ subPageVariants }) => (
  <F variants={subPageVariants} direction="row" height="100%">
    <LeftContainer>
      <HeaderTextGroup />
      <LoginForm />
    </LeftContainer>
    <RightContainer>
      <Box flexGrow={1} />
      <LogoWithTagLine />
      <Box flexGrow={3} />
    </RightContainer>
  </F>
);

export default LoginPage;
