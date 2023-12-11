import React, { useEffect, useState } from 'react';
import ReplyComment from './ReplyComment';
import { ReplyButton } from './CustomButtons';
import Image from 'next/image';
import RepliedComment from './RepliedComment';

const Comments = ({ comment,  commentNoChange }) => {
    const [showReplyBox, setShowReplyBox] = useState(false);
  
    useEffect(() => {
        if (comment?.replies !== undefined) {
            commentNoChange(comment?.replies?.length)
        }
    }, [commentNoChange, comment?.replies]);
    

    return (
    <>
    <div className='w-full mb-6 flex flex-col gap-4'>
        <div className='flex items-center justify-between'>
            <div className='flex items-center gap-3'>
                <Image width={36} height={36} 
                    src={comment?.user?.image} 
                    alt='image' 
                    className='rounded-full'
                />
                <div className='flex flex-col'>
                    <span className='text-base'>{comment?.user?.name}</span>
                    <span className='text-[#647196] text-[13px]'>{comment?.user?.username}</span>
                </div>
            </div>
            <ReplyButton replyBtnText={'Reply'} replyBtnClick={()=>setShowReplyBox(prev => !prev)} />
        </div>

        <div>
            <p className='text-[13px] md:text-[15px] text-[#647196]'>
                {comment?.content}
            </p>
        </div>

        <ReplyComment showReplyBox={showReplyBox}/>

    </div>
    {
        comment?.replies?.map((reply, index) =>
            <RepliedComment key={index} reply={reply} />
        )
        
    }
    </>
  )
}

export default Comments
