import React from "react";

import { Box, Heading, Stack, Text, Textarea } from "@chakra-ui/core";
import { Formik, Field } from "formik";

import Layout from "../../components/Shared/layouts/LandingPageLayout";
import BaseButton from "../../components/Shared/atoms/button";
import RoundedInput from "../../components/Shared/atoms/roundedinput";
import UnifiedErrorMessage from "../../components/Shared/molecules/UnifiedErrorMessage";

import * as Yup from "yup";

const ContactUsSchema = Yup.object().shape({
  firstName: Yup.string().label("First name").required(),
  lastName: Yup.string().label("Last name").required(),
  emailAddress: Yup.string().label("Email address").email().required(),
  tagId: Yup.string().label("Tag ID"),
  message: Yup.string().label("Message").required(),
});

const ContactUsPage = () => (
  <Layout backgroundColor="petcode.neutral.200">
    <Stack alignItems="center">
      <Heading color="petcode.blue.400" marginTop={10}>
        Contact Us
      </Heading>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          emailAddress: "",
          tagId: "",
          message: "",
        }}
        validationSchema={ContactUsSchema}
        onSubmit={console.log}
      >
        {({ errors, touched, handleSubmit }) => (
          <Stack
            rounded="lg"
            width="70%"
            background="white"
            paddingY={6}
            paddingX={6}
            spacing={3}
            marginY={6}
          >
            <Stack isInline spacing={3}>
              <Box width="50%">
                <Field
                  placeholder="First Name"
                  type="fname"
                  name="firstName"
                  autoComplete="fname"
                  as={RoundedInput}
                />
              </Box>
              <Box width="50%">
                <Field
                  placeholder="Last Name"
                  type="lname"
                  name="lastName"
                  autoComplete="lname"
                  as={RoundedInput}
                />
              </Box>
            </Stack>
            <Stack isInline spacing={3}>
              <Box width="50%">
                <Field
                  placeholder="Email Address"
                  type="email"
                  name="emailAddress"
                  autoComplete="email"
                  as={RoundedInput}
                />
              </Box>
              <Box width="50%">
                <Field
                  placeholder="PetCode Tag ID (If Applicable)"
                  name="tagId"
                  as={RoundedInput}
                />
              </Box>
            </Stack>
            <Field
              width="100%"
              placeholder="Message"
              name="message"
              // chakra textarea props
              _placeholder={{ color: "petcode.neutral.500" }}
              fontWeight="thin"
              fontFamily="body"
              borderColor="petcode.neutral.400"
              focusBorderColor="petcode.neutral.500"
              rounded="15px"
              resize="none"
              as={Textarea}
            />
            <UnifiedErrorMessage touched={touched} errors={errors} />
            <BaseButton
              alignSelf="end"
              size="md"
              variantColor="petcode.yellow"
              paddingX={10}
              onClick={handleSubmit}
            >
              <Text textTransform="uppercase" fontWeight="thin">
                Submit
              </Text>
            </BaseButton>
          </Stack>
        )}
      </Formik>
      <Stack rounded="lg" width="70%" background="white" padding={6}>
        <Text fontSize="xl" color="petcode.blue.400">
          Company Address
        </Text>
        <Text color="petcode.neutral.500">Company Address</Text>
        <Text fontSize="xl" color="petcode.blue.400">
          Other Inquiries
        </Text>
      </Stack>
    </Stack>
  </Layout>
);

export default ContactUsPage;
