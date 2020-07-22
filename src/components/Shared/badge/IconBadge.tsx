import React from 'react';

import { Box, BoxProps, Icon } from '@chakra-ui/core';

type IconBadgeProps = {
    iconName: string;
} & BoxProps;

const IconBadge: React.FC<IconBadgeProps> = ({ iconName, ...props }) => (
    <Box rounded='full' padding={6} { ...props }>
        <Icon name={ iconName } color='white' size='50px'/>
    </Box>
);

export default IconBadge;
