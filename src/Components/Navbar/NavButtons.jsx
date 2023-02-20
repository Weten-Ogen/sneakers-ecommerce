import React from 'react'
import {AiOutlineClose, AiOutlineMenu} from "react-icons/ai"
function NavButtons({handleClick , nav}) {
  
  return (
    <div onClick={() => handleClick()}  className=' block py-6 px-2 ml-auto text-[hsl(0,0%,0%)] md:hidden '>
    {nav === true ?  <AiOutlineMenu size={20} /> : <AiOutlineClose  size= {20}/>}
    </div>
  )
}

export default NavButtons