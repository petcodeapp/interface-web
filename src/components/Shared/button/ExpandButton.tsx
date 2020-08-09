import React, { useState } from 'react';

import { FlexProps } from '@chakra-ui/core';

import MotionBox from '../../Motion/Box';
import MotionFlex from '../../Motion/Flex';

import { action, observable } from 'mobx';
import { useObserver } from 'mobx-react';

import { MotionProps } from 'framer-motion';

type ExpandButtonProps = {
    expandChildren: React.ReactNode;
} & FlexProps & MotionProps;

const ExpandButton: React.FC<ExpandButtonProps> = ({ children, expandChildren, ...props }) => {
    const variants = {
        open: { opacity: 1, width: '100%' },
        closed: { opacity: 0, width: 0 }
    };

    const [hovered] = useState(() => observable.box(false));

    return useObserver(() => (
        <MotionFlex
            direction='row'
            alignItems='center'
            cursor='pointer'
            onMouseEnter={ action(() => hovered.set(true)) }
            onMouseLeave={ action(() => hovered.set(false)) }
            whileTap={ { scale: 1.1 } }
            transition={ { duration: '0.2' } }
            { ...props }
        >
            <MotionBox
                animate={ hovered.get() ? 'open' : 'closed' }
                variants={ variants }
            >
                { expandChildren }
            </MotionBox>
            { children }
        </MotionFlex>
    ));
};

export default ExpandButton;
