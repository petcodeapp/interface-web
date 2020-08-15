import React, { useState, useEffect } from "react";

import { Box, Flex, Heading, Icon, Stack, Text } from "@chakra-ui/core";
import { Formik, Field } from "formik";

import AddressInputs from "./AddressInputs";
import { ShippingInformation } from "./ShippingInformationStep";
import BaseCheckbox from "../../../components/Shared/input/BaseCheckbox";
import BaseButton from "../../../components/Shared/button/BaseButton";
import RoundedInput from "../../../components/Shared/input/RoundedInput";
import UnifiedErrorMessage from "../../../components/Shared/formik/UnifiedErrorMessage";

import { action } from "mobx";
import * as Yup from "yup";
import "yup-phone";

import { Address, AddressSchema } from "./AddressInputs";

export type BillingInformation = Address & {
  firstName: string;
  lastName: string;
  cardNumber: string;
  MM: string;
  YY: string;
  CVV: string;
  emailAddress: string;
  phoneNumber: string;
};

type BillingInformationStepProps = {
  shippingInformation: ShippingInformation;
  billingInformation: BillingInformation;
  onNextStep: () => any;
};

const BillingInformationSchema = Yup.object()
  .shape({
    firstName: Yup.string().label("First name").required(),
    lastName: Yup.string().label("Last name").required(),
    cardNumber: Yup.string()
      .label("Card number")
      .matches(
        /^[0-9]+$/,
        ({ path }) => `${path} expiration year must be only digits`
      )
      .length(16)
      .required(),
    MM: Yup.string()
      .label("Card expiration month")
      .matches(
        /^[0-9]+$/,
        ({ path }) => `${path} expiration year must be only digits`
      )
      .length(2)
      .required(),
    YY: Yup.string()
      .label("Card expiration year")
      .matches(
        /^[0-9]+$/,
        ({ path }) => `${path} expiration year must be only digits`
      )
      .length(2)
      .required(),
    CVV: Yup.string()
      .label("Card security code")
      .matches(
        /^[0-9]+$/,
        ({ path }) => `${path} expiration year must be only digits`
      )
      .length(3)
      .required(),
    emailAddress: Yup.string().label("Email address").email().required(),
    phoneNumber: Yup.string()
      .label("Phone number")
      .phone("US", true)
      .required(),
  })
  .shape(AddressSchema);

const BillingInformationStep: React.FC<BillingInformationStepProps> = ({
  shippingInformation,
  billingInformation,
  onNextStep,
}) => {
  const [useDifferentAddress, setUseDifferentAddress] = useState(false);
  useEffect(() => {
    billingInformation.streetAddress =
      shippingInformation.streetAddress;
    billingInformation.city = shippingInformation.city;
    billingInformation.state = shippingInformation.state;
    billingInformation.zipCode = shippingInformation.zipCode;
  }, []);

  return (
    <Flex direction="column" alignItems="center" paddingBottom={10}>
      <Heading
        color="petcode.blue.400"
        fontSize="5xl"
        textAlign="center"
        marginY={10}
      >
        Billing Information
      </Heading>
      <Formik
        initialValues={billingInformation}
        validationSchema={BillingInformationSchema}
        onSubmit={action((values: BillingInformation) => {
          Object.assign(billingInformation, values);
          onNextStep();
        })}
      >
        {({ errors, touched, handleSubmit }) => (
          <Stack width="60%" spacing={3}>
            <Stack isInline spacing={3}>
              <Box flexBasis="50%">
                <Field
                  placeholder="First Name"
                  type="fname"
                  name="firstName"
                  autocomplete="fname"
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
            <Flex>
              <Field
                placeholder="Card Number"
                name="cardNumber"
                autoComplete="cc-number"
                as={RoundedInput}
              />
            </Flex>
            <Stack isInline spacing={3}>
              <Box flexBasis="33%">
                <Field
                  placeholder="MM"
                  name="MM"
                  autoComplete="cc-exp-month"
                  as={RoundedInput}
                />
              </Box>
              <Box flexBasis="33%">
                <Field
                  placeholder="YY"
                  name="YY"
                  autocomplete="cc-exp-year"
                  as={RoundedInput}
                />
              </Box>
              <Box flexBasis="33%">
                <Field
                  placeholder="CVV"
                  name="CVV"
                  autoComplete="cc-csc"
                  as={RoundedInput}
                />
              </Box>
            </Stack>
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
            <Flex alignSelf="start">
              <BaseCheckbox
                size={24}
                isChecked={!useDifferentAddress}
                onClick={() => setUseDifferentAddress(false)}
                marginRight={3}
              />
              <Text color="petcode.yellow.400">Use My Shipping Address</Text>
            </Flex>
            <Flex alignSelf="start">
              <BaseCheckbox
                size={24}
                isChecked={useDifferentAddress}
                onClick={() => setUseDifferentAddress(true)}
                marginRight={3}
              />
              <Text color="petcode.yellow.400">Use a Different Address</Text>
            </Flex>
            {useDifferentAddress && <AddressInputs />}
            <UnifiedErrorMessage touched={touched} errors={errors} />
            <Flex alignSelf="end">
              <Text
                display="flex"
                color="petcode.blue.400"
                alignItems="center"
                marginRight={3}
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
            </Flex>
          </Stack>
        )}
      </Formik>
    </Flex>
  );
};

export default BillingInformationStep;
