import React from 'react'
import { useSelector } from 'react-redux'
import HeroThumb from './HeroThumb';

 export default function HeroImg() {
  const Selected_image= useSelector(store => store.carousel.active);

  return(
    <div className='mx-2 flex flex-col  object-contain justify-center '>
      <img 
       className='object-cover w-max-md lg:h-[55vh] rounded-md'
       src={Selected_image}
       alt={Selected_image}
       />
      <HeroThumb />
    </div>
  )
 }

   