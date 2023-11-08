import React from 'react';
import htmlIcon from '../icons/html5.svg'
import cssIcon from '../icons/css3.svg'
import jsIcon from '../icons/javascript.svg'
import gitIcon from '../icons/git.svg'
import sqlIcon from '../icons/sql.svg'
import reactIcon from '../icons/react.svg'
import '../style.css'

function Skills() {
    return (
        <div className = 'skills-container'>
            <div className = 'title-block'>
                <h2 className = 'title skills'>Skills</h2>
                <h3 className = 'subtitle skills'>What I know</h3>
                <div className = 'line descr skills'></div>
            </div>
            <div className = 'grid-container'>
                <div className = 'grid-element'>
                    <img className = 'element-pic' src={htmlIcon} alt ='element'></img>
                    <div className = 'element-name'>HTML5</div>
                    <div className = 'element-descr'>This language serves as the foundation for your website or application, and its fifth iteration enables me to craft a professionally structured product with optimized SEO capabilities</div>
                </div>
                <div className = 'grid-element'>
                    <img className = 'element-pic' src={cssIcon} alt ='element'></img>
                    <div className = 'element-name'>CSS3</div>
                    <div className = 'element-descr'>With this language, I have the ability to bring any vision for your website or app to life. The only limit is your imagination!</div>
                </div>
                <div className = 'grid-element'>
                    <img className = 'element-pic' src={jsIcon} alt ='element'></img>
                    <div className = 'element-name'>JavaScript</div>
                    <div className = 'element-descr'>With this programming language, I have the capability to animate a wide range of elements: sliders, windows, tooltips, tabs, retrieve data from the server, and much more.</div>
                </div>
                <div className = 'grid-element'>
                    <img className = 'element-pic' src={reactIcon} alt ='element'></img>
                    <div className = 'element-name'>React</div>
                    <div className = 'element-descr'>This library empowers me to develop dynamic web applications. Together, we can craft the most engaging product tailored to your specific needs and goals.</div>
                </div>
                <div className = 'grid-element'>
                    <img className = 'element-pic' src={gitIcon} alt ='element'></img>
                    <div className = 'element-name'>GIT</div>
                    <div className = 'element-descr'>Git helps me manage and track changes in my codebase, enabling collaboration with team members, version control, and the ability to revert to previous states if needed, ensuring a more organized and efficient workflow.</div>
                </div>
                <div className = 'grid-element'>
                    <img className = 'element-pic' src={sqlIcon} alt ='element'></img>
                    <div className = 'element-name'>SQL</div>
                    <div className = 'element-descr'>With this language, I have the capability to handle various tasks with your databases. Whether it's editing, modifying, analyzing, or selecting data, the possibilities are endless!</div>
                </div>
            </div>
        </div>
    )
}

export default Skills;