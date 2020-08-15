import React, { useEffect, useState } from "react";

import Layout from "../../components/Shared/layout";
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
      streetAddress: "",
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
      streetAddress: "",
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
    <Layout>
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
    </Layout>
  );
};

export default withRouter(CheckoutPage);
