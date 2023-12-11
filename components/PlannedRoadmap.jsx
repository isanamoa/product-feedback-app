import React from 'react';
import PlannedCard from './PlannedCard';

const PlannedRoadmap = ({ plannedStatus, plannedData }) => {
  return (
    <div className={`${plannedStatus} w-full lg:w-1/3 md:flex flex-col gap-4`}>
        <div className='w-full'>
            <h2 className='text-[18px] font-bold'>Planned ({plannedData?.length})</h2>
            <span className='text-[13px]'>Ideas priotized for research</span>
        </div>

        { 
          plannedData?.map((plan, index) =>
            <PlannedCard key={index} plan={plan} />
          )
          
        }

    </div>
  )
}

export default PlannedRoadmap
