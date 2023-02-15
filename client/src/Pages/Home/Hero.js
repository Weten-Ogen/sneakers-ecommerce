import React from 'react'
import { hero_banner } from '../../Images';


const Hero = () => {
  return (
    <article className='hero'>
        <div className='hero-message'>
            <div className='hero-info'>
                <p className='text-1'>my name is <span className=' txt hero-highlight'>marcus oware</span></p>
                <p className='text-2 text'>i am a  <span className='txt hero-highlight'>software engineer</span> in ghana, west africa</p>
                <p className='text-3 '>I have 4 years experience in <span className='txt hero-highlight'>software engineer</span></p>
            </div>
            <div className='hero-btns'>
                <button type='button'>more about me </button>
                <div className='hero-social-icons'>
                </div>
            </div>
        </div>
      <img src={hero_banner} alt='marcus oware' className='hero-tag hero-image'/>
    </article>
  )
}

export default Hero
