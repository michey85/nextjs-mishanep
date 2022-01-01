import {
    Box, SimpleGrid, Heading,
    Avatar,
    Center,
    Text,
    Stack,
    Button,
    Badge,
} from '@chakra-ui/react';

const Courses = ({ courses = [], title = 'Видео курсы' }) => (
    <Box p={4} maxW="container.xl" mx='auto' mt="12">
        <Heading mb={8} id="courses" fontSize='5xl'>
            {title}
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
            {
                courses.map((course) => (
                    <Course
                        key={course.id}
                        title={course.title}
                        subtitle={course.subtitle}
                        description={course.description}
                        link={course.link}
                        poster={course.poster}
                        tags={course.tags}
                        {...course}
                    />
                ))
            }
        </SimpleGrid>
    </Box>
);

export { Courses };

const Course = (props) => {
    const { title, subtitle, description, tags = [], link, poster } = props;

    return (
        <Center py={6}>
            <Box
                maxW={'320px'}
                w={'full'}
                bg="white"
                boxShadow={'2xl'}
                rounded={'lg'}
                p={6}
                textAlign={'center'}
            >
                <Avatar
                    size={'xl'}
                    src={poster}
                    alt={title + ' ' + subtitle}
                    mb={4}
                    pos={'relative'}
                />
                <Heading fontSize={'2xl'} fontFamily={'body'}>
                    {title}
                </Heading>
                <Text fontWeight={600} color={'gray.500'} mb={4}>
                    {subtitle}
                </Text>
                <Text
                    textAlign={'center'}
                    color="gray.700"
                    px={3}>
                    {description}
                </Text>

                <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
                    {tags.map((tag, index) => (
                        <Badge
                            key={index}
                            px={2}
                            py={1}
                            bg="gray.50"
                            fontWeight={'400'}>
                            {tag}
                        </Badge>
                    ))}
                </Stack>

                <Stack mt={8} direction={'row'} spacing={4}>
                    <Button
                        flex={1}
                        as="a"
                        href={link}
                        fontSize={'sm'}
                        rounded={'full'}
                        bg={'blue.400'}
                        color={'white'}
                        boxShadow={
                            '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
                        }
                        _hover={{
                            bg: 'blue.500',
                        }}
                        _focus={{
                            bg: 'blue.500',
                        }}>
                        Подробнее
                    </Button>
                </Stack>
            </Box>
        </Center>
    );
};