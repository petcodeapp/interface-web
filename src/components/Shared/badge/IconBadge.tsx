import React from 'react';

import { Box, BoxProps, Icon } from '@chakra-ui/core';

type IconBadgeProps = {
    iconName: string;
    iconSize: string;
    iconPadding: number;
} & BoxProps;

const IconBadge: React.FC<IconBadgeProps> = ({
    iconName,
    iconSize,
    iconPadding,
    ...props
}) => (
    <Box color='white' rounded='full' padding={ iconPadding } { ...props }>
        <Icon name={ iconName } size={ iconSize }/>
    </Box>
);

export default IconBadge;
