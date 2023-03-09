import React from 'react'
import { Link } from "react-router-dom"
import {AiOutlineClose} from "react-icons/ai"



function VerticalNav({ nav }) {
  return (
    <div className= {!nav ? 'fixed left-0 text-[16px] text-black top-0 w-[70%] capitalize my-1 h-full border-r border-r-slate-200 bg-white ease-in-out duration-100':'fixed left-[-100%]'} >
        <AiOutlineClose className='top-[-10px] mx-1  text-2xl'/>
        <nav className='flex flex-col text-slate-600'>
          <Link className='mt-4 px-4'  to="/">collections</Link>
          <Link className='px-4' to="/about"> men</Link>
          <Link className='px-4'  to="/projects">women</Link>
          <Link className='px-4'  to="/projects">about</Link>
          <Link className='px-4'  to="/contact">contact</Link>
        </nav>
      </div>
  )
}

export default VerticalNav