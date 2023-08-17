import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import CategoriesBox from '../../../../CategoriesBox/CategoriesBox';
import Editor from '../../../../Editor/Editor';

function New() {

    const [dropCate,setDropCate] = useState({status:false,value:null})
    const [desc,setDesc] = useState('');
    const [fileName,setFileName] = useState('');
    const [priceValue,setPriceValue] = useState(0);
    const mobile = window.innerWidth < 425 ? true : false;
    const dispatch = useDispatch();
    const titleRef = useRef();
    const supervisorRef = useRef();
    const statusRef  = useRef();
    const progressRef  = useRef();
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
            category_id:1,
            description:desc,
            file:fileName,
            supervisor_id:1,
            price:priceValue,
            status:statusRef.current.value,
            progress:progressRef.current.value,
        }
        switch(true)
        {
            case formData.title.length === 0 : toast.warn("عنوان را وارد کنید");
            break;
            case formData.title.length < 3 : toast.warn("عنوان کوتاه است");
            break;
            case formData.description.length === 0 : toast.warn("توضیح را وارد کنید");
            break;
            case formData.file === '' : toast.warn('فایل را وارد کنید');
            break;
            case formData.price === 0 : toast.warn('قیمت را وارد کنید');
            break;
            case formData.progress === '' : toast.warn('درصد پیشرفت را وارد کنید');
            break;
            // case formData.category_id === null : toast.warn("دسته بندی را انتخاب کنید");
            // break;
            default : sendProduct(formData)
        }
    }

    const sendProduct = (dataObj) => {
        console.log(dataObj)
    }

    function separateByCommas(number) {
        let numberString = String(number);
        
        let separatedNumber = '';
        let counter = 0;
        
        for (let i = numberString.length - 1; i >= 0; i--) {
          if (counter === 3) {
            separatedNumber = ',' + separatedNumber;
            counter = 0;
          }
          separatedNumber = numberString.charAt(i) + separatedNumber;
          counter++;
        }
        
        setPriceValue(separatedNumber)
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
            <h1 className='font-semibold text-lg text-stone-800'>افزودن</h1>
        </div>
        <form className='flex flex-col items-center bg-[#ffffff70] px-2 py-5 w-full gap-8 z-10 opacity-90' onKeyDown={(e)=>formKeyNotSuber(e)}>
            {/* title */}
            <div className='flex flex-col gap-2 w-full'>
                <label htmlFor="title" className='font-semibold text-[#2e424a]'>عنوان</label>
                <input type="text" className='p-1  outline-[#0ab694] w-full' ref={titleRef} required={true} name='title'/>
            </div>
            {/* supervisor */}
            <div className='flex flex-col gap-2 w-full'>
                <label htmlFor="title" className='font-semibold text-[#2e424a]'>سرپرست</label>
                <input type="text" className='p-1  outline-[#0ab694] w-full' ref={supervisorRef} required={true} name='title'/>
            </div>
           {/* describe */}
            <Editor setDesc={setDesc}/>
            {/* categories */}
            <CategoriesBox dropCate={dropCate} setDropCate={setDropCate}/>
            {/* file */}
            <div className='flex items-start flex-col gap-2 w-full'>
                <label htmlFor="file" className='font-semibold text-[#2e424a]'>فایل</label>
                <input onChange={(e)=>setFileName(e.target.files[0].name)} type="file" name="file" id="" />
            </div>
                {/* status */}
            <div className='flex flex-col gap-2 w-full'>
                <label htmlFor="status" className='font-semibold text-[#2e424a]'>وضعیت</label>
                <select name="status" id="" ref={statusRef} className='p-1 font-[shabnambold] outline-[#0ab694] w-[50%] sm:w-[20%]'>
                    <option value="doing">در حال انجام</option>
                    <option value="completed">کامل شد</option>
                    <option value="canceled">لغو شد</option>
                </select>
            </div>
                {/* progress */}
            <div className='flex flex-col gap-2 w-full'>
                <label htmlFor="persent" className='font-semibold text-[#2e424a]'>پیشرفت</label>
                <input type="text" name="persent" id="" placeholder="درصد..." ref={progressRef}  className='p-1 font-[shabnambold] outline-[#0ab694] w-[50%] sm:w-[20%]' onChange={(e)=>{                        
                    if(e.target.value.search(/\D+/g) !== -1)
                        {
                        e.target.value = ''
                        toast.warn("مقدار قابل قبول نیست")
                        }
                    else if(e.target.value > 99)
                    {
                        e.target.value = ''
                        toast.warn("مقدار قابل قبول نیست")
                    }
                        }}/>
            </div>
                {/* price */}
            <div className='flex flex-col gap-2 w-full'>
                <label htmlFor="price" className='font-semibold text-[#2e424a]'>مبلغ</label>
                <input type="text" name="price" id="" placeholder='به تومان...' value={priceValue}   className='p-1 font-[shabnambold] outline-[#0ab694] w-[50%] sm:w-[20%]' onChange={(e)=>{                        
                            !(e.target.value.length < 1) ? separateByCommas(parseInt(e.target.value.replaceAll(',',''))) : separateByCommas(0)
                        }}/>
            </div>
           <div className='flex w-full flex-col items-center mt-5 gap-3'>
             <div className='flex items-center w-[80%] sm:w-[50%] 2xl:w-[30%] justify-between'>
             <button type='button' onClick={(e) => formSubmiter(e)} className='w-[100%] bg-[#07C7A3] transition-all duration-300 hover:shadow-[0px_0px_5px_1px_rgba(0,0,0,0.2)] hover:bg-[#0eecc3] text-white font-bold text-xl py-1 rounded-sm'>ثبت</button>
             </div>
           </div>
        </form>
    </div>
  )
}

export default New;