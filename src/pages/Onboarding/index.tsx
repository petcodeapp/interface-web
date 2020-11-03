import React from "react";
import { Box, Flex } from "@chakra-ui/core";
import Sidebar from "../../components/Onboarding/Sidebar";

import CreateYourPetCodeAccountStep from "../../components/Onboarding/steps/CreateYourPetCodeAccountStep";
import ConnectYourPetCodeTagStep from "../../components/Onboarding/steps/ConnectYourPetCodeTagStep";
import PetInformationStep from "../../components/Onboarding/steps/PetInformationStep";

const OnboardingPage = () => {
  return (
    <Flex direction="row" minHeight="100vh">
      <Sidebar />
      <Box flexGrow={1} />
      <PetInformationStep />
      <Box flexGrow={1} />
    </Flex>
  );
};

export default OnboardingPage;
