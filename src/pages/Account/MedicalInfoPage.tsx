import React from 'react';

import { Flex } from '@chakra-ui/core';

import AccountPageLayout from './components/AccountPageLayout';

const MedicalInfoSection = () => (
    <Flex direction='column' flexGrow={1} backgroundColor='petcode.neutral.200' padding={10}/>
);

const MedicalInfoPage = () => (
    <AccountPageLayout>
       <MedicalInfoSection/> 
    </AccountPageLayout>
);

export default MedicalInfoPage;
