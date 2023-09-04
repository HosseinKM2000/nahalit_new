import React, { useEffect, useState } from 'react';
import { CgCalendarDates } from 'react-icons/cg';
import { FaUsers } from 'react-icons/fa';
import { HiUserCircle } from 'react-icons/hi';
import { MdDeleteSweep, MdOutlineAlternateEmail } from 'react-icons/md';
import { TbAlphabetLatin, TbListDetails } from 'react-icons/tb';
import { useDispatch } from 'react-redux';
import { deleteUser } from '../../../../features/dashboard/action';
import UserDetails from './UserDetails/UserDetails';

function Users({ currentItems , setShowDetails }) {
  const [roleValue,setRoleValue] = useState('کاربر معمولی');
  const dispatch = useDispatch();
  
  useEffect(() => {
  },[])

  const userRemoval = (id) => {
    dispatch(deleteUser(id))
  }

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
            <div key={user.id} className={`w-[15rem] md:w-full flex flex-col md:flex-row gap-y-3 items-center bg-white hover:bg-[#f1f1f1] text-[#171e28] justify-between px-5 py-4 rounded-xl`} onClick={()=>setShowDetails(user)}>
              <HiUserCircle className='scale-[2.5]'/>
              <h1 className='text-lg font-[shabnambold]'>{user?.first_name} {user?.last_name}</h1>
              <span>userUser@gmail.com</span>
              <span className='font-[shabnam] text-sm'>{roleValue}</span>
              <span className='text-sm font-bold'>1401/05/26</span>
              {/* <div className='flex items-center gap-3'>
                <MdDeleteSweep className='scale-[1.5] hover:text-red-600 text-red-700 transition-all' onClick={()=>userRemoval(user.id)}/>
              </div> */}
            </div>
          ))
        }
      </div>
      </div>
  )
}

export default Users;