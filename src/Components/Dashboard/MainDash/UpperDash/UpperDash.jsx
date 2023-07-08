import React from 'react';
import Buttons from './Buttons/Buttons';
import Search from './Search/Search';

function UpperDash() {
  return (
    <div className='w-full h-[10%] bg-[#242e3b] border_b_g z-10'>
      <div className='w-full flex items-center px-5 h-full justify-between'>
        <Buttons/>
        <Search/>
      </div>
    </div>
  )
}

export default UpperDash;