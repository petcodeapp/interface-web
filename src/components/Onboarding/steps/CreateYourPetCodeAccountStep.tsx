import React, { useState } from "react";
import { Box, Icon, Stack, Text } from "@chakra-ui/core";
import { Formik, Field } from "formik";

import OnboardingStepContainer from "../OnboardingStepContainer";
import LargeInput from "../LargeInput";
import BaseButton from "../../Shared/atoms/button";
import UnifiedErrorMessage from "../../Shared/molecules/UnifiedErrorMessage";
import ConnectYourPetCodeTagStep from "./ConnectYourPetCodeTagStep";

import { OnboardingValues } from ".";

import * as Yup from "yup";
import "yup-phone";

const INITIAL_VALUES = {
  fullName: "",
  emailAddress: "",
  phoneNumber: "",
  password: "",
  confirmPassword: "",
};

export type CreateYourPetCodeAccountData = typeof INITIAL_VALUES;

const CreateYourPetCodeAccountSchema = Yup.object().shape({
  fullName: Yup.string().label("Full name").required(),
  emailAddress: Yup.string().label("Email address").email().required(),
  phoneNumber: Yup.string().label("Phone number").phone("US", true).required(),
  password: Yup.string().label("Password").required(),
  confirmPassword: Yup.string()
    .label("Confirm password")
    .test("Match password", "Passwords do not match", function (value) {
      return this.parent.password == value;
    }),
});

type CreateYourPetCodeAccountProps = {
  values: OnboardingValues;
};

const CreateYourPetCodeAccountStep: React.FC<CreateYourPetCodeAccountProps> = ({
  values,
}) => {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <ConnectYourPetCodeTagStep values={values} />
    );
  }

  return (
    <Formik
      initialValues={INITIAL_VALUES}
      validationSchema={CreateYourPetCodeAccountSchema}
      onSubmit={formValues => {
        values.accountInfo = formValues;
        setSubmitted(true);
      }}
    >
      {({ errors, touched, handleSubmit }) => (
        <OnboardingStepContainer>
          <Box flexGrow={1} />
          <Stack spacing={3}>
            <Text fontWeight="bold" fontSize="2.5rem">
              Create Your PetCode Account
            </Text>
            <Text fontSize="lg" color="petcode.neutral.600">
              Description here. Lorem ipsum dolor sit amet, cu diam dicat vix,
              ad integre intellegam neglegentur vis.
            </Text>
          </Stack>
          <Field as={LargeInput} name="fullName" placeholder="Full Name" />
          <Field
            as={LargeInput}
            type="email"
            name="emailAddress"
            placeholder="Email Address"
          />
          <Field
            as={LargeInput}
            type="tel"
            name="phoneNumber"
            placeholder="Phone Number"
          />
          <Stack isInline spacing={6}>
            <Box flexBasis="50%">
              <Field
                as={LargeInput}
                type="password"
                name="password"
                placeholder="Password"
              />
            </Box>
            <Box flexBasis="50%">
              <Field
                as={LargeInput}
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
              />
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

export default CreateYourPetCodeAccountStep;
