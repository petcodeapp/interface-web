import React from 'react';

import { Box, BoxProps, Input, InputProps, Text } from '@chakra-ui/core';

type InfoFieldProps = {
    field: string;
    value: string;
    isEditable?: boolean;
    inputProps?: InputProps;
} & BoxProps;

const InfoField: React.FC<InfoFieldProps> = ({ field, value, isEditable = false, inputProps = {}, ...props }) => (
    <Box { ...props }>
        { isEditable ? (
            <Input
                size='md'
                variant='flushed'
                color='petcode.blue.400'
                fontSize='xl'
                fontFamily='Nunito'
                height='auto'
                value={ value }
                borderColor='petcode.neutral.400'
                _focus={ { borderColor: 'petcode.blue.400' } }
            />
        ) : (
            <Text color='petcode.blue.400' fontSize='xl' marginBottom={1}>
                { value }
            </Text>
        ) }
        <Text color='petcode.neutral.400' fontSize='sm'>
            { field }
        </Text>
    </Box>
);

export default InfoField;
