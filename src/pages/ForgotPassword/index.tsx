import React, { useState, useEffect } from 'react';

import { Flex, Heading, Input, InputProps, Text, FlexProps } from '@chakra-ui/core';

import { action, observable } from 'mobx';
import { observer } from 'mobx-react-lite';

const DigitInput = (props: InputProps) => (
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
        marginX='14px'
        padding={0}
        { ...props }
    />
);

type DigitInputGroupProps = {
    numDigits: number;
};

const DigitInputGroup = observer(({ numDigits, ...props }: FlexProps & DigitInputGroupProps) => {
    const [digits] = useState(() => observable(new Array(numDigits).fill('')));

    const keyDownListener = action((e: KeyboardEvent) => {
        e.preventDefault();

        const nextEmptyIndex = digits.findIndex(digit => !digit);

        if (!isNaN(parseInt(e.key))) {
            digits[nextEmptyIndex == -1 ? digits.length - 1 : nextEmptyIndex] = e.key;
        } else if (nextEmptyIndex != 0 && e.key == 'Backspace') {
            digits[nextEmptyIndex == -1 ? digits.length - 1 : nextEmptyIndex - 1] = '';
        }
    });

    useEffect(() => {
        window.addEventListener('keydown', keyDownListener);

        return () => window.removeEventListener('keydown', keyDownListener);
    });

    return (
        <Flex direction='row' { ...props }>
            { digits.map((_, idx) => (
                <DigitInput
                    key={ idx }
                    value={ digits[idx] }
                />
            )) }
        </Flex>
    );
});

const ForgotPasswordPage = () => (
    <Flex direction='column' height='100%' alignItems='center' justifyContent='center'>
        <Heading color='petcode.blue.400' fontSize='7xl'>
            Forgot Password
        </Heading>
        <Text color='petcode.neutral.600' fontSize='3xl' textAlign='center' fontWeight='thin' maxWidth='700px'>
            Enter the 4 digit recovery code that was sent to the email linked with your account.
        </Text>
        <DigitInputGroup numDigits={4} marginTop={10}/>
    </Flex>
);

export default ForgotPasswordPage;
