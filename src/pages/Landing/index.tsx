import React from 'react';

import { Box, Flex, Icon, Text } from '@chakra-ui/core';

import Splash from './sections/Splash';
import WhatIsItSection from './sections/WhatIsItSection';
import WhyPetCodeSection from './sections/WhyPetCodeSection';
import GetStartedSection from './sections/GetStartedSection';
import TestimonialSection from './sections/TestimonialSection';
import Footer from './sections/Footer';

const Header = () => (
    <Flex
        display={ { xs: 'none', md: 'flex' } }
        position='fixed'
        top={0}
        background='rgba(0, 0, 0, 0.4)'
        width='calc(100% - 4rem)'
        paddingX={8}
        paddingY={4}
        zIndex={999}
        color='white'
        fontSize='lg'
        textTransform='uppercase'
    >
        <Text>PetCode</Text>
        <Box flexGrow={1}/>
        <Text marginRight={8}>Home</Text>
        <Text marginRight={8}>About Us</Text>
        <Text marginRight={8}>Purchase</Text>
        <Text display='flex' alignItems='center' marginRight={8}>
            <Icon name='template' size='15px' marginRight={2}/>
            Register
        </Text>
        <Text display='flex' alignItems='center'>
            <Icon name='user-circle' size='16px' marginRight={2}/>
            Sign In
        </Text>
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
        <Footer/>
    </Flex>
);

export default LandingPage;
