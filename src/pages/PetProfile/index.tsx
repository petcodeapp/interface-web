import React from "react";

import { Box, Flex, Heading, Stack, Text } from "@chakra-ui/core";

import BaseButton from "../../components/Shared/button/BaseButton";
import Layout from "../../components/Shared/layout";

const PetProfilePage = () => (
  <Layout>
    <Stack flexGrow={1} backgroundColor="petcode.neutral.200" alignItems="center" padding={6} spacing={8}>
      <Heading textAlign="center" fontSize="4xl" color="petcode.blue.400">
        Help Me Get Home!
      </Heading>
      <Flex rounded="lg" width="75%" backgroundColor="white" justifyContent="space-between" padding={6}>
        <Stack fontWeight="bold">
          <Text fontSize="xl" color="petcode.neutral.700">
            My Name is
          </Text>
          <Text fontSize="4xl" color="petcode.blue.400">
            Max
          </Text>
          <Box flexGrow={1}/>
          <Stack isInline>
            <BaseButton
              size="md"
              variantColor="petcode.yellow"
              paddingX={6}
              alignSelf="end"
            >
              <Text textTransform="uppercase" fontWeight="thin">
                Contact Owner
              </Text>
            </BaseButton>
            <BaseButton
              size="md"
              variantColor="petcode.yellow"
              paddingX={6}
              alignSelf="end"
            >
              <Text textTransform="uppercase" fontWeight="thin">
                Pet Info
              </Text>
            </BaseButton>
          </Stack>
        </Stack>
        <Box
          rounded="full"
          size="150px"
          backgroundSize="cover"
          backgroundPosition="center"
          backgroundImage="url(/media/placeholder-dog.png)"
          marginBottom={3}
        />
      </Flex>
    </Stack>
  </Layout>
);

export default PetProfilePage;
