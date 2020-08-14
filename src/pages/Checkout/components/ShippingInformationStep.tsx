import React from "react";

import { Box, Flex, Heading, Icon, Stack, Text } from "@chakra-ui/core";

import AddressInputs from "./AddressInputs";
import BaseCheckbox from "../../../components/Shared/input/BaseCheckbox";
import BaseButton from "../../../components/Shared/button/BaseButton";
import RoundedInput from "../../../components/Shared/input/RoundedInput";
import UnifiedErrorMessage from "../../../components/Shared/formik/UnifiedErrorMessage";

import { action } from "mobx";
import { Observer } from "mobx-react";
import { Formik, Field } from "formik";
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
  onNextStep: () => any;
};

const ShippingInformationSchema = Yup.object()
  .shape({
    firstName: Yup.string().required("First name is required."),
    lastName: Yup.string().required("Last name is required."),
    emailAddress: Yup.string()
      .email("Email address is not valid.")
      .required("Email address is required."),
    phoneNumber: Yup.string()
      .phone("US", true, "Phone number is not valid.")
      .required("Phone number is required."),
  })
  .shape(AddressSchema);

const ShippingInformationStep: React.FC<ShippingInformationStepProps> = ({
  shippingInformation,
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
      initialValues={{
        firstName: "",
        lastName: "",
        address: "",
        city: "",
        state: "",
        zipCode: "",
        emailAddress: "",
        phoneNumber: "",
      }}
      validationSchema={ShippingInformationSchema}
      onSubmit={action(
        (values: Omit<ShippingInformation, "sendEmailUpdates">) => {
          Object.assign(shippingInformation, values);
          onNextStep();
        }
      )}
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
                    as={RoundedInput}
                  />
                </Box>
                <Box flexBasis="50%">
                  <Field
                    placeholder="Last Name"
                    type="lname"
                    name="lastName"
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
                    as={RoundedInput}
                  />
                </Box>
                <Box flexBasis="50%">
                  <Field
                    placeholder="Phone Number"
                    type="tel"
                    name="phoneNumber"
                    as={RoundedInput}
                  />
                </Box>
              </Stack>
              <UnifiedErrorMessage touched={touched} errors={errors} />
              <Stack isInline spacing={3} alignItems="center">
                <BaseCheckbox
                  size={24}
                  isChecked={shippingInformation.sendEmailUpdates}
                  onClick={action(
                    () =>
                      (shippingInformation.sendEmailUpdates = !shippingInformation.sendEmailUpdates)
                  )}
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
