import React from 'react';

import { Box, Text } from '@chakra-ui/core';

type InfoFieldProps = {
    field: string;
    value: string;
};

const InfoField: React.FC<InfoFieldProps> = ({ field, value }) => (
    <Box>
        <Text color='petcode.blue.400' fontSize='xl'>
            { value }
        </Text>
        <Text color='petcode.neutral.400' fontSize='sm'>
            { field }
        </Text>
    </Box>
);

export default InfoField;
