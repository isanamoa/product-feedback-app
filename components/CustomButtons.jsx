import React from 'react'

const OptionButtons = ({ optBtnText, optBtnClick}) => {
  return (
    <button 
        className='mb-4 px-3 py-1 text-[13px] bg-[#F2F4FF] 
        text-[#4661E6] active:bg-blue-700 rounded-lg 
        active:text-white capitalize'
        onClick={optBtnClick}
    >
        {optBtnText}  
    </button>
  )
}

const AddButtons = ({ addBtnText, addBtnClick}) => {
  return (
    <button 
        className='px-3 py-1 bg-[#AD1FEA] rounded-md
        text-white hover:opacity-20 whitespace-nowrap'
        onClick={addBtnClick}
    >
        {addBtnText}  
    </button>
  )
}

const ReplyButton = ({ replyBtnText, replyBtnClick}) => {
  return (
    <button 
        className='text-blue-500 text-[13px] hover:underline whitespace-nowrap'
        onClick={replyBtnClick}
    >
        {replyBtnText}  
    </button>
  )
}

  const EditButtons = ({ editBtnText, editBtnClick}) => {
    return (
      <button 
          className='mx-2 px-2 py-1 bg-[#AD1FEA] 
          text-white hover:opacity-20 whitespace-nowrap'
          onClick={editBtnClick}
      >
          {editBtnText}  
      </button>
    )
  }

  const OtherButtons = ({ otherBtnText, otherBtnClick, otherBtnBgcolor}) => {
    return (
      <button 
          className={`mx-2 px-2 py-1 ${otherBtnBgcolor} 
          text-white hover:opacity-20 whitespace-nowrap`}
          onClick={otherBtnClick}
      >
          {otherBtnText}  
      </button>
    )
  }

export { OptionButtons, AddButtons, ReplyButton, EditButtons, OtherButtons }

