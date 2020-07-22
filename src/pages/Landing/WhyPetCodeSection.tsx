import React, { useState } from 'react';

import { Button, Flex, Heading, Icon, Text } from '@chakra-ui/core';

import BaseButton, { BaseButtonProps } from '../../components/Shared/button/BaseButton';

import { action, observable, IObservableValue } from 'mobx';
import { observer, useObserver } from 'mobx-react-lite';

type LeftGroupProps = {
    displayedSection: IObservableValue<String>
};

const ToggleButton: React.FC<BaseButtonProps & { toggled: boolean }> = ({ children, toggled, ...props }) => (
    <Button
        cursor='pointer'
        variantColor='petcode.blue'
        variant='outline'
        paddingX={10}
        { ...(toggled ? {
            _hover: {},
            _active: {},
            variant: 'solid',
            border: 'none',
            cursor: 'default'
        } : {}) }
        { ...props }
    >
        { children }
    </Button>
);

const LeftGroup: React.FC<LeftGroupProps> = observer(({ displayedSection }) => (
    <Flex direction='column' alignItems='start' flexBasis='45%'>
        <Flex direction='row'>
            <ToggleButton
                roundedLeft='full'
                onClick={ action(() => displayedSection.set('features')) }
                toggled={ displayedSection.get() == 'features' }
            >
                <Text fontWeight='thin' textTransform='uppercase' letterSpacing='0.05em'>
                    Features
                </Text>
            </ToggleButton>
            <ToggleButton
                roundedRight='full'
                onClick={ action(() => displayedSection.set('comparisons')) }
                toggled={ displayedSection.get() == 'comparisons' }
            >
                <Text fontWeight='thin' textTransform='uppercase' letterSpacing='0.05em'>
                    Compare
                </Text>
            </ToggleButton>
        </Flex>
        <Text color='petcode.neutral.600' fontSize='2xl' fontWeight='thin' marginY={5}>
            The PetCode tag is so much more than just a tag, it is an evergrowing network of features for pet owners.
        </Text>
        <BaseButton size='md' variantColor='petcode.yellow' paddingX={8}>
            <Text fontWeight='thin' textTransform='uppercase' letterSpacing='0.05em'>
                Order Now
            </Text>
        </BaseButton>
    </Flex>
));

type FeatureProps = {
    text: string;
};

const Feature: React.FC<FeatureProps> = ({ text }) => (
    <Flex direction='row' alignItems='center' marginY={3}>
        <Icon name='checkmark' size='45px' color='#48BB78' marginRight={3}/>
        <Text fontSize='2xl' color='petcode.neutral.600' fontWeight='bold'>
            { text }
        </Text>
    </Flex>
);

const Features = () => (
    <Flex direction='column' justifyContent='center' flexBasis='45%'>
        <Feature text='Free Online Pet Profile'/>
        <Feature text='Affordable Hi-Tech Tag'/>
        <Feature text='Information Visible on Any Browser'/>
    </Flex>
);

type Tag = 'PetCode Tag'|'Microchip Implants'|'Standard Tag';
const TAG_OPTIONS: Tag[]  = ['PetCode Tag', 'Microchip Implants', 'Standard Tag'];
const TAG_FEATURES: { [key: string]: { [key in Tag]: boolean } } = {
    'Clearly Visible': { 'PetCode Tag': true, 'Microchip Implants': false, 'Standard Tag': true },
    'Immediate Access to Contact Information': { 'PetCode Tag': true, 'Microchip Implants': false, 'Standard Tag': true },
    'Ability to Update Contact Information': { 'PetCode Tag': true, 'Microchip Implants': true, 'Standard Tag': false },
    'Does Not Require Veterinary Visit': { 'PetCode Tag': true, 'Microchip Implants': false, 'Standard Tag': true },
    'Provides Alternative Contact Methods': { 'PetCode Tag': true, 'Microchip Implants': true, 'Standard Tag': false },
    'Displays Dietary/Special Needs Info': { 'PetCode Tag': true, 'Microchip Implants': false, 'Standard Tag': false },
    'Online Pet Profile': { 'PetCode Tag': true, 'Microchip Implants': true, 'Standard Tag': false },
    'Cost < $20': { 'PetCode Tag': true, 'Microchip Implants': false, 'Standard Tag': true }
};

const Comparisons = () => (
    <table>
        <thead>
            <tr>
                <th/>
                { TAG_OPTIONS.map((option, idx) => (
                    <th key={ idx }>
                        <Text fontSize='lg' color='petcode.neutral.600' fontWeight='bold'>
                            { option }
                        </Text>
                    </th>
                )) }
            </tr>
        </thead>
        <tbody>
            {
                Object.keys(TAG_FEATURES).map((feature, idx) => (
                    <tr key={ idx }>
                        <td>
                            <Text fontSize='lg' color='petcode.neutral.600' fontWeight='thin'>
                                { feature }
                            </Text>
                        </td>
                        { TAG_OPTIONS.map((option, idx) => (
                            <td key={ idx }>
                                <Icon
                                    name={ TAG_FEATURES[feature][option] ? 'checkmark' : 'cross' }
                                    size='25px'
                                    color={ TAG_FEATURES[feature][option] ? '#48BB78' : '#E53E3E' }
                                />
                            </td>
                        )) }
                    </tr>
                ))
            }
        </tbody>
    </table>
);

const WhyPetcodeSection = () => {
    const [displayedSection] = useState(() => observable.box('features'));

    return useObserver(() => (
        <Flex direction='column' backgroundColor='petcode.neutral.200' paddingTop={12} paddingBottom={24} paddingX={16}>
            <Heading color='petcode.blue.400' fontSize='6xl' marginBottom={12}>
                Why Petcode?
            </Heading>
            <Flex direction='row' justifyContent='space-between'>
                <LeftGroup displayedSection={ displayedSection }/>
                { displayedSection.get() == 'features' ?
                    <Features/> :
                    <Comparisons/>
                }
            </Flex>
        </Flex>
    ));
};

export default WhyPetcodeSection;
