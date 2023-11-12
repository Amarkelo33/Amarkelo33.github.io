import React from 'react'
import Layout from './Layout'
import {Link} from 'react-router-dom'
import '../style.css'

function Main(props) {

    return (
        <div className = 'main-container'>
            <Layout/>
            <div className = 'main-promo'>
                <h2 className = 'title main'>Welcome!</h2>
                <h1 className = 'subtitle main'>I am a Web Developer from Colorado Springs</h1>
                <div className = 'main-btns'>
                    <button className = 'main-btn portfolio'>
                        <Link to ='/cover'>Portfolio</Link>
                    </button>
                    <button className = 'main-btn about'>
                        <Link to = '/about'>About</Link>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Main;