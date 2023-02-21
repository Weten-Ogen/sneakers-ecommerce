import React from 'react'

function PriceTag({price,discount}) {
  return (
    <div className='flex  font-bold'>
       <h1 className='pr-2 text-lg'>$125.00</h1>
       <h3 className='max-w-sm text-[#e6b855fd] bg-slate-100 text-sm mt-2'>50%</h3>
    </div>
  )
}

export default PriceTag
