import React, { useState } from 'react'
import Image from 'next/image'
import ReplyComment from './ReplyComment';
import { ReplyButton } from './CustomButtons';

const RepliedComment = ({ reply }) => {
    const [showReplyBox, setShowReplyBox] = useState(false);

  return (
    <div className='w-full pl-5 md:pl-10 mb-5 flex flex-col gap-3'>
        <div className='flex items-center justify-between'>
            <div className='flex items-center gap-3'>
                <Image width={36} height={36} 
                    src={reply?.user?.image} 
                    alt='image' 
                    className='rounded-full'
                />                
                <div className='flex flex-col'>
                    <span className='text-base'>{reply?.user?.name}</span>
                    <span className='text-[#647196] text-[13px]'>{reply?.user?.username}</span>
                </div>
            </div>
            <ReplyButton replyBtnText={'Reply'} replyBtnClick={()=>setShowReplyBox(prev => !prev)} />
        </div>
        <div>
            <p className='text-[13px] md:text-[15px] text-[#647196]'>
                <span className='text-[#AD1FEA]'>@{reply?.replyingTo}</span>
                {`  ${reply?.content}`}  
            </p>
        </div>
        <ReplyComment showReplyBox={showReplyBox}/>
    </div>
  )
}

export default RepliedComment
