import {
    Heading,
    Divider,
    Badge,
    Box,
    Icon,
    Text,
    Link,
    Spinner
} from '@chakra-ui/react'

import {
    FaRegCalendarAlt,
    FaRegEye,
    FaGithub
} from "react-icons/fa"

export const Projects = ({ data }) => {

    if (!data) {
        return (<div style={{textAlign:"center"}}><Spinner textAlign='center' color='red.500' /></div>)
    }

    return (
        <>
            <Heading mt={10} as='h4'>
                Projects
            </Heading>
            <Divider variant='dashed' mt={4} mb={4} />
            {
                data?.map((item, i) => (
                <Box key={i} borderWidth='1px' rounded='md' overflow='hidden' mb={2} p={3} className="card-shadow">
                    <Heading as='h6' size='md' my='2'>
                        <Link href={item.html_url}>
                            {item?.name}
                        </Link>
                        <Badge p={1} float='right' borderRadius='md' ml={3} variant='subtle' colorScheme='purple'>
                            {item?.language}
                        </Badge>
                    </Heading>
                    {item.topics?.map((topic, i) => (
                        <Badge key={i} p={1} borderRadius='md' ml={1} colorScheme='blue' variant='subtle'>
                            {topic}
                        </Badge>
                    ))}
                    <Text mt={4} mb={4} fontSize='sm'>
                        {item.description?.slice(0, 50)}
                    </Text>
                    <Link href={item.html_url} isExternal>
                        Readmore ✌️
                    </Link>
                    <Heading float='right' as='h6' size='xs' fontWeight='thin'>
                        <Icon ml={2} mr={2} w={4} h={4}>
                            {<FaRegEye />}
                        </Icon>
                        {item?.watchers} |
                        <Icon ml={2} mr={2} w={4} h={4}>
                            {<FaGithub />}
                        </Icon>
                        {item?.owner.login} |
                        <Icon ml={2} mr={2} w={4} h={4}>
                            {<FaRegCalendarAlt />}
                        </Icon>
                        {item?.updated_at.slice(0, 10)}
                    </Heading>
                </Box>
                ))
            }
        </>
    )
}