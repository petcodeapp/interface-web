import React from 'react';

import { Box, Flex, Heading, Text } from '@chakra-ui/core';

const LandingPage: React.FunctionComponent = () => (
    <Flex direction='column' minHeight='100%'>
        <Box
            backgroundImage='url(/media/karans-dog.JPG)' backgroundPosition='center' backgroundSize='cover'
            paddingY={200} paddingLeft={100}
        >
            <Flex direction='column'>
                <Heading
                    color='petcode.yellow' fontSize='6xl'
                    textShadow='0px 4px 4px rgba(0, 0, 0, 0.25)'
                >
                    One Code
                </Heading>
                <Text color='white' fontSize='3xl' width='400px'>
                    An endless suite of features for pet owners.
                </Text>
            </Flex>
        </Box>
    </Flex>
);

export default LandingPage;
