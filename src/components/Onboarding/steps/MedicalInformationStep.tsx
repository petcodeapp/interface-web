import React from "react";
import { Box, Flex, Icon, Text } from "@chakra-ui/core";
import { Formik, Field } from "formik";

import OnboardingStepContainer from "../OnboardingStepContainer";
import LargeInput from "../LargeInput";
import BaseButton from "../../Shared/atoms/button";

import * as Yup from "yup";
import "yup-phone";
import UnifiedErrorMessage from "../../Shared/molecules/UnifiedErrorMessage";

const INITIAL_VALUES = {
  allergies: "",
  specialNeeds: "",
  vetName: "",
  vetPhoneNumber: "",
};

export type MedicalInformationData = typeof INITIAL_VALUES;

const MedicalInformationSchema = Yup.object().shape({
  allergies: Yup.string().label("Allergies").required(),
  specialNeeds: Yup.string().label("Special Needs").required(),
  vetName: Yup.string().label("Veterinarian Name").required(),
  vetPhoneNumber: Yup.string().label("Veterinarian Phone Number").phone("US", true).required(),
});

const MedicalInformationStep: React.FC = () => {
  return (
    <Formik
      initialValues={INITIAL_VALUES}
      validationSchema={MedicalInformationSchema}
      onSubmit={console.log}
    >
      {({ errors, touched, handleSubmit }) => (
        <OnboardingStepContainer>
          <Box flexGrow={1} />
          <Flex direction="column">
            <Text fontWeight="bold" fontSize="2.5rem">
              Setting Up Your Tag:
            </Text>
            <Text fontWeight="bold" fontSize="2.5rem" color="petcode.blue.400">
              Medical Information
            </Text>
            <Text fontSize="lg" color="petcode.neutral.600">
              Description here. Lorem ipsum dolor sit amet, cu diam dicat vix,
              ad integre intellegam neglegentur vis.
            </Text>
          </Flex>
          <Field as={LargeInput} name="allergies" placeholder="Allergies" />
          <Field as={LargeInput} name="specialNeeds" placeholder="Special Needs" />
          <Field as={LargeInput} name="vetName" placeholder="Vet Name" />
          <Field as={LargeInput} name="vetPhoneNumber" placeholder="Vet Phone Number" />
          <UnifiedErrorMessage touched={touched} errors={errors} />
          <BaseButton
            alignSelf="end"
            variantColor="petcode.blue"
            onClick={handleSubmit}
          >
            <Text textTransform="uppercase" letterSpacing="0.07em">
              Next Step
            </Text>
            <Icon name="chevron-right" size="20px" />
          </BaseButton>
          <Box flexGrow={1} />
        </OnboardingStepContainer>
      )}
    </Formik>
  );
};

export default MedicalInformationStep;
