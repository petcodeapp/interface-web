import React from "react";
import { Box, Flex } from "@chakra-ui/core";
import Sidebar from "../../components/Onboarding/Sidebar";

import CreateYourPetCodeAccountStep from "../../components/Onboarding/steps/CreateYourPetCodeAccountStep";

const OnboardingPage = () => {
  return (
    <CreateYourPetCodeAccountStep values={{
      accountInfo: {},
      tagInfo: {},
      petInfo: {},
      owners: [],
      medicalInfo: {},
      vaccinationHistory: [],
      reminders: [],
    }} />
  );
};

export default OnboardingPage;
