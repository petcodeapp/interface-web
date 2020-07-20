import React from 'react';

import { Box, BoxProps, Flex, FlexProps, Heading, Icon, Image, Text } from '@chakra-ui/core';

import SolidButton, { SolidButtonProps } from '../../components/Shared/button/SolidButton';

const HeaderText = (props: BoxProps) => (
    <Text color='white' fontSize='lg' textTransform='uppercase' { ...props }/>
);

const Header = () => (
    <Flex
        position='fixed'
        top={0}
        background='rgba(0, 0, 0, 0.4)'
        width='calc(100% - 4rem)'
        paddingX={8}
        paddingY={4}
    >
        <HeaderText>PetCode</HeaderText>
        <Box flexGrow={1}/>
        <HeaderText marginRight={8}>Home</HeaderText>
        <HeaderText marginRight={8}>About Us</HeaderText>
        <HeaderText marginRight={8}>Purchase</HeaderText>
        <HeaderText display='flex' alignItems='center' marginRight={8}>
            <Icon name='template' size='20px' marginRight={1}/>
            Register
        </HeaderText>
        <HeaderText display='flex' alignItems='center'>
            <Icon name='user-circle' size='20px' marginRight={1}/>
            Sign In
        </HeaderText>
    </Flex>
);

const SplashButton = (props: SolidButtonProps) => (
    <SolidButton
        variantColor='petcode.blue'
        width='170px'
        height='45px'
        fontWeight='thin'
        textTransform='uppercase'
        { ...props }
    />
);

const Splash = () => (
    <Box
        backgroundImage='url(/media/karans-dog.JPG)'
        backgroundPosition='center'
        backgroundSize='cover'
        paddingY={200}
        paddingLeft={100}
    >
        <Flex direction='column'>
            <Heading
                color='petcode.yellow' fontSize='6xl'
                textShadow='0px 4px 4px rgba(0, 0, 0, 0.25)'
            >
                One Code
            </Heading>
            <Text color='white' fontSize='3xl' width='400px'>
                An endless suite of features for pet owners.
            </Text>
            <Box marginTop={6}>
                <SplashButton marginRight={4}>
                    <Text>Learn More</Text>
                </SplashButton>
                <SplashButton marginRight={4}>
                    <Text>Features</Text>
                </SplashButton>
                <SplashButton>
                    <Text>Get Started</Text>
                </SplashButton>
            </Box>
        </Flex>
    </Box>
);

type WhatIsItCardProps = {
    align: 'left'|'center'|'right';
    header: string;
    description: string;
    iconName: string;
    iconBgColor: string;
} & FlexProps;

const WhatIsItCard = (
    {
        align,
        header,
        description,
        iconName,
        iconBgColor,
        ...props 
    }: WhatIsItCardProps
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
            <Box rounded='full' backgroundColor={ iconBgColor } padding={6}>
                <Icon name={ iconName } color='white' size='55px'/>
            </Box>
        </Flex>
        <Text color='petcode.neutral.500' fontSize='xl'>
            { description }
        </Text>
    </Flex>
);

const WhatIsItSection = () => (
    <Flex direction='column' alignItems='center'>
        <Heading color='petcode.blue.400' fontSize='6xl' marginTop={12}>
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
                    paddingLeft={6}
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
                    paddingLeft={6}
                />
            </Flex>
        </Flex>
    </Flex>
);

const LandingPage: React.FunctionComponent = () => (
    <Flex direction='column' minHeight='100%'>
        <Header/>
        <Splash/>
        <WhatIsItSection/>
    </Flex>
);

export default LandingPage;
