import React from "react";

import {
  Box,
  Flex,
  Heading,
  Stack,
  StackProps,
  Text,
} from "@chakra-ui/core";

import Rating from "../../components/Shared/rating";
import Layout from "../../components/Shared/layout";

const ShopItem: React.FC<StackProps> = (props) => (
  <Stack width="250px" spacing={3} {...props}>
    <Box size="250px" backgroundColor="petcode.neutral.300" />
    <Text color="petcode.neutral.600" fontSize="xl" fontWeight="thin">
      PetCode Tag
    </Text>
    <Flex direction="row" justifyContent="space-between">
      <Text color="petcode.neutral.500" fontSize="lg" fontWeight="thin">
        $20.00
      </Text>
      <Rating
        size="lg"
        rating={5}
      />
    </Flex>
  </Stack>
);

const ShopPage = () => (
  <Layout>
    <Stack spacing={6} padding={12}>
      <Heading fontSize="5xl" color="petcode.blue.400">
        All Products
      </Heading>
      <Stack isInline flexWrap="wrap" spacing={10}>
        <ShopItem marginBottom={6} />
        <ShopItem marginBottom={6} />
        <ShopItem marginBottom={6} />
        <ShopItem marginBottom={6} />
        <ShopItem marginBottom={6} />
        <ShopItem marginBottom={6} />
        <ShopItem marginBottom={6} />
        <ShopItem marginBottom={6} />
        <ShopItem marginBottom={6} />
      </Stack>
    </Stack>
  </Layout>
);

export default ShopPage;
