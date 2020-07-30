import React, { useState, useEffect } from 'react';

import { Box, Flex, Heading, Icon, Input, InputProps, Link, Text, FlexProps } from '@chakra-ui/core';

import { action, observable } from 'mobx';
import { observer } from 'mobx-react-lite';

const DigitInput = (props: InputProps) => (
    <Box
        width={ { xs: '64px', sm: '104px', md: '138px' } }
        height={ { xs: '64px', sm: '104px', md: '138px' } }
        marginX={ { xs: 2, md: 3 } }
    >
        <Input
            borderRadius={ { xs: '16px', sm: '26px', md: '34px' } }
            backgroundColor='petcode.neutral.200'
            color='transparent'
            textShadow='0 0 0 black'
            maxWidth='100%'
            height='100%'
            textAlign='center'
            fontSize={ { xs: '5xl', sm: '6xl', md: '7xl' } }
            fontFamily='Nunito'
            paddingX={0}
            { ...props }
        />
    </Box>
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

const BackArrow = () => (
    <Link href='/' display='flex' alignSelf='start' alignItems='center' margin={5}>
        <Icon name='arrow' size='50px' transform='scale(-1, 1)' color='petcode.neutral.400'/>
        <Text color='petcode.neutral.400' fontSize='2xl' marginLeft={4}>Go Back</Text>
    </Link>
);

const HeaderTextGroup = () => (
    <Box marginX={4}>
        <Heading color='petcode.blue.400' fontSize={ { xs: '5xl', md: '7xl' } } textAlign='center'>
            Forgot Password
        </Heading>
        <Text color='petcode.neutral.600' fontSize={ { xs: '2xl', md: '3xl' } } textAlign='center' fontWeight='thin' maxWidth='700px'>
            Enter the 4 digit recovery code that was sent to the email linked with your account.
        </Text>
    </Box>
);

const ForgotPasswordPage = () => (
    <Flex direction='column' height='100%' alignItems='center' justifyContent='center'>
        <BackArrow/>
        <Box flexGrow={1}/>
        <HeaderTextGroup/>
        <DigitInputGroup numDigits={4} marginTop={10}/>
        <Box flexGrow={2}/>
    </Flex>
);

export default ForgotPasswordPage;
