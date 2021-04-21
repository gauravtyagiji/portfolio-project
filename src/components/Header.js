import React from 'react'
import Typed from 'react-typed'
import Laptop from '../Laptop.jpg'

const Header = () => {
    return (
        <div className="header-wraper">
            <img className="header-bg" src={Laptop}/>
            <div className = "main-info">
            <h1>A Computer Enthusiast</h1>
            <Typed className="typed-text"
                strings = {["Web Design","Web Developer","App Development"]}
                typeSpeed={40}
                backSpeed={60}
                loop
            />
            </div>
        </div>
    )
}

export default Header
