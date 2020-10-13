import React from "react";

import { Box, Flex, Stack, Text } from "@chakra-ui/core";
import IntegratedProgressiveImage from "../../components/Shared/atoms/IntegratedProgressiveImage";

import SupportPageLayout from "../../components/Shared/layouts/SupportPageLayout";

const ComingSoonPage = () => (
  <SupportPageLayout footerProps={{ wavesArePadded: false }}>
    <Flex direction="column" alignItems="center" flexGrow={1}>
      <Box flexGrow={2} />
      <Stack textAlign="center" spacing={6} maxWidth="700px" paddingX={16}>
        <Text fontWeight="bold" fontSize="5xl" color="petcode.neutral.700">
          Coming Soon!
        </Text>
        <Text fontSize="4xl" color="petcode.neutral.600">
          We are currently working on this page and will launch it soon!
        </Text>
      </Stack>
      <Box flexGrow={1} />
      <IntegratedProgressiveImage
        slug="coming-soon-dog.png"
        maxWidth="100%"
        marginBottom={`${(20 / 1440) * 100}%`}
      />
    </Flex>
  </SupportPageLayout>
);

export default ComingSoonPage;
