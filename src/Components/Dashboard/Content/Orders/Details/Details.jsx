import React from 'react';
import { MdCancel } from 'react-icons/md';

function Details({ details , setShowDetails }) {
  return (
    <div className='p-3 sm:p-10 w-full flex justify-center'>
        <div className='w-full 2xl:w-[70%] rounded-md bg-[#ffffff8f] flex flex-col gap-8 py-5 px-3'>
            <div className='pb-3 flex items-center justify-between' style={{borderBottom:'solid 1px black'}}>
                <h1 className='font-semibold text-xl text-stone-800'>جزئیات</h1>
                <MdCancel className='text-red-600 font-bold text-3xl transition-all hover:text-red-500' onClick={(e)=>setShowDetails({status:false,value:''})}/>
            </div>
            <div className='flex flex-col gap-2'>
                <span className='font-semibold text-[#2e424a]'>کاربر:</span>
                <span className='pr-5'>{ details.customer_name }</span>
            </div>
            <div className='flex flex-col gap-2'>
                <span className='font-semibold text-[#2e424a]'>وضعیت:</span>
                <span className='pr-5'>{ details.status }</span>
            </div>
            <div className='flex flex-col gap-2'>
                <span className='font-semibold text-[#2e424a]'>جمع کل:</span>
                <span className='pr-5'>{ details.total_price }</span>
            </div>
            <div className='flex flex-col gap-2'>
                <span className='font-semibold text-[#2e424a]'>تاریخ ثبت:</span>
                <span className='pr-5'>1400/05/14</span>
            </div>
            <div className='flex flex-col gap-2'>
                <span className='font-semibold text-[#2e424a]'>تاریخ آپدیت:</span>
                <span className='pr-5'>1401/02/05</span>
            </div>
            <div className='w-full flex items-center justify-center'>
            <button className='bg-red-600 text-white w-[60%] px-0 md:w-fit md:px-40 py-1 font-bold transition-all hover:bg-red-500 shadow-md'>حذف</button>
            </div>
        </div>
    </div>
  )
}

export default Details;