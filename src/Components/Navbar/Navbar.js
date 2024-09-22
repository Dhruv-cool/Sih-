import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import NavbarIcons from './NavbarIcons'
import Searchbar from './Searchbar/Searchbar'
function Navbar() {
  return (
    <>
    <div className="component_navbar">
          <div className="navbar_home_about">
            <Link to='/' className='home_about'>
                Home
            </Link>
            <a href="#" className='home_about'>About</a>
          </div>
          <Searchbar/>
          <NavbarIcons/>
    </div>
    </>
  )
}

export default Navbar