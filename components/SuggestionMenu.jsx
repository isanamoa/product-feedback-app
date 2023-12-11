import React from 'react'
import { CustomSelectsTwo } from './CustomSelects'
import Link from 'next/link'
import Image from 'next/image'

const SuggestionMenu = ({ suggests }) => {
  return (
    <div className='relative z-10 w-full h-[72px] mb-4 px-4  bg-[#373F68] 
        text-white flex items-center justify-between
        md:rounded-md md:gap-5'
    >
        <div className='w-3/4 flex items-center gap-3'>
            <div className='hidden md:flex justify-start items-center gap-2'>
                <Image src={'/assets/suggestions/icon-suggestions.svg'} width={24} height={24} alt='suggestion-icon'/>
                <span className='text-[13px] md:text-[15px] whitespace-nowrap lg:text-lg'>{suggests && `${suggests?.length} Suggestions`}</span>
            </div>
            
            <div className='flex items-center justify-center gap-2 text-[13px]'>
                <span className='w-auto whitespace-nowrap'>Sort by:</span>
                <CustomSelectsTwo 
                    optionData={['Most Upvotes', 'Least Upvotes', 'Most Comments', 'Least Comments']}
                    btnCSS={`bg-transparent flex items-center justify-between gap-2`}
                    panCSS={`top-5 bg-white text-black p-1`}
                />
            </div>
        </div>
        <Link href={`/new-feedback`}
            className='flex items-center gap-1 text-sm bg-[#AD1FEA] 
            px-1 md:px-3 py-2 text-[13px] md:text-[14px] rounded-md hover:opacity-50'
        >
            <span>+</span>
            <span className='whitespace-nowrap'>Add Feedback</span>
        </Link>
    </div>
  )
}

export default SuggestionMenu
