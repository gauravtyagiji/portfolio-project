import React from 'react'
import Typed from 'react-typed'
import Laptop from '../Laptop.jpg'
import Particles from 'react-particles-js'

const Header = () => {
    return (
        <>
        <Particles className="particle-canvas"
    params = {{
      particles: {
        number:{
          value: 5, density:{
            enable: true, value_area: 100
          }
        },
        shape: "square", stroke: {
          width:6, color: "#f9ab00"
        }
      }
    }}
    />
        <div className="header-wraper">
            <img className="header-bg" src={Laptop}/>
            <div className = "main-info">
            <h1 className="text-lg">A Computer Enthusiast</h1>
            <Typed className="typed-text"
                strings = {["Web Design","Web Developer","App Development"]}
                typeSpeed={40}
                backSpeed={60}
                loop
            />
            </div>
        </div>
    </>
    )
}

export default Header
