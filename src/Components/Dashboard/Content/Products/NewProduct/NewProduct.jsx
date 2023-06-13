import React from 'react';
import { useRef , useState } from 'react';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import {MdKeyboardArrowLeft} from 'react-icons/md';

function NewProduct() {
    const [categories,setCategories] = useState([
        {
            name:'سایت های آماده',
            items:["سایت آماده لاراول"],
        },
        {
            name:'پلاگین وردپرس',
            items:["پلاگین امنیتی","پلاگین کاربردی","پلاگین مدیریتی"]
        },
        {
            name:'قالب HTML',
            items:["قالب شخصی","قالب شرکتی","قالب فروشگاهی","قالب خبری"]
        },
        {
            name:'اپلیکیشن موبایل',
            items:["اپلیکیشن اندروید"]
        },
        {
            name:'اسکریپت ها',
            items:["اسکریپت لاراول"]
        },
    ])
    const [dropCate,setDropCate] = useState({status:false,value:null})
    const [childList,setChildList] = useState(false);
    const [goalCate,setGoalCate] = useState(null);
    const [tags,setTags] = useState([]);
    const [keyWords,setKeyWords] = useState([]);
    const videoRef = useRef();
    const priceRef = useRef();
    const keyWordsRef = useRef();
    const versionRef = useRef();
    const tagsRef = useRef();
    const discountRef = useRef();
    const categoryRef = useRef();
    const titleRef = useRef();
    const posterRef = useRef();
    const bannerRef = useRef();
    const descRef  = useRef();
    const situationRef = useRef();
    const dependProductsRef = useRef();
    const formKeyNotSuber = (e) => {
        if(e.key === 'Enter' && e.target.type !== 'textarea' | e.target.type.button)
        {
            e.preventDefault();
            e.stopPropagation()
        }
    }
    const add = (e,key) => {
        const textTag = tagsRef.current.value;
        const textWord = keyWordsRef.current.value;
        if(e.key === "Enter")
        {
            if(textTag.length >= 2 && key === 'tag')
            {
                setTags([...tags,textTag])
                tagsRef.current.value = ''
            }
            else if(textWord.length >= 2 && key === 'word')
            {
                setKeyWords([...keyWords,textWord])
                keyWordsRef.current.value = ''
            }
            else
            {
               toast.warn('عنوان برچسب کوتاه است')
            }
        }
    }
    const Delete = (indexRemove,key) => {
        key === 'tag'
        ? setTags(tags.filter((tag,index)=> index !== indexRemove))
        : setKeyWords(keyWords.filter((word,index)=> index !== indexRemove))
    }
    const formSubmiter = (e) => {
        e.preventDefault()
        const formData = {
            title:titleRef.current.value,
            poster:posterRef.current.value,
            banner:bannerRef.current.value,
            video:videoRef,
            keyWords:keyWords,
            version:versionRef,
            discount:discountRef,
            category:categoryRef,
            tags:tags,
            price:priceRef,
            describtion:descRef.current.value,
            relatedProducts:dependProductsRef.current.value,
            situation:situationRef
        }
    }
    const liHandler = (value) => {
        setChildList(true);
        const item = categories.find(cate => cate.name === value);
        setGoalCate(item)
    }
    
  return (
        <div className='flex flex-col w-full opacity-motion'>
             {/* green circles in background */}
                     <div className='w-[15rem] h-[15rem] rounded-full bg-[#6FEDD6] blur-[12rem] absolute top-[1rem] right-[1rem] z-0'></div>
                     <div className='w-[15rem] h-[15rem] rounded-full bg-[#6FEDD6] blur-[12rem] absolute bottom-[1rem] left-[1rem] z-0'></div>
                     <div className='w-[15rem] h-[15rem] rounded-full bg-[#6FEDD6] blur-[12rem] absolute bottom-[-40rem] left-[1rem] z-0'></div>
                     <div className='w-[15rem] h-[15rem] rounded-full bg-[#6FEDD6] blur-[12rem] absolute bottom-[-40rem] right-[1rem] z-0'></div>
                     <div className='w-[15rem] h-[15rem] rounded-full bg-[#6FEDD6] blur-[12rem] absolute bottom-[-80rem] left-[1rem] z-0'></div>
                     <div className='w-[15rem] h-[15rem] rounded-full bg-[#6FEDD6] blur-[12rem] absolute bottom-[-80rem] right-[1rem] z-0'></div>
            {/* toaster */}
             <ToastContainer 
              position='top-center'
              theme='colored'
              autoClose={2500}
              className='Toast_info'
              />
        <div className='w-full bg-[#C0D9DB] p-2'>
            <h1 className='font-semibold text-xl text-stone-800'>محصول جدید</h1>
        </div>
        <form className='flex flex-col items-center bg-[#ffffff70] px-2 py-5 w-full gap-8 z-10 opacity-90' onKeyDown={(e)=>formKeyNotSuber(e)}>
            {/* titl */}
            <div className='flex flex-col gap-2 w-full'>
                <label htmlFor="title" className='font-semibold text-[#2e424a]'>عنوان</label>
                <input type="text" className='p-1  outline-[#0ab694] w-full' ref={titleRef} required={true} name='title'/>
            </div>
           {/* poster */}
            <div className='flex flex-col gap-2 w-full'>
                <label htmlFor="poster" className='font-semibold text-[#2e424a]'>آدرس پوستر</label>
                <input type="url" className='p-1 outline-[#0ab694] w-full text-left' ref={posterRef} required={true} name='poster'/>
            </div>
           {/* banner */}
            <div className='flex flex-col gap-2 w-full'>
                <label htmlFor="poster" className='font-semibold text-[#2e424a]'>آدرس بنر</label>
                <input type="url" className='p-1 outline-[#0ab694] w-full text-left' ref={bannerRef} required={true} name='banner'/>
            </div>
            {/* video */}
            <div className='flex flex-col gap-2 w-full'>
                <label htmlFor="video" className='font-semibold text-[#2e424a]'>آدرس ویدیو</label>
                <input type="url" className='p-1 outline-[#0ab694] w-full text-left' ref={videoRef} required={true} name='video'/>
            </div>
           {/* describe */}
            <div className='flex flex-col gap-2 w-full'>
                <label htmlFor="describe" className='font-semibold text-[#2e424a]'>توضیحات</label>
                <textarea name="describe" id="" cols="30" rows="20" className='p-2 outline-[#0ab694] w-full' ref={descRef} required={true}></textarea>
            </div>
            {/* tags */}
            <div className="flex flex-col gap-2 w-full">
                    <label htmlFor="tags" className='font-semibold text-[#2e424a]'>برچسب ها</label>
                    <input onKeyDown={(e)=>add(e,'tag')} ref={tagsRef} type="text" name="tags" className="w-full outline-none focus:border p-1 border-[#0ab694]"/>
                    <div className="flex w-full mt-3 flex-wrap gap-3">
                        {
                            tags.length === 0
                            ? <></>
                            : tags.map((tag,index) => (
                                <div className="flex items-center gap-1 p-1 text-white bg-stone-500 rounded-md" key={index}>
                                    <span>{tag}</span>
                                    <span onClick={()=>Delete(index,'tag')} className="text-red-600 transition-all hover:text-yellow-400 w-fit h-fit px-1 flex items-center rounded-md cursor-default">&#x2716;</span>
                                </div>
                            ))
                        }
                    </div>
            </div>
           {/* keyWords */}
            <div className="flex flex-col gap-2 w-full">
                    <label htmlFor="keyWords" className='font-semibold text-[#2e424a]'>کلمات کلیدی</label>
                    <input onKeyDown={(e)=>add(e,'word')} ref={keyWordsRef} type="text" name="keyWords" className="w-full outline-none focus:border p-1 border-[#0ab694]"/>
                    <div className="flex w-full mt-3 flex-wrap gap-3">
                        {
                            keyWords.length === 0
                            ? <></>
                            : keyWords.map((tag,index) => (
                                <div className="flex items-center gap-1 p-1 text-white bg-stone-500 rounded-md" key={index}>
                                    <span>{tag}</span>
                                    <span onClick={()=>Delete(index,'word')} className="text-red-600 transition-all hover:text-yellow-400 w-fit h-fit px-1 flex items-center rounded-md cursor-default">&#x2716;</span>
                                </div>
                            ))
                        }
                    </div>
            </div>
           {/* version */}
            <div className='flex flex-col gap-2 w-full'>
            <label htmlFor="version" className='font-semibold text-[#2e424a]'>نسخه محصول</label>
            <input type="text" name="version" id="" ref={versionRef} className='p-1 text-left outline-[#0ab694] w-full'/>
            </div>
            {/* depend */}
            <div className='flex flex-col gap-2 w-full'>
            <label htmlFor="search" className='font-semibold text-[#2e424a]'>محصولات مرتبط</label>
            <input type="search" name="search" id="" ref={dependProductsRef} className='p-1 outline-[#0ab694] w-full'/>
            </div>
            {/* categories */}
            <div className='w-full flex justify-start items-start gap-3'>
                <div className='flex flex-col gap-2 justify-center items-start'>
                 <button type='button' onClick={()=>{
                    setDropCate({status:!dropCate.status,value:dropCate.value})
                    setChildList(false)
                 }} className='text-sm w-fit bg-yellow-600 py-1 px-2 border-2 border-[#BABCBE] hover:bg-yellow-500 transition-all rounded-md text-white font-bold'>دسته بندی ها</button>
                 {
                    dropCate.value !== null
                    ? <div className='bg-transparent p-2 w-fit rounded-sm font-bold text-white border-dashed border-white border-2'>{dropCate.value}</div>
                    :<span className='text-rose-600 font-bold'>دسته بندی انتخاب نشده!</span>
                 }
                </div>
                    <ul className='bg-white px-2 overflow-hidden transition-all duration-300 rounded-sm' style={{height:dropCate.status?'fit-content':'0px',padding:dropCate.status?'3px':'0px'}}>
                    {
                        categories.map((cate,i)=>(
                            <li key={i} className='cursor-pointer flex items-center gap-1 hover:text-yellow-600 hover:font-bold transition-all'
                            onMouseEnter={(e)=>liHandler(cate.name)}
                            >
                                <span>{cate.name}</span>
                                <MdKeyboardArrowLeft/>
                            </li>
                        ))
                    }
                </ul>
                {
                    goalCate !== null
                    ? 
                    <ul className='bg-white px-2 rounded-sm transition-all duration-300 overflow-hidden' style={{height:childList?'fit-content':'0px'}}>
                    {
                        goalCate.items.map((item,i)=>(
                            <li key={i} onClick={(e)=>{
                                setDropCate({status:false,value:item})
                                setChildList(false)
                            }} className='cursor-pointer hover:text-lime-600 hover:font-bold transition-all'>{item}</li>
                        ))
                    }
                </ul>
                : <></>
                }
            </div>
           {/* price */}
            <div className='flex flex-col gap-2 w-full'>
            <label htmlFor="price" className='font-semibold text-[#2e424a]'>قیمت محصول</label>
            <input type="text" name="price" id="" placeholder='به تومان...' ref={priceRef} className='p-1 outline-[#0ab694] w-[20%]'/>
            </div>
            {/* discount */}
            <div className='flex flex-col gap-2 w-full'>
            <label htmlFor="discount" className='font-semibold text-[#2e424a]'>تخفیف</label>
            <input type="text" name="discount" id="" placeholder='به تومان...' ref={discountRef} className='p-1 outline-[#0ab694] w-[20%]'/>
            </div>
           {/* situation */}
            <div className='w-full flex justify-start'>
            <div className="w-fit flex flex-col gap-2">
                    <label htmlFor="published" className='font-semibold text-[#2e424a]'>وضعیت محصول</label>
                    <select ref={situationRef} name="published" id="" className="outline-none">
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

export default NewProduct;