import React from 'react'

function PriceTag({price ,amount,discount}) {
  return (
    <div className='flex  font-bold'>
       <h1 className='pr-2 text-lg'>{price}</h1>
       <h3 className='max-w-sm text-[#e6b855fd] bg-slate-100 text-sm mt-2'>{discount}%</h3>
    </div>
  )
}

export default PriceTag
