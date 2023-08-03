import React, { useRef, useState } from 'react';
import { FaStore } from 'react-icons/fa';
import { MdOutlineArticle, MdOutlineClose } from 'react-icons/md';

function MobileSearch({ dropSearchBox , setDropSearchBox }) { 
    const [suggest,setSuggest] = useState(false);
    const searchRef = useRef();
  return (
    <div className={dropSearchBox ? "w-[100vw] flex items-center flex-col justify-start md:w-[50vw] z-[70] h-screen bg-[#59ce90f8] fixed top-0 right-0 transition-all duration-700" : "w-[100vw] flex items-center flex-col justify-start md:w-[50vw] z-[70] h-screen bg-[#59ce90f8] fixed top-0 right-[-50rem] sm:right-[-60rem] md:right-[-70rem] transition-all duration-700"}>
        <div className='w-full flex justify-end text-4xl p-3' style={{borderBottom:'1px solid white'}}>
            <MdOutlineClose className='text-white' onClick={()=>{
                setDropSearchBox(false)
                setSuggest(false)
            }}/>
        </div>
        <div className='bg-white mt-5 rounded-sm w-[80%] h-fit flex justify-start items-center'>
            <input onChange={(e)=>{
                e.target.value === '' ? setSuggest(false) : setSuggest(true)
            }} type="search" ref={searchRef} className='p-2 font-[shabnambold] outline-none placeholder:text-sm border-0 w-full' name="" id="" placeholder='دنبال چی میگردی؟'/>
        </div>
        <div className='w-[80%] flex flex-col bg-white mt-5 px-1 py-3 gap-3 transition-allS' style={{boxShadow:'0px 0px 5px 1px #686868',opacity:suggest?1:0}}>
            <div className='w-full flex gap-1 items-center p-1 hover:text-white hover:bg-[#c2c2c2] text-[#686868]'>
                <span className='text-sm font-[shabnammedium]'>جستجو در محصولات</span>
                <FaStore className='text-xl'/>
            </div>
            <div className='w-full flex gap-1 p-1 hover:text-white hover:bg-[#c2c2c2] items-center text-[#686868]'>
                <span className='text-sm font-[shabnammedium]'>جستجو در مقالات</span>
                <MdOutlineArticle className='text-xl'/>
            </div>
        </div>
    </div>
  )
}

export default MobileSearch;