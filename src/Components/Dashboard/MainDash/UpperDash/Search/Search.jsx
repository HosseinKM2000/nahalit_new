import React from 'react';
import { PiMagnifyingGlassBold } from 'react-icons/pi'; 

function Search() {
  return (
    <div className='w-[30%] relative bg-[#fff] px-3 flex items-center h-[50%] gap-8 rounded-full overflow-hidden'>
          <div className='absolute w-20 h-20 bg-[#00B591] z-0 skew-x-[-25deg] right-[-2.5rem]' style={{boxShadow:'rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px'}}></div>
          <PiMagnifyingGlassBold className='font-bold text-lg text-white z-10'/>
          <input type="search" name="" id="" placeholder='جستجو...' className='bg-transparent font-bold text-stone-700 h-full outline-none w-[90%]'/>
    </div>
  )
}

export default Search;