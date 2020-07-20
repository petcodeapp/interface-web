import React from 'react';

import { Box, BoxProps, Flex, Heading, Icon, Image, Text } from '@chakra-ui/core';

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
        <HeaderText display='flex' alignItems='center' marginRight={8}>
            <Icon name='template' size='20px' marginRight={1}/>
            Register
        </HeaderText>
        <HeaderText display='flex' alignItems='center'>
            <Icon name='user-circle' size='20px' marginRight={1}/>
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
        <Heading color='petcode.blue.400' fontSize='6xl' marginTop={12}>
            What Is It?
        </Heading>
        <Text color='petcode.neutral.500' fontSize='2xl' textAlign='center' marginX={64} marginY={3}>
            The PetCode Tag is a simple tag with a QR code that unlocks all the features below and more.
        </Text>
        <Flex direction='column' marginX={20}>
            <Flex direction='row'>
                <Flex direction='column' flexBasis='35%' marginRight={24}>
                    <Flex direction='row' alignItems='end' justifyContent='space-between' marginBottom={3}>
                        <Text color='petcode.neutral.600' fontSize='3xl' alignSelf='end' marginRight={6}>
                            Customizable Pet Profiles
                        </Text>
                        <Box rounded='full' backgroundColor='#727DE3' padding={6}>
                            <Icon name='template' color='white' size='55px'/>
                        </Box>
                    </Flex>
                    <Text color='petcode.neutral.500' fontSize='xl'>
                        Customize your Pet Profile to match your pet’s behavior, characteristics, dietary needs, and more!
                    </Text>
                </Flex>
                <Image alt='Dog on yellow background' src='/media/dog-on-yellow-background.png' height='300px'/>
                <Flex direction='column' flexBasis='35%' marginLeft={24}>
                    <Flex direction='row' alignItems='end' justifyContent='space-between' marginBottom={3}>
                        <Box rounded='full' backgroundColor='#4FD1AA' padding={6}>
                            <Icon name='messages' color='white' size='55px'/>
                        </Box>
                        <Text color='petcode.neutral.600' fontSize='3xl' textAlign='right' alignSelf='end' marginLeft={6}>
                            Contact Information
                        </Text>
                    </Flex>
                    <Text color='petcode.neutral.500' fontSize='xl'>
                        Keep all your contact information up to date, so you can be easily reached.
                    </Text>
                </Flex>
            </Flex>
            <Flex direction='row'>
                <Flex direction='column' position='relative' top='-70px' flexBasis='33%' paddingLeft={6}>
                    <Flex direction='row' alignItems='end' justifyContent='space-between' marginBottom={3}>
                        <Text color='petcode.neutral.600' fontSize='3xl' alignSelf='end' marginRight={6}>
                            Medical Information
                        </Text>
                        <Box rounded='full' backgroundColor='#4299E1' padding={6}>
                            <Icon name='clipboard' color='white' size='55px'/>
                        </Box>
                    </Flex>
                    <Text color='petcode.neutral.500' fontSize='xl'>
                        Display all of your pet’s medical information easily, all in one place.
                    </Text>
                </Flex>
                <Flex direction='column' alignItems='center' flexBasis='33%' marginX={6} marginTop={6}>
                    <Flex direction='column' alignItems='center'>
                        <Box rounded='full' backgroundColor='petcode.blue.400' padding={6}>
                            <Icon name='flag' color='white' size='55px'/>
                        </Box>
                        <Text color='petcode.neutral.600' fontSize='3xl' alignSelf='end' textAlign='center' marginRight={6}>
                            Scan Locations
                        </Text>
                    </Flex>
                    <Text color='petcode.neutral.500' fontSize='xl'>
                        View everywhere your pet’s tag has been scanned. If your pet is lost, a message can be sent out to all PetCode users within a 5 mile radius.
                    </Text>
                </Flex>
                <Flex direction='column' position='relative' top='-70px' flexBasis='33%' paddingRight={6}>
                    <Flex direction='row' alignItems='end' justifyContent='space-between' marginBottom={3}>
                        <Box rounded='full' backgroundColor='petcode.teal' padding={6}>
                            <Icon name='link' color='white' size='55px'/>
                        </Box>
                        <Text color='petcode.neutral.600' fontSize='3xl' textAlign='right' alignSelf='end' marginLeft={6}>
                            Integrations
                        </Text>
                    </Flex>
                    <Text color='petcode.neutral.500' fontSize='xl'>
                        Simplify your pet’s information by using integrations to upload vaccination history and registration.
                    </Text>
                </Flex>
            </Flex>
        </Flex>
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
