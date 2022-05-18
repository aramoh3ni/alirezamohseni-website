import {
    LinkBox,
    Box,
    Heading,
    LinkOverlay,
    Text,
    Image,
    Link
} from '@chakra-ui/react'


export const CardList = ({ data }) => {
    console.log(data)
    return data.map(item => (
        <Box borderWidth='1px' rounded='md' overflow='hidden'>
            <Image src={item.imageUrl} alt={item.title} />
            <LinkBox as='article' p='5' >

                <Box as='time' dateTime='2021-01-15 15:30:00 +0000 UTC'>
                   {item.postedAt}
                </Box>
                <Heading size='md' my='2'>
                    <LinkOverlay href={item.url}>
                        {item.title}
                    </LinkOverlay>
                </Heading>
                <Text mb={4}>
                    {item.content.slice(0, 50)}
                </Text>
                <Link href='https://chakra-ui.com' isExternal>
                    Readmore ✌️
                </Link>
            </LinkBox>
        </Box>
    ))
}