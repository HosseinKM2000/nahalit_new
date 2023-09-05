import React, { useRef, useState } from 'react';
import { BiSolidChevronsRight } from 'react-icons/bi';
import { useDispatch } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { setScrollUp } from '../../../../../features/dashboard/dashboardSlice';
import CategoriesBox from '../../../../CategoriesBox/CategoriesBox';
import Editor from '../../../../Editor/Editor';

function Edit({ details , setShowDetails }) {
 
    const [dropCate,setDropCate] = useState({status:false,value:null})
    const [desc,setDesc] = useState('');
    const dispatch = useDispatch();
    const titleRef = useRef();
    
    const formKeyNotSubmit = (e) => {
        if(e.key === 'Enter' && e.target.type !== 'textarea' | e.target.type.button)
        {
            e.preventDefault();
            e.stopPropagation()
        }
    }
    const formSubmitter = (e) => {
        e.preventDefault()
        const formData = {
            title:titleRef.current.value,
            category_id:dropCate.value,
            description:desc,
        }
    }

  return (
    <div className='flex flex-col 2xl:w-[70%] w-full opacity-motion'>
        <div className='w-full bg-[#C0D9DB] p-2'>
            <h1 className='font-semibold text-lg text-stone-800'>جزئیات</h1>
        </div>
        <form className='flex flex-col items-center bg-[#ffffff70] px-2 py-5 w-full gap-8 z-10 opacity-90' onKeyDown={(e)=>formKeyNotSubmit(e)}>
            {/* title */}
            <div className='flex flex-col gap-2 w-full'>
                <label htmlFor="title" className='font-semibold text-[#2e424a]'>عنوان</label>
                <input type="text" className='p-1  outline-[#0ab694] w-full' ref={titleRef} required={true} name='title' defaultValue={details.title}/>
            </div>
           {/* describe */}
            <Editor setDesc={setDesc}/>
            {/* categories */}
            <CategoriesBox dropCate={dropCate} setDropCate={setDropCate}/>
            {/* user */}
            <div className='w-full flex items-center gap-3 mt-5'>
             <label htmlFor="create" className='font-semibold text-[#2e424a]'>مدیر:</label>
             <span>{details.manager}</span>
            </div>
            {/* create */}
            <div className='w-full flex items-center gap-3'>
             <label htmlFor="create" className='font-semibold text-[#2e424a]'>تاریخ ایجاد:</label>
             <span>{details.start_date}</span>
            </div>
            {/* update */}
            <div className='w-full flex items-center gap-3'>
             <label htmlFor="update" className='font-semibold text-[#2e424a]'>تاریخ بروزرسانی:</label>
             <span>{details.start_date}</span>
            </div>
           <div className='flex w-full flex-col items-center mt-5 gap-3'>
             <div className='flex items-center 2xl:w-[30%] w-[90%] md:w-[50%] justify-between'>
             <button type='button' className='w-[49%] bg-[#e5bc27] transition-all duration-300 hover:shadow-[0px_0px_5px_1px_rgba(0,0,0,0.2)] hover:bg-[#fdc702] text-white font-bold text-lg py-1 rounded-sm'>ویرایش</button>
             <button type='button' className='w-[49%] bg-[#29c3b9] transition-all duration-300 hover:shadow-[0px_0px_5px_1px_rgba(0,0,0,0.2)] hover:bg-[#00dfb2] text-white font-bold text-lg py-1 rounded-sm'>گالری</button>
             </div>
             <button type='button' className='2xl:w-[30%] w-[90%] md:w-[50%] bg-red-600 transition-all duration-300 hover:shadow-[0px_0px_5px_1px_rgba(0,0,0,0.2)] hover:bg-red-600 text-white font-bold text-lg py-1 rounded-sm justify-center flex items-center'>حذف</button>
             <button type='button' className='2xl:w-[30%] w-[90%] md:w-[50%] bg-[#ec9807] transition-all duration-300 hover:shadow-[0px_0px_5px_1px_rgba(0,0,0,0.2)] hover:bg-[#eea300] text-white font-bold text-lg py-1 rounded-sm justify-center flex items-center' onClick={()=>{
                setShowDetails({status:false,value:''});
                dispatch(setScrollUp())
             }}><BiSolidChevronsRight/></button>
           </div>
        </form>
    </div>
  )
}

export default Edit;