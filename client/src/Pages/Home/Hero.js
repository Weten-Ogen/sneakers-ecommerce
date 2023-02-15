import React from 'react'



const Hero = () => {
  return (
    <article className='text-white '>
      <div className='max-w-[800px]  p-2 font-bold  w-full flex flex-col item-center mt-[50px] h-screen  mx-auto py-4 '>
          
       
                <p className=' md:text-6xl sm:text-5xl text-2xl '> my name is <span className=' capitalize md:text- 8xl sm: text-6xl text-5xl text-[#00fff0]'> marcus oware </span><br/>
                <span className='lowercase text-3xl '> A fullstack software engineer .</span></p>

                {/* buttons  */}
                <button className='bg-[#00fff0] text-[32px] my-6
                mx-auto  font-medium text-[#000000] py-3 px-6 border border-w-[1px] rounded-md '>Coffee</button>
      
                  {/* social media icons here*/}
            
           
      </div>
    </article>
  )
}

export default Hero
