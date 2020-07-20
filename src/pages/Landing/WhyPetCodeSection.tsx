import React from 'react';

import { Button, Flex, Heading, Text } from '@chakra-ui/core';
import BaseButton from '../../components/Shared/button/BaseButton';

const WhyPetcodeSection = () => (
    <Flex direction='row' backgroundColor='petcode.neutral.200' paddingTop={12} paddingBottom={24} paddingLeft={40}>
        <Flex direction='column' alignItems='start' flexBasis='45%'>
            <Heading color='petcode.blue.400' fontSize='6xl' marginBottom={12}>
                Why Petcode?
            </Heading>
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
        <Flex direction='column'>
            
        </Flex>
    </Flex>
);

export default WhyPetcodeSection;
