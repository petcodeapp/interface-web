import React from 'react';

import { Flex, FlexProps, Heading, Image, Text } from '@chakra-ui/core';

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
            <IconBadge iconName={ iconName } iconSize='50px' iconPadding={6} backgroundColor={ iconBgColor }/>
        </Flex>
        <Text color='petcode.neutral.500' fontSize='xl'>
            { description }
        </Text>
    </Flex>
);

const WhatIsItSection = () => (
    <Flex direction='column' alignItems='center' paddingY={12}>
        <Heading color='petcode.blue.400' fontSize={ { xs: '5xl', md: '6xl' } }>
            What Is It?
        </Heading>
        <Text color='petcode.neutral.500' fontSize={ { xs: 'xl', md: '2xl' } } textAlign='center' marginX={ { xs: 16, md: 64 } } marginY={3}>
            The PetCode Tag is a simple tag with a QR code that unlocks all the features below and more.
        </Text>
        <Flex direction='column' marginX={ { xs: 8, sm: 40, md: 20 } }>
            <Flex direction={ { xs: 'column', md: 'row' } } alignItems={ { xs: 'center', md: 'start' } }>
                <WhatIsItCard
                    align='left'
                    header='Customizable Pet Profiles'
                    description='Customize your Pet Profile to match your pet’s behavior, characteristics, dietary needs, and more!'
                    iconName='template'
                    iconBgColor='#727DE3'
                    flexBasis='35%'
                    marginRight={ { xs: 0, md: 24 } }
                />
                <Image display={ { xs: 'none', md: 'block' } } alt='Dog on yellow background' src='/media/dog-on-yellow-background.png' height='300px' width='300px'/>
                <WhatIsItCard
                    align='right'
                    header='Contact Information'
                    description='Keep all your contact information up to date, so you can be easily reached.'
                    iconName='messages'
                    iconBgColor='#4FD1AA'
                    flexBasis='35%'
                    marginLeft={ { xs: 0, md: 24 } }
                    marginTop={ { xs: 6, md: 0 } }
                />
            </Flex>
            <Flex direction={ { xs: 'column', md: 'row' } } alignItems={ { xs: 'center', md: 'start' } }>
                <WhatIsItCard
                    align='left'
                    header='Medical Information'
                    description='Display all of your pet’s medical information easily, all in one place.'
                    iconName='clipboard'
                    iconBgColor='#4299E1'
                    position='relative'
                    top={ { md: '-70px' } }
                    flexBasis='33%'
                    paddingLeft={ { xs: 0, md: 6 } }
                    marginTop={ { xs: 6, md: 0 } }
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
                    top={ { md: '-70px' } }
                    flexBasis='33%'
                    paddingRight={ { xs: 0, md: 6 } }
                    marginTop={ { xs: 6, md: 0 } }
                />
            </Flex>
        </Flex>
    </Flex>
);

export default WhatIsItSection;
