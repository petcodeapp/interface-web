import React from "react";
import { Box, Flex, Icon, Stack, Text, useTheme } from "@chakra-ui/core";
import { Formik, Field } from "formik";
import { motion } from "framer-motion";

import LargeInput from "../LargeInput";
import OnboardingStepContainer from "../OnboardingStepContainer";
import BaseButton from "../../Shared/atoms/button";
import UnifiedErrorMessage from "../../Shared/molecules/UnifiedErrorMessage";
import IntegratedProgressiveImage from "../../Shared/atoms/IntegratedProgressiveImage";
import { Box as MotionBox } from "../../Motion";

import { PetCodeTheme } from "../../../theme";

import * as Yup from "yup";
import "yup-phone";

const INITIAL_VALUES = {
  tagId: "",
};

export type ConnectYourPetCodeTagData = typeof INITIAL_VALUES;

const ConnectYourPetCodeTagSchema = Yup.object().shape({
  tagId: Yup.string()
    .label("Tag ID")
    .matches(/[0-9]{6}/g, ({ label }) => `${label} must be a 6 digit number`)
    .required(),
});

const ConnectYourPetCodeTagStep: React.FC = () => {
  const theme = useTheme() as PetCodeTheme;

  return (
    <Formik
      initialValues={INITIAL_VALUES}
      validationSchema={ConnectYourPetCodeTagSchema}
      onSubmit={console.log}
    >
      {({ errors, touched, handleSubmit }) => (
        <OnboardingStepContainer>
          <Box flexGrow={1} />
          <Stack spacing={3}>
            <Text fontWeight="bold" fontSize="2.5rem">
              Connect Your PetCode Tag
            </Text>
            <Text fontSize="lg" color="petcode.neutral.600">
              Description here. Lorem ipsum dolor sit amet, cu diam dicat vix,
              ad integre intellegam neglegentur vis.
            </Text>
          </Stack>
          <Field
            as={LargeInput}
            name="tagId"
            placeholder="6 Digit PetCode ID"
          />
          <Box position="relative">
            <IntegratedProgressiveImage slug="tag-back.png" alignSelf="start" />
            <Flex direction="row" position="absolute" left={145} top={185}>
              <svg
                width="134"
                height="66"
                viewBox="0 0 134 66"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                stroke={theme.colors.petcode.blue[400]}
              >
                <circle
                  r="8.40385"
                  transform="matrix(-1 0 0 1 10.9998 11.3462)"
                  strokeWidth="4.42308"
                />
                <motion.path
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2 }}
                  d="M16.3069 18.4231L58.7685 63.5385H133.076"
                  strokeWidth="4.42308"
                />
              </svg>
              <MotionBox
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                // @ts-ignore
                transition={{ duration: 2 }}
                alignSelf="flex-end"
              >
                <Text
                  color="petcode.blue.400"
                  fontWeight="bold"
                  fontSize="lg"
                  transform="translateY(33%)"
                  marginLeft={3}
                >
                  6 Digit PetCode ID
                </Text>
              </MotionBox>
            </Flex>
          </Box>
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

export default ConnectYourPetCodeTagStep;
