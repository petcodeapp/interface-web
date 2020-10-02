import React from "react";

import {
  Flex,
  Heading,
  Image,
  Link,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  useToast,
} from "@chakra-ui/core";

import InputWithIcon from "../../components/Shared/atoms/InputWithIcon";
import BaseButton from "../../components/Shared/atoms/button";
import { AuthContext } from "../../views/Auth/index";
import Button from "../../components/Motion/Button";

const LeftContainer: React.FunctionComponent = ({ children }) => (
  <Flex
    direction="column"
    flexGrow={1}
    alignItems="center"
    justifyContent="center"
    marginLeft={{ xs: 8, sm: 16, md: 4, lg: 16 }}
    marginRight={{ xs: 8, sm: 16, md: 0 }}
  >
    {children}
  </Flex>
);

const HeaderTextGroup = () => (
  <>
    <Heading
      color="petcode.blue.400"
      fontSize={{ xs: "5xl", lg: "6xl" }}
      textAlign="center"
    >
      Welcome to the PetCode Network!
    </Heading>
    <Text
      color="petcode.neutral.600"
      fontSize={{ xs: "xl", lg: "3xl" }}
      fontWeight="thin"
      textAlign="center"
      lineHeight="shorter"
    >
      Sign up to create your pet profile, your personal profile, and more!
    </Text>
  </>
);

const RegistrationForm: React.FC<any> = (props: any) => {
  const [tagNumber, setTagNumber] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const service = React.useContext(AuthContext);

  const toast = useToast();

  return (
    <Flex
      direction="column"
      alignItems="center"
      width={{ xs: "100%", sm: "80%", md: "100%", lg: "60%" }}
      marginY={8}
    >
      <InputWithIcon
        iconName="hashtag"
        inputGroupProps={{ marginY: 2 }}
        inputProps={{
          placeholder: "Petcode Tag Number",
          value: tagNumber,
          onChange: (e: any) => setTagNumber(e.target.value),
        }}
      />
      <InputWithIcon
        iconName="user"
        inputGroupProps={{ marginY: 2 }}
        inputProps={{
          placeholder: "Email",
          value: email,
          onChange: (e: any) => setEmail(e.target.value),
        }}
      />
      <InputWithIcon
        iconName="lock-closed"
        inputGroupProps={{ marginY: 2 }}
        inputProps={{
          placeholder: "Password",
          value: password,
          onChange: (e: any) => setPassword(e.target.value),
          type: "password",
        }}
      />
      <BaseButton
        variantColor="petcode.blue"
        width="100%"
        height="52px"
        marginY={3}
        onClick={async () => {
          await service.createNewUser(email, password, tagNumber);
          console.log("signed up.");
          await props.open();
          toast({
            title: "Account created.",
            description: "We've created your account for you.",
            status: "success",
            duration: 9000,
            isClosable: true,
          });
        }}
      >
        <Text fontSize="xl" fontWeight="thin" textTransform="uppercase">
          Sign Up
        </Text>
      </BaseButton>
      <Text color="petcode.neutral.500" fontSize="lg">
        Already have an account?{" "}
        <Link color="petcode.blue.400" href="/login">
          Sign In
        </Link>
      </Text>
      <Text color="petcode.yellow.400" fontSize="lg" marginTop={3}>
        <Link>Need Help?</Link>
      </Text>
    </Flex>
  );
};

const RegistrationPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Flex direction="row" height="100%">
        <LeftContainer>
          <HeaderTextGroup />
          <RegistrationForm open={onOpen} />
        </LeftContainer>
        <Flex
          display={{ xs: "none", md: "flex" }}
          justifyContent="flex-end"
          direction="column"
          flexBasis="553px"
        >
          <Image
            alt="Dog with tongue out"
            src="/media/dog-with-tongue-out.png"
          />
        </Flex>
      </Flex>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>Hey There!</Text>
          </ModalBody>

          <ModalFooter>
            <Button mr={3} onClick={onClose}>
              Got it!
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default RegistrationPage;
