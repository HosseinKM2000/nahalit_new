import React from 'react';
import { useRef , useState } from 'react';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';

function NewArticle() {
    const [categories,setCategories] = useState([
        {
            name:'خدمات',
            items:[
        'فروش سایت اختصاصی و اقتصادی',
        'فروش قالب سایت',
        'طراحی سایت اختصاصی',],
        }
    ])
    const [tags,setTags] = useState([]);
    const tagsRef = useRef();
    const titleRef = useRef();
    const posterRef = useRef();
    const bannerRef = useRef();
    const descRef  = useRef();
    const dependArticleRef = useRef();
    const shortLinkRef = useRef();
    const formKeyNotSuber = (e) => {
        if(e.key === 'Enter' && e.target.type !== 'textarea')
        {
            e.preventDefault();
            e.stopPropagation()
        }
    }
    const addTags = (e) => {
        const text = tagsRef.current.value;
        if(e.key === "Enter")
        {
            if(text.length >= 2)
            {
                setTags([...tags,text])
                tagsRef.current.value = ''
            }
            else
            {
               toast.warn('عنوان برچسب کوتاه است')
            }
        }
    }
    const deleteTag = (indexRemove) => {
        setTags(tags.filter((tag,index)=> index !== indexRemove))
    }
    const formSubmiter = (e) => {
        e.preventDefault()
        const formData = {
            title:titleRef.current.value,
            poster:posterRef.current.value,
            banner:bannerRef.current.value,
            tags:tags,
            describtion:descRef.current.value,
            relatedArticle:dependArticleRef.current.value,
            shortLink:shortLinkRef.current.value
        }
    }

  return (
    
    <div className='flex flex-col w-full opacity-motion'>
                     <div className='w-[15rem] h-[15rem] rounded-full bg-[#6FEDD6] blur-[12rem] absolute top-[1rem] right-[1rem] z-0'></div>
                     <div className='w-[15rem] h-[15rem] rounded-full bg-[#6FEDD6] blur-[12rem] absolute bottom-[1rem] left-[1rem] z-0'></div>
                     <div className='w-[15rem] h-[15rem] rounded-full bg-[#6FEDD6] blur-[12rem] absolute bottom-[-40rem] left-[1rem] z-0'></div>
                     <div className='w-[15rem] h-[15rem] rounded-full bg-[#6FEDD6] blur-[12rem] absolute bottom-[-40rem] right-[1rem] z-0'></div>
             <ToastContainer 
              position='top-center'
              theme='colored'
              autoClose={2500}
              className='Toast_info'
              />
        <div className='w-full bg-[#C0D9DB] p-2'>
            <h1 className='font-semibold text-xl text-stone-800'>مقاله جدید</h1>
        </div>
        <form className='flex flex-col items-center bg-[#ffffff70] px-2 py-5 w-full gap-8 z-10 opacity-90' onKeyDown={(e)=>formKeyNotSuber(e)}>
            <div className='flex flex-col gap-2 w-full'>
                <label htmlFor="title" className='font-semibold text-[#2e424a]'>عنوان</label>
                <input type="text" className='p-1  outline-[#0ab694] w-full' ref={titleRef} required={true} name='title'/>
            </div>
            <div className='flex flex-col gap-2 w-full'>
                <label htmlFor="poster" className='font-semibold text-[#2e424a]'>آدرس پوستر</label>
                <input type="url" className='p-1 outline-[#0ab694] w-full text-left' ref={posterRef} required={true} name='poster'/>
            </div>
            <div className='flex flex-col gap-2 w-full'>
                <label htmlFor="poster" className='font-semibold text-[#2e424a]'>آدرس بنر</label>
                <input type="url" className='p-1 outline-[#0ab694] w-full text-left' ref={bannerRef} required={true} name='banner'/>
            </div>
            <div className='flex flex-col gap-2 w-full'>
                <label htmlFor="describe" className='font-semibold text-[#2e424a]'>توضیحات</label>
                <textarea name="describe" id="" cols="30" rows="20" className='p-2 outline-[#0ab694] w-full' ref={descRef} required={true}></textarea>
            </div>
            <div className="flex flex-col gap-2 w-full">
                    <label htmlFor="tags" className='font-semibold text-[#2e424a]'>برچسب ها</label>
                    <input onKeyDown={(e)=>addTags(e)} ref={tagsRef} type="text" name="tags" className="w-full outline-none focus:border p-1 border-[#0ab694]"/>
                    <div className="flex w-full mt-3 flex-wrap gap-3">
                        {
                            tags.length === 0
                            ? <></>
                            : tags.map((tag,index) => (
                                <div className="flex items-center gap-1 p-1 text-white bg-stone-500 rounded-md" key={index}>
                                    <span>{tag}</span>
                                    <span onClick={()=>deleteTag(index)} className="text-red-600 transition-all hover:text-yellow-400 w-fit h-fit px-1 flex items-center rounded-md cursor-default">&#x2716;</span>
                                </div>
                            ))
                        }
                    </div>
            </div>
            <div className='flex flex-col gap-2 w-full'>
            <label htmlFor="search" className='font-semibold text-[#2e424a]'>مقالات مرتبط</label>
            <input type="search" name="search" id="" ref={dependArticleRef} className='p-1 outline-[#0ab694] w-full'/>
            </div>
            <div className='flex flex-col gap-2 w-full'>
                <label htmlFor="poster" className='font-semibold text-[#2e424a]'>لینک کوتاه</label>
                <input type="url" className='p-1 outline-[#0ab694] w-full text-left' ref={shortLinkRef} name='banner'/>
            </div>
            <div className='w-full flex justify-start'>
            <div className="w-fit flex flex-col gap-2">
                    <label htmlFor="categories" className='font-semibold text-[#2e424a]'>دسته بندی</label>
                    <select  name="categories" id="" className="outline-none">
                    </select>
                </div>
            </div>
            <div className='w-full flex justify-start'>
            <div className="w-fit flex flex-col gap-2">
                    <label htmlFor="published" className='font-semibold text-[#2e424a]'>وضعیت مقاله</label>
                    <select  name="published" id="" className="outline-none">
                        <option value={true}>انتشار</option>
                        <option value={false}>ذخیره</option>
                    </select>
                </div>
            </div>
            <button type='submit' className='w-[50%] mt-5 bg-[#01d5ab] transition-all duration-300 hover:shadow-[0px_0px_5px_1px_rgba(0,0,0,0.2)] hover:bg-[#00dfb2] text-white font-bold text-xl py-1 rounded-sm'>ثبت</button>
        </form>
    </div>
  )
}

export default NewArticle;