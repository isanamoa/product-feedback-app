import React from 'react';
import LiveCard from './LiveCard';

const LiveRoadmap = ({ liveStatus, liveData }) => {
  return (
    <div className={`${liveStatus} w-full lg:w-1/3 md:flex flex-col gap-4`}>
        <div className='w-full'>
            <h2 className='text-[18px] font-bold'>Live ({liveData?.length})</h2>
            <span className='text-[13px]'>Released features</span>
        </div>

        {
          liveData?.map((liv, index) => 
            <LiveCard key={index} lives={liv} />
          )
          
        }
    </div>
  )
}

export default LiveRoadmap
