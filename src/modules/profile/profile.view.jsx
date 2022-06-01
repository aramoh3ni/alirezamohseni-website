import {
    Social
} from '../../components'

import {
    Avatar,
    Box,
    Heading,
    Text,
    Icon

} from '@chakra-ui/react';

import {
    FaPython,
    FaReact,
} from 'react-icons/fa';


export const Profile = () => {
    return (
        
            <Box gap={4} textAlign='center'>
                    <Avatar size='2xl' name='Alireza Mohseni' src='https://avatars.githubusercontent.com/u/61162112?v=4' />
                    <Heading as='h4' mt={4}>
                        Hey there! 👋
                    </Heading>
                    <Text fontSize='xl' pr={2} mt={3} mb={4}>
                        I am <u>Alireza Mohseni</u>, Software Developer From <i>#Afghanistan</i>. 
                        <br />
                        I am building Web Applicatoins using 
                        Javascript <Icon><FaReact /></Icon>, 
                        Python <Icon><FaPython /></Icon> ...
                        <br />
                         I ❤️ to learn new technologies, and share it with other.
                    </Text>
                    <Social />
               </Box>
    )
}