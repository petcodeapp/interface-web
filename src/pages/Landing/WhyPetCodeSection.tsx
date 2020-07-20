import React from 'react';

import { Button, Flex, Heading } from '@chakra-ui/core';

const WhyPetcodeSection = () => (
    <Flex direction='column' backgroundColor='petcode.neutral.200' paddingTop={12} paddingBottom={24} paddingLeft={40}>
        <Heading color='petcode.blue.400' fontSize='6xl'>
            Why Petcode?
        </Heading>
        <Flex direction='row'>
            <Flex direction='column'>
                <Flex direction='row'>
                    <Button variantColor='petcode.blue' border='none' roundedLeft='full'>
                        Features
                    </Button>
                    <Button variantColor='white' border='none' roundedRight='full'>
                        Compare
                    </Button>
                </Flex>
            </Flex>
        </Flex>
    </Flex>
);

export default WhyPetcodeSection;
