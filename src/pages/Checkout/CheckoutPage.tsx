import React, { useEffect, useState } from "react";

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
import { withRouter, RouteComponentProps } from "react-router";

import { observable } from "mobx";

const CheckoutPage: React.FC<RouteComponentProps> = ({ location, history }) => {
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

  useEffect(() => {
    if (!["#shipping", "#billing", "#confirmation"].includes(location.hash)) {
      history.push("/checkout#shipping");
    }
  }, [location.hash]);

  return (
    <Flex direction="column" minHeight="calc(100% - 57px)" paddingTop="57px">
      <Header backgroundColor="petcode.neutral.700" />
      <ProgressTracker />
      {location.hash == "#confirmation" ? (
        <ConfirmationStep
          shippingInformation={shippingInformation}
          billingInformation={billingInformation}
        />
      ) : location.hash == "#billing" ? (
        <BillingInformationStep
          shippingInformation={shippingInformation}
          billingInformation={billingInformation}
          onNextStep={() => history.push("/checkout#confirmation")}
        />
      ) : (
        <ShippingInformationStep
          shippingInformation={shippingInformation}
          onNextStep={() => history.push("/checkout#billing")}
        />
      )}
    </Flex>
  );
};

export default withRouter(CheckoutPage);
