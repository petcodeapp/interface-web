import React from 'react';

import { Flex, FlexProps, Icon } from '@chakra-ui/core';

type CheckboxProps = {
    checked?: boolean;
} & FlexProps;

const Checkbox: React.FC<CheckboxProps> = ({ checked, ...props }) => (
    <Flex
        alignItems='center'
        justifyContent='center'
        rounded='full'
        backgroundColor='petcode.yellow.400'
        size='32px'
        { ...props }
    >
        { checked && <Icon name='checkmark' size='20px' color='petcode.neutral.700'/> }
    </Flex>
);

export default Checkbox;
