import React, { useEffect, useState } from 'react';
import { CgCalendarDates } from 'react-icons/cg';
import { FaUsers } from 'react-icons/fa';
import { HiUserCircle } from 'react-icons/hi';
import { MdDeleteSweep, MdOutlineAlternateEmail } from 'react-icons/md';
import { TbAlphabetLatin, TbListDetails } from 'react-icons/tb';

function Users({ currentItems }) {
  const [roleValue,setRoleValue] = useState('کاربر معمولی')
  useEffect(() => {
  },[])
  
  return (
    <div className='w-full p-10 flex items-center 2xl:w-[70%] flex-col gap-5'>
      <span className='w-full text-white font-bold'>تعداد کاربر ها ( {currentItems !== null ? currentItems.length : 'NaN'} )</span>
      <div className='hidden md:flex bg-[#ffffff69] w-full p-5 text-white text-2xl justify-between'>
        <FaUsers/>
        <TbAlphabetLatin/>
        <MdOutlineAlternateEmail/>
        <CgCalendarDates/>
        <TbListDetails/>
      </div>
      <div className='flex flex-col gap-5 items-center w-full'>
        {
          currentItems.map((user,index) => (
            <div className={`w-[15rem] md:w-full flex flex-col md:flex-row gap-y-3 items-center bg-white text-[#171e28] justify-between px-5 py-4 rounded-xl`}>
              <HiUserCircle className='scale-[2.5]'/>
              <h1 className='text-xl font-[shabnambold]'>کاربر {user}</h1>
              <span>userUser@gmail.com</span>
              <input type='text'  defaultValue={roleValue} className='text-sm font-bold text-black w-fit outline-slate-300 p-1 bg-slate-200'/>
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