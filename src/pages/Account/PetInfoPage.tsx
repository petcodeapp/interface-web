import React from 'react';

import { Box, Flex, FlexProps, Icon, IconProps, Link, Text, PseudoBoxProps, LinkProps } from '@chakra-ui/core';
import { Link as RouterLink, LinkProps as RouterLinkProps } from 'react-router-dom';

import AccountPageLayout from './components/AccountPageLayout';

const PetInfoCard: React.FC<FlexProps> = props => (
    <Flex
        direction='column'
        justifyContent='center'
        rounded='lg'
        background='white'
        flexBasis='42.5%'
        height='100px'
        padding={6}
        marginTop={10}
        { ...props }
    />
);

const PetInfoCardText: React.FC<PseudoBoxProps> = props => (
    <Text color='petcode.neutral.700' fontSize='4xl' { ...props }/>
);

const PetInfoCardLabel: React.FC<PseudoBoxProps> = props => (
    <Text color='petcode.blue.400' fontSize='lg' { ...props }/>
);

const BackgroundIcon: React.FC<IconProps> = props => (
    <Icon color='petcode.neutral.700' position='absolute' opacity={0.05} { ...props }/>
);

const InfoButton: React.FC<LinkProps & RouterLinkProps> = props => (
    <Link
        // @ts-ignore
        as={ RouterLink }
        display='flex'
        flexDirection='column'
        justifyContent='center'
        rounded='lg'
        backgroundColor='petcode.yellow.400'
        flexBasis='250px'
        padding={6}
        { ...props }
    />
);

const PetInfoSection = () => (
    <Flex direction='column' flexGrow={1} backgroundColor='petcode.neutral.200' padding={10}>
        <Flex direction='row' alignItems='center' color='petcode.neutral.700'>
            <Box
                rounded='full'
                size='150px'
                minWidth='150px'
                backgroundSize='cover'
                backgroundPosition='center'
                backgroundImage='url(/media/placeholder-dog.png)'
            />
            <Flex alignItems='center' marginLeft={4}>
                <BackgroundIcon size='120px' transform='rotate(12.84deg)' name='paw'/>
                <Text
                    position='relative'
                    zIndex={2}
                    fontSize='6xl'
                    marginLeft={16}
                >
                    Max
                </Text>
            </Flex>
            <Box flexGrow={1}/>
            <InfoButton
                to='/contactinfo'
                marginX={6}
            >
                <Text position='relative' fontSize='3xl' zIndex={2}>
                    Contact Information
                </Text>
                <BackgroundIcon alignSelf='end' size='100px' name='phone'/>
            </InfoButton>
            <InfoButton to='/medicalinfo'>
                <Text position='relative' fontSize='3xl' zIndex={2}>
                    Medical Information
                </Text>
                <BackgroundIcon alignSelf='end' size='100px' name='clipboard'/>
            </InfoButton>
        </Flex>
        <Flex direction='row' justifyContent='space-between' flexWrap='wrap'>
            <PetInfoCard>
                <PetInfoCardText>Dog</PetInfoCardText>
                <PetInfoCardLabel>Species</PetInfoCardLabel>
                <BackgroundIcon alignSelf='end' size='120px' name='dog'/>
            </PetInfoCard>
            <PetInfoCard>
                <PetInfoCardText>Weimaraner</PetInfoCardText>
                <PetInfoCardLabel>Breed</PetInfoCardLabel>
                <BackgroundIcon alignSelf='end' size='100px' transform='rotate(12.84deg)' name='paw'/>
            </PetInfoCard>
            <PetInfoCard>
                <PetInfoCardText>8 Years</PetInfoCardText>
                <PetInfoCardLabel>Age</PetInfoCardLabel>
                <BackgroundIcon alignSelf='end' size='120px' name='clock'/>
            </PetInfoCard>
            <PetInfoCard>
                <PetInfoCardText>Gray</PetInfoCardText>
                <PetInfoCardLabel>Color</PetInfoCardLabel>
                <BackgroundIcon alignSelf='end' size='100px' name='colors'/>
            </PetInfoCard>
            <PetInfoCard>
                <PetInfoCardText>Friendly</PetInfoCardText>
                <PetInfoCardLabel>Temperament</PetInfoCardLabel>
                <BackgroundIcon alignSelf='end' size='100px' transform='rotate(12.84deg)' name='paw'/>
            </PetInfoCard>
            <PetInfoCard>
                <PetInfoCardText>No</PetInfoCardText>
                <PetInfoCardLabel>Service Animal</PetInfoCardLabel>
                <BackgroundIcon alignSelf='end' size='120px' name='service-animal'/>
            </PetInfoCard>
        </Flex>
    </Flex>
);

const PetInfoPage = () => (
    <AccountPageLayout>
       <PetInfoSection/> 
    </AccountPageLayout>
);

export default PetInfoPage;
