import React from 'react';
import { HiHome } from 'react-icons/hi';
import { Link } from 'react-router-dom';

function HomeButton() {
  return (
    <Link to={'/'} className='absolute top-2 right-2 md:top-5 md:right-5 2xl:text-5xl 2xl:right-10 2xl:top-10 md:text-3xl text-base text-white bg-slate-800 rounded-full p-2 transition-all duration-500 hover:bg-slate-700'  style={{boxShadow:'rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px'}}>
        <HiHome/>
    </Link>
  )
}

export default HomeButton;