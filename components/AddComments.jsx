import React from 'react';
import { AddButtons } from './CustomButtons';

const AddComments = ({ commentAction }) => {
  const { newComment, setNewComment } = commentAction;
  console.log(newComment);

  const handleCommentChange = (e) => {
    e.preventDefault();
    if (newComment.length < 250) 
    setNewComment(e.target.value);
  }

  return (
    <div  className='w-full p-3 bg-white shadow-xl rounded-xl text-[13px] md:text-base'>
        <h3 className='text-[18px] text-[#3A4374] mb-2 font-bold'>Add Comment</h3>  
        <div className='w-full flex flex-col gap-3'>
            <textarea name='newComment' type='textarea' rows={3} 
                placeholder={'Type your comment here'}
                value={newComment}
                onChange={handleCommentChange}
                className='bg-[#F7F8F2] rounded-md p-2 focus:outline-[#4661E6]'
            />
            <div className='flex items-center justify-between'>
                <span>{250 - newComment.length} characters left</span>
                <AddButtons 
                  addBtnText={'Post Comment'} 
                  addBtnClick={()=>{}}
                />
            </div>
        </div> 
    </div>
  )
}

export default AddComments
