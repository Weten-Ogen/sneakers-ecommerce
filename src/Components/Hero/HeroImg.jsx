import React from 'react'
import { useSelector } from 'react-redux'
import HeroThumb from './HeroThumb';
import {BsChevronLeft, BsChevronRight} from 'react-icons/bs';

 export default function HeroImg() {
  const { selected }= useSelector(store => store.carousel);

  return(
    <div className='mx-2 flex flex-col  object-contain justify-center '>
      <div className='flex  relative'>
        <BsChevronLeft className='block  bottom-[50%] left-[-26px] lg:hidden text-4xl text-black p-2 text-semibold bg-[#94939333] absolute rounded-full object-cover'/>
        <img 
        className='object-cover w-max-md lg:h-[55vh] rounded-md'
        src={selected}
        alt={selected}
        />
        <BsChevronRight className='block  bottom-[50%] right-[-26px] lg:hidden p-2 text-black text-4xl bg-[#94939333] absolute rounded-full object-cover'/>
      </div>
      <HeroThumb />
    </div>
  )
 }

   