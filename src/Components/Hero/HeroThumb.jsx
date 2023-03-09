import React from 'react'
import {useDispatch, useSelector} from 'react-redux';
import { handleChange } from '../../app/features/carousel';

const HeroThumb = () => {
    const dispatch = useDispatch();
    const gallery = useSelector(store => store.carousel.images)
  return (
    <div className='hidden md:max-w-md md:flex mx-auto my-2 '>
        {
            gallery.map(({thumbnail,id, image})=> (
        
                <div  key={id} className='w-max-lg  px-2'>
                <img 
                onClick={() => dispatch(handleChange(id))}
                src={`${thumbnail}`}
                alt={`${thumbnail}`}
                className='object-cover hover:ring-yellow-400 rounded-md hover:ring '/> 
                </div>
               
            ))
        }
    </div>
  )
}

export default HeroThumb
