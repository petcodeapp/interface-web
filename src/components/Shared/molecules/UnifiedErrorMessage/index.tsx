import React from "react";

import { BoxProps, Text } from "@chakra-ui/core";

import { FormikTouched, FormikErrors } from "formik";

export type UnifiedErrorMessageProps = {
  touched: FormikTouched<any>;
  errors: FormikErrors<any>;
  children?: (msg: string) => React.ReactElement;
} & BoxProps;

const UnifiedErrorMessage: React.FC<UnifiedErrorMessageProps> = ({
  touched,
  errors,
  children,
  ...props
}) => {
  const defaultMessage = (msg: string) => (
    <Text color="red.400" {...props}>
      {msg}
    </Text>
  );

  for (let [field, error] of Object.entries(errors)) {
    if (error && touched[field]) {
      return (children ? children : defaultMessage)(error as string);
    }
  }

  return null;
};

export default UnifiedErrorMessage;
