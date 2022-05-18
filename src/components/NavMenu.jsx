import {
    Flex,
    VStack,
    Heading,
    IconButton,
    Spacer,
    Avatar,
    Container,
    Button
} from "@chakra-ui/react";

import {
    FaSun,
    FaMoon,
    FaGithub,
    FaLinkedinIn
} from 'react-icons/fa'

import {
    useColorMode,
} from "@chakra-ui/react";

export const NavMenu = (props) => {
    const { maxWith } = props;

    const { colorMode, toggleColorMode } = useColorMode();
    const isDark = colorMode === 'dark';
    return (
        <VStack shadow={'sm'} bg='whiteAlpha.100' p={2}>
            <Container maxW={maxWith}>
                <Flex w={"100%"}>
                    <Heading size='md' fontWeight='semibold' >

                        <Avatar size='sm' mt={1} mr={4} name='Alireza Mohseni' src='https://avatars.githubusercontent.com/u/61162112?v=4' />{' '}

                        <Button mr={2}>
                            About
                        </Button>
                        <Button mr={2}>
                            Blog
                        </Button>
                        <Button mr={2}>
                            Contact
                        </Button>
                    </Heading>
                    <Spacer />
                    <IconButton
                        ml={2}
                        icon={<FaGithub />}
                        isRound={true}
                        variant='ghost'
                    />
                    <IconButton
                        ml={2}
                        icon={<FaLinkedinIn />}
                        isRound={true}
                        variant='ghost'
                    />
                    <IconButton
                        color={isDark ? "yellow.500" : "blue.400"}
                        icon={!isDark ? <FaMoon /> : <FaSun />}
                        isRound='true'
                        variant='ghost'
                        onClick={toggleColorMode} />
                </Flex>
            </Container>
        </VStack>
    )
}