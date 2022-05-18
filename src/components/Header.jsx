import {
    Avatar,
    Box,
    Heading,
    Text,
    IconButton,
    Badge,
    Icon

} from '@chakra-ui/react'

import {
    FaInstagram,
    FaLinkedinIn,
    FaGithub,
    FaFacebook,
    FaLink,
    FaPython,
    FaReact,
} from 'react-icons/fa'


export const Header = () => {
    return (
        
            <Box gap={4} textAlign='center'>
                    <Avatar size='2xl' name='Alireza Mohseni' src='https://avatars.githubusercontent.com/u/61162112?v=4' />
                    <Heading as='h4' mt={4}>
                        Hey there! 🖐️
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
                    <IconButton variant='ghost' isRound={true} icon={<FaInstagram />} />
                    <IconButton variant='ghost' isRound={true} icon={<FaLinkedinIn />} />
                    <IconButton variant='ghost' isRound={true} icon={<FaGithub />} />
                    <IconButton variant='ghost' isRound={true} icon={<FaFacebook />} />
                    <IconButton variant='ghost' isRound={true} icon={<FaLink />} />
               </Box>
    )
}