import React from 'react';

import { Box, Flex, Heading, Image, Link, Text } from '@chakra-ui/core';

import InputWithIcon from '../../components/input/InputWithIcon';
import SolidButton from '../../components/button/SolidButton';

const LeftContainer: React.FunctionComponent = ({ children }) => (
    <Flex direction='column' flexGrow={1} alignItems='center' justifyContent='center' marginLeft={ { xs: 8, sm: 24, md: 16 } } marginRight={ { xs: 8, sm: 24, md: 0 } }>
        { children }
    </Flex>
);

const HeaderTextGroup = () => (
    <>
        <Heading color='petcode.blue.400' fontSize={ { xs: '5xl', sm: '6xl', md: '5xl', lg: '6xl' } } textAlign='center'>
            Welcome to the PetCode Network!
        </Heading>
        <Text color='petcode.neutral.600' fontSize={ { xs: 'xl', lg: '3xl' } } fontWeight='thin' textAlign='center' lineHeight='shorter'>
            Sign up to create your pet profile, your personal profile, and more!
        </Text>
    </>
);

const RegistrationPage = () => (
    <Flex direction='row' height='100%'>
        <LeftContainer>
            <HeaderTextGroup/>
        </LeftContainer>
        <Flex
            display={ { xs: 'none', md: 'flex' } } justifyContent='flex-end'
            direction='column' flexBasis='553px'
        >
            <Image alt='Dog with tongue out' src='/media/dog-with-tongue-out.png'/>
        </Flex>
    </Flex>
);

export default RegistrationPage;
