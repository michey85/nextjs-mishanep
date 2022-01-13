import Image from 'next/image';
import {
    Heading,
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
                spacing='24px'
                gap="24px"
                justify="center"
                align="center"
            >
                {list.map(item => (
                    <Image
                        key={item.id}
                        src={'https:' + item.image}
                        width={250}
                        height={100}
                        title={item.title}
                        alt={item.title}
                        objectFit='contain'
                    />
                ))}    
            </Stack>
        </Box>
    )
}

export {Partners}
