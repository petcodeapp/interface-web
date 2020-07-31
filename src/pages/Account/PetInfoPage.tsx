import React from 'react';

import { Box, Flex, Icon, Text } from '@chakra-ui/core';

import AccountPageLayout from './components/AccountPageLayout';

const PetInfoSection = () => (
    <Flex direction='column' flexGrow={1} backgroundColor='petcode.neutral.200' padding={10}>
        <Flex direction='row' alignItems='center'>
            <Box
                rounded='full'
                size='150px'
                backgroundSize='cover'
                backgroundPosition='center'
                backgroundImage='url(/media/placeholder-dog.png)'
            />
            <Flex height='100px' alignItems='center' marginLeft={4}>
                <Icon position='absolute' size='120px' transform='rotate(12.84deg)' color='petcode.neutral.300' name='paw'/>
                <Text
                    position='relative'
                    zIndex={2}
                    color='petcode.neutral.700'
                    fontSize='6xl'
                    marginLeft={16}
                >
                    Max
                </Text>
            </Flex>
            <Box flexGrow={1}/>
        </Flex>
    </Flex>
);

const PetInfoPage = () => (
    <AccountPageLayout>
       <PetInfoSection/> 
    </AccountPageLayout>
);

export default PetInfoPage;
