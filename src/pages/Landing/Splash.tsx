import React from 'react';

import { Box, Flex, Heading, Text } from '@chakra-ui/core';

import BaseButton, { BaseButtonProps } from '../../components/Shared/button/BaseButton';

const SplashButton: React.FC<BaseButtonProps> = (props) => (
    <BaseButton
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
        backgroundSize='cover'
        backgroundPosition='center'
        paddingY={ { xs: 10, md: 200 } }
        paddingX={ { xs: 10, md: 0 } }
        paddingLeft={ { md: 100 } }
    >
        <Flex direction='column'>
            <Heading
                color='petcode.yellow.400' fontSize='6xl'
                textShadow='0px 4px 4px rgba(0, 0, 0, 0.25)'
            >
                One Code
            </Heading>
            <Text color='white' fontSize={ { xs: 'xl', md: '3xl' } } width={ { md: '400px' } }>
                An endless suite of features for pet owners.
            </Text>
            <Flex direction={ { xs: 'column', md: 'row' } } alignSelf='center' marginTop={6}>
                <SplashButton marginRight={4} marginBottom={4}>
                    <Text>Learn More</Text>
                </SplashButton>
                <SplashButton marginRight={4} marginBottom={4}>
                    <Text>Features</Text>
                </SplashButton>
                <SplashButton marginBottom={4}>
                    <Text>Get Started</Text>
                </SplashButton>
            </Flex>
        </Flex>
    </Box>
);

export default Splash;