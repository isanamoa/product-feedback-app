import React from 'react'

const TextFieldBox = ({ fieldName, fieldValue, fieldHandle }) => {
  return (
    <>
        <input type='text' 
            className='w-full outline-none bg-[#F7F8FD]  p-2
                    focus:border-[1px] focus:border-[#4661E6]'
            name={fieldName}
            value={fieldValue}
            onChange={fieldHandle}
        />
    </>
  )
}

export { TextFieldBox }
