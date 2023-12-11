import Image from 'next/image'
import React from 'react'

const PlannedCard = ({ plan }) => {
  return (
    <div className='w-full h-60 bg-[#F49F85] shadow-xl rounded-md pt-1'>
            
        <div className='w-full h-full bg-white py-4 px-4 
            flex flex-col items-start justify-start 
            gap-3'
        >

            <div className='w-full flex flex-col items-start justify-start gap-2'>
                <ul className='w-full text-[13px] inline-flex items-center justify-between px-4'>
                    <li className='list-disc marker:text-[#F49F85]'>Planned</li>
                </ul>           
                <h2 className='text-[#3A4374] text-[13px] lg:text-[18px] font-bold'>{plan?.title}</h2>
                <p className='text-[#647196] text-[13px] font-normal'>
                    {plan?.description}
                </p>
                <span className='mb-4 px-3 py-1 text-[13px] bg-[#F2F4FF] 
                text-[#4661E6] rounded-lg capitalize'>
                    {plan?.category}
                </span>            
            </div>

            <div className='w-full text-[13px] flex flex-row items-start justify-between 
                '
            >
                <div className=''>
                    <button className='rounded-[10px] bg-[#F2F4FE] 
                    flex flex-row items-center justify-center gap-1 p-1 hover:text-[#CFD7FF]'>
                        <span>^</span> 
                        <span>{plan?.upvotes}</span>
                    </button>
                </div>
                <div className='flex flex-row items-center justify-center gap-2'>
                    <button className='flex flex-row items-center gap-2'>
                        <Image src={'/assets/shared/icon-comments.svg'} 
                            width={20} height={20} alt='icon-comments'
                        />
                        <span>{plan?.comments?.length}</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PlannedCard
