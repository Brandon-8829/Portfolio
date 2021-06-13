import React from 'react';
import Thumbnail from './Thumbnail.js';
import './App.css'

function Projects(props){
    return(
        <div className="projects">
            <h1>Projects</h1>
            <Thumbnail
                link="this is a link"
                image="this is a photo"
                title="this is a title"
                category="this is a category"
            />
        </div>
    );
}

export default Projects;