'use client';
import React, { useState }  from 'react';
import { AddButtons, OtherButtons } from '@/components/CustomButtons';
import { TextFieldBox } from '@/components/CustomInputs';
import { CustomSelects } from '@/components/CustomSelects';

const FeedBack = () => {
  return (
    <main className="flex min-h-screen p-3 md:w-3/5 lg:w-1/3 md:mx-auto flex-col items-center justify-start gap-4">
      
      <div className='w-full p-3 flex gap-2 text-[14px] font-bold'>
        <button className='flex gap-2'>
            <span>{'<'}</span>
            <span>Go Back</span>
        </button>
      </div>

      <div  className='relative w-full p-3 bg-white shadow-xl rounded-xl'>
        <div className='absolute -top-5 left-4 w-10 h-10 rounded-full
            bg-gradient-to-tr from-[#28A7ED] via-[#A337F6] to-[#E84D70]
            text-white flex items-center justify-center'
        >
            +
        </div>
        <h3 className='text-[18px] mt-6 mb-2'>Create New Feedback</h3>
        
        <div className='w-full flex flex-col gap-8 pt-3'>
            <div className='w-full'>
                <h5 className='text-[#3A4374] text-[13px] font-bold'>Feedback Title</h5>
                <span className='text-[#647196] text-[13px]'>Add a short, descriptive headline</span>
                <TextFieldBox />
            </div>
            <div className='w-full'>
                <h5 className='text-[#3A4374] text-[13px] font-bold'>Category</h5>
                <span className='text-[#647196] text-[13px]'>Choose a category for your feedback</span>
                <CustomSelects optionData={['Featured', 'UI', 'UX', 'Enhancement', 'Bug']}/>

            </div>
            <div className='w-full'>
                <h5 className='text-[#3A4374] text-[13px] font-bold'>Feedback Detail</h5>
                <span className='text-[#647196] text-[13px] p-0 m-0'>
                    Include any specific comments on what should be improved, added, etc
                </span>
                <textarea rows={3} 
                    className='w-full outline-none bg-[#F7F8FD]  p-2
                        focus:border-[1px] focus:border-[#4661E6]'
                    defaultValue={''}
                />
            </div>
            <div className='w-full flex flex-col items-center gap-2 md:flex-row-reverse'>
                <AddButtons addBtnText={'Add Feedback'} 
                />
                <OtherButtons otherBtnText={'Cancel'} 
                otherBtnBgcolor={'bg-[#3A4374]'}
                />
            </div>
        </div>

      </div>
    </main>
  )
}

export default FeedBack
