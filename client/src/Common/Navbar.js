import {useState} from 'react'
import { Link } from 'react-router-dom'
import {AiOutlineClose,AiOutlineLaptop,AiOutlineMenu} from 'react-icons/ai'

const Navbar = () => {
  const [nav, setNav] = useState(true);
  const handleClick = () => {
    setNav(!nav);
  }

  return (
    <nav className='flex w-full flex-center 
    item-center 
    justify-end
     text-2xl 
    text-[#00ffff]
    m-w-[1240px] '>
    {/*Horizontal Navbar */}
      <div className='hidden md:flex'>
        <Link className='p-4' to="/">home</Link>
        <Link className='p-4' to="/about">about</Link>
        <Link className='p-4' to="/projects">projects</Link>
        <Link className='p-4 pr-16' to="/contact">contact</Link>
      </div>

        {/* Buttons  */}
      <div className=' block p-4 md:hidden '>
      {nav === true ?  <AiOutlineMenu onClick={() => handleClick()} size={20} /> : <AiOutlineClose onClick={() => handleClick()} size= {20}/>}
      </div>

      {/*Vertical Navbar */}
      {<div 
        className= {!nav ? 'fixed left-0 top-0 w-[60%] uppercase pt-4 h-full border-r border-r-gray-600 bg-[#000300] ease-in-out duration-100': 'fixed left-[-100%] '} >
        <li className='border-b border-b-gray-300 p-4'><Link  to="/">home</Link></li>
        <li className='border-b border-b-gray-300 p-4'><Link to="/about">about</Link></li>
        <li className='border-b border-b-gray-300 p-4'><Link  to="/projects">project</Link></li>
        <li className='border-b border-b-gray-300 p-4'><Link  to="/contact">contact</Link></li>
      </div>}

    </nav>
  )
}

export default Navbar

