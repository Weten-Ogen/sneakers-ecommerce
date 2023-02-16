import React from 'react'

function SkillCard({img, percentage, experience}) {
  
  return (
   
    <div className=" w-[230px] rounded-md overflow-hidden mx-4  my-4 h-[270px] border shadow-[red] shadow-xl ">
        <img src={img} className="h-[160px] object-cover mx-auto  my-2 item-center" alt={img}/>
        <span className='capitalize'>skill bar:</span><br/>
        <div className=' text-center capitalize rounded-sm border rounded-medium w-[98%]  overflow-hidden mx-auto my-1 h-[20px] '>
            <div className=' text-[black]  bg-[red] text-[15px]'  >
                {percentage}%
            </div>
        </div>
        <p className='px-2  text-[18px]  '>Experience:{experience} {experience >
             1 ? "years" : "year"}</p>
    </div>
  )
}

export default SkillCard