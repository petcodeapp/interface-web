import React from "react";

import { Divider, Flex, Heading, Icon, Stack, Text } from "@chakra-ui/core";

import { ShippingInformation } from "./ShippingInformationStep";
import { BillingInformation } from "./BillingInformationStep";
import BaseButton from "../../../components/Shared/button/BaseButton";

type ConfirmationStepProps = {
  shippingInformation: ShippingInformation;
  billingInformation: BillingInformation;
};

const ConfirmationStep: React.FC<ConfirmationStepProps> = ({
  shippingInformation,
  billingInformation,
}) => (
  <Flex direction="column" alignItems="center" paddingBottom={10}>
    <Heading
      color="petcode.blue.400"
      fontSize="5xl"
      textAlign="center"
      marginY={10}
    >
      Review & Confirmation
    </Heading>
    <Stack width="50%" justifyContent="center" isInline spacing={16}>
      <Stack flexBasis="50%" spacing={3}>
        <Text
          color="petcode.neutral.600"
          fontSize="xl"
          textTransform="uppercase"
        >
          Delivery Address
        </Text>
        <Text color="petcode.neutral.500" fontSize="xl" fontWeight="thin">
          {shippingInformation.firstName} {shippingInformation.lastName}
          <br />
          {shippingInformation.address}
          <br />
          {shippingInformation.city}, {shippingInformation.state}{" "}
          {shippingInformation.zipCode}
        </Text>
        <Text
          color="petcode.neutral.600"
          fontSize="xl"
          textTransform="uppercase"
        >
          Billing Address
        </Text>
        <Text color="petcode.neutral.500" fontSize="xl" fontWeight="thin">
          {billingInformation.firstName} {billingInformation.lastName}
          <br />
          {billingInformation.address}
          <br />
          {billingInformation.city}, {billingInformation.state}{" "}
          {billingInformation.zipCode}
        </Text>
      </Stack>
      <Divider
        orientation="vertical"
        borderColor="petcode.neutral.300"
        borderLeftWidth="3px"
      />
      <Stack flexBasis="50%">
        <Text
          color="petcode.neutral.600"
          fontSize="xl"
          textTransform="uppercase"
        >
          Your Cart
        </Text>
        <Flex
          justifyContent="space-between"
          color="petcode.neutral.500"
          fontSize="xl"
        >
          <Text fontWeight="thin">1x PetCode Tag</Text>
          <Text>$20.00</Text>
        </Flex>
        <Divider
          width="100%"
          borderColor="petcode.neutral.300"
          borderBottomWidth="2px"
        />
        <Flex
          justifyContent="space-between"
          color="petcode.neutral.600"
          fontSize="xl"
        >
          <Text fontWeight="thin">TOTAL</Text>
          <Text>$20.00</Text>
        </Flex>
      </Stack>
    </Stack>
    <Stack width="50%" isInline spacing={3} justifyContent="end">
      <Text display="flex" color="petcode.blue.400" alignItems="center">
        <Icon size="10px" name="compact-arrow" marginRight={1} />
        Back to Cart
      </Text>
      <BaseButton size="md" variantColor="petcode.blue" paddingX={10}>
        <Text textTransform="uppercase" fontWeight="thin">
          Place Order
        </Text>
      </BaseButton>
    </Stack>
  </Flex>
);

export default ConfirmationStep;
