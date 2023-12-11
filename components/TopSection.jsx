import React from 'react';
import { OptionButtons } from './CustomButtons';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const TopSection = ({ suggestMenu }) => {
    const { roadmaps, filterSuggestionByCatergory } = suggestMenu;
    const [menuState, setMenuState] = useState(false);

    return (
        <header className='relative w-full h-full lg:w-1/4 
            flex flex-col md:flex-row md:pt-3 md:px-3 lg:p-0 
            lg:flex-col gap-4 items-center justify-start shadow-lg'
        >
            
            <div className='fixed w-full md:w-[32%] lg:w-full 
                h-[72px] md:h-[162px] z-50 md:static 
                flex items-center md:items-end justify-between 
                bg-gradient-to-tr from-[#28A7ED] via-[#A337F6] to-[#E84D70]
                text-white px-3 md:pb-6  md:rounded-md'
            >
                <div>
                    <h1 className='text-[15px] font-bold'>Frontend Mentor</h1>
                    <span className='block text-[13px] opacity: 0.75'>Feedback Board</span>
                </div>
                
                {   
                    menuState ?
                    <button type='button' 
                        className='block md:hidden'
                        onClick={()=>setMenuState(prev => !prev)}
                    >
                        <Image src={'/assets/shared/mobile/icon-close.svg'} 
                            width={24} height={24} alt='icon-close'
                        />
                    </button> 
                    :
                    <button type='button' 
                        className='block md:hidden'
                        onClick={()=>setMenuState(prev => !prev)}
                    >
                        <Image src={'/assets/shared/mobile/icon-hamburger.svg'} 
                            width={24} height={24} alt='icon-hamburger'
                        />
                    </button>
                }
            </div>

            <div className={`absolute w-5/6 md:w-[66%] min-h-screen md:min-h-min lg:w-full z-30 
                top-[72px] bottom-0 py-5 px-4 md:p-0 md:top-0 right-0 md:static bg-white
                ${menuState ? 'flex' : 'hidden'} flex-col md:flex md:flex-row lg:flex-col gap-3
                `}
            >
                
                <div className='w-full px-2 md:h-[162px] py-3 inline-flex flex-wrap gap-x-3 bg-white shadow-xl rounded-md'>
                    <OptionButtons 
                        optBtnText={'all'} 
                        optBtnClick={() => filterSuggestionByCatergory('all')}
                    />
                    <OptionButtons 
                        optBtnText={'ui'} 
                        optBtnClick={() => filterSuggestionByCatergory('ui')}
                    />
                    <OptionButtons 
                        optBtnText={'ux'} 
                        optBtnClick={() => filterSuggestionByCatergory('ux')}
                    />
                    <OptionButtons 
                        optBtnText={'enhancement'} 
                        optBtnClick={() => filterSuggestionByCatergory('enhancement')}
                    />
                    <OptionButtons 
                        optBtnText={'bug'} 
                        optBtnClick={() => filterSuggestionByCatergory('bug')}
                    />
                    <OptionButtons 
                        optBtnText={'feature'} 
                        optBtnClick={() => filterSuggestionByCatergory('feature')}
                    />    
                </div>
                
                <div className='w-full md:h-[162px] px-4 py-3 bg-white flex flex-col gap-2 items-center justify-between shadow-xl rounded-md'>
                    <div className='w-full h-full flex items-center justify-between'>
                        <span>Roadmap</span> 
                        <Link href={`/roadmap`}
                            className='flex items-center gap-1 text-sm
                            md:px-3 py-2 text-blue-500 underline rounded-md hover:opacity-50'
                        >
                            <span className='whitespace-nowrap'>View</span>
                        </Link> 
                    </div>
                    <div className='w-full h-full flex flex-col items-center justify-between gap-3'>
                        <ul className='w-full inline-flex items-center justify-between px-4'>
                            <li className='list-disc marker:text-[#F49F85]'>Planned</li>
                            <li>{roadmaps?.filter(value => value.status === 'planned').length}</li>
                        </ul>
                        <ul className='w-full inline-flex items-center justify-between px-4'>
                            <li className='list-disc marker:text-[#AD1FEA]'>In-Progress</li>
                            <li>{roadmaps?.filter(value => value.status === 'in-progress').length}</li>
                        </ul>
                        <ul className='w-full inline-flex items-center justify-between px-4'>
                            <li className='list-disc marker:text-[#62BCFA]'>Live</li>
                            <li>{roadmaps?.filter(value => value.status === 'live').length}</li>
                        </ul>
                    </div>
                </div>
            </div>

        </header>
    )
}

export default TopSection
