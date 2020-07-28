import React from 'react';

import { Box, Flex, Heading, Icon, Text } from '@chakra-ui/core';

type TestimonialProps = {
    numStars: number;
    testimonialText: string;
    testifier: string;
    testifierTitle: string;
};

const Testimonial: React.FC<TestimonialProps> = ({
    numStars,
    testimonialText,
    testifier,
    testifierTitle
}) => (
    <Flex direction={ { xs: 'column', md: 'row' } } alignItems='center' marginX={64}>
        <Box
            rounded='full'
            backgroundImage='url(/media/woman-holding-dog.jpeg)'
            backgroundSize='cover'
            backgroundPosition='center'
            minHeight='250px'
            minWidth='250px'
            marginRight={ { md: 12 } }
            marginBottom={ { xs: 8, md: 0 } }
        />
        <Flex direction='column' fontSize='2xl' fontWeight='thin'>
            <Box marginBottom={2}>
                {
                    new Array(numStars).fill(null).map((_, idx) => (
                        <Icon name='star' size='30px' color='petcode.yellow.400' marginX={1}/>
                    ))
                }
            </Box>
            <Text color='petcode.neutral.600' marginBottom={6}>
                { testimonialText}
            </Text>
            <Flex direction='row' alignItems='center' marginBottom={6}>
                <Text color='petcode.neutral.700' marginRight={ { md: 8 } }>- { testifier }</Text>
                <Text color='petcode.neutral.400'>{ testifierTitle }</Text>
                <Box flexGrow={1}/>
                <Icon name='arrow' color='petcode.neutral.400' size='50px'/>
            </Flex>
        </Flex>
    </Flex>
);

const TestimonialSection = () => (
    <Flex direction='column' alignItems='center' backgroundColor='petcode.neutral.200' paddingY={12} paddingX={10}>
        <Heading color='petcode.blue.400' fontSize={ { xs: '5xl', md: '6xl' } } marginBottom={12}>
            Owner Testimonials
        </Heading>
        <Testimonial
            numStars={5}
            testimonialText='“This is an example of a testimonial. When we sell our product, there will be great reviews that go here.”'
            testifier='Jane Doe'
            testifierTitle='Pet Owner'
        />
    </Flex>
);

export default TestimonialSection;
