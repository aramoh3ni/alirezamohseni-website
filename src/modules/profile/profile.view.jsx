import {
    Social
} from '../../components'

import {
    Avatar,
    Box,
    Heading,
    Text,
    Link
} from '@chakra-ui/react';

import "./style.css";

export const Profile = () => {
    return (
        <Box gap={4} p={10} className='profileContainer' background="blackAlpha.100">
            <div className="profileItem">
                <Avatar size='2xl' name='Alireza Mohseni' src='https://avatars.githubusercontent.com/u/61162112?v=4' />
                <Heading as='h4' mt={4}>
                    Hey there! 👋
                </Heading>
                <Text fontSize='xl' p={2} mt={5} mb={45} >
                    This is <span className='linkText'>Alireza Mohseni</span>
                    <br />
                    <Text as='span' align="justify" mt={2}>
                        I am a software developer working with web base applications using (<Link href='https://python.org' color='green.400'>Python</Link>, <Link href='https://www.php.net/docs.php' color="purple.400">PHP</Link>, <Link href='https://www.javascript.com/' color="yellow.400">JavaScript</Link>) languages, (<Link color="green.300">Django</Link>, <Link color="blue.200">React.JS</Link>, <Link color="orange.300">Svelte.JS</Link>, <Link color="blue.400">Material UI</Link>, <Link color='pink.400'>Bootstrap</Link>, <Link color="green.500">Chakra UI</Link>, <Link color="blue.400">Ant Design</Link>) and etc. Libraries and Frameworks.
                    </Text>
                    <br />
                    I ❤️ programming and that's all I have in my real life. So I try to share my knowledge and experience with everyone as much as I can.
                    <br />
                </Text>
                <Social />
                <Text fontSize="sm">
                    Long live humanity ✌️
                </Text>
            </div>
        </Box>
    )
}