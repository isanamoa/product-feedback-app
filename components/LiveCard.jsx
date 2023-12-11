import Image from 'next/image'
import React from 'react'

const LiveCard = ({ lives }) => {
  return (
    <div className='w-full h-60 bg-[#62BCFA] shadow-xl rounded-md pt-1'>
            
            <div className='w-full h-full bg-white py-4 px-4 
                flex flex-col items-start justify-start 
                gap-2'
            >

                <div className='w-full flex flex-col items-start justify-start gap-2'>
                    <ul className='w-full text-[13px] inline-flex items-center justify-between px-4'>
                        <li className='list-disc marker:text-[#62BCFA]'>Live</li>
                    </ul>                    
                    <h2 className='text-[#3A4374] text-[13px] lg:text-[18px] font-bold'>{lives?.title}</h2>
                    <p className='text-[#647196] text-[13px] font-normal'>
                        {lives?.description}
                    </p>
                    <span className='mb-4 px-3 py-1 text-[13px] bg-[#F2F4FF] 
                    text-[#4661E6] rounded-lg capitalize'>
                        {lives?.category}
                    </span>                
            </div>

                <div className='w-full text-[13px] flex flex-row items-start justify-between 
                    '
                >
                    <div className=''>
                        <button className='rounded-[10px] bg-[#F2F4FE] 
                        flex flex-row items-center justify-center gap-1 p-1 hover:text-[#CFD7FF]'>
                            <span>^</span> 
                            <span>{lives?.upvotes}</span>
                        </button>
                    </div>
                    <div className='flex flex-row items-center justify-center gap-2'>
                        <button className='flex flex-row items-center gap-2'>
                            <Image src={'/assets/shared/icon-comments.svg'} 
                                width={20} height={20} alt='icon-comments'
                            />
                            <span>{lives?.comments?.length}</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default LiveCard
