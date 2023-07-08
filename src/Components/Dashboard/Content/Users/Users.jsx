import React , { useState , useEffect } from 'react';
import { FaUsers } from 'react-icons/fa';
import { TbAlphabetLatin } from 'react-icons/tb';
import { MdOutlineAlternateEmail , MdDeleteSweep } from 'react-icons/md';
import { CgCalendarDates } from 'react-icons/cg';
import { TbListDetails } from 'react-icons/tb';
import { HiUserCircle } from 'react-icons/hi';
import { BiSolidMessageSquareEdit } from 'react-icons/bi';

function Users({ currentItems }) {

  useEffect(() => {
  },[])
  
  return (
    <div className='w-full p-10 flex flex-col gap-5'>
      <span className='w-full text-white font-bold'>تعداد کاربر ها ( {currentItems !== null ? currentItems.length : 'NaN'} )</span>
      <div className='flex items-center bg-[#ffffff69] w-full p-5 text-white text-2xl justify-between'>
        <FaUsers/>
        <TbAlphabetLatin/>
        <MdOutlineAlternateEmail/>
        <CgCalendarDates/>
        <TbListDetails/>
      </div>
      <div className='flex flex-col gap-5'>
        {
          currentItems.map((user,index) => (
            <div className={`w-full flex items-center bg-white text-[#171e28] justify-between px-5 py-4 rounded-xl`}>
              <HiUserCircle className='scale-[2.5]'/>
              <h1 className='text-xl font-[shabnambold]'>کاربر {user}</h1>
              <span>userUser@gmail.com</span>
              <span className='text-sm font-bold'>کاربر معمولی</span>
              <span className='text-sm font-bold'>1401/05/26</span>
              <div className='flex items-center gap-3'>
                <MdDeleteSweep className='scale-[1.5] hover:text-red-600 text-red-700 transition-all'/>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Users;