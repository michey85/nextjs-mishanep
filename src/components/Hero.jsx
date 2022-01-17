import Image from 'next/image';

import {
    Button,
    Flex,
    Heading,
    Stack,
    Text,
    useBreakpointValue,
} from '@chakra-ui/react';

export const Hero = ({ title, body, image, actions }) => (
    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
        <Flex p={8} flex={1} align={'center'} justify={'center'}>
            <Stack spacing={6} w={'full'} maxW={'lg'}>
                <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
                    <Text
                        as={'span'}
                        position={'relative'}
                        _after={{
                            content: "''",
                            width: 'full',
                            height: useBreakpointValue({ base: '20%', md: '30%' }),
                            position: 'absolute',
                            bottom: 1,
                            left: 0,
                            bg: 'blue.400',
                            zIndex: -1,
                        }}>
                        FrontEnd
                    </Text>
                    <br />{' '}
                    <Text color={'blue.400'} as={'span'}>
                        {title}
                    </Text>{' '}
                </Heading>
                <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
                    {body}
                </Text>
                <Stack direction={{ base: 'column', md: 'row' }} spacing={4} justifyContent='center'>
                    <Button
                        as="a"
                        href={actions.action1Link}
                        rounded={'full'}
                        bg={'blue.400'}
                        color={'white'}
                        _hover={{
                            bg: 'blue.500',
                        }}
                    >
                        {actions.action1Text}
                    </Button>
                    <Button
                        as="a"
                        href={actions.action2Link}
                        rounded={'full'}
                    >
                        {actions.action2Text}
                    </Button>
                </Stack>
            </Stack>
        </Flex>
        <Flex flex={1} position='relative' minH="450px">
            <Image
                alt={'Login Image'}
                objectFit={'cover'}
                layout="fill"
                src={'https:' + image}
                priority
            />
        </Flex>
    </Stack>
);
