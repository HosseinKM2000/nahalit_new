import React, { useRef, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import CategoriesBox from '../../../../CategoriesBox/CategoriesBox';
import Editor from '../../../../Editor/Editor';

function New() {

    const [dropCate,setDropCate] = useState({status:false,value:null})
    const [desc,setDesc] = useState('');
    const titleRef = useRef();
    const managerRef = useRef();
    const formKeyNotSuber = (e) => {
        if(e.key === 'Enter' && e.target.type !== 'textarea' | e.target.type.button)
        {
            e.preventDefault();
            e.stopPropagation()
        }
    }
    const formSubmiter = (e) => {
        e.preventDefault()
        const formData = {
            title:titleRef.current.value,
            category_id:dropCate.value,
            description:desc,
        }
    }

  return (
    <div className='flex flex-col w-full 2xl:w-[70%] opacity-motion'>
            {/* toaster */}
             <ToastContainer 
              position='top-center'
              theme='colored'
              autoClose={2500}
              className='Toast_info'
              />
        <div className='w-full bg-[#C0D9DB] p-2'>
            <h1 className='font-semibold text-lg text-stone-800'>افزودن نمونه کار</h1>
        </div>
        <form className='flex flex-col items-center bg-[#ffffff70] px-2 py-5 w-full gap-8 z-10 opacity-90' onKeyDown={(e)=>formKeyNotSuber(e)}>
            {/* title */}
            <div className='flex flex-col gap-2 w-full'>
                <label htmlFor="title" className='font-semibold text-[#2e424a]'>عنوان</label>
                <input type="text" className='p-1  outline-[#0ab694] w-full' ref={titleRef} required={true} name='title'/>
            </div>
            {/* manager */}
            <div className='flex flex-col gap-2 w-full'>
                <label htmlFor="manager" className='font-semibold text-[#2e424a]'>مدیر</label>
                <input type="text" className='p-1  outline-[#0ab694] w-full' ref={managerRef} required={true} name='manager'/>
            </div>
           {/* describe */}
           <Editor setDesc={setDesc}/>
            {/* categories */}
            <CategoriesBox dropCate={dropCate} setDropCate={setDropCate}/>
            <button type='submit' className='w-[50%] 2xl:w-[30%] mt-5 bg-[#01d5ab] transition-all duration-300 hover:shadow-[0px_0px_5px_1px_rgba(0,0,0,0.2)] hover:bg-[#00dfb2] text-white font-bold text-xl py-1 rounded-sm'>ثبت</button>
        </form>
    </div>
  )
}

export default New;


