import React from 'react';

import { Box, BoxProps, Flex, Heading, Icon, Text } from '@chakra-ui/core';

import SolidButton, { SolidButtonProps } from '../../components/Shared/button/SolidButton';

const HeaderText = (props: BoxProps) => (
    <Text color='white' fontSize='lg' textTransform='uppercase' { ...props }/>
);

const Header = () => (
    <Flex
        position='fixed'
        top={0}
        background='rgba(0, 0, 0, 0.4)'
        width='calc(100% - 4rem)'
        paddingX={8}
        paddingY={4}
    >
        <HeaderText>PetCode</HeaderText>
        <Box flexGrow={1}/>
        <HeaderText marginRight={8}>Home</HeaderText>
        <HeaderText marginRight={8}>About Us</HeaderText>
        <HeaderText marginRight={8}>Purchase</HeaderText>
        <HeaderText marginRight={8}>
            <Icon name='template' height='22px' width='22px'/>
            Register
        </HeaderText>
        <HeaderText>
            <Icon name='user-circle' height='22px' width='22px'/>
            Sign In
        </HeaderText>
    </Flex>
);

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

const WhatIsItSection = () => (
    <Flex direction='column' alignItems='center'>
        <Heading color='petcode.blue.400' fontSize='6xl' marginTop={12} marginBottom={3}>
            What Is It?
        </Heading>
        <Text color='petcode.neutral.500' fontSize='2xl' textAlign='center' marginX={48}>
            The PetCode Tag is a simple tag with a QR code that unlocks all the features below and more.
        </Text>
    </Flex>
);

const LandingPage: React.FunctionComponent = () => (
    <Flex direction='column' minHeight='100%'>
        <Header/>
        <Splash/>
        <WhatIsItSection/>
    </Flex>
);

export default LandingPage;
