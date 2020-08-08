import React, { useState } from 'react';

import { Box, Flex, Image, Text } from '@chakra-ui/core';
import QRCode from 'qrcode.react';

import AccountPageLayout from './components/AccountPageLayout';
import { InfoFieldText, InfoFieldLabel } from './components/InfoField';
import Checkbox from './components/Checkbox';

import { action, observable } from 'mobx';
import { useObserver } from 'mobx-react';
import moment from 'moment';
import { withTheme } from 'emotion-theming';

import { Reminder } from '../../Models/Reminder';

const Dashboard = withTheme(({ theme }) => {
    const [reminders] = useState(observable([
        { name: 'Example reminder', date: '2020-08-02T09:00:00', frequency: 'Weekly', notificationMethod: 'Email', enabled: true },
        { name: 'Example reminder', date: '2020-08-02T09:00:00', frequency: 'Weekly', notificationMethod: 'Email', enabled: true },
        { name: 'Example reminder', date: '2020-08-02T09:00:00', frequency: 'Weekly', notificationMethod: 'Email', enabled: true },
        { name: 'Example reminder', date: '2020-08-02T09:00:00', frequency: 'Weekly', notificationMethod: 'Email', enabled: true },
        { name: 'Example reminder', date: '2020-08-02T09:00:00', frequency: 'Weekly', notificationMethod: 'Email', enabled: true }
    ] as Reminder[]));

    return useObserver(() => (
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
            <Flex direction='row' flexWrap='wrap' justifyContent='space-between'>
                <Flex direction='row' rounded='lg' backgroundColor='white' flexBasis='43%' padding={6} marginTop={10}>
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
                <Flex direction='column' rounded='lg' backgroundColor='white' flexBasis='43%' padding={6} marginTop={10}>
                    <Text color='petcode.neutral.700' fontSize='3xl' marginBottom={3}>
                        Account Information
                    </Text>
                    <Box>
                        <InfoFieldText>John Doe</InfoFieldText>
                        <InfoFieldLabel>Name</InfoFieldLabel>
                    </Box>
                    <Box>
                        <InfoFieldText>example@gmail.com</InfoFieldText>
                        <InfoFieldLabel>Email</InfoFieldLabel>
                    </Box>
                    <Box>
                        <InfoFieldText>*******</InfoFieldText>
                        <InfoFieldLabel>Password</InfoFieldLabel>
                    </Box>
                    <Box>
                        <InfoFieldText>Max</InfoFieldText>
                        <InfoFieldLabel>Pet Name</InfoFieldLabel>
                    </Box>
                </Flex>
            </Flex>
            <Flex direction='column' rounded='lg' backgroundColor='white' flexBasis='100%' padding={6} marginTop={10}>
                <Text color='petcode.neutral.700' fontSize='3xl' marginBottom={3}>
                    Reminders
                </Text>
                {
                    reminders.map((reminder, idx) => (
                        <Flex key={ idx } direction='column' fontSize='xl'>
                            <Flex direction='row' alignItems='center'>
                                <Checkbox
                                    checked={ reminder.enabled }
                                    cursor='pointer'
                                    size={24}
                                    onClick={ action(() => reminder.enabled = true) }
                                />
                                <Text color='petcode.blue.400' marginLeft={2}>
                                    { reminder.name }
                                </Text>
                            </Flex>
                            <Text color='petcode.neutral.400' marginLeft={8}>
                                {
                                    moment(reminder.date).format('M/D/YY') } @ {
                                    moment(reminder.date).format('LT') } / {
                                    reminder.frequency } / {
                                    reminder.notificationMethod
                                }
                            </Text>
                        </Flex>
                    ))
                }
            </Flex>
        </Flex>
    ));
});

const DashboardPage = () => (
    <AccountPageLayout>
        <Dashboard/>
    </AccountPageLayout>
);

export default DashboardPage;
