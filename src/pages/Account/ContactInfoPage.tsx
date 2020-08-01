import React, { useState } from 'react';

import { Box, Flex, FlexProps, Icon, Input, Text } from '@chakra-ui/core';

import ExpandButton from '../../components/Shared/button/ExpandButton';
import AccountPageLayout from './components/AccountPageLayout';
import Checkbox from './components/Checkbox';
import { InfoFieldText, InfoFieldLabel, InfoFieldInput } from './components/InfoField';

import { action, observable, IObservableValue } from 'mobx';
import { observer, useObserver } from 'mobx-react';

type VisibleValue = {
    displayName: string;
    value: string;
    visible: boolean;
};

type ContactInfo = {
    level: string;
    info: {
        [key: string]: VisibleValue;
    };
};

type ContactInfoCardProps = {
    contactInfo: ContactInfo;
    isEditable: IObservableValue<boolean>;
} & FlexProps;

const ContactInfoCard: React.FC<ContactInfoCardProps> = observer(({ contactInfo, isEditable, ...props }) => (
    <Flex direction='column' rounded='lg' backgroundColor='white' padding={6} { ...props }>
        <Flex direction='row' justifyContent='space-between'>
            <Text color='petcode.neutral.700' fontSize='2xl' marginBottom={3}>
                { contactInfo.level } Contact Information
            </Text>
            <Text color='petcode.neutral.400' fontSize='2xl' marginBottom={3}>
                Visibility
            </Text>
        </Flex>
        {
            Object.keys(contactInfo.info).map((field, idx) => (
                <Flex key={ idx } direction='row' alignItems='center' justifyContent='space-between'>
                    <Box flexBasis='60%'>
                        {
                            isEditable.get() ? (
                                <InfoFieldInput
                                    value={ contactInfo.info[field].value }
                                    onChange={ action((e: React.ChangeEvent<HTMLInputElement>) =>
                                        (contactInfo.info[field].value = e.target.value)
                                    ) }
                                />
                            ) : (
                                <InfoFieldText>{ contactInfo.info[field].value }</InfoFieldText>
                            )
                        }
                        <InfoFieldLabel>{ contactInfo.info[field].displayName }</InfoFieldLabel>
                    </Box>
                    <Checkbox
                        checked={ contactInfo.info[field].visible }
                        cursor={ isEditable.get() ? 'pointer' : 'default' }
                        onClick={ action(() =>
                           isEditable.get() && (contactInfo.info[field].visible = !contactInfo.info[field].visible)
                        ) }
                    />
                </Flex>
            ))
        }
    </Flex>
));

const ContactInfoSection = () => {
    const [contactInfos] = useState(() => observable([
        {
            level: 'Primary',
            info: {
                name: { displayName: 'Name', value: 'John Doe', visible: true },
                address: { displayName: 'Address', value: '123 First Street, Cupertino, CA 94087', visible: true },
                phoneNumber: { displayName: 'Phone Number', value: '(408) 123 4567', visible: true },
                email: { displayName: 'Email', value: 'example@gmail.com', visible: true }
            }
        },
        {
            level: 'Secondary',
            info: {
                name: { displayName: 'Name', value: 'Jane Doe', visible: true },
                address: { displayName: 'Address', value: '123 Second Street, Cupertino, CA 94087', visible: true },
                phoneNumber: { displayName: 'Phone Number', value: '(408) 765 4321', visible: true },
                email: { displayName: 'Email', value: 'anotherexample@gmail.com', visible: true }
            }
        }
    ]));

    const [isEditable] = useState(() => observable.box(false));

    return useObserver(() => (
        <Flex direction='column' flexGrow={1} backgroundColor='petcode.neutral.200' padding={10}>
            {
                contactInfos.map((contactInfo, idx) => (
                    <ContactInfoCard
                        key={ idx }
                        isEditable={ isEditable }
                        contactInfo={ contactInfo }
                        marginBottom={ contactInfos.length - 1 != idx ? 10 : 0 }
                    />
                ))
            }
            <ExpandButton
                position='fixed'
                bottom={5}
                right={5}
                rounded='full'
                color='petcode.neutral.700'
                padding={4}
                backgroundColor='petcode.yellow.400'
                onClick={ action(() => isEditable.set(!isEditable.get())) }
                expandChildren={ (
                    <Text fontSize='xl' fontWeight='thin' textTransform='uppercase' marginRight={2}>
                        { isEditable.get() ? 'Save' : 'Edit' }
                    </Text>
                ) }
            >
                <Icon name={ isEditable.get() ? 'checkmark' : 'edit' } size='30px'/>
            </ExpandButton>
        </Flex>
    ));
};

const ContactInfoPage = () => (
    <AccountPageLayout>
       <ContactInfoSection/> 
    </AccountPageLayout>
);

export default ContactInfoPage;
