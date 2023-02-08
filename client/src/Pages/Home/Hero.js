import React from 'react'
import { about_banner } from '../../Images';


const Hero = () => {
  return (
    <article className='hero'>
        <div className='hero-message'>
            <div className='hero-info'>
                <p className='text-1'>my name is <span className='hero-highlight'>marcus gideon oware</span></p>
                <p className='text-2'>i am a  <span className='hero-highlight'>software engineer</span> in ghana, west africa</p>
                <p className='text-3'>I have 4 years experience in <span className='hero-highlight'>software engineer</span></p>
            </div>
            <div className='hero-btns'>
                <button type='button'>projects</button>
                <button type='button'>contact</button>
                <div className='hero-social-icons'>
                </div>
            </div>
        </div>
      <img src={about_banner} alt='marcus oware' className='hero-tag hero-image'/>
    </article>
  )
}

export default Hero
