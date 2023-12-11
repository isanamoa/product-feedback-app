import React, { useState } from 'react'

const CustomSelects = ({ optionData }) => {
    const [filterMode, setFilterMode] = useState(false);
    const [filterValue, setFilterValue] = useState(optionData?.[0]);
    
    const clickHandle = () => {
        setFilterMode(prev => !prev);
    }

  return (
    <div className='relative w-full'>
        <button 
            className='bg-[#F7F8FD] w-full text-left px-4 py-2 
                focus:border-[1px] focus:border-[#4661E6] 
                flex items-center justify-between' 
            onClick={clickHandle}
        >
            <span>{filterValue}</span>
            <span className={`${filterMode ? 'rotate-90' : '-rotate-90'} text-sm`}>{'<'}</span>
        </button>
        <div  className={`${filterMode ? 'absolute z-10 mt-1 p-1 w-full bg-[#F7F8FD]' : 'hidden absolute mt-2 p-2 w-full'}`}>
            {
                optionData.map((item, index) =>(
                    <button key={index} type="button" 
                        onClick={()=>{ setFilterValue(item); setFilterMode(prev => !prev);}} 
                        className="block w-full py-1 px-2 hover:bg-orange-400 text-left"
                    >
                        {item} 
                    </button>
                ))
            }
            
        </div>
    </div>
  )
}

const CustomSelectsTwo = ({ optionData, btnCSS,panCSS }) => {
    const [filterMode, setFilterMode] = useState(false);
    const [filterValue, setFilterValue] = useState(optionData?.[0]);
    
    const clickHandle = () => {
        setFilterMode(prev => !prev);
    } 

  return (
    <div className='relative z-10 w-full'>
        <button 
            className={btnCSS} 
            onClick={clickHandle}
        >
            <span>{filterValue}</span>
            <span className={`${filterMode ? '-rotate-90' : 'rotate-90'} text-sm`}>{'<'}</span>
        </button>
        <div  className={`${filterMode ? 'absolute z-50' + panCSS : 'hidden'}`}>
            {
                optionData.map((item, index) =>(
                    <button key={index} type="button" 
                        onClick={()=>{ setFilterValue(item); setFilterMode(prev => !prev);}} 
                        className="block w-full py-1 px-2 hover:bg-orange-400 text-left"
                    >
                        {item} 
                    </button>
                ))
            }
            
        </div>
    </div>
  )
}

export  { CustomSelects, CustomSelectsTwo }
