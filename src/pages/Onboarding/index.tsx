import React from "react";
import { Flex } from "@chakra-ui/core";
import Sidebar from "../../components/Onboarding/Sidebar";
import CreateYourPetCodeAccountStep from "../../components/Onboarding/steps/CreateYourPetCodeAccountStep";

const OnboardingPage = () => {
  return (
    <Flex direction="row" minHeight="100vh">
      <Sidebar />
      <CreateYourPetCodeAccountStep />
    </Flex>
  );
};

export default OnboardingPage;
