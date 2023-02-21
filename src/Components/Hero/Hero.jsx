import React from 'react'
import HeroPara from './HeroPara';
import HeroImg from './HeroImg';
import Cart from '../Cart';

function Hero() {
  return (
    <div className='mt-5 block md:flex items-center justify-between w-[80%] mx-auto'>
      {/* <Cart/> */}
      <HeroImg/>
      <HeroPara/>
    </div>
  )
}

export default Hero
