import React from 'react';

import { Box, BoxProps, Flex, Icon, Text } from '@chakra-ui/core';

import Splash from './Splash';
import WhatIsItSection from './WhatIsItSection';
import WhyPetCodeSection from './WhyPetCodeSection';
import GetStartedSection from './GetStartedSection';
import TestimonialSection from './TestimonialSection';

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
        zIndex={999}
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

const LandingPage: React.FunctionComponent = () => (
    <Flex direction='column'>
        <Header/>
        <Splash/>
        <WhatIsItSection/>
        <WhyPetCodeSection/>
        <GetStartedSection/>
        <TestimonialSection/>
    </Flex>
);

export default LandingPage;
