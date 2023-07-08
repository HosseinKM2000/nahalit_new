import React from 'react';
import { BiSolidBadgeDollar } from 'react-icons/bi';
import { MdOutlineDateRange } from 'react-icons/md';

function Orders({ currentItems  , setShowDetails }) {
  return (
    <div className='w-full flex flex-col p-10 gap-5'>
    <span className='w-full text-white font-bold'>تعداد سفارش ها ( {currentItems !== null ? currentItems.length : 'NaN'} )</span>
    <div className='w-full flex flex-col gap-3'>
      {
        currentItems.map((order,index) => (
          <div key={index} className='bg-[#ffffffb4] rounded-sm transition-all text-sm  hover:brightness-95 py-5 px-3 font-[shabnambold] flex items-center justify-between w-full'>
              <span className='bg-stone-400 p-2 rounded-md'>{index+1}</span>
              <span>{order.customer_name}</span>
              <span>{order.status}</span>
              <div className='flex items-center gap-1'>
               <span>{`${order.total_price}`}</span>
               <BiSolidBadgeDollar className='text-base'/>
              </div>
              <div className='flex items-center gap-1'>
               <span>1401/12/03</span>
               <MdOutlineDateRange className='text-base'/>
              </div>
              <button className='py-1 px-3 bg-[#46895d] text-white shadow-xl transition-all hover:brightness-110' onClick={()=>setShowDetails({status:true,value:order})}>بیشتر</button>
          </div>
        ))
      }
    </div>
    </div>
  )
}

export default Orders;