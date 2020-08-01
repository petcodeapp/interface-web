import React from 'react';

import { Input, InputProps, PseudoBoxProps, Text } from '@chakra-ui/core';

export const InfoFieldText: React.FC<PseudoBoxProps> = props => (
    <Text color='petcode.blue.400' fontSize='xl' marginBottom={1} { ...props }/>
);

export const InfoFieldLabel: React.FC<PseudoBoxProps> = props => (
    <Text color='petcode.neutral.400' fontSize='sm' { ...props }/>
);

export const InfoFieldInput: React.FC<InputProps> = props => (
    <Input
        size='md'
        variant='flushed'
        color='petcode.blue.400'
        fontSize='xl'
        fontFamily='body'
        height='auto'
        borderColor='petcode.neutral.400'
        _focus={ { borderColor: 'petcode.blue.400' } }
        { ...props }
    />
);
