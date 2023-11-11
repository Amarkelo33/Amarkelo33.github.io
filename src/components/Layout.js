import React from 'react'
import {Link} from 'react-router-dom'
import '../style.css'

function Layout(props) {

    const [hamburgerOpen, setHamburgerOpen] = React.useState(false)

    const toggleHamburger = () => {
        setHamburgerOpen(!hamburgerOpen)
    }

    function GrClose(props) {
        return <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" height="35px" width="40px" {...props}><path fill="none" stroke="#ffffff" strokeWidth={2} d="M3,3 L21,21 M3,21 L21,3"  /></svg>;
    }

    return (
        <div className = 'main-menu'>
            <div className = 'main-nav'>
                <div onClick={toggleHamburger} className = 'nav-close'>
                    <GrClose />
                </div>
                <ul className = 'nav-links'>
                <li className = 'nav-link'>
                        <Link to = '/'>Home</Link>
                    </li>
                    <li className = 'nav-link'>
                        <Link to = '/about'>About me</Link>
                    </li>
                    <li className = 'nav-link'>
                        <Link to = "experience">My Experience</Link>
                    </li>
                    <li className = 'nav-link'>
                        <Link to = "skills">My abilities</Link>
                    </li>
                    <li className = 'nav-link'>
                        <Link>My projects</Link>
                    </li>
                    <li className = 'nav-link'>
                        <Link>Contact Me</Link>
                    </li>
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
    )
}

export default Layout;
