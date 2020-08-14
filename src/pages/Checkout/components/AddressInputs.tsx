import React from "react";

import { Box, Flex, Select, Stack, StackProps } from "@chakra-ui/core";

import RoundedInput from "../../../components/Shared/input/RoundedInput";

import { observer } from "mobx-react";
import { Field } from "formik";
import * as Yup from "yup";

export interface Address {
  address: string;
  city: string;
  state: string;
  zipCode: string;
}

export const AddressSchema = {
  address: Yup.string().required("Address is required."),
  city: Yup.string().required("City is required."),
  state: Yup.string().required("State is required."),
  zipCode: Yup.string()
    .matches(/^[0-9]+$/, "Zip code must be only digits.")
    .length(5, "Zip code must be five digits long.")
    .required("Zip code is required."),
};

const AddressInputs: React.FC<StackProps> = observer(({ ...props }) => (
  <Stack spacing={3} {...props}>
    <Flex>
      <Field
        placeholder="Address"
        type="address"
        name="address"
        as={RoundedInput}
      />
    </Flex>
    <Stack isInline spacing={3}>
      <Box flexBasis="50%">
        <Field placeholder="City" name="city" as={RoundedInput} />
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
            {...field}
            marginRight={3}
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
              <option key={idx}>{stateName}</option>
            ))}
          </Select>
        )}
      </Field>
      <Box flexBasis="30%">
        <Field placeholder="Zip Code" name="zipCode" as={RoundedInput} />
      </Box>
    </Stack>
  </Stack>
));

export default AddressInputs;
