import React from 'react';

import { Box, Input, InputProps, Text } from '@chakra-ui/core';

type InfoFieldProps = {
    field: string;
    value: string;
    isEditable?: boolean;
} & InputProps;

const InfoField: React.FC<InfoFieldProps> = ({ field, value, isEditable = false, ...props }) => (
    <Box>
        { isEditable ? (
            <Input
                size='md'
                variant='flushed'
                fontSize='xl'
                fontFamily='Nunito'
                height='auto'
                value={ value }
                _focus={ { borderColor: 'petcode.blue.400' } }
                { ...props }
            />
        ) : (
            <Text color='petcode.blue.400' fontSize='xl'>
                { value }
            </Text>
        ) }
        <Text color='petcode.neutral.400' fontSize='sm'>
            { field }
        </Text>
    </Box>
);

export default InfoField;
