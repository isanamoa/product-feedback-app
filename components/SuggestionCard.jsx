import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const SuggestionCard = ({ suggestions }) => {
  return (
    <section 
        className='relative w-full bg-white shadow-xl rounded-md py-4 px-4 
        flex flex-col items-center justify-center 
        md:flex-row gap-2'
    >

        <div className='w-full md:w-4/5 flex flex-col items-start justify-start gap-2'>
            <Link href={`/feedback-details/${suggestions?.id}`} 
                className='text-[#3A4374] text-[13px] md:text-[18px] font-bold 
                hover:text-[#4661E6]'>
                    {suggestions?.title}
            </Link>
            <p className='text-[#647196] text-[13px] md:text-base font-normal'>
                {suggestions?.description}
            </p>
            <span className='mb-4 px-3 py-1 text-[13px] bg-[#F2F4FF] 
            text-[#4661E6] rounded-lg capitalize'>
                {suggestions?.category}
            </span>
        </div>

      
        <button className='rounded-[10px] bg-[#F2F4FE] 
            hidden md:flex flex-row md:flex-col items-center gap-1 p-1 
            hover:text-[#CFD7FF] md:absolute top-5 left-4'
        >
            <span>^</span> 
            <span>{suggestions?.upvotes}</span>
        </button>
    
        {
            suggestions?.comments &&
            (
                <button className='hidden md:flex flex-row items-center gap-2 md:absolute top-15 right-4'>
                    <Image src={'/assets/shared/icon-comments.svg'} 
                        width={20} height={20} alt='icon-comments'
                    />
                    <span>{suggestions?.comments?.length}</span>
                </button>
            )
        }

        <div className='w-full flex flex-row items-start justify-between 
            md:hidden'
        >
            <div className='text-[13px] md:text-base'>
                <button className='rounded-[10px] bg-[#F2F4FE] 
                flex flex-row md:flex-col items-center gap-1 p-1 hover:text-[#CFD7FF]'>
                    <span>^</span> 
                    <span>{suggestions?.upvotes}</span>
                </button>
            </div>
            <div className='flex flex-row items-center justify-center gap-2 text-[13px] md:text-base'>
                {
                    suggestions?.comments &&
                    (
                        <button className='flex flex-row items-center gap-2'>
                            <Image src={'/assets/shared/icon-comments.svg'} 
                                width={20} height={20} alt='icon-comments'
                            />
                            <span>{suggestions?.comments?.length}</span>
                        </button>
                    )
                }
            </div>
        </div>
           

    </section>
  )
}

export default SuggestionCard
