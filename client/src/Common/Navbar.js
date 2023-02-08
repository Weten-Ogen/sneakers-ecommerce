import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='navbar'>
        <li><Link className='navItem' to="/">home</Link></li>
        <li><Link className='navItem' to="/about">about</Link></li>
        <li><Link className='navItem' to="/projects">projects</Link></li>
        <li><Link className='navItem' to="/contact">contact</Link>
        </li>
        
    </nav>
  )
}

export default Navbar

