import React from 'react';

import { Button, ButtonProps } from '@chakra-ui/core';

type SolidButtonProps = ButtonProps;

const SolidButton: React.FunctionComponent<SolidButtonProps> = ({ children, ...props }) => (
    <Button size='lg' variant='solid' border='none' rounded='full' width='100%' height='52px' { ...props }> 
        { children }
    </Button>
);

export default SolidButton;
