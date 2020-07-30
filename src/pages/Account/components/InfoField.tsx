import React from 'react';

import { Box, Input, InputProps, Text } from '@chakra-ui/core';

type InfoFieldProps = {
    field: string;
    value: string;
    editable?: boolean;
} & InputProps;

const InfoField: React.FC<InfoFieldProps> = ({ field, value, editable = false, ...props }) => (
    <Box>
        { editable ? (
            <Input variant='flushed' value={ value } { ...props }/>
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
