import React from 'react';

import { Box, Flex, Heading, Text } from '@chakra-ui/core';

import BaseButton from '../../components/Shared/button/BaseButton';
import IconBadge from '../../components/Shared/badge/IconBadge';

const GetStartedSteps = () => (
    <Flex direction='row'>
        <Flex direction='column' alignItems='center' flexBasis='25%' position='relative' top='-70px'>
            <IconBadge iconName='qr-code' backgroundColor='petcode.yellow.400' position='relative' top='70px' border='10px solid' borderColor='petcode.neutral.200'/>
            <Flex direction='column' alignItems='center' rounded='lg' backgroundColor='petcode.neutral.200' textAlign='center' paddingTop={20} paddingX={5}>
                <Box rounded='md' backgroundColor='petcode.neutral.500' paddingX={3} paddingY={1} marginBottom={4}>
                    <Text color='white' textTransform='uppercase'>
                        Step 1
                    </Text>
                </Box>
                <Text fontSize='2xl' color='petcode.neutral.700' marginBottom={2}>
                    Order Your PetCode Tag
                </Text>
                <Text fontSize='xl' fontWeight='thin' color='petcode.neutral.600'>
                    Order your PetCode Tag in your local store or in our webshop. Once you have recieved your Tag, you can move onto setting up your Pet Profile.
                </Text>
                <BaseButton variantColor='petcode.blue' marginY={6}>
                    <Text fontSize='lg' fontWeight='thin' textTransform='uppercase' letterSpacing='0.05em'>
                        Order PetCode Tag
                    </Text>
                </BaseButton>
            </Flex>
        </Flex>
        <Flex direction='column' backgroundColor='petcode.neutral.200'></Flex>
        <Flex direction='column' backgroundColor='petcode.neutral.200'></Flex>
    </Flex>
);

const GetStartedSection = () => (
    <Flex direction='column' alignItems='center' paddingTop={12}>
        <Heading color='petcode.blue.400' fontSize='6xl' marginBottom={12}>
            Get Started
        </Heading>
        <GetStartedSteps/>
    </Flex>
);

export default GetStartedSection;
