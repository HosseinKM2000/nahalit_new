import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteSeller } from '../../../../features/dashboard/action';

function Sellers({ currentItems , users }) {
  const [deleteIcon,setDeleteIcon] = useState("")
  const dispatch = useDispatch();

  return (
    <div className='w-full flex flex-col items-center h-full p-3 md:p-10'>
        <span className='w-full text-white font-bold text-right'> فروشنده ها ( {currentItems !== null ? currentItems?.length : 'NaN'} )</span>
            <div className='w-fit py-5 flex md:flex-row flex-wrap justify-center md:justify-start flex-col items-center gap-5'>
                {
                    currentItems.map((seller,index) => (
                        <div key={index} className='w-fit relative rounded-sm bg-white p-3 flex flex-col items-start gap-3' onMouseEnter={()=>setDeleteIcon(seller.id)} onMouseLeave={()=>setDeleteIcon("")}>
                            <span className='font-[shabnamBold]'>{users.find(user => user.id === seller.user_id)?.first_name}</span>
                            <span className='font-[shabnamBold]'>{users.find(user => user.id === seller.user_id)?.last_name}</span>
                            <div className='flex items-center gap-1'>
                              <span className='font-[shabnamBold]'>کد ملی:</span>
                              <span className='font-[shabnamBold]'>{seller?.code_meli}</span>
                            </div>
                            <div className='flex items-center gap-1'>
                              <span className='font-[shabnamBold]'>شماره کارت:</span>
                              <span className='font-[shabnamBold]'>{seller?.card_number}</span>
                            </div>
                            <span className='absolute left-1 top-1 cursor-pointer hover:brightness-200' style={{visibility: deleteIcon === seller.id ? "visible" : "hidden" }} onClick={()=>dispatch(deleteSeller(seller.id))}>&#10060;</span>
                        </div>
                    ))
                }
            </div>
    </div>
  )
}

export default Sellers;