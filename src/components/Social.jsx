import React from 'react';

import { IconButton } from '@chakra-ui/react'

import {
    FaInstagram,
    FaLinkedinIn,
    FaGithub,
    FaFacebook,
    FaLink,
} from 'react-icons/fa';

const Small = () => (
    <>
        <IconButton variant='ghost' ml={2} isRound={true} icon={<FaLinkedinIn />} />
        <IconButton variant='ghost' ml={2} isRound={true} icon={<FaGithub />} />
    </>
)

export const Social = ({ small = false }) => {

    if (small === true) return <Small />

    return <>
        <IconButton variant='ghost' ml={2} isRound={true} icon={<FaInstagram />} />
        <IconButton variant='ghost' ml={2} isRound={true} icon={<FaLinkedinIn />} />
        <IconButton variant='ghost' ml={2} isRound={true} icon={<FaGithub />} />
        <IconButton variant='ghost' ml={2} isRound={true} icon={<FaFacebook />} />
        <IconButton variant='ghost' ml={2} isRound={true} icon={<FaLink />} />
    </>
}