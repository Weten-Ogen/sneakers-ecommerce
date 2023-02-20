import React from 'react'
import { Link } from "react-router-dom"
function VerticalNav({ nav }) {
  return (
    <div 
        className= {!nav ? 'fixed left-0 text-[16px] text-black top-0 w-[60%] capitalize my-1 h-full border-r border-r-slate-200 bg-white ease-in-out duration-100':'fixed left-[-100%] '} >
        <li className=' py-2'><Link  to="/">collections</Link></li>
        <li className=' py-2'><Link to="/about"> men</Link></li>
        <li className=' py-2'><Link  to="/projects">women</Link></li>
        <li className=' py-2'><Link  to="/projects">about</Link></li>
        <li className=' py-2'><Link  to="/contact">contact</Link></li>
      </div>
  )
}

export default VerticalNav