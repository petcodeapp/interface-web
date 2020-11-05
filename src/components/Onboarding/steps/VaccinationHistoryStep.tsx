import React, { useState } from "react";
import { Box, Flex, Icon, Stack, Text } from "@chakra-ui/core";
import { Formik, Field } from "formik";

import OnboardingStepContainer from "../OnboardingStepContainer";
import LargeInput from "../LargeInput";
import BaseButton from "../../Shared/atoms/button";
import UnifiedErrorMessage from "../../Shared/molecules/UnifiedErrorMessage";
import RemindersStep from "./RemindersStep";

import { OnboardingValues } from "./";

import * as Yup from "yup";

const INITIAL_VALUES = {
  name: "",
  date: "",
  expirationDate: "",
};

export type VaccinationHistoryData = typeof INITIAL_VALUES;

const VaccinationHistorySchema = Yup.object().shape({
  name: Yup.string().label("Vaccination name").required(),
  date: Yup.string().label("Date of vaccination").required(),
  expirationDate: Yup.string().label("Vaccination expiration date").required(),
});

type VaccinationHistoryProps = {
  values: OnboardingValues;
};

const VaccinationHistoryStep: React.FC<VaccinationHistoryProps> = ({
  values,
}) => {
  const [submitted, setSubmitted] = useState(false);
  const [isAddingVaccinations, setIsAddingVaccinations] = useState(false);

  if (submitted) {
    if (isAddingVaccinations) {
      return (
        <VaccinationHistoryStep values={values} />
      );
    }

    return (
      <RemindersStep values={values} reminderIndex={0} />
    );
  }

  return (
    <Formik
      initialValues={INITIAL_VALUES}
      validationSchema={VaccinationHistorySchema}
      onSubmit={formValues => {
        values.vaccinationHistory.push(formValues);
        setSubmitted(true);
      }}
    >
      {({ errors, touched, handleSubmit }) => (
        <OnboardingStepContainer>
          <Box flexGrow={1} />
          <Flex direction="column">
            <Text fontWeight="bold" fontSize="2.5rem">
              Health Information:
            </Text>
            <Text fontWeight="bold" fontSize="2.5rem" color="petcode.blue.400">
              Vaccination History
            </Text>
            <Text fontSize="lg" color="petcode.neutral.600">
              Description here. Lorem ipsum dolor sit amet, cu diam dicat vix,
              ad integre intellegam neglegentur vis.
            </Text>
          </Flex>
          <Field as={LargeInput} name="name" placeholder="Vaccination Name" />
          <Field as={LargeInput} name="date" placeholder="Date of Vaccination" />
          <Field as={LargeInput} name="expirationDate" placeholder="Vaccination Expiration Date" />
          <UnifiedErrorMessage touched={touched} errors={errors} />
          <Stack isInline justifyContent="flex-end" spacing={3}>
            <BaseButton variantColor="petcode.yellow" onClick={e => {
              setIsAddingVaccinations(true);
              handleSubmit(e);
            }}>
              <Text textTransform="uppercase" letterSpacing="0.07em">
                Add Vaccination
              </Text>
              <Icon name="add" size="14px" marginLeft={2} />
            </BaseButton>
            <BaseButton variantColor="petcode.blue" onClick={handleSubmit}>
              <Text textTransform="uppercase" letterSpacing="0.07em">
                Next Step
              </Text>
              <Icon name="chevron-right" size="20px" />
            </BaseButton>
          </Stack>
          <Box flexGrow={1} />
        </OnboardingStepContainer>
      )}
    </Formik>
  );
};

export default VaccinationHistoryStep;
