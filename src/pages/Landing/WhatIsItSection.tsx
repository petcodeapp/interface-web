import React from 'react';

import { Box, Flex, FlexProps, Heading, Icon, Image, Text } from '@chakra-ui/core';

import IconBadge from '../../components/Shared/badge/IconBadge';

type WhatIsItCardProps = {
    align: 'left'|'center'|'right';
    header: string;
    description: string;
    iconName: string;
    iconBgColor: string;
} & FlexProps;

const WhatIsItCard: React.FC<WhatIsItCardProps> = (
    {
        align,
        header,
        description,
        iconName,
        iconBgColor,
        ...props 
    }
) => (
    <Flex direction='column' { ...props }>
        <Flex
            direction={
                align == 'center' ?
                    'column-reverse' :
                    (align == 'right' ? 'row-reverse' : 'row')
            }
            alignItems={ align == 'center' ? 'center' : 'end' }
            justifyContent={ align == 'center' ? null : 'space-between' }
            marginBottom={3}
        >
            <Text
                color='petcode.neutral.600'
                fontSize='3xl'
                margin={
                    align == 'left' ? '0 1.5rem 0 0' :
                    (align == 'right' ? '0 0 0 1.5rem' : '')
                }
                textAlign={ align }
            >
                { header }
            </Text>
            <IconBadge iconName={ iconName } backgroundColor={ iconBgColor }/>
        </Flex>
        <Text color='petcode.neutral.500' fontSize='xl'>
            { description }
        </Text>
    </Flex>
);

const WhatIsItSection = () => (
    <Flex direction='column' alignItems='center' paddingY={12}>
        <Heading color='petcode.blue.400' fontSize='6xl'>
            What Is It?
        </Heading>
        <Text color='petcode.neutral.500' fontSize='2xl' textAlign='center' marginX={64} marginY={3}>
            The PetCode Tag is a simple tag with a QR code that unlocks all the features below and more.
        </Text>
        <Flex direction='column' marginX={20}>
            <Flex direction='row'>
                <WhatIsItCard
                    align='left'
                    header='Customizable Pet Profiles'
                    description='Customize your Pet Profile to match your pet’s behavior, characteristics, dietary needs, and more!'
                    iconName='template'
                    iconBgColor='#727DE3'
                    flexBasis='35%'
                    marginRight={24}
                />
                <Image alt='Dog on yellow background' src='/media/dog-on-yellow-background.png' height='300px'/>
                <WhatIsItCard
                    align='right'
                    header='Contact Information'
                    description='Keep all your contact information up to date, so you can be easily reached.'
                    iconName='messages'
                    iconBgColor='#4FD1AA'
                    flexBasis='35%'
                    marginLeft={24}
                />
            </Flex>
            <Flex direction='row'>
                <WhatIsItCard
                    align='left'
                    header='Medical Information'
                    description='Display all of your pet’s medical information easily, all in one place.'
                    iconName='clipboard'
                    iconBgColor='#4299E1'
                    position='relative'
                    top='-70px'
                    flexBasis='33%'
                    paddingLeft={6}
                />
                <WhatIsItCard
                    align='center'
                    header='Scan Locations'
                    description='View everywhere your pet’s tag has been scanned. If your pet is lost, a message can be sent out to all PetCode users within a 5 mile radius.'
                    iconName='flag'
                    iconBgColor='petcode.blue.400'
                    flexBasis='33%'
                    marginTop={6}
                />
                <WhatIsItCard
                    align='right'
                    header='Integrations'
                    description='Simplify your pet’s information by using integrations to upload vaccination history and registration.'
                    iconName='link'
                    iconBgColor='petcode.teal'
                    position='relative'
                    top='-70px'
                    flexBasis='33%'
                    paddingRight={6}
                />
            </Flex>
        </Flex>
    </Flex>
);

export default WhatIsItSection;
