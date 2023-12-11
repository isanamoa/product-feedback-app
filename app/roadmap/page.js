'use client';
import React, { useState } from 'react';
import InProgressRoadmap from '@/components/InProgressRoadmap';
import LiveRoadmap from '@/components/LiveRoadmap';
import PlannedRoadmap from '@/components/PlannedRoadmap';
import useFeedbackData from '@/api/useFeedbackData';
import Link from 'next/link';

const FeedbackRoadmap = () => {

    const FeedBackData = useFeedbackData();
    const { roadmaps } = FeedBackData;

    const inProgressData = roadmaps?.filter(roadmap => 
        roadmap.status === 'in-progress');

    const plannedData = roadmaps?.filter(roadmap => 
        roadmap.status === 'planned');

    const liveData = roadmaps?.filter(roadmap => 
        roadmap.status === 'live');

    /*console.log('In Progress', inProgressData);
    console.log('Planned', plannedData);
    console.log('Live', liveData);*/


    const [divStatus, setDivStatus] = useState({
        progressStatusDiv: 'flex',
        plannedStatusDiv: 'hidden',
        liveStatusDiv: 'hidden'
    });

    const [btnStatus, setBtnStatus] = useState({
        progressBtnStatus: 'border-b-[3px] border-[#AD1FEA]',
        plannedBtnStatus: '',
        liveBtnStatus: ''
    });
    
    const divStatusHandle = (status) => {
        if (status === 'progress') {
            setDivStatus({
                plannedStatusDiv: 'hidden',
                progressStatusDiv:'flex',
                liveStatusDiv: 'hidden'
            });
            setBtnStatus({
                progressBtnStatus: 'border-b-[3px] border-[#AD1FEA]',
                plannedBtnStatus: '',
                liveBtnStatus: ''
            });
        }else if (status === 'planned') {
            setDivStatus({
                plannedStatusDiv: 'flex',
                progressStatusDiv:'hidden',
                liveStatusDiv: 'hidden'
            });
            setBtnStatus({
                progressBtnStatus: '',
                plannedBtnStatus: 'border-b-[3px] border-[#F49F85]',
                liveBtnStatus: ''
            });
        }else if (status === 'live') {
            setDivStatus({
                plannedStatusDiv: 'hidden',
                progressStatusDiv:'hidden',
                liveStatusDiv: 'flex'
            });
            setBtnStatus({
                progressBtnStatus: '',
                plannedBtnStatus: '',
                liveBtnStatus: 'border-b-[3px] border-[#62BCFA]'
            });
        }
        
    };

  return (
    roadmaps &&
    <main className="flex min-h-screen md:w-4/5 md:mx-auto flex-col items-center justify-start gap-4">
        
        <div className='w-full h-[72px] mb-4 px-4 py-2 bg-[#373F68] text-white flex items-center justify-between'>
            <div className='flex flex-col items-center justify-center'>
                <div className='w-full flex gap-1 text-[14px] font-bold'>
                    <button className='flex gap-2'>
                        <span>{'<'}</span>
                        <span>Go Back</span>
                    </button>
                </div>
                <h1 className='text-[24px] font-bold'>Roadmap</h1>
            </div>
            <Link href={`/new-feedback`}
                className='flex items-center gap-1 text-sm bg-[#AD1FEA] 
                px-1 md:px-3 py-2 rounded-md hover:opacity-50'
            >
                <span>+</span>
                <span className='whitespace-nowrap'>Add Feedback</span>
            </Link>
        </div>

        <div className='w-full flex items-end justify-between 
            gap-4 px-3 text-[13px] md:hidden
            border-b-[1px] border-[#8C92B3]'
        >
            <button 
                className={`w-[32%] py-2 ${btnStatus.plannedBtnStatus} `}
                onClick={()=>divStatusHandle('planned')}
            >
                Planned ({plannedData?.length})
            </button>
            <button 
                className={`w-[36%] py-2 ${btnStatus.progressBtnStatus}`}
                onClick={()=>divStatusHandle('progress')}
            >
                In-Progress ({inProgressData?.length})
            </button>
            <button className={`w-[32%] py-2 ${btnStatus.liveBtnStatus}`}
            onClick={()=>divStatusHandle('live')}
            >
                Live ({liveData?.length})
            </button>
            
        </div>

        <div className='w-full flex gap-3 p-3'>

            <PlannedRoadmap 
                plannedStatus={divStatus.plannedStatusDiv} 
                plannedData={plannedData} />
            <InProgressRoadmap 
                progressStatus={divStatus.progressStatusDiv} 
                inProgressData={inProgressData}/>
            <LiveRoadmap 
                liveStatus={divStatus.liveStatusDiv} 
                liveData={liveData} />

        </div>



    </main>
  )
}

export default FeedbackRoadmap
