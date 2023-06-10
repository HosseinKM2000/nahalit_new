import React from 'react';
import './Error.css';
import { Link } from 'react-router-dom';
import ErrGif from '../../assets/img/animation_640_licugqts.gif';

function Error() {
  return (
    <div className='w-full Error-container h-screen flex justify-center items-center flex-col'>
        <h1 className='m-0 p-0 text-[#1aaba9] font-bold text-2xl sm:text-4xl 2xl:text-8xl'>صحفه مورد نظر پیدا نشد!</h1>
        <img src={ErrGif} alt="404" className='w-[40%]'/>
        <Link to={'/'}><button className='text-sm 2xl:text-5xl sm:text-lg text-[#22939F] 2xl:w-[40rem] 2xl:py-4 w-[100%] px-2 sm:w-[25rem] rounded-sm transition-all hover:bg-[#22939F] hover:text-white duration-500  font-bold py-1' style={{border:'solid 1px #22939F'}}>بازگشت به صفحه اصلی</button></Link>
    </div>
  )
}

export default Error;