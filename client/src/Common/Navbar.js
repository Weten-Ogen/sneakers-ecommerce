import {useState} from 'react'
import HorizonNav from '../Components/HorizonNav'
import NavButtons from '../Components/NavButtons'
import VerticalNav from '../Components/VerticalNav'


const Navbar = () => {

  const [nav, setNav] = useState(true);

  const handleClick = () => {
    setNav(!nav);
    
  }
  return (
    <nav className='flex w-full flex-center item-center justify-end text-2xl text-[#00ffff] m-w-[1240px]'>
    {/*Horizontal Navbar */}
     <HorizonNav/>

    {/* Buttons  */}
     <NavButtons nav={nav} handleClick={handleClick}/>

      {/*Vertical Navbar */}
      <VerticalNav nav={nav}/>

    </nav>
  )
}

export default Navbar

