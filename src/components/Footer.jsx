import {
    Flex,
    VStack,
    IconButton,
    Spacer,
    Container,
    Text,
} from "@chakra-ui/react";

import {
    FaGithub,
    FaLinkedinIn
} from 'react-icons/fa'


export const Footer = () => {
    return (
        <VStack outline='1px'>
            <Container>
                <Flex w="100%">
                    <a href="#" style={{margin:'10px'}} pl='4' variant='link'>
                        About
                    </a>
                    <a href="#" style={{margin:'10px'}} pl='4' variant='link'>
                        Blog
                    </a>
                    <a href="#" style={{margin:'10px'}} pl='4' variant='link'>
                        Contact
                    </a>
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
                </Flex>
                <Text textAlign='center' as="p" mb='4'>
                    &copy; Alireza Mohseni 2022 💜 All rights reserved
                </Text>
            </Container>
        </VStack>
    )
}