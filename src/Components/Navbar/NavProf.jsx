import React from 'react'
import avatar from '../../images/image-avatar.png'


function NavProf({amount}) {


  return (
    <div className='flex'>
      <p className='text-[rgb(255,167,4)] text-sm  my-3 '>{amount}</p>
      <img src={avatar} className='object-cover h-[70px] py-4 px-0 md:h-[80px] ' alt='avatar'/>
      
    </div>
  )
}

export default NavProf
