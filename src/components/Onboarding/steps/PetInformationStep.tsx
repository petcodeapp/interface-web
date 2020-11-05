import React from "react";
import { Box, Flex, Icon, Stack, Text } from "@chakra-ui/core";
import { Formik, Field } from "formik";

import OnboardingStepContainer from "../OnboardingStepContainer";
import LargeInput from "../LargeInput";
import BaseButton from "../../Shared/atoms/button";
import UnifiedErrorMessage from "../../Shared/molecules/UnifiedErrorMessage";

import * as Yup from "yup";

const INITIAL_VALUES = {
  petName: "",
  field1: "",
  field2: "",
  breed: "",
  field3: "",
  field4: "",
  field5: "",
  field6: "",
};

export type PetInformationData = typeof INITIAL_VALUES;

const PetInformationSchema = Yup.object().shape({
  petName: Yup.string().label("Pet name").required(),
  field1: Yup.string().required(),
  field2: Yup.string().required(),
  breed: Yup.string().label("Breed").required(),
  field3: Yup.string().required(),
  field4: Yup.string().required(),
  field5: Yup.string().required(),
  field6: Yup.string().required(),
});

const PetInformationStep: React.FC = () => {
  return (
    <Formik
      initialValues={INITIAL_VALUES}
      validationSchema={PetInformationSchema}
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
              Pet Information
            </Text>
            <Text fontSize="lg" color="petcode.neutral.600">
              Description here. Lorem ipsum dolor sit amet, cu diam dicat vix,
              ad integre intellegam neglegentur vis.
            </Text>
          </Flex>
          <Field as={LargeInput} name="petName" placeholder="Pet Name" />
          <Stack isInline spacing={6}>
            <Box flexBasis="50%">
              <Field as={LargeInput} name="field1" placeholder="Field 1" />
            </Box>
            <Box flexBasis="50%">
              <Field as={LargeInput} name="field2" placeholder="Field 2" />
            </Box>
          </Stack>
          <Field as={LargeInput} name="breed" placeholder="Breed" />
          <Stack isInline spacing={6}>
            <Box flexBasis="50%">
              <Field as={LargeInput} name="field3" placeholder="Field 3" />
            </Box>
            <Box flexBasis="50%">
              <Field as={LargeInput} name="field4" placeholder="Field 4" />
            </Box>
          </Stack>
          <Stack isInline spacing={6}>
            <Box flexBasis="50%">
              <Field as={LargeInput} name="field5" placeholder="Field 5" />
            </Box>
            <Box flexBasis="50%">
              <Field as={LargeInput} name="field6" placeholder="Field 6" />
            </Box>
          </Stack>
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

export default PetInformationStep;
