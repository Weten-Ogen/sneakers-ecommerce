import React from 'react'
import Counter from './Counter'
import PriceTag from './PriceTag'

function HeroPara({price}) {
  return (
    <div className='py-2 px-2 max-w-[500px]'>
      <p className='text-[rgb(238,156,4)] font-bold text-sm uppercase'>sneaker company</p>
      <h1 className='capitalize text-5xl py-3 font-bold'>Fall limited edition sneakers</h1>
      <p className='font-semibold text-[rgba(0,0,0,0.35)] text-sm text-leading py-2'>These low-profile sneakers are your perfect casual wear companion.Featuring a durable rubber outer sale.They'll withstand everything the weather can offer.</p>
      <PriceTag/>
      <p className='text-slate-400 font-semibold text-sm'>$125.00</p>
      <div className='block mx-auto md:flex'>
      <Counter />
      <button className=' bg-[#faa405] text-white capitalize text-md py-4 px-6 w-full  my-2 rounded-md shadow-red-400 hover:ring hover:ring-yellow-200 hover:text-lg'>add to cart</button>
      </div>
    </div>
  )
}

export default HeroPara
