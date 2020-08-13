import React, { useState } from "react";

import { Box, Flex, Heading, Icon, Select, Stack, Text } from "@chakra-ui/core";

import BaseCheckbox from "../../components/Shared/input/BaseCheckbox";
import BaseButton from "../../components/Shared/button/BaseButton";
import RoundedInput from "../../components/Shared/input/RoundedInput";
import CheckoutPageLayout from "./components/CheckoutPageLayout";

import { useHistory } from "react-router-dom";

const ShippingInformationSection = () => {
  const [stateName, setStateName] = useState("");
  const [sendEmailUpdates, setSendEmailUpdates] = useState(true);

  const history = useHistory();

  return (
    <Flex direction="column" alignItems="center" paddingY={10}>
      <Heading color="petcode.blue.400" fontSize="5xl" marginY={10}>
        Shipping Information
      </Heading>
      <Stack width="60%" spacing={3}>
      <Stack isInline spacing={3}>
        <RoundedInput flexBasis="50%" placeholder="First Name" type="fname" />
        <RoundedInput flexBasis="50%" placeholder="Last Name" type="lname" />
      </Stack>
      <Flex>
        <RoundedInput placeholder="Address" type="address" />
      </Flex>
      <Stack isInline spacing={3}>
        <RoundedInput flexBasis="50%" placeholder="City" />
        <Select
          flexBasis="20%"
          placeholder="State"
          value={stateName}
          onChange={(e) => setStateName(e.target.value)}
          rounded="full"
          _focus={{ color: "petcode.neutral.700" }}
          color={
            stateName == "" ? "petcode.neutral.400" : "petcode.neutral.700"
          }
          fontWeight="thin"
          fontFamily="body"
          iconColor="petcode.neutral.500"
          borderColor="petcode.neutral.400"
          focusBorderColor="petcode.neutral.500"
        >
          {[
            "Alaska",
            "Alabama",
            "Arkansas",
            "American Samoa",
            "Arizona",
            "California",
            "Colorado",
            "Connecticut",
            "District of Columbia",
            "Delaware",
            "Florida",
            "Georgia",
            "Guam",
            "Hawaii",
            "Iowa",
            "Idaho",
            "Illinois",
            "Indiana",
            "Kansas",
            "Kentucky",
            "Louisiana",
            "Massachusetts",
            "Maryland",
            "Maine",
            "Michigan",
            "Minnesota",
            "Missouri",
            "Mississippi",
            "Montana",
            "North Carolina",
            "North Dakota",
            "Nebraska",
            "New Hampshire",
            "New Jersey",
            "New Mexico",
            "Nevada",
            "New York",
            "Ohio",
            "Oklahoma",
            "Oregon",
            "Pennsylvania",
            "Puerto Rico",
            "Rhode Island",
            "South Carolina",
            "South Dakota",
            "Tennessee",
            "Texas",
            "Utah",
            "Virginia",
            "Virgin Islands",
            "Vermont",
            "Washington",
            "Wisconsin",
            "West Virginia",
            "Wyoming",
          ].map((stateName, idx) => (
            <option key={idx}>{stateName}</option>
          ))}
        </Select>
        <RoundedInput flexBasis="30%" placeholder="Zip Code" />
      </Stack>
        <Stack isInline spacing={3}>
          <RoundedInput
            flexBasis="50%"
            placeholder="Email Address"
            type="email"
          />
          <RoundedInput flexBasis="50%" placeholder="Phone Number" type="tel" />
        </Stack>
        <Stack isInline spacing={3} alignItems="center">
          <BaseCheckbox
            size={24}
            isChecked={sendEmailUpdates}
            onClick={() => setSendEmailUpdates(!sendEmailUpdates)}
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
            onClick={() => history.push("/billinginfo")}
          >
            <Text textTransform="uppercase" fontWeight="thin">
              Continue
            </Text>
          </BaseButton>
        </Stack>
      </Stack>
    </Flex>
  );
};

const ShippingInformationPage = () => (
  <CheckoutPageLayout>
    <ShippingInformationSection />
  </CheckoutPageLayout>
);

export default ShippingInformationPage;
