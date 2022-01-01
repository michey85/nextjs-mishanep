import {
    Heading,
    Image,
    Stack,
    Box,
} from '@chakra-ui/react';

const Partners = ({title, list = []}) => {
    return (
        <Box mb={24} mt={12}>
            <Heading mb={16} id="courses" fontSize='5xl'>
                {title}
            </Heading>
            <Stack
                direction={["column", null, "row"]} 
                spacing={12}
                justify="center"
                align="center"
            >
                {list.map(item => (
                    <Image
                        key={item.id}
                        src={item.image}
                        htmlWidth="250"
                        title={item.title}/>
                ))}    
            </Stack>
        </Box>
    )
}

export {Partners}
