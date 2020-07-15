import React from 'react';

import { Icon, Input, InputGroup, InputLeftElement, InputGroupProps, InputProps } from '@chakra-ui/core';

type InputWithIconProps = {
    iconName: string;
    inputGroupProps?: Omit<InputGroupProps, 'children'>;
    inputProps?: InputProps;
};

const InputWithIcon: React.FunctionComponent<InputWithIconProps> = ({ iconName, inputGroupProps={}, inputProps={} }) => (
    <InputGroup size='lg' width='100%' { ...inputGroupProps }>
        <InputLeftElement children={ <Icon size='25px' name={ iconName } color='petcode.neutral.400'/> }/>
        <Input rounded='full' color='petcode.neutral.700' borderColor='petcode.neutral.400' focusBorderColor='petcode.neutral.500' { ...inputProps }/>
    </InputGroup>
);

export default InputWithIcon;
