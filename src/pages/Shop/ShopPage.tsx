import React from "react";
/*<<<<<<< feature/page/checkout-pages
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
=======*/
import {
  Box,
  Flex,
  Heading,
  Link,
  Stack,
  StackProps,
  Text,
} from "@chakra-ui/core";

import { Link as RouterLink } from "react-router-dom";

import Rating from "../../components/Shared/rating";
import Layout from "../../components/Shared/layout";

import { Product } from "../../Models/Product";

const ShopItem: React.FC<StackProps & { product: Product }> = ({
  product,
  ...props
}) => (
  <Link
    // @ts-ignore
    as={RouterLink}
    to={`/products/${product.id}`}
  >
    <Stack width="250px" spacing={3} {...props}>
      <Box size="250px" backgroundColor="petcode.neutral.300" />
      <Text color="petcode.neutral.600" fontSize="xl" fontWeight="thin">
        {product.name}
      </Text>
      <Flex direction="row" justifyContent="space-between">
        <Text color="petcode.neutral.500" fontSize="lg" fontWeight="thin">
          ${product.price.toFixed(2)}
        </Text>
        <Rating size="lg" rating={product.averageRating} />
      </Flex>
    </Stack>
  </Link>
);

const ShopPage = () => {
  const products = Array(9)
    .fill(null)
    .map((_, idx) => ({
      id: String(idx),
      name: "PetCode Tag",
      price: 20,
      imageURL: "",
      averageRating: 5,
      description: "",
      longDescription: "",
    })) as Product[];

  return (
    <Layout>
      <Stack spacing={6} padding={12}>
        <Heading fontSize="5xl" color="petcode.blue.400">
          All Products
        </Heading>
        <Stack isInline flexWrap="wrap" spacing={10}>
          {products.map((product, idx) => (
            <ShopItem key={idx} product={product} marginBottom={6} />
          ))}
        </Stack>
      </Stack>
    </Layout>
  );
};


export default ShopPage;
