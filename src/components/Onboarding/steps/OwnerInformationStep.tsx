import React from "react";
import { Box, Flex, Icon, Stack, Text } from "@chakra-ui/core";
import { Formik, Field } from "formik";

import OnboardingStepContainer from "../OnboardingStepContainer";
import LargeInput from "../LargeInput";
import BaseButton from "../../Shared/atoms/button";
import UnifiedErrorMessage from "../../Shared/molecules/UnifiedErrorMessage";


import * as Yup from "yup";
import "yup-phone";

const INITIAL_VALUES = {
  fullName: "",
  phoneNumber: "",
  emailAddress: "",
  address: "",
};

export type OwnerInformationData = typeof INITIAL_VALUES;

const OwnerInformationSchema = Yup.object().shape({
  fullName: Yup.string().label("Full name").required(),
  emailAddress: Yup.string().label("Email address").email().required(),
  phoneNumber: Yup.string().label("Phone number").phone("US", true).required(),
  address: Yup.string().label("Address").required(),
});

type OwnerInformationStepProps = {
  isPrimary?: boolean;
  ownerIndex: number;
};

const OwnerInformationStep: React.FC<OwnerInformationStepProps> = ({
  isPrimary = false,
  ownerIndex,
}) => {
  return (
    <Formik
      initialValues={INITIAL_VALUES}
      validationSchema={OwnerInformationSchema}
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
              Owner Information
            </Text>
            <Text fontSize="lg" color="petcode.neutral.600">
              Description here. Lorem ipsum dolor sit amet, cu diam dicat vix,
              ad integre intellegam neglegentur vis.
            </Text>
          </Flex>
          <Field
            as={LargeInput}
            name="fullName"
            placeholder={`Full Name - Owner #${ownerIndex + 1}`}
          />
          <Field
            as={LargeInput}
            name="phoneNumber"
            placeholder={`Phone Number - Owner #${ownerIndex + 1}`}
          />
          <Field
            as={LargeInput}
            name="emailAddress"
            placeholder={`Email Address - Owner #${ownerIndex + 1}`}
          />
          <Field
            as={LargeInput}
            name="address"
            placeholder={`Address - Owner #${ownerIndex + 1}`}
          />
          <UnifiedErrorMessage touched={touched} errors={errors} />
          <Stack isInline justifyContent="flex-end" spacing={3}>
            {isPrimary && (
              <BaseButton variantColor="petcode.yellow" onClick={handleSubmit}>
                <Text textTransform="uppercase" letterSpacing="0.07em">
                  Add Owner
                </Text>
                <Icon name="add" size="14px" marginLeft={2} />
              </BaseButton>
            )}
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

export default OwnerInformationStep;
