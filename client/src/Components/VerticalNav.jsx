import React from 'react'
import { Link } from "react-router-dom"
function VerticalNav({ nav }) {
  return (
    <div 
        className= {!nav ? 'fixed left-0 top-0 w-[60%] uppercase pt-4 h-full border-r border-r-gray-600 bg-[#000300] ease-in-out duration-100': 'fixed left-[-100%] '} >
        <li className='border-b border-b-gray-300 p-4'><Link  to="/">home</Link></li>
        <li className='border-b border-b-gray-300 p-4'><Link to="/about">about</Link></li>
        <li className='border-b border-b-gray-300 p-4'><Link  to="/projects">project</Link></li>
        <li className='border-b border-b-gray-300 p-4'><Link  to="/contact">contact</Link></li>
      </div>
  )
}

export default VerticalNav