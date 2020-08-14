import React from "react";

import {
  Box,
  Flex,
  Heading,
  Stack,
  StackProps,
  Text,
  useTheme,
} from "@chakra-ui/core";
import StarRatings from "react-star-ratings";

import Header from "../../components/Shared/header";

const ShopItem: React.FC<StackProps> = ({ ...props }) => {
  const theme = useTheme();

  return (
    <Stack width="250px" spacing={3} {...props}>
      <Box size="250px" backgroundColor="petcode.neutral.300" />
      <Text color="petcode.neutral.600" fontSize="xl" fontWeight="thin">
        PetCode Tag
      </Text>
      <Flex direction="row" justifyContent="space-between">
        <Text color="petcode.neutral.500" fontSize="lg" fontWeight="thin">
          $20.00
        </Text>
        <StarRatings
          rating={5}
          // @ts-ignore
          starRatedColor={theme.colors.petcode.yellow[400]}
          starDimension={theme.fontSizes.lg}
          starSpacing="2px"
        />
      </Flex>
    </Stack>
  );
};

const ShopPage = () => (
  <Flex direction="column" minHeight="calc(100% - 57px)" paddingTop="57px">
    <Header backgroundColor="petcode.neutral.700" />
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
  </Flex>
);

export default ShopPage;
