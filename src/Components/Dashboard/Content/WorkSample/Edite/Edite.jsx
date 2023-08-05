import React, { useRef, useState } from 'react';
import { BiSolidChevronsRight } from 'react-icons/bi';
import { MdKeyboardArrowLeft } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { setScrollUp } from '../../../../../features/dashboard/dashboardSlice';
import Editor from '../../../../Editor/Editor';

function Edite({ details , setShowDetails }) {
 
    const [dropCate,setDropCate] = useState({status:false,value:null})
    const [childList,setChildList] = useState(false);
    const [childList_2,setChildList_2] = useState(false);
    const [desc,setDesc] = useState('');
    const [goalCate,setGoalCate] = useState(null);
    const [goalChild,setGoalChild] = useState(null);
    const dispatch = useDispatch();
    const categoryRef = useRef();
    const titleRef = useRef();
    const categories = useSelector(state => state.dashboard.categories);
    const cateList = categories !== null ? categories : [{title:'دسته بندی بار گیری نشده است!',category_id:null,}]
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
            category_id:categoryRef,
            description:desc,
        }
    }
    const liHandler = (value) => {
        setChildList(true);
        const item = categories.filter(cate => cate.category_id === null).find(cate => cate.title === value);
        setGoalCate(item)
    }
    const liHandler_2 = (id) => {
        setChildList_2(true);
        const item = categories.find(cate => cate.id === id);
        setGoalChild(item)
    }

  return (
    <div className='flex flex-col 2xl:w-[70%] w-full opacity-motion'>
            {/* toaster */}
             <ToastContainer 
              position='top-center'
              theme='colored'
              autoClose={2500}
              className='Toast_info'
              />
        <div className='w-full bg-[#C0D9DB] p-2'>
            <h1 className='font-semibold text-lg text-stone-800'>جزئیات</h1>
        </div>
        <form className='flex flex-col items-center bg-[#ffffff70] px-2 py-5 w-full gap-8 z-10 opacity-90' onKeyDown={(e)=>formKeyNotSuber(e)}>
            {/* title */}
            <div className='flex flex-col gap-2 w-full'>
                <label htmlFor="title" className='font-semibold text-[#2e424a]'>عنوان</label>
                <input type="text" className='p-1  outline-[#0ab694] w-full' ref={titleRef} required={true} name='title' defaultValue={details.title}/>
            </div>
           {/* describe */}
            <Editor setDesc={setDesc}/>
            {/* categories */}
            <div className='w-full flex flex-col sm:flex-row  justify-start items-start gap-3'>
                <div className='flex flex-col gap-3 justify-center items-start'>
                 <button type='button' onClick={()=>{
                    setDropCate({status:!dropCate.status,value:dropCate.value})
                    setChildList(false)
                    setChildList_2(false)
                 }} className='text-sm w-fit bg-yellow-600 py-1 px-2 border-2 border-[#BABCBE] hover:bg-yellow-500 transition-all rounded-md text-white font-bold'>دسته بندی ها</button>
                 {
                    dropCate.value !== null
                    ? <div className='bg-transparent p-2 w-fit rounded-sm font-bold text-white border-dashed border-white border-2'>{dropCate.value}</div>
                    :<span className='text-rose-600 font-bold'>دسته بندی انتخاب نشده!</span>
                 }
                </div>
                    <ul className='bg-white px-2 cate-scroll overflow-hidden max-h-[10rem] overflow-y-scroll transition-all duration-300 rounded-sm' style={{height:dropCate.status?'fit-content':'0px',padding:dropCate.status?'3px':'0px'}}>
                    {
                        cateList.filter(cate => cate.category_id === null).map((cate,i)=>(
                            <li key={i} className='cursor-pointer flex items-center gap-1 hover:text-purple-600 hover:font-bold transition-all'
                            onMouseEnter={(e)=>{
                                liHandler(cate.title)
                                setChildList_2(false)
                            }}
                            >
                                <span>{cate.title}</span>
                                <MdKeyboardArrowLeft/>
                            </li>
                        ))
                    }
                    </ul>
                {
                    goalCate !== null
                    ? 
                    <ul className='bg-white px-2 rounded-sm transition-all duration-300 cate-scroll overflow-hidden max-h-[10rem] overflow-y-scroll' style={{height:childList?'fit-content':'0px'}}>
                    {
                        categories.filter(cate => cate.category_id === goalCate.id).map((item,i)=>(
                            <li key={i} onMouseEnter={(e)=>{
                                liHandler_2(item.id)
                                setChildList_2(true)
                            }}  className='cursor-pointer hover:text-orange-600 hover:font-bold transition-all flex items-center gap-1'>
                                <span>{item.title}</span>
                                <MdKeyboardArrowLeft/>
                            </li>
                        ))
                    }
                    </ul>
                : <></>
                }
                {
                    goalChild !== null
                    ?
                    <ul className='bg-white px-2 rounded-sm transition-all duration-300 cate-scroll overflow-hidden max-h-[10rem] overflow-y-scroll' style={{height:childList_2?'fit-content':'0px'}}>
                    {
                        categories.filter(cate => cate.category_id === goalChild.id).map((item,i)=>(
                            <li key={i} onClick={(e)=>{
                                setDropCate({status:false,value:item.title})
                                setChildList(false)
                                setChildList_2(false)
                            }} className='cursor-pointer hover:text-lime-600 hover:font-bold transition-all'>{item.title}</li>
                        ))
                    }
                    </ul>
                    :
                    <></>
                }
            </div>
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
             <button type='button' className='w-[49%] bg-[#e5bc27] transition-all duration-300 hover:shadow-[0px_0px_5px_1px_rgba(0,0,0,0.2)] hover:bg-[#fdc702] text-white font-bold text-xl py-1 rounded-sm'>ویرایش</button>
             <button type='button' className='w-[49%] bg-[#29c3b9] transition-all duration-300 hover:shadow-[0px_0px_5px_1px_rgba(0,0,0,0.2)] hover:bg-[#00dfb2] text-white font-bold text-xl py-1 rounded-sm'>گالری</button>
             </div>
             <button type='button' className='2xl:w-[30%] w-[90%] md:w-[50%] bg-red-600 transition-all duration-300 hover:shadow-[0px_0px_5px_1px_rgba(0,0,0,0.2)] hover:bg-red-600 text-white font-bold text-xl py-1 rounded-sm justify-center flex items-center'>حذف</button>
             <button type='button' className='2xl:w-[30%] w-[90%] md:w-[50%] bg-[#ec9807] transition-all duration-300 hover:shadow-[0px_0px_5px_1px_rgba(0,0,0,0.2)] hover:bg-[#eea300] text-white font-bold text-xl py-1 rounded-sm justify-center flex items-center' onClick={()=>{
                setShowDetails({status:false,value:''});
                dispatch(setScrollUp())
             }}><BiSolidChevronsRight/></button>
           </div>
        </form>
    </div>
  )
}

export default Edite;