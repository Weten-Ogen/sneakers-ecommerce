import React from 'react'
import {
  image1, 
  image1_thumb,
  image2_thumb,
  image2,
  image3,
  image3_thumb,
  image4,
  image4_thumb
} from '../../images/index'


 export default function HeroImg() {
  return (

    <div className=' md:max-w-[60%] '>
      <div className='obect-contain flex flex-col justify-center md:w-full lg:w-[80%] md:h-[70vh] align-center md:max-w-md'>
        {/*THE MAIN IMAGE */}
        <div className=''>
          <img src={image1} alt='image1' className='block object-cover  w-full lg:w-[400px] rounded-md mx-auto hover:ring hover:ring-yellow-300 ' />
        </div>


        {/* THUMBNAILS */}
        <div className='hidden md:flex my-4 max-w-sm'>
          <img src={image1_thumb} className='hover:ring hover:ring-yellHow-300 mr-2 rounded-md h-[90px]'  alt='image1 '/>
          <img src={image2_thumb} className='hover:ring  hover:ring-yellow-300 mr-2 rounded-md h-[90px]'  alt='image1 '/>
          <img src={image3_thumb} className='hover:ring hover:ring-yellow-300 mr-3 rounded-md hover:text-lg h-[90px]'  alt='image1' />
          <img src={image4_thumb} className='hover:ring hover:ring-yellow-300  rounded-md hover:text-md h-[90px]'  alt='image1' />
        </div>
      </div>
      
    </div>
  )
}
