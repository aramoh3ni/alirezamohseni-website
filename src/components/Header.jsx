import {
    Avatar,
    Box,
    Grid,
    GridItem,
    Heading,
    Text
} from '@chakra-ui/react'

export const Header = () => {

    return (

        <Box
            width={"100%"}
            overflow='hidden'
            height={'30vh'}
        >
            <Grid
                h='200px'
                templateRows='repeat(1, 2fr)'
                templateColumns='repeat(4, 1fr)'
                gap={4}>
                <GridItem
                    display='flex'
                    justifyContent='space-evenly'
                    alignItems='center'
                    borderRadius={'md'} colSpan={1} >
                    <Avatar size='2xl' mr={4} name='Alireza Mohseni' src='https://avatars.githubusercontent.com/u/61162112?v=4' />{' '}
                </GridItem>
                <GridItem borderRadius={'md'} colSpan={3} outline>
                    <Heading as='h4' size='xl' mt={4} noOfLines={1}>
                        Hey there! 🖐️
                    </Heading>
                    <Text fontSize='xl' pr={2}>
                        I am Alireza Mohseni, Software Developer From <i>#Afghanistan</i>. 
                        <br />
                        I am building Web Applictions using Javascript (React), Python (Django), PHP, Mysql
                        <br />
                         I ❤️ to learn new technologies, and share it with other.
                    </Text>

                </GridItem>
            </Grid>
        </Box>

    )
}