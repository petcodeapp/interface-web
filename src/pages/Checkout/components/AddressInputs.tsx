import React from "react";

import { Box, Flex, Select, Stack, StackProps } from "@chakra-ui/core";

import RoundedInput from "../../../components/Shared/input/RoundedInput";

import { action } from "mobx";
import { observer } from "mobx-react";

import { Address } from "../../../Models/Address";

const AddressInputs: React.FC<{ address: Address } & StackProps> = observer(
  ({ address, ...props }) => (
    <Stack spacing={3} {...props}>
      <Flex>
        <RoundedInput
          placeholder="Address"
          type="address"
          value={address.address}
          onChange={action(
            (e: React.ChangeEvent<HTMLInputElement>) =>
              (address.address = e.target.value)
          )}
        />
      </Flex>
      <Stack isInline spacing={3}>
        <Box flexBasis="50%">
          <RoundedInput
            placeholder="City"
            value={address.city}
            onChange={action(
              (e: React.ChangeEvent<HTMLInputElement>) =>
                (address.city = e.target.value)
            )}
          />
        </Box>
        <Select
          flexBasis="20%"
          placeholder="State"
          value={address.state}
          onChange={action((e) => (address.state = e.target.value))}
          rounded="full"
          _focus={{ color: "petcode.neutral.700" }}
          color={
            address.state == "" ? "petcode.neutral.400" : "petcode.neutral.700"
          }
          fontWeight="thin"
          fontFamily="body"
          iconColor="petcode.neutral.500"
          borderColor="petcode.neutral.400"
          focusBorderColor="petcode.neutral.500"
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
        <Box flexBasis="30%">
          <RoundedInput
            placeholder="Zip Code"
            value={address.zipCode}
            onChange={action(
              (e: React.ChangeEvent<HTMLInputElement>) =>
                (address.zipCode = e.target.value)
            )}
          />
        </Box>
      </Stack>
    </Stack>
  )
);

export default AddressInputs;
