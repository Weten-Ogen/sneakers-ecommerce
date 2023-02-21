import React from 'react'
import { Link } from  'react-router-dom'
function HorizonNav() {
  return (
    <div className='hidden  md:flex text-[16px] capitalize max-w-[800px] text-[rgba(0,0,0,.34)] hover:text-slate-700 py-4 px-3'>

    <Link className='px-2 hover:text-[rgba(0,0,0,.30)]' to="/">collections</Link>

    <Link className='px-2 hover:text-[rgba(0,0,0,.30)]' to="/">men</Link>

    <Link className='px-2 hover:text-[rgba(0,0,0,.30)]' to="/">women</Link>
    
    <Link className='px-2 hover:text-[rgba(0,0,0,.30)]' to="">about</Link>
    <Link className='px-2 hover:text-[rgba(0,0,0,.30)]' to="/">contact</Link>
</div>
  )
}

export default HorizonNav