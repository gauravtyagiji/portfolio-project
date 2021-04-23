import React from 'react'
import codefreak from '../codefreak.png'

// importing raect fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
  <div className="container">
  <a className="navbar-brand" href="#"><img src={codefreak} alt="logo" className="logo"/></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <FontAwesomeIcon icon ={faBars} style={{color : '#fff'}}/>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/about">About Me</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/project">Projects</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/post">Blog</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/hobbies">Hobbies</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/contact">Contact Me</a>
      </li>
    </ul>
  </div>
  </div>
</nav>
    )
}

export default Navbar
