import React, { useEffect } from 'react';
import { MdCancel } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { getRoles } from '../../../../../features/dashboard/action';

function UserDetails({ setShowDetails , showDetails }) {
    const roles = useSelector(state => state.dashboard.roles);
    const userRole = roles.find(role => role.id === showDetails.id)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getRoles())
    },[])

  return (
    <div className='p-3 sm:p-10 w-full flex justify-center'>
    <div className='w-full 2xl:w-[70%] rounded-md bg-[#ffffff8f] flex flex-col gap-8 py-5 px-3'>
        <div className='pb-3 flex items-center justify-between' style={{borderBottom:'solid 1px black'}}>
            <h1 className='font-semibold text-xl text-stone-800'>جزئیات</h1>
            <MdCancel className='text-red-600 font-bold text-3xl transition-all hover:text-red-500' onClick={(e)=>setShowDetails("")}/>
        </div>
        <div className='flex flex-col gap-2'>
            <span className='font-semibold text-[#2e424a]'>نام:</span>
            <span className='pr-5'>{ showDetails.first_name }</span>
        </div>
        <div className='flex flex-col gap-2'>
            <span className='font-semibold text-[#2e424a]'>نام خانوادگی:</span>
            <span className='pr-5'>{ showDetails.last_name }</span>
        </div>
        <div className='flex flex-col gap-2'>
            <span className='font-semibold text-[#2e424a]'>نام کاربری:</span>
            <span className='pr-5'>{ showDetails.username }</span>
        </div>
        <div className='flex flex-col gap-2'>
            <span className='font-semibold text-[#2e424a]'>شماره موبایل:</span>
            <span className='pr-5'>{ showDetails.mobile }</span>
        </div>
        <div className='flex flex-col gap-2'>
            <span className='font-semibold text-[#2e424a]'>ایمیل:</span>
            <span className='pr-5'>{ showDetails.email }</span>
        </div>
        <div className='flex flex-col gap-2'>
            <span className='font-semibold text-[#2e424a]'>تاریخ ورود:</span>
            <span className='pr-5'>1400/05/14</span>
        </div>
        <div className='flex gap-2'>
            <span className='font-semibold text-[#2e424a]'>نقش :</span>
            {/* <select name="roles" value={userRole.title} onChange={}>
                {
                    roles?.map(role => (
                        <option value={role.title}>{role.title}</option>
                    ))
                }
            </select> */}
            <span>{showDetails.mobile}</span>
        </div>
    </div>
</div>
  )
}

export default UserDetails;