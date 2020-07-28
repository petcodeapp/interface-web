import React from 'react';

import { Box, Flex, Image, Text } from '@chakra-ui/core';
import QRCode from 'qrcode.react';
import { withTheme } from 'emotion-theming';

import Header from '../../components/Shared/header';
import Sidebar from './sections/Sidebar';

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

const Dashboard = withTheme(({ theme }) => (
    <Flex direction='column' flexGrow={1} backgroundColor='petcode.neutral.200' padding={10}>
        <Flex
            direction='row'
            alignItems='center'
            rounded='lg'
            backgroundColor='#F3C66B'
            backgroundImage='url(/media/paw-icon.png)'
            backgroundRepeat='no-repeat'
            backgroundPosition='0% 50%'
            width='100%'
            marginBottom={10}
        >
            <Flex direction='column' marginLeft={40}>
                <Text color='petcode.neutral.700' fontSize='5xl' fontWeight='bold'>
                    Max
                </Text>
                <Text color='petcode.neutral.500' fontSize='2xl' fontWeight='thin'>
                    Weimaraner &middot; John Doe
                </Text>
            </Flex>
            <Box flexGrow={1}/>
            <Image rounded='lg' alt='Dog on yellow background' src='/media/dog-on-yellow-background-full.png'/>
        </Flex>
        <Flex direction='row'>
            <Flex direction='row' rounded='lg' backgroundColor='white' flexBasis='50%' padding={4} marginRight={10}>
                <Flex direction='column' marginRight={4}>
                    <Text color='petcode.neutral.700' fontSize='3xl'>
                        Max's Code
                    </Text>
                    <Text color='petcode.neutral.500' fontSize='xl' fontWeight='thin'>
                        Scan this code to view your pet's public profile.
                    </Text>
                </Flex>
                <Box alignSelf='center'>
                    <QRCode value='https://petcodeusa.com' size={200} fgColor={theme.colors.petcode.blue[400]}/>
                </Box>
            </Flex>
            <Flex direction='column' rounded='lg' backgroundColor='white' flexBasis='50%' padding={4}>
                <Text color='petcode.neutral.700' fontSize='3xl' marginBottom={3}>
                    Account Information
                </Text>
                <InfoField field='Name' value='John Doe'/>
                <InfoField field='Email' value='example@gmail.com'/>
                <InfoField field='Password' value='*******'/>
                <InfoField field='Pet Name' value='Max'/>
            </Flex>
        </Flex>
    </Flex>
));

const DashboardPage = () => (
    <Flex direction='column' height='calc(100% - 57px)' paddingTop='57px'>
        <Header backgroundColor='petcode.neutral.700'/>
        <Flex direction='row' height='100%'>
            <Sidebar/>
            <Dashboard/>
        </Flex>
    </Flex>
);

export default DashboardPage;
