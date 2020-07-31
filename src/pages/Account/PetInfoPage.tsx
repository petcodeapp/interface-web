import React from 'react';

import { Box, Flex, Icon, Link, Text } from '@chakra-ui/core';
import { Link as RouterLink } from 'react-router-dom';

import AccountPageLayout from './components/AccountPageLayout';

const PetInfoSection = () => (
    <Flex direction='column' flexGrow={1} backgroundColor='petcode.neutral.200' padding={10}>
        <Flex direction='row' alignItems='center' color='petcode.neutral.700'>
            <Box
                rounded='full'
                size='150px'
                minWidth='150px'
                backgroundSize='cover'
                backgroundPosition='center'
                backgroundImage='url(/media/placeholder-dog.png)'
            />
            <Flex alignItems='center' marginLeft={4}>
                <Icon position='absolute' size='120px' transform='rotate(12.84deg)' opacity={0.05} name='paw'/>
                <Text
                    position='relative'
                    zIndex={2}
                    fontSize='6xl'
                    marginLeft={16}
                >
                    Max
                </Text>
            </Flex>
            <Box flexGrow={1}/>
            <Link
                // @ts-ignore
                as={ RouterLink }
                to='/contactinfo'
                display='flex'
                flexDirection='column'
                justifyContent='center'
                rounded='lg'
                backgroundColor='petcode.yellow.400'
                flexBasis='200px'
                padding={6}
                marginX={6}
            >
                <Text position='relative' fontSize='3xl' zIndex={2}>
                    Contact Information
                </Text>
                <Icon position='absolute' alignSelf='end' size='100px' opacity={0.05} name='phone'/>
            </Link>
            <Link
                // @ts-ignore
                as={ RouterLink }
                to='/medicalinfo'
                display='flex'
                flexDirection='column'
                justifyContent='center'
                rounded='lg'
                backgroundColor='petcode.yellow.400'
                flexBasis='200px'
                padding={6}
            >
                <Text position='relative' fontSize='3xl' zIndex={2}>
                    Medical Information
                </Text>
                <Icon position='absolute' alignSelf='end' size='100px' opacity={0.05} name='clipboard'/>
            </Link>
        </Flex>
    </Flex>
);

const PetInfoPage = () => (
    <AccountPageLayout>
       <PetInfoSection/> 
    </AccountPageLayout>
);

export default PetInfoPage;
