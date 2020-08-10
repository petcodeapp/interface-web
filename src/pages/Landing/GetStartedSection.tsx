import React from "react";

import { Box, Flex, Heading, Icon, Text } from "@chakra-ui/core";

import BaseButton, {
  BaseButtonProps,
} from "../../components/Shared/button/BaseButton";

type GetStartedStepProps = {
  iconName: string;
  step: number;
  header: string;
  description: string;
  buttonText: string;
  buttonProps?: Omit<BaseButtonProps, "children">;
};

const GetStartedStep: React.FC<GetStartedStepProps> = ({
  iconName,
  step,
  header,
  description,
  buttonText,
  buttonProps = {},
}) => (
  <Flex
    direction="column"
    alignItems="center"
    flexBasis="25%"
    position="relative"
    top="-70px"
    marginX={{ xs: 10, sm: 32, md: 6 }}
  >
    <Box
      rounded="full"
      color="white"
      backgroundColor="petcode.yellow.400"
      position="relative"
      padding={6}
      top="70px"
      border="10px solid"
      borderColor="petcode.neutral.200"
    >
      <Icon name={iconName} size="50px" />
    </Box>
    <Flex
      direction="column"
      alignItems="center"
      rounded="lg"
      backgroundColor="petcode.neutral.200"
      textAlign="center"
      height="100%"
      paddingTop={20}
      paddingX={5}
    >
      <Box
        rounded="md"
        backgroundColor="petcode.neutral.500"
        paddingX={3}
        paddingY={1}
        marginBottom={4}
      >
        <Text color="white" textTransform="uppercase">
          Step {step}
        </Text>
      </Box>
      <Text fontSize="2xl" color="petcode.neutral.700" marginBottom={2}>
        {header}
      </Text>
      <Text fontSize="xl" fontWeight="thin" color="petcode.neutral.600">
        {description}
      </Text>
      <Box flexGrow={1} />
      <BaseButton variantColor="petcode.blue" marginY={6} {...buttonProps}>
        <Text
          fontSize="lg"
          fontWeight="thin"
          textTransform="uppercase"
          letterSpacing="0.05em"
        >
          {buttonText}
        </Text>
      </BaseButton>
    </Flex>
  </Flex>
);

const GetStartedSteps = () => (
  <Flex
    direction={{ xs: "column", md: "row" }}
    alignItems="stretch"
    justifyContent="center"
  >
    <GetStartedStep
      iconName="qr-code"
      step={1}
      header="Order Your PetCode Tag"
      description="Order your PetCode Tag in your local store or in our webshop. Once you have recieved your Tag, you can move onto setting up your Pet Profile."
      buttonText="Order PetCode Tag"
    />
    <GetStartedStep
      iconName="user"
      step={2}
      header="Create Your PetCode Account"
      description="Create your PetCode Tag account and set up your pet profile(s) with basic information as well as medical and contact info."
      buttonText="Create Account"
    />
    <GetStartedStep
      iconName="checkmark"
      step={3}
      header="Activate Your PetCode Tag"
      description="Once you have updated your pet profile and activated the PetCode Tag, you are now done with the setup process. Welcome to the PetCode Network!"
      buttonText="Activate PetCode Tag"
    />
  </Flex>
);

const GetStartedSection = () => (
  <Flex direction="column" alignItems="center" paddingTop={12}>
    <Heading color="petcode.blue.400" fontSize="6xl" marginBottom={6}>
      Get Started
    </Heading>
    <GetStartedSteps />
  </Flex>
);

export default GetStartedSection;
