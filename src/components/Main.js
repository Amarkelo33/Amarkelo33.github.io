import React from 'react'
import '../style.css'

function Main(props) {

    const [hamburgerOpen, setHamburgerOpen] = React.useState(false)

    const toggleHamburger = () => {
        setHamburgerOpen(!hamburgerOpen)
    }

    function GrClose(props) {
        return <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" height="35px" width="40px" {...props}><path fill="none" stroke="#ffffff" strokeWidth={2} d="M3,3 L21,21 M3,21 L21,3"  /></svg>;
      }

    return (
        <div className = 'main-container'>
            <div className = 'main-menu'>
                    <div className = 'main-nav'>
                        <div onClick={toggleHamburger} className = 'nav-close'>
                            <GrClose />
                        </div>
                        <ul className = 'nav-links'>
                            <li className = 'nav-link'>About Me</li>
                            <li className = 'nav-link'>My Experience</li>
                            <li className = 'nav-link'>My Abilities</li>
                            <li className = 'nav-link'>My Projects</li>
                            <li className = 'nav-link'>Contact Me</li>
                        </ul>
                    </div>
                <div onClick={toggleHamburger} className = 'main-hamburger'>
                    <div className = 'line'></div>
                    <div className = 'line'></div>
                    <div className = 'line'></div>
                    <style jsx>{
                        `.main-nav {
                            display: ${hamburgerOpen ? `block` : `none`}
                        }
                        .main-hamburger {
                            display: ${hamburgerOpen ? `none` : `flex`};
                        }
                        `
                    }</style>
                </div>
            </div>
            <div className = 'main-promo'>
                <h2 className = 'title main'>Welcome!</h2>
                <h1 className = 'subtitle main'>I am a Web Developer from Colorado Springs</h1>
                <div className = 'main-btns'>
                    <button className = 'main-btn portfolio'>Portfolio</button>
                    <button className = 'main-btn about'>About</button>
                </div>
            </div>
        </div>
    )
}

export default Main;