import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';

function New() {
  const [imageName,setimageName] = useState('');
  const [dropCate,setDropCate] = useState({status:false,value:null});
  const titleRef = useRef();
  const dispatch = useDispatch();
  const products = [
    { id: 1, title: "موبایل سامسونگ گلکسی S21" },
    { id: 2, title: "لپ تاپ ایسوس VivoBook X512" },
    { id: 3, title: "تبلت هوآوی مدل MatePad T8" },
    { id: 4, title: "دوربین دیجیتال کانن EOS 200D" },
    { id: 5, title: "هدست بی سیم ایرپادز مدل AirPods Pro" },
    { id: 6, title: "تلویزیون هوشمند ال جی مدل OLED55CX" },
    { id: 7, title: "پخش کننده آمپلی فایر پایونیر مدل VSX-534" },
    { id: 8, title: "پرینتر لیزری اچ پی مدل LaserJet Pro MFP M428fdw" },
    { id: 9, title: "اسپیکر بلوتوثی JBL Flip 5" },
    { id: 10, title: "مانیتور ال جی مدل 27GL850-B" },
    { id: 11, title: "هارد اکسترنال وسترن دیجیتال مدل My Passport" },
    { id: 12, title: "مودم روتر بی‌سیم تی پی-لینک مدل Archer C7" },
    { id: 13, title: "کامپیوتر رومیزی ایسوس مدل ROG Strix G15" },
    { id: 14, title: "کیبورد گیمینگ لاجیتک مدل G513" },
    { id: 15, title: "ماوس گیمینگ ریزر مدل DeathAdder V2" },
    { id: 16, title: "هدفون بی سیم سونی مدل WH-1000XM4" },
    { id: 17, title: "دوربین مداربسته داهوا مدل DH-IPC-HDW3441TM-AS" },
    { id: 18, title: "میکروفون کاندنسر استودیویی شور مدل MV88" },
    { id: 19, title: "پروژکتور اپتما مدل EH416" },
    { id: 20, title: "اسکنر پرتابل اچ پی مدل ScanJet Pro 2500 f1" }
];
  const formKeyNotSuber = (e) => {
    if(e.key === 'Enter' && e.target.type !== 'textarea' | e.target.type.button)
    {
        e.preventDefault();
        e.stopPropagation()
    }
  }
  const addGalleryHandle =  () => {
    let title = titleRef.current.value;
    switch(true)
    {
      case title === '' : toast.warn('عنوان را وارد کنید')
      break;
      case title.length <= 3 : toast.warn('عنوان کوتاه است')
      break; 
      case imageName === '' : toast.warn('تصویر را انتخاب کنید')
      break;
      case dropCate.value === null : toast.warn('دسته بندی را انتخاب کنید')
      break;
      default : console.log('')
    }
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
                <h1 className='font-semibold text-lg text-stone-800'>ایجاد</h1>
            </div>
            <form  className='flex flex-col items-center bg-[#ffffff70] px-2 py-5 w-full gap-8 z-10 opacity-90' onKeyDown={(e)=>formKeyNotSuber(e)}>
           {/* title */}
            <div className='flex flex-col gap-2 w-full'>
                <label htmlFor="title" className='font-semibold text-[#2e424a]'>عنوان</label>
                <input type="text" className='p-1  outline-[#0ab694] w-full' ref={titleRef} required={true} name='title'/>
            </div>
            {/* image */}
            <div className='flex flex-col gap-2 w-full'>
                <label htmlFor="poster" className='font-semibold text-[#2e424a]'>تصویر</label>
                <input  onChange={(e)=>setimageName(e.target.files[0].name)} type="file" className='p-1 outline-[#0ab694] w-full text-left' required={true} name='poster'/>
            </div>
                {/* products categories */}
                <div className='w-full flex-col sm:flex-row flex justify-start items-start gap-3'>
                <div className='flex flex-col gap-3 justify-center items-start'>
                <button type='button' onClick={()=>{
                    setDropCate({status:!dropCate.status,value:dropCate.value})
                }} className='text-sm w-fit bg-yellow-600 py-1 px-2 border-2 border-[#BABCBE] hover:bg-yellow-500 transition-all rounded-md text-white font-bold'>دسته بندی ها</button>
                {
                    dropCate.value !== null
                    ? <div className='bg-transparent p-2 w-fit rounded-sm font-bold text-white border-dashed border-white border-2'>{dropCate.value}</div>
                    :<span className='text-rose-600 font-bold'>دسته بندی انتخاب نشده!</span>
                }
                </div>
                    <ul className='bg-white px-2 cate-scroll overflow-hidden max-h-[10rem] overflow-y-scroll transition-all duration-300 rounded-sm' style={{height:dropCate.status?'fit-content':'0px',padding:dropCate.status?'3px':'0px'}}>
                    {
                        products.map((cate,i)=>(
                            <li key={i} className='cursor-pointer flex items-center gap-1 hover:text-purple-600 hover:font-bold transition-all'
                            onClick={(e)=>{
                                setDropCate({status:false,value:cate.title})
                            }}
                            >
                                <span>{cate.title}</span>
                            </li>
                        ))
                    }
                </ul>
                </div>
            <button onClick={(e)=>addGalleryHandle()} type='button' className='w-[50%] mt-5 bg-[#01d5ab] transition-all duration-300 hover:shadow-[0px_0px_5px_1px_rgba(0,0,0,0.2)] hover:bg-[#00dfb2] text-white font-bold text-lg py-1 rounded-sm'>ثبت</button>
        </form>
    </div>
  )
}

export default New;