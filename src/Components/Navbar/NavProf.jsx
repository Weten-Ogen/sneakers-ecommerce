import React from 'react'
import avatar from '../../images/image-avatar.png'
import { BsCart } from 'react-icons/bs'

function NavProf() {


  return (
    <div className='flex'>
      <BsCart className='text-black my-6 max-w-[50px]' />
      <p className='text-[rgb(255,167,4)] text-sm  my-3 '>3</p>
      <img src={avatar} className='h-[70px] py-4 px-0 md:h-[80px] ' alt='avatar'/>
      
    </div>
  )
}

export default NavProf
