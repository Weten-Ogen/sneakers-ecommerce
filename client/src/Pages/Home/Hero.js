import React from 'react'
import image from '../../Images/marc.png';
import { useLocation } from 'react-router-dom';

const Hero = () => {
  return (
    <article className='hero'>
        <div className='hero-message'>
            <div className='hero-info'>
                <p className='text-1'>my name is <span className='hero-highlight'>marcus gideon oware</span></p>
                <p className='text-2'>i am a  <span className='hero-highlight'>software enginer</span> in ghana, west africa</p>
                <p className='text-3'>I have 4 years experience in <span className='hero-highlight'>software enginer</span></p>
            </div>
            <div className='hero-btns'>
                <button type='button'>projects</button>
                <button type='button'>contact</button>
                <div className='hero-social-icons'>
                </div>
            </div>
        </div>
      <img src={image} alt='marcus oware' className='hero-tag hero-image'/>
    </article>
  )
}

export default Hero
