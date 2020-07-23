import React, { useMemo, useState } from 'react';

import { Box, Button, Flex, Heading, Icon, Text } from '@chakra-ui/core';

import BaseButton, { BaseButtonProps } from '../../components/Shared/button/BaseButton';

import { action, observable, IObservableValue } from 'mobx';
import { useTable, useFlexLayout, HeaderGroup, Row } from 'react-table';
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
        <Heading color='petcode.blue.400' fontSize='6xl' marginBottom={12}>
            Why Petcode?
        </Heading>
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
    <Flex direction='column' justifyContent='center' flexBasis='45%' marginTop={20}>
        <Feature text='Free Online Pet Profile'/>
        <Feature text='Affordable Hi-Tech Tag'/>
        <Feature text='Information Visible on Any Browser'/>
    </Flex>
);

const Comparisons = () => {
    const TableText: React.FC = (props) => (
        <Text fontSize='lg' color='petcode.neutral.600' { ...props }/>
    );
    const renderBooleanIcon = ({ value }: { value: boolean }) => (
        <Icon
            name={ value ? 'checkmark' : 'cross' }
            size='25px'
            color={ value ? '#48BB78' : '#E53E3E' }
            alignSelf='center'
        />
    );

    const data = useMemo(() => [
        { feature: 'Clearly Visible', 'PetCode Tag': true, 'Microchip Implants': false, 'Standard Tag': true },
        { feature: 'Immediate Access to Contact Information', 'PetCode Tag': true, 'Microchip Implants': false, 'Standard Tag': true },
        { feature: 'Ability to Update Contact Information', 'PetCode Tag': true, 'Microchip Implants': true, 'Standard Tag': false },
        { feature: 'Does Not Require Veterinary Visit', 'PetCode Tag': true, 'Microchip Implants': false, 'Standard Tag': true },
        { feature: 'Provides Alternative Contact Methods', 'PetCode Tag': true, 'Microchip Implants': true, 'Standard Tag': false },
        { feature: 'Displays Dietary/Special Needs Info', 'PetCode Tag': true, 'Microchip Implants': false, 'Standard Tag': false },
        { feature: 'Online Pet Profile', 'PetCode Tag': true, 'Microchip Implants': true, 'Standard Tag': false },
        { feature: 'Cost < $20', 'PetCode Tag': true, 'Microchip Implants': false, 'Standard Tag': true }
    ], [])
    const columns = useMemo(() => ([
        { Header: '', Cell: ({ value }: { value: string }) => <TableText>{ value }</TableText>, accessor: 'feature', width: 3 },
        { Header: <TableText>PetCode Tag</TableText>, Cell: renderBooleanIcon, accessor: 'PetCode Tag', width: 1 },
        { Header: <TableText>Microchip Implants</TableText>, Cell: renderBooleanIcon, accessor: 'Microchip Implants', width: 1 },
        { Header: <TableText>Standard Tag</TableText>, Cell: renderBooleanIcon, accessor: 'Standard Tag', width: 1 }
    ]), []);

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({
        data,
        // @ts-ignore
        columns
    }, useFlexLayout);

    return (
        <Box width={ { md: '50%' } } { ...getTableProps() }>
            <Box>
                { headerGroups.map((headerGroup: HeaderGroup) => (
                    <Box { ...headerGroup.getHeaderGroupProps() }>
                        { headerGroup.headers.map((column, idx) => (
                            <Box
                                backgroundColor={ idx > 0 ? 'petcode.neutral.100' : '' }
                                paddingX={1}
                                paddingY={2}
                                marginBottom={2}
                                textAlign='center'
                                { ...column.getHeaderProps() }
                            >
                                { column.render('Header') }
                            </Box>
                        )) }
                    </Box>
                )) }
            </Box>
            <Box { ...getTableBodyProps() }>
                { rows.map((row: Row) => {
                    prepareRow(row);
                    return (
                        <Box
                            backgroundColor={ row.index % 2 != 0 ? 'petcode.neutral.100' : '' }
                            paddingX={2}
                            paddingY={1}
                            borderLeft='5px solid'
                            borderLeftColor='petcode.neutral.600'
                            { ...row.getRowProps() }
                        >
                            { row.cells.map(cell => (
                                <Box display='flex' flexDirection='column' { ...cell.getCellProps() }>
                                    { cell.render('Cell') }
                                </Box>
                            )) }
                        </Box>
                    );
                }) }
            </Box>
        </Box>
    );
};

const WhyPetcodeSection = () => {
    const [displayedSection] = useState(() => observable.box('features'));

    return useObserver(() => (
        <Flex direction={ { xs: 'column', md: 'row' } } justifyContent='space-between' backgroundColor='petcode.neutral.200' paddingTop={12} paddingBottom={24} paddingX={16}>
            <LeftGroup displayedSection={ displayedSection }/>
            { displayedSection.get() == 'features' ?
                <Features/> :
                <Comparisons/>
            }
        </Flex>
    ));
};

export default WhyPetcodeSection;
