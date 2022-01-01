import { Box, SimpleGrid, Heading, Text } from '@chakra-ui/react';


const YouTubeList = ({ list, title = 'Бесплатные курсы на YouTube' }) => (
    <Box py={16} maxW='container.xl' mx='auto'>
        <Heading mb={12} fontSize='5xl'>
            {title}
        </Heading>
        <SimpleGrid columns={[1, null, 3]} spacing={10}>
            {
                list.map(item => (
                    <Playlist key={item.id} {...item} />
                ))
            }
        </SimpleGrid>
    </Box>
);

export { YouTubeList };

const Playlist = ({ title, link, poster }) => (
    <Box
        as='a'
        display='flex'
        href={link}
        target="_blank"
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundImage={`url(${poster})`}
        minW="300px"
        minH='160px'
        p={2}
        color='white'
        fontWeight='black'
        alignItems='flex-start'
    >
        <Text as='span' bg='gray.500' py='1' px='2'>
            {title}
        </Text>
    </Box>
);
