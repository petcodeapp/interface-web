import React from "react";

import { Text } from "@chakra-ui/core";

import { FormikTouched, FormikErrors } from "formik";

type UnifiedErrorMessageProps = {
  touched: FormikTouched<any>;
  errors: FormikErrors<any>;
  children?: (msg: string) => React.ReactElement;
};

const UnifiedErrorMessage: React.FC<UnifiedErrorMessageProps> = ({
  touched,
  errors,
  children,
}) => {
  const defaultMessage = (msg: string) => <Text color="red.400">{msg}</Text>;

  for (let [field, error] of Object.entries(errors)) {
    if (error && touched[field]) {
      return (children ? children : defaultMessage)(error as string);
    }
  }

  return null;
};

export default UnifiedErrorMessage;
