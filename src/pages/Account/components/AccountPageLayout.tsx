import React from 'react';

import { Flex } from '@chakra-ui/core';

import Header from '../../../components/Shared/header';
import Sidebar from './Sidebar';

const AccountPageLayout: React.FC = ({ children }) => (
    <Flex direction='column' minHeight='calc(100% - 57px)' paddingTop='57px'>
        <Header backgroundColor='petcode.neutral.700'/>
        <Flex direction='row' minHeight='100%'>
            <Sidebar/>
            { children }
        </Flex>
    </Flex>
);

export default AccountPageLayout;
