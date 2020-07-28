import React from 'react';

import { Flex } from '@chakra-ui/core';

import Header from '../../components/Shared/header';

const DashboardPage = () => (
    <Flex direction='column' paddingTop='57px'>
        <Header backgroundColor='petcode.neutral.700'/>
        Dashboard
    </Flex>
);

export default DashboardPage;
