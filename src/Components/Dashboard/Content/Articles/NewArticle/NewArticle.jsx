import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import loadingSvg from '../../../../../assets/img/Rolling-0.8s-200px.svg';
import { addBlog } from '../../../../../features/dashboard/action';
import Editor from '../../../../Editor/Editor';

function NewArticle() {

    const [imageName,setimageName] = useState('');
    const [desc,setDesc] = useState('');
    const titleRef = useRef();
    const situationRef = useRef();
    const dispatch = useDispatch();
    const loading = useSelector(state => state.dashboard.blogsLoading);
    const mobile = window.innerWidth > 425 ? true : false;

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
            title: titleRef.current.value,
            image: imageName,
            body: desc,
            is_active: JSON.parse(situationRef.current.value),
            user_id: JSON.parse(localStorage.getItem('user')).id,
        }
        switch(true)
        {
            case formData.title === '' : toast.warn("عنوان را وارد کنید");
            break;
            case formData.title.length < 3 : toast.warn("عنوان کوتاه است");
            break;
            case formData.image === '' : toast.warn("تصویر را وارد کنید");
            break;
            case formData.body === '' : toast.warn("توصیحات را وارد کنید");
            break;
            default : submitArticle(formData)
        }
    }

    const submitArticle = (dataObj) => {
        console.log(dataObj)
        dispatch(addBlog(dataObj))
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
        <div className='w-full bg-[#C0D9DB] p-2'>
            <h1 className='font-semibold text-lg text-stone-800'>مقاله جدید</h1>
        </div>
        <form className='flex flex-col items-center bg-[#ffffff70] px-2 py-5 w-full gap-8 z-10 opacity-90' onKeyDown={(e)=>formKeyNotSuber(e)}>
           {/* title */}
            <div className='flex flex-col gap-2 w-full'>
                <label htmlFor="title" className='font-semibold text-[#2e424a]'>عنوان</label>
                <input type="text" className='p-1  outline-[#0ab694] w-full' ref={titleRef} required={true} name='title'/>
            </div>
            {/* image */}
            <div className='flex flex-col gap-2 w-full'>
                <label htmlFor="poster" className='font-semibold text-[#2e424a]'>تصویر پوستر</label>
                <input onChange={(e)=>setimageName(e.target.files[0].name)} type="file" className='p-1 outline-[#0ab694] w-full text-left' required={true} name='poster'/>
            </div>
            {/* describe */}
            <Editor setDesc={setDesc}/>
            {/* situation */}
            <div className='w-full flex justify-start'>
            <div className="w-fit flex flex-col gap-2">
                    <label htmlFor="published" className='font-semibold text-[#2e424a]'>وضعیت مقاله</label>
                    <select  name="published" id="" className="outline-none" ref={situationRef}>
                        <option value={true}>روشن</option>
                        <option value={false}>خاموش</option>
                    </select>
                </div>
            </div>
            <button type='button' onClick={(e)=>formSubmiter(e)}  className='w-[80%] md:w-[50%] 2xl:w-[30%] mt-5 bg-[#01d5ab] transition-all duration-300 hover:shadow-[0px_0px_5px_1px_rgba(0,0,0,0.2)] hover:bg-[#00dfb2] text-white font-bold text-xl py-1 rounded-sm'>
                {
                    loading
                    ?<img src={loadingSvg} alt="loading" className='w-[1.5rem] mx-auto'/>
                    :<span>ثبت</span>
                }
            </button>
        </form>
    </div>
  )
}

export default NewArticle;