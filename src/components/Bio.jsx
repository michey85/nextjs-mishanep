import Image from 'next/image';
import {
    Button,
    Flex,
    Heading,
    Stack,
    Text,
} from '@chakra-ui/react';

const Bio = (props) => {
    const { title, body, image } = props;

    return (
        <Flex id="bio" direction={{ base: 'column-reverse', md: 'row' }} bg='gray.50'>
            <Flex p={8} flex={1} align={'center'} justify={'center'}>
                <Stack spacing={6} w={'full'} maxW={'lg'}>
                    <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
                        <Text color={'blue.400'} as={'span'}>
                            {title}
                        </Text>
                    </Heading>
                    <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
                        {body}
                    </Text>
                    <Stack direction={{ base: 'column', md: 'row' }} spacing={4} justifyContent='center'>
                        <Button
                            as="a"
                            href="https://www.youtube.com/channel/UCFq12kPZg4wTNPO7V_g3B-A"
                            target="_blank"
                            rounded={'full'}
                            bg={'blue.400'}
                            color={'white'}
                            _hover={{
                                bg: 'blue.500',
                            }}>
                            Смотреть YouTube
                        </Button>
                    </Stack>
                </Stack>
            </Flex>
            <Flex flex={1} mb={0} minH="400px" position="relative">
                <Image
                    alt={'Login Image'}
                    objectFit={'cover'}
                    layout='fill'
                    src={'https:' + image}
                />
            </Flex>
        </Flex>
    )
}

export { Bio }
