import React from 'react'
import TeamImg from '../img/team_project.png'
import PocketSpinnerImg from '../img/pocketSpinner_project.png'
import '../style.css'

function Projects() {
    return (
        <div className = 'skills-container'>
        <div className = 'title-block'>
            <h2 className = 'title skills'>Portfolio</h2>
            <h3 className = 'subtitle skills'>My projects</h3>
            <div className = 'line descr skills'></div>
            <div className = 'text portfolio'>(Press on square to redirect to my project)</div>
        </div>
        <div className = 'grid-container portfolio'>
            <div className = 'grid-element portfolio'>
                <a href= 'https://neset-markelov.com'>
                    <img className = 'grid-img' src = {TeamImg} alt = 'team website link'></img>
                </a>
            </div>
            <div className = 'grid-element portfolio'>
                <a href= 'https://pocketspinner.com'>
                    <img className = 'grid-img' alt = 'pocket spinner link' src = {PocketSpinnerImg}></img>
                </a>
            </div>
        </div>
    </div>
    )
}

export default Projects;