import React from 'react'
import Layout from './Layout'
import '../style.css'

function Main(props) {

    return (
        <div className = 'main-container'>
            <Layout/>
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