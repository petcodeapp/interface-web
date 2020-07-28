import React from 'react';

import { Flex } from '@chakra-ui/core';

import Header from '../../components/Shared/header';

import Splash from './Splash';
import WhatIsItSection from './WhatIsItSection';
import WhyPetCodeSection from './WhyPetCodeSection';
import GetStartedSection from './GetStartedSection';
import TestimonialSection from './TestimonialSection';
import Footer from './Footer';


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
