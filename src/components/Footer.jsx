import { Link } from 'react-router-dom';
import {
    Flex,
    VStack,
    Spacer,
    Container,
    Text,
} from "@chakra-ui/react";

import { Social } from '../components';

export const Footer = () => {
    return (
        <VStack outline='1px'>
            <Container>
                <Flex w="100%">
                    <Link to="/" style={{margin:'10px'}} pl='4' variant='link'>
                        About
                    </Link>
                    <Link to="/projects" style={{margin:'10px'}} pl='4' variant='link'>
                        🚀 Project
                    </Link>
                    <Link to="/posts" style={{margin:'10px'}} pl='4' variant='link'>
                        Blog
                    </Link>
                    <Spacer />
                    <Social small />
                </Flex>
                <Text textAlign='center' as="p" mb='4'>
                    &copy; Alireza Mohseni 2022 💜 All rights reserved
                </Text>
            </Container>
        </VStack>
    )
}