import React from "react";

import { Box, Flex, Select, Stack, StackProps } from "@chakra-ui/core";

import RoundedInput from "../../../components/Shared/input/RoundedInput";

import { observer } from "mobx-react";
import { Field } from "formik";
import * as Yup from "yup";

export interface Address {
  streetAddress: string;
  city: string;
  state: string;
  zipCode: string;
}

export const AddressSchema = {
  streetAddress: Yup.string().label("Street address").required(),
  city: Yup.string().label("City").required(),
  state: Yup.string().label("State").required(),
  zipCode: Yup.string()
    .label("Zip code")
    .matches(
      /^[0-9]+$/,
      ({ path }) => `${path} expiration year must be only digits`
    )
    .length(5)
    .required(),
};

const AddressInputs: React.FC<StackProps> = observer(({ ...props }) => (
  <Stack spacing={3} {...props}>
    <Flex>
      <Field
        placeholder="Street Address"
        name="streetAddress"
        autoComplete="shipping street-address"
        as={RoundedInput}
      />
    </Flex>
    <Stack isInline spacing={3}>
      <Box flexBasis="50%">
        <Field
          placeholder="City"
          name="city"
          autoComplete="shipping locality"
          as={RoundedInput}
        />
      </Box>
      <Field name="state">
        {({ field }: { field: any }) => (
          <Select
            flexBasis="20%"
            placeholder="State"
            rounded="full"
            _focus={{ color: "petcode.neutral.700" }}
            color={
              field.value == "" ? "petcode.neutral.400" : "petcode.neutral.700"
            }
            fontWeight="thin"
            fontFamily="body"
            iconColor="petcode.neutral.500"
            borderColor="petcode.neutral.400"
            focusBorderColor="petcode.neutral.500"
            autoComplete="shipping region"
            marginRight={3}
            {...field}
          >
            {[
              "AK",
              "AL",
              "AR",
              "AS",
              "AZ",
              "CA",
              "CO",
              "CT",
              "DC",
              "DE",
              "FL",
              "GA",
              "GU",
              "HI",
              "IA",
              "ID",
              "IL",
              "IN",
              "KS",
              "KY",
              "LA",
              "MA",
              "MD",
              "ME",
              "MI",
              "MN",
              "MO",
              "MS",
              "MT",
              "NC",
              "ND",
              "NE",
              "NH",
              "NJ",
              "NM",
              "NV",
              "NY",
              "OH",
              "OK",
              "OR",
              "PA",
              "PR",
              "RI",
              "SC",
              "SD",
              "TN",
              "TX",
              "UT",
              "VA",
              "VI",
              "VT",
              "WA",
              "WI",
              "WV",
              "WY",
            ].map((stateName, idx) => (
              <option key={idx} value={stateName}>
                {stateName}
              </option>
            ))}
          </Select>
        )}
      </Field>
      <Box flexBasis="30%">
        <Field
          placeholder="Zip Code"
          name="zipCode"
          autoComplete="shipping postal-code"
          as={RoundedInput}
        />
      </Box>
    </Stack>
  </Stack>
));

export default AddressInputs;
