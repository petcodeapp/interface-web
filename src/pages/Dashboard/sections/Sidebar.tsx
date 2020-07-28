import React from 'react';

import { Box, Flex, Icon, Image, Text } from '@chakra-ui/core';

import BaseButton from '../../../components/Shared/button/BaseButton';

type SidebarItemProps = {
    iconName: string;
    text: string;
    selected?: boolean;
};

const SidebarItem: React.FC<SidebarItemProps> = ({ iconName, text, selected = false }) => (
    <Flex
        direction='row'
        fontWeight='thin'
        paddingX={10}
        marginY={3}
        { ...(
            selected ? {
                color: 'petcode.blue.400',
                borderLeft: '3px solid',
                borderColor: 'petcode.blue.400'
            } : {
                color: 'petcode.neutral.500',
                marginLeft: '3px'
            }
        ) }
    >
        <Icon name={ iconName } size='19px' marginRight={3}/>
        <Text>{ text }</Text>
    </Flex>
);

const Sidebar = () => (
    <Flex direction='column' width='270px' paddingY={10}>
        <Box paddingX={10}>
            <Image alt='Placeholder Dog' src='/media/placeholder-dog.png' width='89px' height='89px' marginBottom={3}/>
            <Flex direction='row' justifyContent='space-between'>
                <Flex direction='column'>
                    <Text color='petcode.neutral.700' fontSize='3xl' fontWeight='bold'>
                        Max
                    </Text>
                    <Text color='petcode.neutral.500' fontSize='xl' fontWeight='thin'>
                        John Doe
                    </Text>
                </Flex>
                <Icon name='dropdown-arrow' color='petcode.neutral.700' size='24px' marginTop={2}/>
            </Flex>
        </Box>
        <Box flexGrow={1}/>
        <SidebarItem selected iconName='home' text='Dashboard'/>
        <SidebarItem iconName='phone' text='Contact Info'/>
        <SidebarItem iconName='heart' text='Pet Info'/>
        <SidebarItem iconName='clipboard-thin' text='Medical Info'/>
        <SidebarItem iconName='location' text='Scan Locations'/>
        <Box flexGrow={3}/>
        <BaseButton
            size='md'
            variantColor='red'
            variant='outline'
            border='1px solid'
            marginX={10}
            marginBottom={3}
        >
            <Text>I Am Lost</Text>
        </BaseButton>
        <BaseButton
            size='md'
            variantColor='petcode.neutral'
            variant='outline'
            border='1px solid'
            marginX={10}
        >
            <Text>Sign Out</Text>
        </BaseButton>
    </Flex>
);

export default Sidebar;
