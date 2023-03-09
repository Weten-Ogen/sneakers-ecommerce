import React from 'react'
import Counter from './Counter'
import PriceTag from './PriceTag'
import {useSelector} from 'react-redux';

function HeroPara({price}) {

  const state = useSelector((store) => store.cart)

  return (
    <div className='py-2 px-2 max-w-[500px]'>

      {/* HEADING */}
      <p className='text-[rgb(238,156,4)] font-bold text-sm uppercase'>sneaker company
      </p>

      <h1 className='capitalize text-5xl py-3 font-bold'>Fall limited edition sneakers
      </h1>

      {/*NARRATIVE */}
      <p className='font-semibold text-[rgba(0,0,0,0.35)] text-sm text-leading py-2'>These low-profile sneakers are your perfect casual wear companion.Featuring a durable rubber outer sale.They'll withstand everything the weather can offer.</p>

      <PriceTag {...state}/>
      <p className='text-slate-400 font-semibold text-sm'>{state.total}</p>
      <div className='block mx-auto md:flex'>
      <Counter />
      <button className=' bg-[#faa405] text-white capitalize text-md py-4 px-6 w-full  my-2 rounded-md shadow-red-400 hover:ring hover:ring-yellow-200 hover:text-lg'>add to cart</button>
      </div>
    </div>
  )
}

export default HeroPara
