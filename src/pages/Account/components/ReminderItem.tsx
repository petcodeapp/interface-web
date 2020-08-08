import React from 'react';

import { Flex, Text } from '@chakra-ui/core';
import Checkbox from './Checkbox';

import { action } from 'mobx';
import { observer } from 'mobx-react';
import moment from 'moment';

import { Reminder } from '../../../Models/Reminder';

const ReminderItem: React.FC<{ reminder: Reminder }> = observer(({ reminder }) => (
    <Flex direction='column' fontSize='xl'>
        <Flex direction='row' alignItems='center'>
            <Checkbox
                checked={ reminder.enabled }
                cursor='pointer'
                size={22}
                onClick={ action(() => reminder.enabled = !reminder.enabled) }
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
));

export default ReminderItem;
