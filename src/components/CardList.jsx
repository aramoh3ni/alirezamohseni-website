import {
    LinkBox,
    Box,
    Heading,
    LinkOverlay,
    Text,
    Divider,
    Image,
    Link
} from '@chakra-ui/react'


export const CardList = ({
    cardWith,
    cardTitle,
}) => {
    const property = {
        imageUrl: 'https://bit.ly/2Z4KKcF',
        imageAlt: 'Rear view of modern home with pool',
        postedon: "13 days ago",
        postTitle: "How to become Software Developer",
        postContent: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, ducimus. Sunt, laudantium, necessitatibus distinctio in eligendi asperiores molestias, nostrum tempore harum omnis placeat corrupti eos? In iusto officia magni perspiciatis."
    }

    return (
        <>
            <Heading mt={10}>
                {cardTitle}
            </Heading>
            <Divider variant='dashed' mt={4} mb={4} />
            <LinkBox as='article' maxW={cardWith} p='5' borderWidth='1px' rounded='md'>
                <Image src={property.imageUrl} alt={property.imageAlt} />
                <Box as='time' dateTime='2021-01-15 15:30:00 +0000 UTC'>
                    {property.postedon}
                </Box>
                <Heading size='md' my='2'>
                    <LinkOverlay href={property.imageUrl}>
                        {property.postTitle}
                    </LinkOverlay>
                </Heading>
                <Text mb={4}>
                    {property.postContent}
                </Text>
                <Link href='https://chakra-ui.com' isExternal>
                    Readmore ✌️
                </Link>
            </LinkBox>
        </>
    )
}