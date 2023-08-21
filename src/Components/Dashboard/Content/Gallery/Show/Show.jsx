import React, { useState } from 'react';
import { RiDeleteBack2Fill, RiDeleteBin2Fill } from 'react-icons/ri';

function Show({ array , setShow }) {
    const [hover,setHover] = useState({status:false,key:''});
  return ( 
        <div className='flex w-full flex-col gap-5 items-center 2xl:gap-10'>
            <div className='flex w-full 2xl:w-[80%] items-center justify-between bg-[#ffffff1a] rounded-sm p-1'>
             <RiDeleteBack2Fill onClick={()=>setShow({status:false,value:''})} className='text-[#ff4000] text-3xl rotate-[180deg] transition-all hover:text-red-600'/>
            </div>
            <div className='w-full flex items-center justify-center gap-6 flex-wrap'>
            {
                array.map((item,index) => (
                    <div key={index} onMouseEnter={()=>setHover({status:true,key:index})} onMouseOut={()=>setHover({status:false,key:''})} className='w-[13rem] h-[13rem] flex items-end' style={{backgroundImage:`url(${item.imageUrl})`,backgroundColor:`#${item.colorCode}`}}>
                        {
                            hover.status && hover.key === index
                            ?
                            <div onMouseEnter={()=>setHover({status:true,key:index})} onMouseOut={()=>setHover({status:true,key:index})} className='w-full cursor-default  flex justify-between items-center p-2 bg-[#64748bb5] font-[shabnamBold]'>
                            <span className='cursor-default line-clamp-1 text-sm'>{item.title}</span>
                            <div className='flex items-center'>
                                <RiDeleteBin2Fill className='text-red-600 transition-all hover:text-red-500'/>
                            </div>
                            </div>
                            :
                            <></>
                        }
                    </div>
                ))
            }
        </div>
        </div>
  )
}

export default Show;