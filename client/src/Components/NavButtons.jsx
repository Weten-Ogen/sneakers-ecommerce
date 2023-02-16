import React from 'react'
import {AiOutlineClose, AiOutlineMenu} from "react-icons/ai"
function NavButtons({handleClick , nav}) {
  return (
    <div className=' block p-4 md:hidden '>
    {nav === true ?  <AiOutlineMenu onClick={() => handleClick()} size={20} /> : <AiOutlineClose onClick={() => handleClick()} size= {20}/>}
    </div>
  )
}

export default NavButtons