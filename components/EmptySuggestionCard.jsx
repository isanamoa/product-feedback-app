import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const EmptySuggestionCard = () => {
  return (
    <div className='w-full h-[85vh] flex flex-col items-center justify-center 
        gap-3 p-3 bg-white shadow-xl '
    >
      <Image src={'/assets/suggestions/illustration-empty.svg'} 
        width={100} height={100} alt='illustration-empty'
      />
      <h3 className='text-[#3A4374] text-[18px] md:text-[24px] text-center'>There is no feedback yet.</h3>
      <p className='text-[#647196] text-[13px] md:text-[16px] md:w-[60%] text-center'>
          Got a suggestion? Found a bug that needs to be squashed? We love 
          hearing about new ideas to improve our app.
      </p>
      <Link href={`/new-feedback`}
        className='flex items-center gap-1 text-sm bg-[#AD1FEA] 
        px-3 py-2 text-white rounded-md hover:opacity-50'
      >
          <span>+</span>
          <span className='whitespace-nowrap'>Add Feedback</span>
      </Link>    
    </div>
  )
}

export default EmptySuggestionCard
