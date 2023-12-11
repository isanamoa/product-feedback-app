import React from 'react';
import { AddButtons } from './CustomButtons';

const RepliedCommentReply = ({ showReplyBox}) => {
    return (
      <div className={`w-full ${showReplyBox? 'flex' : 'hidden' } flex-col justify-start items-start md:flex-row  md:items-center gap-6`}>
        <textarea type='textarea' rows={3} 
            defaultValue={'Type your comment here'}
            className='w-full md:w-4/5 bg-[#F7F8F2] rounded-md p-2'
        />
        <AddButtons addBtnText={'Post Reply'} />
    </div> 
  )
}

export default RepliedCommentReply
