import React from 'react';
import { PiMagnifyingGlassBold } from 'react-icons/pi'; 

function Search() {
  return (
    <div className='lg:w-[30%] w-[50%] sm:w-[35%] h-[50%] 2xl:w-[20%] 2xl:h-[30%] lg:h-[50%] relative bg-[#fff] px-3 flex items-center gap-8 rounded-sm overflow-hidden'>
          <input type="search" name="" id="" placeholder='جستجو...' className='bg-transparent text-sm placeholder:text-xs font-bold text-stone-700 h-full outline-none w-[90%]'/>
          <div className='absolute w-20 h-20 bg-[#00B591] z-0 skew-x-[-25deg] left-[-2.5rem]' style={{boxShadow:'rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px'}}></div>
          <PiMagnifyingGlassBold className='font-bold text-lg text-white z-10'/>
    </div>
  )
}

export default Search;