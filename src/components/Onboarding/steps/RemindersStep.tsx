import React from "react";
import { Box, Flex, Icon, Stack, Text } from "@chakra-ui/core";
import { Formik, Field } from "formik";

import OnboardingStepContainer from "../OnboardingStepContainer";
import LargeInput from "../LargeInput";
import BaseButton from "../../Shared/atoms/button";
import UnifiedErrorMessage from "../../Shared/molecules/UnifiedErrorMessage";

import * as Yup from "yup";

const INITIAL_VALUES = {
  name: "",
  date: "",
  frequency: "",
};

export type RemindersData = typeof INITIAL_VALUES;

const RemindersSchema = Yup.object().shape({
  name: Yup.string().label("Reminder name").required(),
  date: Yup.string().label("Reminder begin date").required(),
  frequency: Yup.string().label("Reminder frequency").required(),
});

type RemindersStepProps = {
  reminderIndex: number;
};

const RemindersStep: React.FC<RemindersStepProps> = ({
  reminderIndex,
}) => {
  return (
    <Formik
      initialValues={INITIAL_VALUES}
      validationSchema={RemindersSchema}
      onSubmit={console.log}
    >
      {({ errors, touched, handleSubmit }) => (
        <OnboardingStepContainer>
          <Box flexGrow={1} />
          <Flex direction="column">
            <Text fontWeight="bold" fontSize="2.5rem">
              Health Information:
            </Text>
            <Text fontWeight="bold" fontSize="2.5rem" color="petcode.blue.400">
              Reminders
            </Text>
            <Text fontSize="lg" color="petcode.neutral.600">
              Description here. Lorem ipsum dolor sit amet, cu diam dicat vix,
              ad integre intellegam neglegentur vis.
            </Text>
          </Flex>
          <Text fontSize="lg" fontWeight="semibold" color="petcode.neutral.600">Reminder #{reminderIndex + 1}</Text>
          <Field as={LargeInput} name="name" placeholder="Reminder Name" />
          <Field as={LargeInput} name="date" placeholder="Reminder Begin Date" />
          <Field as={LargeInput} name="frequency" placeholder="Reminder Frequency" />
          <UnifiedErrorMessage touched={touched} errors={errors} />
          <Stack isInline justifyContent="flex-end" spacing={3}>
            <BaseButton variantColor="petcode.yellow" onClick={handleSubmit}>
              <Text textTransform="uppercase" letterSpacing="0.07em">
                Add Reminder
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

export default RemindersStep;
