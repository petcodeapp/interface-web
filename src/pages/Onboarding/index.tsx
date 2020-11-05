import React from "react";
import { Box, Flex } from "@chakra-ui/core";
import { AnimatePresence } from "framer-motion";

import Sidebar from "../../components/Onboarding/Sidebar";
import CreateYourPetCodeAccountStep from "../../components/Onboarding/steps/CreateYourPetCodeAccountStep";

const OnboardingPage = () => {
  return (
    <Flex direction="row" minHeight="100vh">
      <Sidebar />
      <Box flexGrow={1} />
      <AnimatePresence>
        <CreateYourPetCodeAccountStep values={{
          accountInfo: {},
          tagInfo: {},
          petInfo: {},
          owners: [],
          medicalInfo: {},
          vaccinationHistory: [],
          reminders: [],
        }} />
      </AnimatePresence>
      <Box flexGrow={1} />
    </Flex>
  );
};

export default OnboardingPage;
