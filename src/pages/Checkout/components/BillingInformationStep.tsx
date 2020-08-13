import React, { useState, useEffect } from "react";

import { Box, Flex, Heading, Icon, Stack, Text } from "@chakra-ui/core";

import AddressInputs from "./AddressInputs";
import { ShippingInformation } from "./ShippingInformationStep";
import BaseCheckbox from "../../../components/Shared/input/BaseCheckbox";
import BaseButton from "../../../components/Shared/button/BaseButton";
import RoundedInput from "../../../components/Shared/input/RoundedInput";

import { action } from "mobx";
import { useObserver } from "mobx-react";

import { Address } from "../../../Models/Address";

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

const BillingInformationStep: React.FC<BillingInformationStepProps> = ({
  shippingInformation,
  billingInformation,
  onNextStep,
}) => {
  const [useDifferentAddress, setUseDifferentAddress] = useState(false);
  useEffect(
    action(() => {
      if (useDifferentAddress) {
        billingInformation.address = "";
        billingInformation.city = "";
        billingInformation.state = "";
        billingInformation.zipCode = "";
      } else {
        billingInformation.address = shippingInformation.address;
        billingInformation.city = shippingInformation.city;
        billingInformation.state = shippingInformation.state;
        billingInformation.zipCode = shippingInformation.zipCode;
      }
    }),
    [useDifferentAddress]
  );

  return useObserver(() => (
    <Flex direction="column" alignItems="center" paddingBottom={10}>
      <Heading
        color="petcode.blue.400"
        fontSize="5xl"
        textAlign="center"
        marginY={10}
      >
        Billing Information
      </Heading>
      <Stack width="60%" spacing={3}>
        <Stack isInline spacing={3}>
          <Box flexBasis="50%">
            <RoundedInput
              placeholder="First Name"
              type="fname"
              value={billingInformation.firstName}
              onChange={action(
                (e: React.ChangeEvent<HTMLInputElement>) =>
                  (billingInformation.firstName = e.target.value)
              )}
            />
          </Box>
          <Box flexBasis="50%">
            <RoundedInput
              placeholder="Last Name"
              type="lname"
              value={billingInformation.lastName}
              onChange={action(
                (e: React.ChangeEvent<HTMLInputElement>) =>
                  (billingInformation.lastName = e.target.value)
              )}
            />
          </Box>
        </Stack>
        <Flex>
          <RoundedInput
            placeholder="Card Number"
            value={billingInformation.cardNumber}
            onChange={action(
              (e: React.ChangeEvent<HTMLInputElement>) =>
                (billingInformation.cardNumber = e.target.value)
            )}
          />
        </Flex>
        <Stack isInline spacing={3}>
          <Box flexBasis="33%">
            <RoundedInput
              placeholder="MM"
              value={billingInformation.MM}
              onChange={action(
                (e: React.ChangeEvent<HTMLInputElement>) =>
                  (billingInformation.MM = e.target.value)
              )}
            />
          </Box>
          <Box flexBasis="33%">
            <RoundedInput
              placeholder="YY"
              value={billingInformation.YY}
              onChange={action(
                (e: React.ChangeEvent<HTMLInputElement>) =>
                  (billingInformation.YY = e.target.value)
              )}
            />
          </Box>
          <Box flexBasis="33%">
            <RoundedInput
              placeholder="CVV"
              value={billingInformation.CVV}
              onChange={action(
                (e: React.ChangeEvent<HTMLInputElement>) =>
                  (billingInformation.CVV = e.target.value)
              )}
            />
          </Box>
        </Stack>
        <Stack isInline spacing={3}>
          <Box flexBasis="50%">
            <RoundedInput
              placeholder="Email Address"
              type="email"
              value={billingInformation.emailAddress}
              onChange={action(
                (e: React.ChangeEvent<HTMLInputElement>) =>
                  (billingInformation.emailAddress = e.target.value)
              )}
            />
          </Box>
          <Box flexBasis="50%">
            <RoundedInput
              placeholder="Phone Number"
              type="tel"
              value={billingInformation.phoneNumber}
              onChange={action(
                (e: React.ChangeEvent<HTMLInputElement>) =>
                  (billingInformation.phoneNumber = e.target.value)
              )}
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
        {useDifferentAddress && <AddressInputs address={billingInformation} />}
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
            onClick={onNextStep}
          >
            <Text textTransform="uppercase" fontWeight="thin">
              Continue
            </Text>
          </BaseButton>
        </Flex>
      </Stack>
    </Flex>
  ));
};

export default BillingInformationStep;
