import React, { useRef, useState } from 'react';
import { MdCancel } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import loadingSvg from '../../../../../assets/img/Rolling-0.8s-200px.svg';
import { deleteBlog, editBlog } from '../../../../../features/dashboard/action';
import { setSwitch } from '../../../../../features/dashboard/dashboardSlice';
import Editor from '../../../../Editor/Editor';

function EditeArticle() {
    const [imageName,setImageName] = useState('');
    const [desc,setDesc] = useState('');
    const titleRef = useRef();
    const situationRef = useRef();
    const dispatch = useDispatch();
    const loading = useSelector(state => state.dashboard.blogsLoading);
    const deleteLoading = useSelector(state => state.dashboard.blogsDeleteLoading);
    const mobile = window.innerWidth > 425 ? true : false;
    const articleId = useSelector(state => state.dashboard.articleId);
    const articles = useSelector(state => state.dashboard.blogs) || [{title:'',url:'',id:''}]
    const goalArticle = articles.find((item) => item.id === articleId) ||  {title:'',url:'',id:''}

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
            image:imageName,
            body:desc,
            is_active:situationRef,
            user_id:''
        }
        switch(true)
        {
            case formData.title === '' : toast.warn("عنوان را وارد کنید");
            break;
            case formData.title.length < 3 : toast.warn("عنوان کوتاه است");
            break;
            case formData.image === '' : toast.warn("تصویر را وارد کنید");
            break;
            case formData.body === '' : toast.warn("توضیحات را وارد کنید");
            break;
            default : EditArticle(formData)
        }
    }

    const EditArticle = (dataObj) => {
        dispatch(editBlog({id:goalArticle.id,dataObj}))
    }

    const articleDelete = (e) => {
        e.preventDefault();
        dispatch(deleteBlog(goalArticle.id))
    }

  return (
    
    <div className='flex flex-col w-[93%] sm:w-full opacity-motion 2xl:w-[70%]'>
        {/* toaster */}
        <ToastContainer 
        position='top-center'
        theme='colored'
        autoClose={2500}
        className='Toast_info'
        />
        <div className='w-full bg-[#C0D9DB] p-2 flex items-center justify-between'>
            <h1 className='font-semibold text-lg text-stone-800'>ویرایش مقاله</h1>
            <MdCancel className='text-red-600 font-bold text-3xl transition-all hover:text-red-500' onClick={(e)=>dispatch(setSwitch({key:'articles',value:'all',id:null}))}/>
        </div>
        <form className='flex flex-col items-center bg-[#ffffff70] px-2 py-5 w-full gap-8 z-10 opacity-90' onKeyDown={(e)=>formKeyNotSuber(e)}>
           {/* title */}
            <div className='flex flex-col gap-2 w-full'>
                <label htmlFor="title" className='font-semibold text-[#2e424a]'>عنوان</label>
                <input type="text" defaultValue={goalArticle.title} className='p-1  outline-[#0ab694] w-full' ref={titleRef} required={true} name='title'/>
            </div>
            {/* image */}
            <div className='flex flex-col gap-2 w-full'>
                <label htmlFor="poster" className='font-semibold text-[#2e424a]'>تصویر پوستر</label>
                <input onChange={(e)=>setImageName(e.target.files[0].name)}  type="file" className='p-1 outline-[#0ab694] w-full text-left' required={true} name='poster'/>
            </div>
            {/* describe */}
            <Editor setDesc={setDesc}/>
            {/* situation */}
            <div className='w-full flex justify-start'>
            <div className="w-fit flex flex-col gap-2">
                    <label htmlFor="published" className='font-semibold text-[#2e424a]'>وضعیت مقاله</label>
                    <select  name="published" id="" className="outline-none" ref={situationRef}>
                        {
                            goalArticle.is_active === 1
                            ?
                            <>
                                <option value={true}>روشن</option>
                                <option value={false}>خاموش</option>
                            </>
                            :
                            <>
                                <option value={false}>خاموش</option>
                                <option value={true}>روشن</option>
                            </>
                        }
                    </select>
                </div>
            </div>
            <div className='flex flex-col w-full items-center mt-3 gap-2'>
                <button type='button' onClick={(e)=>formSubmiter(e)}  className='w-[50%] 2xl:w-[30%] bg-[#01d5ab] transition-all duration-300 hover:shadow-[0px_0px_5px_1px_rgba(0,0,0,0.2)] hover:bg-[#00dfb2] text-white font-bold text-lg py-1 rounded-sm'>
                    {
                        loading
                        ?<img src={loadingSvg} alt="loading" className='w-[1.5rem] mx-auto'/>
                        :<span>ویرایش</span>
                    }
                </button>
                <button type='button' onClick={(e)=>articleDelete(e)}  className='w-[50%] 2xl:w-[30%] bg-[#d91e0a] transition-all duration-300 hover:shadow-[0px_0px_5px_1px_rgba(0,0,0,0.2)] hover:bg-[#fb250d] text-white font-bold text-lg py-1 rounded-sm'>
                    {
                        deleteLoading
                        ?<img src={loadingSvg} alt="loading" className='w-[1.5rem] mx-auto'/>
                        :<span>حذف</span>
                    }
                </button>
            </div>
        </form>
    </div>
  )
}

export default EditeArticle