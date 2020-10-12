import React from "react";

import { Box, Flex, Heading, Icon, Stack, Text } from "@chakra-ui/core";
import { Formik, Field } from "formik";
import { Observer } from "mobx-react";

import AddressInputs from "./AddressInputs";
import BaseCheckbox from "../../../components/Shared/atoms/checkbox";
import BaseButton from "../../../components/Shared/atoms/button";
import RoundedInput from "../../../components/Shared/atoms/RoundedInput";
import UnifiedErrorMessage from "../../../components/Shared/molecules/UnifiedErrorMessage";

import * as Yup from "yup";
import "yup-phone";

import { Address, AddressSchema } from "./AddressInputs";

export type ShippingInformation = Address & {
  firstName: string;
  lastName: string;
  emailAddress: string;
  phoneNumber: string;
  sendEmailUpdates: boolean;
};

type ShippingInformationStepProps = {
  shippingInformation: ShippingInformation;
  setShippingInformation: (a: ShippingInformation) => void;
  onNextStep: () => any;
};

const ShippingInformationSchema = Yup.object()
  .shape({
    firstName: Yup.string().label("First name").required(),
    lastName: Yup.string().label("Last name").required(),
    emailAddress: Yup.string().label("Email address").email().required(),
    phoneNumber: Yup.string()
      .label("Phone number")
      .phone("US", true)
      .required(),
  })
  .shape(AddressSchema);

const ShippingInformationStep: React.FC<ShippingInformationStepProps> = ({
  shippingInformation,
  setShippingInformation,
  onNextStep,
}) => (
  <Flex direction="column" alignItems="center" paddingBottom={10}>
    <Heading
      color="petcode.blue.400"
      fontSize="5xl"
      textAlign="center"
      marginY={10}
    >
      Shipping Information
    </Heading>
    <Formik
      initialValues={shippingInformation}
      validationSchema={ShippingInformationSchema}
      onSubmit={(values: ShippingInformation) => {
        setShippingInformation(values);
        onNextStep();
      }}
    >
      {({ errors, touched, handleSubmit }) => (
        <Observer
          render={() => (
            <Stack width="60%" spacing={3}>
              <Stack isInline spacing={3}>
                <Box flexBasis="50%">
                  <Field
                    placeholder="First Name"
                    type="fname"
                    name="firstName"
                    autoComplete="fname"
                    as={RoundedInput}
                  />
                </Box>
                <Box flexBasis="50%">
                  <Field
                    placeholder="Last Name"
                    type="lname"
                    name="lastName"
                    autoComplete="lname"
                    as={RoundedInput}
                  />
                </Box>
              </Stack>
              <AddressInputs />
              <Stack isInline spacing={3}>
                <Box flexBasis="50%">
                  <Field
                    placeholder="Email Address"
                    type="email"
                    name="emailAddress"
                    autoComplete="email"
                    as={RoundedInput}
                  />
                </Box>
                <Box flexBasis="50%">
                  <Field
                    placeholder="Phone Number"
                    type="tel"
                    name="phoneNumber"
                    autoComplete="tel"
                    as={RoundedInput}
                  />
                </Box>
              </Stack>
              <UnifiedErrorMessage touched={touched} errors={errors} />
              <Stack isInline spacing={3} alignItems="center">
                <BaseCheckbox
                  size={24}
                  isChecked={shippingInformation.sendEmailUpdates}
                  onClick={() =>
                    setShippingInformation({
                      ...shippingInformation,
                      sendEmailUpdates: !shippingInformation.sendEmailUpdates,
                    })
                  }
                />
                <Text color="petcode.yellow.400">Yes, email me updates.</Text>
                <Box flexGrow={1} />
                <Text
                  display="flex"
                  color="petcode.blue.400"
                  alignItems="center"
                >
                  <Icon size="10px" name="compact-arrow" marginRight={1} />
                  Back to Cart
                </Text>
                <BaseButton
                  size="md"
                  variantColor="petcode.blue"
                  paddingX={10}
                  onClick={handleSubmit}
                >
                  <Text textTransform="uppercase" fontWeight="thin">
                    Continue
                  </Text>
                </BaseButton>
              </Stack>
            </Stack>
          )}
        />
      )}
    </Formik>
  </Flex>
);

export default ShippingInformationStep;
