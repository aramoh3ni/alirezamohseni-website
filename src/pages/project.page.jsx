import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { Projects } from '../modules';

export const ProjectPage = () => {
    const [project, setProject] = useState(null);

    const url = "https://api.github.com/users/aramoh3ni/repos";

    const fetchProjects = () => {
        axios.get(url).then((res) => {
            const d = res.data
            setProject(d)
        })
    }

    useEffect(() => {
        fetchProjects();
    }, [])

    return <Projects data={project} />
}