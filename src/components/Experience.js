import React from 'react'
import '../style.css'

function Experience() {
    return (
        <div className = 'experience-container'>
            <div className = 'experience-title'>
                <h2>Experience</h2>
                <h3>What I can do</h3>
                <div className = 'line descr experience'></div>
            </div>
            <div className = 'experience-resume'>
                <div className = 'resume-column education'>
                    <h3 className = 'column-title'>Education</h3>
                    <div className = 'line descr resume'></div>
                    <ul>
                        <li>
                            <div className = 'column-item'>
                                <div className = 'item-head'>
                                    <div className = 'head-icon'></div>
                                    <div className = 'head-text'>
                                        <h4 className = 'head-title'>Western Governors University (WGU)</h4>
                                        <div className = 'head-subtitle'>Bachelor's Degree (2023 - Present)</div>
                                    </div>
                                </div>
                                <div className = 'item-body'>
                                    Presently working towards a Bachelor's Degree in Computer Science.
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className = 'column-item'>
                                <div className = 'item-head'>
                                    <div className = 'head-icon'></div>
                                    <div className = 'head-text'>
                                        <h4 className = 'head-title'>Udemy (Online Platform)</h4>
                                        <div className = 'head-subtitle'>Web Development Online Course</div>
                                    </div>
                                </div>
                                <div className = 'item-body'>
                                    Acquired knowledge in HTML5, CSS3, and responsive design principles, with additional expertise in JavaScript (JS) and React.
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className = 'resume-column work'>
                    <h3 className = 'column-title'>Work Experience</h3>
                    <div className = 'line descr resume'></div>
                    <ul>
                        <li>
                            <div className = 'column-item'>
                                <div className = 'item-head'>
                                    <div className = 'head-icon'></div>
                                    <div className = 'head-text work'>
                                        <h4 className = 'head-title'>Western Governors University (WGU)</h4>
                                        <div className = 'head-subtitle'>Bachelor's Degree (2023 - Present)</div>
                                    </div>
                                </div>
                                <div className = 'item-body'>
                                    Presently working towards a Bachelor's Degree in Computer Science.
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className = 'column-item'>
                                <div className = 'item-head'>
                                    <div className = 'head-icon'></div>
                                    <div className = 'head-text'>
                                        <h4 className = 'head-title'>Udemy (Online Platform)</h4>
                                        <div className = 'head-subtitle'>Web Development Online Course</div>
                                    </div>
                                </div>
                                <div className = 'item-body'>
                                    Acquired knowledge in HTML5, CSS3, and responsive design principles, with additional expertise in JavaScript (JS) and React.
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Experience;