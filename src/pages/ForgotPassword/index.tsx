import React from 'react';

import { Flex, Input } from '@chakra-ui/core';

const DigitInput = () => (
    <Input
        backgroundColor='petcode.neutral.200'
        color='transparent'
        textShadow='0 0 0 black'
        borderRadius='34px'
        height='138px'
        width='138px'
        borderColor='none'
        textAlign='center'
        fontSize='7xl'
        fontFamily='Nunito'
        value=''
        marginX='14px'
        padding={0}
    />
);

const ForgotPasswordPage = () => (
    <Flex direction='row' height='100%' alignItems='center' justifyContent='center'>
        <DigitInput/>
        <DigitInput/>
        <DigitInput/>
        <DigitInput/>
    </Flex>
);

export default ForgotPasswordPage;
