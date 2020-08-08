import React, { useState } from 'react';

import { Flex, Icon, Text } from '@chakra-ui/core';

import AccountPageLayout from './components/AccountPageLayout';
import ReminderItem from './components/ReminderItem';
import ExpandButton from '../../components/Shared/button/ExpandButton';

import { observable } from 'mobx';

import { Reminder } from '../../Models/Reminder';

const RemindersSection = () => {
    const [reminders] = useState(observable([
        { name: 'Example reminder', date: '2020-08-02T09:00:00', frequency: 'Weekly', notificationMethod: 'Email', enabled: true },
        { name: 'Example reminder', date: '2020-08-02T09:00:00', frequency: 'Weekly', notificationMethod: 'Email', enabled: true },
        { name: 'Example reminder', date: '2020-08-02T09:00:00', frequency: 'Weekly', notificationMethod: 'Email', enabled: true },
        { name: 'Example reminder', date: '2020-08-02T09:00:00', frequency: 'Weekly', notificationMethod: 'Email', enabled: true },
        { name: 'Example reminder', date: '2020-08-02T09:00:00', frequency: 'Weekly', notificationMethod: 'Email', enabled: true }
    ] as Reminder[]));

    return (
        <Flex direction='column' flexGrow={1} backgroundColor='petcode.neutral.200' padding={10}>
            <Flex direction='column' rounded='lg' backgroundColor='white' padding={6}>
                <Text color='petcode.neutral.700' fontSize='3xl' marginBottom={3}>
                    Reminders
                </Text>
                {
                    reminders.map((reminder, idx) => (
                        <ReminderItem key={ idx } reminder={ reminder }/>
                    ))
                }
            </Flex>
            <ExpandButton
                position='fixed'
                bottom={5}
                right={5}
                rounded='full'
                color='petcode.neutral.700'
                padding={4}
                backgroundColor='petcode.yellow.400'
                expandChildren={ (
                    <Text fontSize='xl' fontWeight='thin' textTransform='uppercase' marginRight={2}>
                        Edit
                    </Text>
                ) }
            >
                <Icon name='edit' size='30px'/>
            </ExpandButton>
            <ExpandButton
                position='fixed'
                bottom={90}
                right={5}
                rounded='full'
                color='petcode.neutral.700'
                padding={4}
                backgroundColor='petcode.yellow.400'
                expandChildren={ (
                    <Text fontSize='xl' fontWeight='thin' textTransform='uppercase' whiteSpace='nowrap' marginRight={2}>
                        Add Reminder
                    </Text>
                ) }
            >
                <Text fontSize='5xl' lineHeight={0.5}>+</Text>
            </ExpandButton>
        </Flex>
    );
};

const RemindersPage = () => (
    <AccountPageLayout>
       <RemindersSection/> 
    </AccountPageLayout>
);

export default RemindersPage;
