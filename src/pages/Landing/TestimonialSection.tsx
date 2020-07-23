import React from 'react';

import { Box, Flex, Heading, Icon, Text } from '@chakra-ui/core';

const Testimonial = () => (
    <Flex direction='row' alignItems='center' marginX={64}>
        <Box
            rounded='full'
            backgroundImage='url(/media/woman-holding-dog.jpeg)'
            backgroundSize='cover'
            backgroundPosition='center'
            minHeight='250px'
            minWidth='250px'
            marginRight={12}
        />
        <Flex direction='column' fontSize='2xl' fontWeight='thin'>
            <Box marginBottom={2}>
                <Icon name='star' size='30px' color='petcode.yellow.400' marginX={1}/>
                <Icon name='star' size='30px' color='petcode.yellow.400' marginX={1}/>
                <Icon name='star' size='30px' color='petcode.yellow.400' marginX={1}/>
                <Icon name='star' size='30px' color='petcode.yellow.400' marginX={1}/>
                <Icon name='star' size='30px' color='petcode.yellow.400' marginX={1}/>
            </Box>
            <Text color='petcode.neutral.600' marginBottom={6}>
                “This is an example of a testimonial. When we sell our product, there will be great reviews that go here.”
            </Text>
            <Flex direction='row' alignItems='center' marginBottom={6}>
                <Text color='petcode.neutral.700' marginRight={8}>- Jane Doe</Text>
                <Text color='petcode.neutral.400'>Pet Owner</Text>
                <Box flexGrow={1}/>
                <Icon name='arrow' color='petcode.neutral.400' size='50px'/>
            </Flex>
        </Flex>
    </Flex>
);

const TestimonialSection = () => (
    <Flex direction='column' alignItems='center' backgroundColor='petcode.neutral.200' paddingY={12}>
        <Heading color='petcode.blue.400' fontSize='6xl' marginBottom={12}>
            Owner Testimonials
        </Heading>
        <Testimonial/>
    </Flex>
);

export default TestimonialSection;
