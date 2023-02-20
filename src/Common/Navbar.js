import {useState} from 'react'
import HorizonNav from '../Components/Navbar/HorizonNav'
import NavButtons from '../Components/Navbar/NavButtons'
import VerticalNav from '../Components/Navbar/VerticalNav'
import NavProf from '../Components/Navbar/NavProf'

 const Navbar = () => {

  const [nav, setNav] = useState(true);

  const handleClick = () => {
    setNav(!nav);
    
  }
  return (
    <nav className='flex w-[80%] item-center mx-auto text-2xl text-[#00ffff] m-w-[1240px] border border-r-0 border-l-0 border-b-[rgba(0,0,0,.05)]  py-4'>
      <div className='flex mr-auto justify-center'>
        <NavButtons nav={nav} className='mx-4 py-5 ' handleClick={handleClick}/>

        <img src='logo.svg' className='h-[22px]  my-5 px-3 text-[12px] md:h-[30px] ' alt='logo'/>
        {/*Horizontal Navbar */}
        <HorizonNav  className='text-[rgba(0,0,0,.75)] '/>


        {/* Buttons  */}
        {!nav && <VerticalNav/>}
      
        
      </div>
      <NavProf/>
    

     
    </nav>
    
  )
}

export default Navbar;