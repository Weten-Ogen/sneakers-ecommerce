import React,{useState,useEffect} from 'react'
import {BsChevronLeft, BsChevronRight} from 'react-icons/bs';


const Carousel = ({children:slides,autoSlide=false,autoSlideInterval=3000}) => {
    const [curr, setCurr] = useState(0);
    const prev = () => {
        console.log('hello')
        setCurr(curr => curr === 0 ? slides.length - 1:  curr - 1 )
    }
    const next = () => {
        setCurr(curr => curr ===  slides.length - 1 ? 0 :  curr +  1 )
    }
    useEffect(() => {
      if(!autoSlide) return
      const slideInterval = setInterval(next, autoSlideInterval);
      return () => clearInterval(slideInterval)
    },[])

  return (
    <div className='relative overflow-hidden lg:hidden'>
      <div className='flex rounded-md transition-transform ease-out  duration-[6000]' 
      style={{ transform :`translateX(-${curr* 100}%)`}}>{slides}
       </div>
      <div className='text-gray-700 cursor-pointer  absolute inset-0 flex items-center justify-between  text-3xl'>
       
        <button 
        className='bg-white/30 rounded-full p-1 hover:bg-white'
        onClick={prev}
        >
            <BsChevronLeft  size={40}
            />
            
        </button>
        <button
         onClick={next}
         className='bg-white/30 hover:bg-white rounded-full p-1'
        >
        <BsChevronRight size={40}
       />
        </button>
        
      </div>
      <div className='absolute bottom-4 right-0 left-0'>
        <div className='flex items-center justify-center gap-2'>
            {slides.map((_, i) => {
               return ( <div className={`transition-all w-3 h-3 bg-white  rounded-full  ${curr===i ? 'p-2' : 'bg-'}`}></div>)
            })}
        </div>
      </div>
      
    </div>
  )
}

export default Carousel
