import React from 'react';
import { Routes, Route } from 'react-router-dom';

import {
    AboutPage,
    // PostPage,
    ProjectPage,
    CommingSoon
} from '../pages';

export const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<AboutPage />} />
            <Route path="/about" element={<AboutPage />} />
            {/* <Route path="/posts" element={<PostPage />} /> */}
            <Route path="/posts" element={<CommingSoon />} />
            <Route path="/projects" element={<ProjectPage />} />
        </Routes>
    )
}