import React from 'react'
import avatar from '../../images/image-avatar.png'
import { BsCart } from 'react-icons/bs'

function NavProf() {


  return (
    <div className='flex '>
      <BsCart className='text-black my-6' />
      <p className='text-[rgb(255,167,4)] text-sm  my-3 '>3</p>
      <img src={avatar} className='h-[80px] py-4 px-2 ' alt='avatar' />
      
    </div>
  )
}

export default NavProf
