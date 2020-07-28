import React from 'react';

import { Box, Flex, Image, Text } from '@chakra-ui/core';

import Header from '../../components/Shared/header';
import Sidebar from './sections/Sidebar';

const Dashboard = () => (
    <Flex direction='column' flexGrow={1} backgroundColor='petcode.neutral.200' padding={10}>
        <Flex
            direction='row'
            alignItems='center'
            rounded='md'
            backgroundColor='#F3C66B'
            backgroundImage='url(/media/paw-icon.png)'
            backgroundRepeat='no-repeat'
            backgroundPosition='0% 50%'
            width='100%'
        >
            <Flex direction='column' marginLeft={40}>
                <Text color='petcode.neutral.700' fontSize='5xl' fontWeight='bold'>
                    Max
                </Text>
                <Text color='petcode.neutral.500' fontSize='2xl' fontWeight='thin'>
                    Weimaraner &middot; John Doe
                </Text>
            </Flex>
            <Box flexGrow={1}/>
            <Image alt='Dog on yellow background' src='/media/dog-on-yellow-background-full.png'/>
        </Flex>
    </Flex>
);

const DashboardPage = () => (
    <Flex direction='column' height='calc(100% - 57px)' paddingTop='57px'>
        <Header backgroundColor='petcode.neutral.700'/>
        <Flex direction='row' height='100%'>
            <Sidebar/>
            <Dashboard/>
        </Flex>
    </Flex>
);

export default DashboardPage;
