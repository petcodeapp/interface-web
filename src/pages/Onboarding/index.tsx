import React from "react";
import { Box, Flex } from "@chakra-ui/core";
import Sidebar from "../../components/Onboarding/Sidebar";

import CreateYourPetCodeAccountStep from "../../components/Onboarding/steps/CreateYourPetCodeAccountStep";
import ConnectYourPetCodeTagStep from "../../components/Onboarding/steps/ConnectYourPetCodeTagStep";
import PetInformationStep from "../../components/Onboarding/steps/PetInformationStep";
import OwnerInformationStep from "../../components/Onboarding/steps/OwnerInformationStep";
import MedicalInformationStep from "../../components/Onboarding/steps/MedicalInformationStep";
import VaccinationHistoryStep from "../../components/Onboarding/steps/VaccinationHistoryStep";
import RemindersStep from "../../components/Onboarding/steps/RemindersStep";

const OnboardingPage = () => {
  return (
    <Flex direction="row" minHeight="100vh">
      <Sidebar />
      <Box flexGrow={1} />
      <RemindersStep reminderIndex={0} />
      <Box flexGrow={1} />
    </Flex>
  );
};

export default OnboardingPage;
