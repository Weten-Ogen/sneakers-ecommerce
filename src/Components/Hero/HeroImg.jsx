import React from 'react'
import { useSelector } from 'react-redux'
import HeroThumb from './HeroThumb';
import Carousel from '../Carousel';
import { slides } from '../../data/data';

 export default function HeroImg() {


  const { selected}= useSelector(store => store.carousel);
  
  

  return(
    <div className='mx-2 flex flex-col  object-contain justify-center '>
      <div className='flex  relative'>
        
        <div className='h-[400px] w-full lg:max-w-[550px]'>
          <div className=''>
            <img 
            className='hidden lg:block object-cover w-max-md lg:h-[55vh] rounded-md'
            src={selected}
            alt={selected}
            />
          </div>
          <div className='max-w-2xl rounded-lg'>
          <Carousel autoSlide={true} className='block lg:hidden rounded-md'>
            {
              slides.map(s => {
                return(
                    <img src={s} key={s} alt={s   }/>
                )
              })
            }
          </Carousel>
          </div>
        </div>
      </div>
      <HeroThumb />
    </div>
  )
 }

   