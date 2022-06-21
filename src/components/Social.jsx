import React from 'react';

import Resume from '../assets/files/Alireza-Mohsini-CV.pdf'

import { IconButton, Tooltip } from '@chakra-ui/react'

import {
    FaInstagram,
    FaLinkedinIn,
    FaGithub,
    FaFacebook,
    FaDownload
} from 'react-icons/fa';

const Small = () => (
    <>
        <a href='https://www.linkedin.com/in/aramoh3ni/' rel="noopener"><IconButton variant='ghost' ml={2} isRound={true} icon={<FaLinkedinIn />} /></a>
        <a href='https://github.com/aramoh3ni/' rel="noopener"><IconButton variant='ghost' ml={2} isRound={true} icon={<FaGithub />} /></a>
    </>
)

export const Social = ({ small = false }) => {

    if (small === true) return <Small />

    return <>
        <a href='https://www.instagram.com/aramoh3ni/' rel="noopener"><IconButton variant='ghost' ml={2} isRound={true} icon={<FaInstagram />} /></a>
        <a href='https://www.linkedin.com/in/aramoh3ni/' rel="noopener"><IconButton variant='ghost' ml={2} isRound={true} icon={<FaLinkedinIn />} /></a>
        <a href='https://github.com/aramoh3ni/' rel="noopener"><IconButton variant='ghost' ml={2} isRound={true} icon={<FaGithub />} /></a>
        <a href='https://www.facebook.com/aramoh3ni/' rel="noopener"><IconButton variant='ghost' ml={2} isRound={true} icon={<FaFacebook />} /></a>
        <a href={Resume}>
            <Tooltip label='Download Resume' placement='top-start'>
                <IconButton variant='ghost' ml={2} isRound={true} icon={<FaDownload />} />
            </Tooltip>
        </a>
    </>
}