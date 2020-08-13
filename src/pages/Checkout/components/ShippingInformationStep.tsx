import React from "react";

import { Box, Flex, Heading, Icon, Stack, Text } from "@chakra-ui/core";

import AddressInputs from "./AddressInputs";
import BaseCheckbox from "../../../components/Shared/input/BaseCheckbox";
import BaseButton from "../../../components/Shared/button/BaseButton";
import RoundedInput from "../../../components/Shared/input/RoundedInput";

import { action } from "mobx";
import { observer } from "mobx-react";

import { Address } from "../../../Models/Address";

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

const ShippingInformationStep: React.FC<ShippingInformationStepProps> = observer(
  ({ shippingInformation, onNextStep }) => (
    <Flex direction="column" alignItems="center" paddingBottom={10}>
      <Heading
        color="petcode.blue.400"
        fontSize="5xl"
        textAlign="center"
        marginY={10}
      >
        Shipping Information
      </Heading>
      <Stack width="60%" spacing={3}>
        <Stack isInline spacing={3}>
          <Box flexBasis="50%">
            <RoundedInput
              placeholder="First Name"
              type="fname"
              value={shippingInformation.firstName}
              onChange={action(
                (e: React.ChangeEvent<HTMLInputElement>) =>
                  (shippingInformation.firstName = e.target.value)
              )}
            />
          </Box>
          <Box flexBasis="50%">
            <RoundedInput
              placeholder="Last Name"
              type="lname"
              value={shippingInformation.lastName}
              onChange={action(
                (e: React.ChangeEvent<HTMLInputElement>) =>
                  (shippingInformation.lastName = e.target.value)
              )}
            />
          </Box>
        </Stack>
        <AddressInputs address={shippingInformation} />
        <Stack isInline spacing={3}>
          <Box flexBasis="50%">
            <RoundedInput
              placeholder="Email Address"
              type="email"
              value={shippingInformation.emailAddress}
              onChange={action(
                (e: React.ChangeEvent<HTMLInputElement>) =>
                  (shippingInformation.emailAddress = e.target.value)
              )}
            />
          </Box>
          <Box flexBasis="50%">
            <RoundedInput
              placeholder="Phone Number"
              type="tel"
              value={shippingInformation.phoneNumber}
              onChange={action(
                (e: React.ChangeEvent<HTMLInputElement>) =>
                  (shippingInformation.phoneNumber = e.target.value)
              )}
            />
          </Box>
        </Stack>
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
          <Text display="flex" color="petcode.blue.400" alignItems="center">
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
        </Stack>
      </Stack>
    </Flex>
  )
);

export default ShippingInformationStep;
