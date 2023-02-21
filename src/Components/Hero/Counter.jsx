import React from 'react'
import { useState } from 'react';
function Counter() {
    const [count, setCount] = useState(0);
    const add = () =>{
        setCount(prev => prev + 1)
    }
    const sub = () =>{
        setCount(prev => prev - 1)
    }

    
  return (
    <div className='flex w-full justify-center py-4 px-6 bg-[hsla(0,4%,90%,.2)] rounded-md  items-center '>
      <button className='text-3xl  mr-auto text-[#faba5b]' onClick={sub}>-</button>
      <p className='text-sm font-bold px-2'>{count}</p>
      <button className='ml-auto text-3xl text-[#faba5b]' onClick={add}>+</button>
    </div>
  )
}

export default Counter
