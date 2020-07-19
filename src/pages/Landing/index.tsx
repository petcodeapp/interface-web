import React from 'react';

import { Box, Flex } from '@chakra-ui/core';

const LandingPage: React.FunctionComponent = () => (
    <Flex direction='column' minHeight='100%'>
        <Box
            backgroundImage='url(/media/karans-dog.JPG)' backgroundPosition='center' backgroundSize='cover'
            paddingY={250} paddingLeft={100}
        >
            <Flex>
            </Flex>
        </Box>
    </Flex>
);

export default LandingPage;
