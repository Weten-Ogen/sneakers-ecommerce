import React from 'react'
import { Link } from  'react-router-dom'
function HorizonNav() {
  return (
    <div className='hidden md:flex text-2sm'>
    <Link className='p-4' to="/">home</Link>
    <Link className='p-4' to="/about">about</Link>
    <Link className='p-4' to="/projects">projects</Link>
    <Link className='p-4 pr-16' to="/contact">contact</Link>
</div>
  )
}

export default HorizonNav