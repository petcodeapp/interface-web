import React, { useEffect } from "react";

import { Box, Flex, Icon, Link, Select, Stack, Text, LinkProps, FlexProps } from "@chakra-ui/core";
import { Link as RouterLink, LinkProps as RouterLinkProps, RouteComponentProps, withRouter } from "react-router-dom";

import Rating from "../../components/Shared/rating";
import Layout from "../../components/Shared/layout";
import BaseButton from "../../components/Shared/button/BaseButton";

const BackArrow = () => (
  <Link
    // @ts-ignore
    as={RouterLink}
    to="/products"
    display="flex"
    alignSelf="start"
    alignItems="center"
    color="petcode.neutral.400"
    marginLeft={5}
    marginTop={5}
  >
    <Icon
      name="arrow"
      size="50px"
      transform="scale(-1, 1)"
    />
    <Text fontSize="2xl" marginLeft={4}>
      Back to Products
    </Text>
  </Link>
);

const ProductDisplay = () => (
  <Stack isInline justifyContent="center" spacing={16} marginY={10}>
    <Stack flexBasis="30%" spacing={6}>
      <Box width="400px" height="300px" backgroundColor="petcode.neutral.300"/>
      <Stack isInline justifyContent="center" spacing={6}>
        <Box size="50px" backgroundColor="petcode.neutral.300"/>
        <Box size="50px" backgroundColor="petcode.neutral.300"/>
        <Box size="50px" backgroundColor="petcode.neutral.300"/>
        <Icon name="arrow" size="45px" color="petcode.neutral.500" />
      </Stack>
    </Stack>
    <Stack flexBasis="30%" color="petcode.neutral.600" spacing={3}>
      <Text fontSize="5xl">
        Single Product
      </Text>
      <Rating size="2xl" rating={5} />
      <Text fontSize="2xl">
        $20.00
      </Text>
      <Text fontSize="xl" fontWeight="thin">
        This is a short and clear description of the single product displayed.
      </Text>
      <Text fontSize="xl">
        FREE Shipping
        <br/>
        <Text display="inline" fontWeight="thin">Get it by</Text> Mon, August 17
      </Text>
      <Flex>
        <Select
          width="auto"
          placeholder="Select Quantity"
          rounded="full"
          fontWeight="thin"
          fontSize="xl"
          fontFamily="body"
          color="petcode.neutral.700"
          borderColor="petcode.neutral.400"
          focusBorderColor="petcode.neutral.500"
        >
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </Select>
      </Flex>
      <BaseButton
        size="md"
        variantColor="petcode.yellow"
        paddingX={10}
        alignSelf="end"
      >
        <Text textTransform="uppercase" fontWeight="thin">
          Add to Cart
        </Text>
      </BaseButton>
    </Stack>
  </Stack>
);

const SectionLink: React.FC<LinkProps & RouterLinkProps & { selected: boolean }> = ({ children, selected, to, ...props }) => (
  <Link
    // @ts-ignore
    as={RouterLink}
    to={to}
    {...props}
  >
    <Text
      color={selected ? "petcode.blue.400" : "petcode.neutral.500"}
      fontSize="lg"
      textTransform="uppercase"
      border={0}
      borderBottomWidth={selected ? "3px" : 0}
      paddingBottom={selected ? "2px" : "5px"}
      borderStyle="solid"
      borderColor="petcode.blue.400"
    >
      {children}
    </Text>
  </Link>
);

const Feature: React.FC<FlexProps> = ({ children, ...props }) => (
  <Flex direction="row" alignItems="center" {...props}>
    <Icon name="checkmark" size="32px" color="#48BB78" marginRight={3} />
    <Text fontSize="xl" color="petcode.neutral.600" fontWeight="bold">
      {children}
    </Text>
  </Flex>
);

const Details = () => (
  <Stack isInline justifyContent="center" backgroundColor="petcode.neutral.200" color="petcode.neutral.600" spacing={16} paddingY={16}>
    <Text fontSize="xl" fontWeight="thin" flexBasis="33%">
      This is a longer, more in-depth description of the single product displayed, including features.
    </Text>
    <Stack spacing={5}>
      <Feature>Free Online Pet Profile</Feature>
      <Feature>Affordable Hi-Tech Tag</Feature>
      <Feature>Information Visible on Any Browser</Feature>
    </Stack>
  </Stack>
);

const Reviews = () => (
  <Stack isInline justifyContent="center" alignItems="center" backgroundColor="petcode.neutral.200" color="petcode.neutral.600" spacing={16} paddingY={16}>
    <Stack flexBasis="33%">
      <Text fontSize="2xl" fontWeight="bold">
        100 Reviews
      </Text>
      {Array(5).fill(null).map((_, idx, arr) => (
        <Flex direction="row" alignItems="center">
          <Text fontSize="lg" fontWeight="thin" marginRight={ arr.length - idx != 1 ? 3 : 5}>{arr.length - idx} star{ arr.length - idx != 1 ? "s" : "" }</Text>
          <Box width="225px" height="25px" borderStyle="solid" borderColor="petcode.neutral.500" borderWidth="1px">
            <Box width="20%" height="100%" backgroundColor="petcode.yellow.400"/>
          </Box>
        </Flex>
      ))}
    </Stack>
    <Flex direction="row" flexBasis="33%" alignItems="center" justifyContent="space-between" >
      <Stack fontSize="xl" spacing={1} flexBasis="80%">
        <Text fontWeight="bold">
          Jane Doe
        </Text>
        <Rating rating={5} size="2xl"/>
        <Text fontWeight="thin">
          This is an example of a review. When we sell our product, there will be great reviews that go here.
        </Text>
      </Stack>
      <Icon name="arrow" color="petcode.neutral.400" size="35px"/>
    </Flex>
  </Stack>
);

const SingleProductPage: React.FC<RouteComponentProps> = ({ location, history }) => {
  useEffect(() => {
    if (!["", "#details", "#reviews"].includes(location.hash)) {
      history.push(location.pathname);
    }
  }, [location.hash]);
  const detailsShown = location.hash == "" || location.hash == "#details";

  return (
    <Layout>
      <BackArrow />
      <ProductDisplay />
      <Stack isInline justifyContent="center" spacing={6}>
        <SectionLink
          selected={detailsShown}
          to={location.pathname + "#details"}
        >
          Details
        </SectionLink>
        <SectionLink
          selected={!detailsShown}
          to={location.pathname + "#reviews"}
        >
          Reviews
        </SectionLink>
      </Stack>
      { detailsShown ? <Details /> : <Reviews /> }
    </Layout>
  );
};

export default withRouter(SingleProductPage);
