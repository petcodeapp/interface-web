import React from 'react';

import { Box, Button, Flex, Heading, Icon, Text } from '@chakra-ui/core';

import BaseButton from '../../components/Shared/button/BaseButton';

type FeatureProps = {
    text: string;
};

const Feature: React.FC<FeatureProps> = ({ text }) => (
    <Flex direction='row' alignItems='center' marginY={3}>
        <Icon name='checkmark' size='45px' color='#48BB78' marginRight={3}/>
        <Text fontSize='2xl' color='petcode.neutral.600' fontWeight='bold'>
            { text }
        </Text>
    </Flex>
);

const Features = () => (
    <Flex direction='column' justifyContent='center' flexBasis='45%'>
        <Feature text='Free Online Pet Profile'/>
        <Feature text='Affordable Hi-Tech Tag'/>
        <Feature text='Information Visible on Any Browser'/>
    </Flex>
);

const WhyPetcodeSection = () => (
    <Flex direction='column' backgroundColor='petcode.neutral.200' paddingTop={12} paddingBottom={24} paddingX={16}>
        <Heading color='petcode.blue.400' fontSize='6xl' marginBottom={12}>
            Why Petcode?
        </Heading>
        <Flex direction='row' justifyContent='space-between'>
            <Flex direction='column' alignItems='start' flexBasis='45%'>
                <Flex direction='row'>
                    <Button _hover={{}} _active={{}} variantColor='petcode.blue' border='none' roundedLeft='full' paddingX={10}>
                        <Text fontWeight='thin' textTransform='uppercase' letterSpacing='0.05em'>
                            Features
                        </Text>
                    </Button>
                    <Button cursor='pointer' variantColor='petcode.blue' variant='outline' roundedRight='full' paddingX={10}>
                        <Text fontWeight='thin' textTransform='uppercase' letterSpacing='0.05em'>
                            Compare
                        </Text>
                    </Button>
                </Flex>
                <Text color='petcode.neutral.600' fontSize='2xl' fontWeight='thin' marginY={5}>
                    The PetCode tag is so much more than just a tag, it is an evergrowing network of features for pet owners.
                </Text>
                <BaseButton size='md' variantColor='petcode.yellow' paddingX={8}>
                    <Text fontWeight='thin' textTransform='uppercase' letterSpacing='0.05em'>
                        Order Now
                    </Text>
                </BaseButton>
            </Flex>
            <Features/>
        </Flex>
    </Flex>
);

export default WhyPetcodeSection;
