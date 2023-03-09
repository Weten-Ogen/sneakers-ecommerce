import React from 'react'
import HeroPara from './HeroPara';
import HeroImg from './HeroImg';


function Hero() {
  return (
    <div className='mt-0 block md:flex items-center justify-between w-[80%] mx-auto'>
      {/* <Cart/> */}
      <HeroImg />
      <HeroPara />
    </div>
  )
}

export default Hero
