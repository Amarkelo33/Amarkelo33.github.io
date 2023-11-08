import React from 'react'
import studentIcon from '../icons/student.svg'
import udemyIcon from '../icons/udemy.svg'
import dataIcon from '../icons/data.svg'
import freelanceIcon from '../icons/freelance.svg'
import '../style.css'

function Experience() {
    return (
        <div className = 'experience-container'>
            <div className = 'title-block'>
                <h2 className = 'title experience'>Experience</h2>
                <h3 className = 'subtitle experience'>What I can do</h3>
                <div className = 'line descr experience'></div>
            </div>
            <div className = 'experience-resume'>
                <div className = 'resume-column education'>
                    <h3 className = 'column-title'>Education</h3>
                    <div className = 'line descr resume'></div>
                    <ul className = "column-list">
                        <li>
                            <div className = 'column-item'>
                                <div className = 'item-head'>
                                    <div className = 'head-icon'>
                                        <img src = {studentIcon} alt = "student"></img>
                                    </div>
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
                                    <div className = 'head-icon udemy'>
                                    <img src = {udemyIcon} alt = "udemy"></img>
                                    </div>
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
                    <ul className ='column-list'>
                        <li>
                            <div className = 'column-item'>
                                <div className = 'item-head'>
                                    <div className = 'head-icon data'>
                                        <img src = {dataIcon} alt ="data icon"></img>
                                    </div>
                                    <div className = 'head-text work'>
                                        <h4 className = 'head-title'>Univeristy of Colorado Colorado Springs (UCCS)</h4>
                                        <div className = 'head-subtitle'>Data Managment Assistant (2022-2023)</div>
                                    </div>
                                </div>
                                <div className = 'item-body'>
                                <br/>
                                As a Data Management Assistant at the University of Colorado Colorado Springs, I played a crucial role in handling various aspects of data organization, analysis, and maintenance for both academic and administrative purposes. My responsibilities encompassed:
                                <br/>
                                <br/>
                                <ul className ='job-descr'>
                                    <li><strong>Data Entry and Validation:</strong> I was responsible for accurately inputting and verifying data into relevant databases and systems, ensuring the integrity of the information.</li>
                                    <li><strong>Database Management:</strong> I actively maintained and managed databases, ensuring they were well-organized, up-to-date, and accessible for authorized personnel.</li>
                                    <li><strong>Data Cleaning and Quality Assurance:</strong> I diligently cleaned and validated data to guarantee its accuracy and consistency, identifying and rectifying any discrepancies or errors.</li>
                                    <li><strong>Collaboration and Communication:</strong> I actively collaborated with other departments and colleagues to ensure data accuracy and integrity. This involved effective communication with faculty, staff, and students to gather or verify information.</li>
                                </ul>
                                <br/>
                                Overall, my role as a Data Management Assistant was pivotal in maintaining the integrity and accessibility of crucial data for the University of Colorado Colorado Springs.
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className = 'column-item'>
                                <div className = 'item-head'>
                                    <div className = 'head-icon freelance'>
                                        <img src = {freelanceIcon} alt = "freelance"></img>
                                    </div>
                                    <div className = 'head-text'>
                                        <h4 className = 'head-title'>Freelance Web Developer | Self-Employed</h4>
                                        <div className = 'head-subtitle'>Colorado Springs (2020 - present)</div>
                                    </div>
                                </div>
                                <div className = 'item-body'>
                                    <ul className ='job-descr'>
                                        <br/>
                                        <li>Demonstrated expertise in HTML, CSS, React, and JavaScript to develop visually appealing and highly functional websites for diverse clients.</li>
                                        <li>Applied a client-centric approach, collaborating closely with stakeholders to gather requirements, provide regular progress updates, and deliver solutions that exceeded expectations.</li>
                                        <li>Designed and implemented responsive web layouts, ensuring seamless user experiences across desktop, tablet, and mobile devices, resulting in increased user engagement and retention.</li>
                                        <li>Leveraged React to create interactive, dynamic user interfaces, enhancing the overall user experience and driving higher conversion rates.</li>
                                        <li>Integrated third-party APIs and services to add advanced functionality, such as payment gateways, social media integrations, and data analytics, enhancing overall site capabilities.</li>
                                        <li>Demonstrated strong problem-solving skills, efficiently debugging and resolving issues to ensure smooth website functionality and user satisfaction.
                                        </li>
                                        <li>Customized and optimized websites for performance and speed, utilizing best practices in front-end development to achieve top-tier scores in performance metrics.</li>
                                    </ul>
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