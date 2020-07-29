import React, { useState } from 'react';

import { Flex, FlexProps, Text } from '@chakra-ui/core';

import AccountPageLayout from './components/AccountPageLayout';
import InfoField from './components/InfoField';

import { observable } from 'mobx';
import { observer } from 'mobx-react';

type ContactInfo = {
    level: string;
    name: string;
    address: string;
    phoneNumber: string;
    email: string;
};

type ContactInfoCardProps = {
    contactInfo: ContactInfo;
} & FlexProps;

const ContactInfoCard: React.FC<ContactInfoCardProps> = observer(({ contactInfo, ...props }) => (
    <Flex direction='column' rounded='lg' backgroundColor='white' padding={6} { ...props }>
        <Flex direction='row' justifyContent='space-between'>
            <Text color='petcode.neutral.700' fontSize='2xl' marginBottom={3}>
                { contactInfo.level } Contact Information
            </Text>
            <Text color='petcode.neutral.400' fontSize='2xl' marginBottom={3}>
                Visibility
            </Text>
        </Flex>
        <Flex direction='row' justifyContent='space-between'>
            <InfoField field='Name' value={ contactInfo.name }/>
        </Flex>
        <Flex direction='row' justifyContent='space-between'>
            <InfoField field='Address' value={ contactInfo.address }/>
        </Flex>
        <Flex direction='row' justifyContent='space-between'>
            <InfoField field='Phone Number' value={ contactInfo.phoneNumber }/>
        </Flex>
        <Flex direction='row' justifyContent='space-between'>
            <InfoField field='Email' value={ contactInfo.email }/>
        </Flex>
    </Flex>
));

const ContactInfoSection = () => {
    const [data] = useState(() => observable([
        {
            level: 'Primary',
            name: 'John Doe',
            address: '123 First Street, Cupertino, CA 94087',
            phoneNumber: '(408) 123 4567',
            email: 'example@gmail.com'
        },
        {
            level: 'Secondary',
            name: 'Jane Doe',
            address: '123 Second Street, Cupertino, CA 94087',
            phoneNumber: '(408) 765 4321',
            email: 'anotherexample@gmail.com'
        }
    ]));

    return (
        <Flex direction='column' flexGrow={1} backgroundColor='petcode.neutral.200' padding={10}>
            {
                data.map((contactInfo, idx) => (
                    <ContactInfoCard
                        key={ idx }
                        contactInfo={ contactInfo }
                        marginBottom={ data.length - 1 != idx ? 10 : 0 }
                    />
                ))
            }
        </Flex>
    );
};

const ContactInfoPage = () => (
    <AccountPageLayout>
       <ContactInfoSection/> 
    </AccountPageLayout>
);

export default ContactInfoPage;
