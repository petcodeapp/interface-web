import React, { useState } from "react";

import { Flex } from "@chakra-ui/core";

import Header from "../../components/Shared/header";
import ProgressTracker from "./components/ProgressTracker";
import ShippingInformationStep, {
  ShippingInformation,
} from "./components/ShippingInformationStep";
import BillingInformationStep, {
  BillingInformation,
} from "./components/BillingInformationStep";
import ConfirmationStep from "./components/ConfirmationStep";

import { observable } from "mobx";

const CheckoutPage = () => {
  const [step, setStep] = useState(0);
  const [shippingInformation] = useState(() =>
    observable({
      firstName: "",
      lastName: "",
      address: "",
      city: "",
      state: "",
      zipCode: "",
      emailAddress: "",
      phoneNumber: "",
      sendEmailUpdates: true,
    } as ShippingInformation)
  );
  const [billingInformation] = useState(() =>
    observable({
      firstName: "",
      lastName: "",
      cardNumber: "",
      MM: "",
      YY: "",
      CVV: "",
      address: "",
      city: "",
      state: "",
      zipCode: "",
      emailAddress: "",
      phoneNumber: "",
    } as BillingInformation)
  );

  return (
    <Flex direction="column" minHeight="calc(100% - 57px)" paddingTop="57px">
      <Header backgroundColor="petcode.neutral.700" />
      <ProgressTracker step={step} />
      {step == 0 ? (
        <ShippingInformationStep
          shippingInformation={shippingInformation}
          onNextStep={() => setStep(1)}
        />
      ) : step == 1 ? (
        <BillingInformationStep
          shippingInformation={shippingInformation}
          billingInformation={billingInformation}
          onNextStep={() => setStep(2)}
        />
      ) : (
        <ConfirmationStep
          shippingInformation={shippingInformation}
          billingInformation={billingInformation}
        />
      )}
    </Flex>
  );
};

export default CheckoutPage;
