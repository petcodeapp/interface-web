import React, { useContext } from 'react';

import { Box, Flex, Icon, Image, Link, Text } from '@chakra-ui/core';
import { Link as RouterLink, LinkProps, withRouter } from 'react-router-dom';

import BaseButton from '../../../components/Shared/button/BaseButton';

import { AuthContext } from '../../../views/Auth';

type SidebarLinkProps = {
    iconName: string;
    text: string;
    selected?: boolean;
} & LinkProps;

const SidebarLink: React.FC<SidebarLinkProps> = ({ iconName, text, selected = false, ...props }) => (
    <Link
        // @ts-ignore
        as={ RouterLink }
        display='flex'
        flexDirection='row'
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
        { ...props }
    >
        <Icon name={ iconName } size='19px' marginRight={3}/>
        <Text>{ text }</Text>
    </Link>
);

const Sidebar = withRouter(({ location }) => {
    const auth = useContext(AuthContext);

    return (
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
            <SidebarLink selected={ location.pathname == '/dashboard' } to='/dashboard' iconName='home' text='Dashboard'/>
            <SidebarLink selected={ location.pathname == '/contactinfo' } to='/contactinfo' iconName='phone' text='Contact Info'/>
            <SidebarLink selected={ location.pathname == '/petinfo' } to='/petinfo' iconName='heart' text='Pet Info'/>
            <SidebarLink selected={ location.pathname == '/medicalinfo' } to='/medicalinfo' iconName='clipboard-thin' text='Medical Info'/>
            <SidebarLink selected={ location.pathname == '/scanlocations' } to='/scanlocations' iconName='location' text='Scan Locations'/>
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
                onClick={ auth.signOut }
            >
                <Text>Sign Out</Text>
            </BaseButton>
        </Flex>
    );
});

export default Sidebar;
