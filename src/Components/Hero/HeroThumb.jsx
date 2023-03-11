import React from 'react'
import {useDispatch, useSelector} from 'react-redux';
import { handleThumbClick } from '../../app/features/carousel';

const HeroThumb = () => {
    const dispatch = useDispatch();
    const {Imgs}= useSelector(store => store.carousel)
  return (
    <div className='hidden md:max-w-md md:flex mx-auto my-2 '>
        {
            Imgs.map(({id , thumbnail,pic})=> (
                <div  key={id} className='w-max-lg  px-2'>
                
                <img 
                onClick = {() => dispatch(handleThumbClick(pic))}
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
