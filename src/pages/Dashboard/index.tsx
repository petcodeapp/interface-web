import React from 'react';

import { Flex } from '@chakra-ui/core';

import Header from '../../components/Shared/header';
import Sidebar from './sections/Sidebar';

const DashboardPage = () => (
    <Flex direction='column' paddingTop='57px'>
        <Header backgroundColor='petcode.neutral.700'/>
        <Flex direction='row'>
            <Sidebar/>
            Dashboard
        </Flex>
    </Flex>
);

export default DashboardPage;
