import React, { useState } from 'react';

import { Flex, FlexProps, Icon, Text } from '@chakra-ui/core';

import ExpandButton from '../../components/Shared/button/ExpandButton';
import AccountPageLayout from './components/AccountPageLayout';
import InfoField from './components/InfoField';

import { action, observable, IObservableValue } from 'mobx';
import { observer, useObserver } from 'mobx-react';


type ContactInfo = {
    level: string;
    name: string;
    address: string;
    phoneNumber: string;
    email: string;
};

type ContactInfoCardProps = {
    contactInfo: ContactInfo;
    isEditable?: IObservableValue<boolean>;
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
        <Flex direction='row' justifyContent='space-between'>
            <InfoField
                isEditable={ isEditable && isEditable.get() }
                field='Name'
                value={ contactInfo.name }
                flexBasis='60%'
                onChange={ action((e: React.ChangeEvent<HTMLInputElement>) => (contactInfo.name = e.target.value)) }
            />
        </Flex>
        <Flex direction='row' justifyContent='space-between'>
            <InfoField
                isEditable={ isEditable && isEditable.get() }
                field='Address'
                value={ contactInfo.address }
                flexBasis='60%'
                onChange={ action((e: React.ChangeEvent<HTMLInputElement>) => (contactInfo.address = e.target.value)) }
            />
        </Flex>
        <Flex direction='row' justifyContent='space-between'>
            <InfoField
                isEditable={ isEditable && isEditable.get() }
                field='Phone Number'
                value={ contactInfo.phoneNumber }
                flexBasis='60%'
                onChange={ action((e: React.ChangeEvent<HTMLInputElement>) => (contactInfo.phoneNumber = e.target.value)) }
            />
        </Flex>
        <Flex direction='row' justifyContent='space-between'>
            <InfoField
                isEditable={ isEditable && isEditable.get() }
                field='Email'
                value={ contactInfo.email }
                flexBasis='60%'
                onChange={ action((e: React.ChangeEvent<HTMLInputElement>) => (contactInfo.email = e.target.value)) }
            />
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

    const [isEditable] = useState(() => observable.box(false));

    return useObserver(() => (
        <Flex direction='column' flexGrow={1} backgroundColor='petcode.neutral.200' padding={10}>
            {
                data.map((contactInfo, idx) => (
                    <ContactInfoCard
                        key={ idx }
                        isEditable={ isEditable }
                        contactInfo={ contactInfo }
                        marginBottom={ data.length - 1 != idx ? 10 : 0 }
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
