import React from 'react';
import ProgressCard from './ProgressCard';

const InProgressRoadmap = ({ progressStatus, inProgressData }) => {
  return (
    <div className={`${progressStatus} w-full lg:w-1/3 md:flex flex-col gap-4`}>
        <div className='w-full'>
            <h2 className='text-[18px] font-bold'>In-Progress ({inProgressData?.length})</h2>
            <span className='text-[13px]'>Currently being developed</span>
        </div>

        {
          inProgressData?.map((progrs, index) =>
            <ProgressCard key={index} progrs={progrs}/>
          )
          
        }
        
    </div>
  )
}

export default InProgressRoadmap
