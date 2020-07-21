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

const Comparisons = () => (
    <table>
        <thead>
            <tr>
                <th/>
                { ['PetCode Tag', 'Microchip Implants', 'Standard Tag'].map((option, idx) => (
                    <th key={ idx }>
                        <Text fontSize='lg' color='petcode.neutral.600' fontWeight='bold'>
                            { option }
                        </Text>
                    </th>
                )) }
            </tr>
        </thead>
        <tbody>

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
