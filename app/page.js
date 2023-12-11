'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import TopSection from '@/components/TopSection';
import SuggestionCard from '@/components/SuggestionCard';
import SuggestionMenu from '@/components/SuggestionMenu';
import EmptySuggestionCard from '@/components/EmptySuggestionCard';
import useFeedbackData from '@/api/useFeedbackData';

export default function Home() {
  /*const [filterMode, setFilterMode] = useState(false);
  const [filterValue, setFilterValue] = useState('Most Updates');
  
  const clickHandle = () => {
      setFilterMode(prev => !prev);
  }*/

  const FeedBackData = useFeedbackData();
  const { suggestData, roadmaps, filterSuggestionByCatergory } = FeedBackData;

  return (
    <main className="flex min-h-screen lg:w-4/5 lg:mx-auto flex-col items-center justify-start">
      <div className='w-full min-h-screen bg-[#F7F8FD] 
        flex flex-col lg:flex-row lg:justify-between gap-4 md:gap-8 lg:gap-4
        md:pt-7 text-[13px] md:text-[15px]'
      >
        
        <TopSection suggestMenu={{ roadmaps, filterSuggestionByCatergory}}/>

        <div className='w-full lg:w-4/5 bg-[#F2F4FE] mt-[56px] md:px-3 lg:px-0 md:mt-0'>
          
          <SuggestionMenu suggests={suggestData} />

          <div className='w-full px-3 md:px-0 flex flex-col gap-5'>
            {
              suggestData && suggestData.length === 0 ? 
              <EmptySuggestionCard />
              : 
              suggestData?.map((suggestion, index) => 
                <SuggestionCard key={index} suggestions={suggestion} />
              )
            }
          </div>

        </div>

      </div>
    </main>
  )
}
