import { Box, SimpleGrid, Icon, Heading, Text, Stack, Flex } from '@chakra-ui/react';
import { FcAssistant, FcIdea, FcVideoFile } from 'react-icons/fc';

const Features = () => {
    return (
        <Box p={4} bg='gray.50' py={20}>
            <Box maxW="container.xl" mx='auto'>
                <Heading mb={12} fontSize='5xl'>Что я предлагаю</Heading>
                <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
                    <Feature
                        icon={<Icon as={FcAssistant} w={10} h={10} />}
                        title={'Консультации'}
                        text={
                            'Для начинающих и практикующих разработчиков, а также для владельцев сайтов.'
                        }
                    />
                    <Feature
                        icon={<Icon as={FcVideoFile} w={10} h={10} />}
                        title={'Видео курсы'}
                        text={
                            'Записанные многочасовые видео курсы с обратной связью.'
                        }
                    />
                    <Feature
                        icon={<Icon as={FcIdea} w={10} h={10} />}
                        title={'Обучение'}
                        text={
                            'Индивидуально, в группах, с практическими заданиями и code review.'
                        }
                    />
                </SimpleGrid>
            </Box>
        </Box>
    )
}

export { Features }

const Feature = ({ title, text, icon }) => {
    return (
        <Stack>
            <Flex
                w={16}
                h={16}
                align={'center'}
                alignSelf='center'
                justify={'center'}
                color={'white'}
                rounded={'full'}
                bg={'gray.100'}
                mb={1}>
                {icon}
            </Flex>
            <Text fontWeight={600} fontSize={'4xl'}>{title}</Text>
            <Text color={'gray.600'}>{text}</Text>
        </Stack>
    );
};