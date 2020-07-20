import React from 'react';

import { Box, Flex, Heading, Text } from '@chakra-ui/core';

import SolidButton, { SolidButtonProps } from '../../../components/Shared/button/SolidButton';

const SplashButton = (props: SolidButtonProps) => (
    <SolidButton
        variantColor='petcode.blue'
        width='170px'
        height='45px'
        fontWeight='thin'
        textTransform='uppercase'
        { ...props }
    />
);

const Splash = () => (
    <Box
        backgroundImage='url(/media/karans-dog.JPG)'
        backgroundPosition='center'
        backgroundSize='cover'
        paddingY={200}
        paddingLeft={100}
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
            <Box marginTop={6}>
                <SplashButton marginRight={4}>
                    <Text>Learn More</Text>
                </SplashButton>
                <SplashButton marginRight={4}>
                    <Text>Features</Text>
                </SplashButton>
                <SplashButton>
                    <Text>Get Started</Text>
                </SplashButton>
            </Box>
        </Flex>
    </Box>
);

export default Splash;