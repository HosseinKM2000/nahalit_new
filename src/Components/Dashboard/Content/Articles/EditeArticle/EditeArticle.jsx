import React from 'react';
import { useRef , useState } from 'react';
import { toast } from 'react-toastify';
import { useDispatch , useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { setSwitch } from '../../../../../features/dashboard/dashboardSlice';
import { MdCancel } from 'react-icons/md';

function EditeArticle() {
    const [imageName,setimageName] = useState('');
    const [tags,setTags] = useState([]);
    const dispatch = useDispatch();
    const articleId = useSelector(state => state.dashboard.articleId);
    const articles = useSelector(state => state.dashboard.products) || [{title:'',url:'',id:''}]
    const goalArticle = articles.find((item,index) => index === articleId) ||  {title:'',url:'',id:''}
    const titleRef = useRef();
    const descRef  = useRef();
    const situationRef = useRef();
    const tagsRef = useRef();
    const slugRef = useRef();
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
            slug:slugRef,
            body:descRef.current.value,
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
            case formData.slug === '' : toast.warn("اسلاگ را وارد کنید");
            break;
            case formData.body === '' : toast.warn("توصیحات را وارد کنید");
            break;
            default : console.log('')
        }
    }
    const add = (e) => {
        const textTag = tagsRef.current.value;
        if(e.key === "Enter")
        {
            if(textTag.length >= 2 )
            {
                setTags([...tags,textTag])
                tagsRef.current.value = ''
            }
            else
            {
               toast.warn('عنوان برچسب کوتاه است')
            }
        }
    }
    const Delete = (indexRemove) => {
          setTags(tags.filter((tag,index)=> index !== indexRemove))
    }

  return (
    
    <div className='flex flex-col w-full opacity-motion'>
                   {/* green circles in background */}
                     <div className='w-[15rem] h-[15rem] rounded-full bg-[#6FEDD6] blur-[12rem] absolute top-[1rem] right-[1rem] z-0'></div>
                     <div className='w-[15rem] h-[15rem] rounded-full bg-[#6FEDD6] blur-[12rem] absolute bottom-[1rem] left-[1rem] z-0'></div>
                     <div className='w-[15rem] h-[15rem] rounded-full bg-[#6FEDD6] blur-[12rem] absolute bottom-[-40rem] left-[1rem] z-0'></div>
                     <div className='w-[15rem] h-[15rem] rounded-full bg-[#6FEDD6] blur-[12rem] absolute bottom-[-40rem] right-[1rem] z-0'></div>
             {/* toaster */}
             <ToastContainer 
              position='top-center'
              theme='colored'
              autoClose={2500}
              className='Toast_info'
              />
        <div className='w-full bg-[#C0D9DB] p-2 flex items-center justify-between'>
            <h1 className='font-semibold text-xl text-stone-800'>ویرایش مقاله</h1>
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
                <input onChange={(e)=>setimageName(e.target.files[0].name)} type="file" className='p-1 outline-[#0ab694] w-full text-left' required={true} name='poster'/>
            </div>
            {/* describe */}
            <div className='flex flex-col gap-2 w-full'>
                <label htmlFor="describe" className='font-semibold text-[#2e424a]'>توضیحات</label>
                <textarea name="describe" id="" cols="30" rows="20" className='p-2 outline-[#0ab694] w-full' ref={descRef} required={true}></textarea>
            </div>
                {/* title */}
            <div className='flex flex-col gap-2 w-full'>
                <label htmlFor="slug" className='font-semibold text-[#2e424a]'>اسلاگ</label>
                <input type="text" className='p-1  outline-[#0ab694] w-full' ref={slugRef} required={true} name='slug'/>
            </div>
                {/* tags */}
            <div className="flex flex-col gap-2 w-full">
                    <label htmlFor="tags" className='font-semibold text-[#2e424a]'>برچسب ها</label>
                    <input onKeyDown={(e)=>add(e)} ref={tagsRef} type="text" name="tags" className="w-full outline-none focus:border p-1 border-[#0ab694]"/>
                    <div className="flex w-full mt-3 flex-wrap gap-3">
                        {
                            tags.length === 0
                            ? <></>
                            : tags.map((tag,index) => (
                                <div className="flex items-center gap-1 p-1 text-white bg-stone-500 rounded-md" key={index}>
                                    <span>{tag}</span>
                                    <span onClick={()=>Delete(index)} className="text-red-600 transition-all hover:text-yellow-400 w-fit h-fit px-1 flex items-center rounded-md cursor-default">&#x2716;</span>
                                </div>
                            ))
                        }
                    </div>
            </div>
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
            <button type='button' onClick={(e)=>formSubmiter(e)}  className='w-[50%] mt-5 bg-[#01d5ab] transition-all duration-300 hover:shadow-[0px_0px_5px_1px_rgba(0,0,0,0.2)] hover:bg-[#00dfb2] text-white font-bold text-xl py-1 rounded-sm'>ثبت</button>
        </form>
    </div>
  )
}

export default EditeArticle