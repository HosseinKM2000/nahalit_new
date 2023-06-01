import React from 'react';
import './Error.css';
import ErrGif from '../../assets/img/animation_640_licugqts.gif';

function Error() {
  return (
    <div className='w-full Error-container h-screen flex justify-center items-center flex-col'>
        <h1 className='m-0 p-0 text-[#1aaba9] font-bold text-2xl sm:text-4xl 2xl:text-8xl'>صحفه مورد نظر پیدا نشد!</h1>
        <img src={ErrGif} alt="404" className='w-[50%]'/>
    </div>
  )
}

export default Error;