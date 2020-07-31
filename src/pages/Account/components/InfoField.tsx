import React from 'react';

import { Text, PseudoBoxProps } from '@chakra-ui/core';

export const InfoFieldText: React.FC<PseudoBoxProps> = props => (
    <Text color='petcode.blue.400' fontSize='xl' marginBottom={1} { ...props }/>
);

export const InfoFieldLabel: React.FC<PseudoBoxProps> = props => (
    <Text color='petcode.neutral.400' fontSize='sm' { ...props }/>
);
