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
    <div className='w-full md:max-w-sm'>
      <img src={image1} alt='image1' className='w-full rounded-md mx-auto' />

      <div className='hidden md:flex my-4 max-w-sm w-[23%]'>
        <img src={image1_thumb} className='hover:ring hover:ring-yellow-300 mr-3 rounded-md '  alt='image1'/>
        <img src={image2_thumb} className='hover:ring  hover:ring-yellow-300 mr-3 rounded-md'  alt='image1'/>
        <img src={image3_thumb} className='hover:ring hover:ring-yellow-300 mr-3 rounded-md'  alt='image1'/>
        <img src={image4_thumb} className='hover:ring hover:ring-yellow-300 mr-3 rounded-md'  alt='image1'/>
        
      </div>
    </div>
  )
}
