'use client';
import React, { useEffect, useState } from 'react';
import Comments from '@/components/Comments';
import AddComments from '@/components/AddComments';
import SuggestionCard from '@/components/SuggestionCard';
import useFeedbackData from '@/api/useFeedbackData';
import { useParams } from 'next/navigation';
import Link from 'next/link';


const FeedbackDetails = () => {
  const FeedBackData = useFeedbackData();
  const { suggestData } = FeedBackData;
  
  const param = useParams();
  const suggestion = suggestData?.filter(value => value.id === parseInt(param.id));
  const [commentNumber, setCommentNumber] = useState(0)
  const [newComment, setNewComment] = useState('');

  return (
    <main className="flex min-h-screen p-3 lg:w-1/2 lg:mx-auto flex-col items-center justify-start gap-4">
      
      <div className='w-full p-3 flex items-center justify-between'>
        <button className='flex gap-2 text-[14px] font-bold'>
            <span>{'<'}</span>
            <span>Go Back</span>
        </button>
        <Link href={`/edit-feedback`}
            className='flex items-center gap-1 text-[13px] bg-[#4661E6] text-white
            px-1 md:px-3 py-2 rounded-md hover:opacity-50'
        >
           
          <span className='whitespace-nowrap'>Edit Feedback</span>
        </Link>
      </div>

      {
        suggestion && (
          <>
            <SuggestionCard  suggestions={suggestion?.[0]} />

            { suggestion?.[0]?.comments &&
              <div  className='w-full p-3 text-[13px] md:text-[15px] bg-white shadow-xl rounded-xl'>
                <h3 className='text-[18px] text-[#3A4374] mb-2 font-bold'>
                  { commentNumber === 0 ? suggestion?.[0]?.comments?.length : commentNumber + suggestion?.[0]?.comments?.length } Comments
                </h3>
                
                <div className='w-full md:p-3'>
                  {
                    suggestion?.[0]?.comments?.map((comment, index) =>                     
                      <Comments key={index} comment={comment} commentNoChange={setCommentNumber} />
                    )  
                  }
                </div>

              </div>
            }
            <AddComments commentAction={{ newComment, setNewComment }}/>
          </>
        )
      }
    </main>
  )
}

export default FeedbackDetails
