import {useState} from 'react'
import HorizonNav from '../Components/Navbar/HorizonNav'
import VerticalNav from '../Components/Navbar/VerticalNav'
import NavProf from '../Components/Navbar/NavProf'
import { AiOutlineMenu } from 'react-icons/ai'
import { useSelector } from 'react-redux'





const Navbar = () => {

  const {amount } = useSelector((store) => store.cart);

  const [nav, setNav] = useState(true);

  const handleClick = () => {
    setNav(!nav);
    
  }
  return (
    <nav className='flex w-[80%] item-center mx-auto text-2xl text-[#00ffff] m-w-[1240px] border border-r-0 border-l-0 border-b-[rgba(0,0,0,.05)]  py-4'>
      <div className='flex mr-auto justify-center'>
        <AiOutlineMenu className='text-black my-5  md:hidden' onClick={handleClick}/>

        <img src='logo.svg' className='h-[14px]  my-6 px-3 text-[12px] md:h-[30px]  ' alt='logo'/>
        {/*Horizontal Navbar */}
        <HorizonNav  className='text-[rgba(0,0,0,.75)] '/>


       
      </div>
         
      {/* Buttons  */}
      {!nav && <VerticalNav/>}

      
      {/** NavProfile Icons */}
      <NavProf amount={amount}/>
     
    </nav>
  )
}
export default Navbar;