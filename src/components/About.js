import React from 'react'
import aboutPic from '../img/about-promo.jpeg'
import wrapperIcon from '../icons/coding.svg'
import '../style.css'

function About() {
    return (
        <div className = 'about-container'>
            <div className = 'about-main'>
                <div className = 'about-pic'>
                    <img src = {aboutPic} alt = 'About me'></img>
                </div>
                <div className = 'about-text'>
                    <h3 className = 'title about'>About me</h3>
                    <h2 className = 'subtitle about'>My name is <i>Artem</i>!</h2>
                    <div className = 'line descr'></div>
                    <div className = 'about-descr'>
                        <p>
                        🚀 Diving Deep into the Web's DNA! 🌐💡 As a seasoned web developer, I'm on a mission to sculpt seamless online experiences that leave users in awe. From crafting pixel-perfect layouts with HTML and CSS to wielding the power of JavaScript and React for dynamic interactivity, I'm a versatile virtuoso in the digital realm.
                        </p>
                        <p>
                        With a toolkit that extends beyond frameworks and languages, I'm fluent in the language of innovation. Whether it's a sleek UI, a lightning-fast backend, or a harmonious blend of both, consider it done. From responsive design to blazing performance, I've got the expertise to make it happen.
                        </p>
                        <p>
                        Beyond the screen, I'm an avid explorer of emerging technologies and a dedicated advocate for clean, efficient code. When I'm not in front of the screen, you'll find me tinkering with the latest tech trends, enjoying the great outdoors, or contributing to the vibrant open-source 
                        community.
                        </p>
                        <p>
                        Let's team up and transform your digital aspirations into tangible, awe-inspiring realities! 🚀💻✨
                        </p>
                    </div>
                    <div className = 'blog-wrapper'>
                        <div className = 'about-blog'>
                            <div className = 'icon-wrapper'>
                                <img src = {wrapperIcon} alt ='Computer'></img>
                            </div>
                            <div className = 'blog-descr'>
                                <h3>Web Development</h3>
                                <p>As a proficient web developer, I possess a deep understanding of front-end and back-end technologies, a keen eye for design, and a strong problem-solving ability, enabling me to craft robust, user-friendly websites and applications that meet both client and user expectations.</p>
                            </div>
                        </div>
                        
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default About;