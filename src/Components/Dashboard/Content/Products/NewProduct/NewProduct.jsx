import React, { useRef, useState } from 'react';
import { MdKeyboardArrowLeft } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import loadingSvg from '../../../../../assets/img/Rolling-0.8s-200px.svg';
import { addProduct } from '../../../../../features/dashboard/action';

function NewProduct() {
    // const [categories,setCategories] = useState([
    //     {
    //         id:1,
    //         title:'سایت های آماده',
    //         category_id:null
    //     },
    //     {
    //         id:2,
    //         title:'پلاگین وردپرس',
    //         category_id:null
    //     },
    //     {
    //         id:3,
    //         title:"پلاگین مدیریتی",
    //         category_id:2
    //     },
    //     {
    //         id:4,
    //         title:"پلاگین کاربردی",
    //         category_id:2
    //     },
    //     {
    //         id:5,
    //         title:"سایت آماده لاراول",
    //         category_id:1
    //     },
    // ])
    const [imageName,setImageName] = useState('');
    const [dropCate,setDropCate] = useState({status:false,value:null})
    const [childList,setChildList] = useState(false);
    const [childList_2,setChildList_2] = useState(false);
    const [goalCate,setGoalCate] = useState(null);
    const [goalChild,setGoalChild] = useState(null);
    const [priceValue,setPriceValue] = useState(0);
    const titleRef = useRef();
    const descRef  = useRef();
    const discountRef = useRef();
    const dispatch = useDispatch();
    const loading = useSelector(state => state.dashboard.productLoading);
    const categories = useSelector(state => state.dashboard.categories);
    const cateList = categories !== null && categories !== undefined ? categories : [{title:'دسته بندی بار گیری نشده است!',category_id:null,}]
   
    const formKeyNotSuber = (e) => {
        if(e.key === 'Enter' && e.target.type !== 'textarea' | e.target.type.button)
        {
            e.preventDefault();
            e.stopPropagation()
        }
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

    const formSubmiter = (e) => {
        e.preventDefault()
        const formData = {
            title:titleRef.current.value,
            image:imageName,
            category_id:1,
            price:priceValue,
            description:descRef.current.value,
            seller_id:1,
        }
        switch(true)
        {
            case formData.title.length === 0 : toast.warn("عنوان را وارد کنید");
            break;
            case formData.title.length < 3 : toast.warn("عنوان کوتاه است");
            break;
            case formData.image === '' : toast.warn('فایل تصویر را وارد کنید');
            break;
            case formData.description.length === 0 : toast.warn("توضیح را وارد کنید");
            break;
            // case formData.category_id === null : toast.warn("دسته بندی را انتخاب کنید");
            // break;
            default : sendProduct(formData)
        }
    }

    const sendProduct = (dataObj) => {
        console.log(dataObj)
        dispatch(addProduct(dataObj))
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
    <div className='flex flex-col sm:w-[90%] md:w-full 2xl:w-[70%] w-full opacity-motion'>
          {/* toaster */}
        <ToastContainer 
        position='top-center'
        theme='colored'
        autoClose={2500}
        className='Toast_info'
        />
        <div className='w-full bg-[#C0D9DB] p-2'>
            <h1 className='font-semibold text-lg text-stone-800'>محصول جدید</h1>
        </div>
        <form className='flex flex-col items-center bg-[#ffffff70] px-2 py-5 w-full gap-8 z-10 opacity-90' onKeyDown={(e)=>formKeyNotSuber(e)}>
            {/* title */}
            <div className='flex flex-col gap-2 w-full'>
                <label htmlFor="title" className='font-semibold text-[#2e424a]'>عنوان</label>
                <input type="text" className='p-1  outline-[#0ab694] w-full' ref={titleRef} required={true} name='title'/>
            </div>
           {/* image */}
            <div className='flex flex-col gap-2 w-full'>
                <label htmlFor="image" className='font-semibold text-[#2e424a]'>تصویر</label>
                <input onChange={(e)=>setImageName(e.target.files[0].name)} type="file" className='p-1 outline-[#0ab694] w-full text-left' required={true} name='image'/>
            </div>
           {/* describe */}
            <div className='flex flex-col gap-2 w-full'>
                <label htmlFor="describe" className='font-semibold text-[#2e424a]'>توضیحات</label>
                <textarea name="describe" id="" cols="30" rows="20" className='p-2 outline-[#0ab694] w-full' ref={descRef} required={true}></textarea>
            </div>
            {/* categories */}
            <div className='w-full flex justify-start items-start gap-3'>
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
           {/* price */}
            <div className='flex flex-col gap-2 w-full'>
            <label htmlFor="price" className='font-semibold text-[#2e424a]'>قیمت محصول</label>
            <input type="text" name="price" id="" onChange={(e)=>{
                !(e.target.value.length < 1) ? separateByCommas(parseInt(e.target.value.replaceAll(',',''))) : separateByCommas(0)
            }} value={priceValue}  placeholder='به تومان...' className='p-1 outline-[#0ab694] font-[shabnambold] w-[20%] text-left' style={{direction:'ltr'}}/>
            </div>
               {/* discount */}
            <div className='w-full flex flex-col gap-2'>
              <label htmlFor="price" className='font-semibold text-[#2e424a]'>تخفیف</label>
              <div className='flex gap-1 w-full items-center transition-all duration-300 overflow-hidden'>
               <input type="text" ref={discountRef} className='w-[10%] p-1 h-[2rem] font-bold outline-stone-500 placeholder:text-xs placeholder:text-stone-300 text-[#000] font-[shabnambold]' placeholder='درصد...' onChange={(e)=>{
                  if(e.target.value.search(/\D+/g) !== -1)
                    {
                    e.target.value = ''
                    toast.warn("مقدار قابل قبول نیست")
                    }
                  else if(parseInt(e.target.value) > 100)
                    {
                    e.target.value = '100';
                    toast.warn("مقدار قابل قبول نیست")
                    }
             }}/>
              </div>
            </div>
            <button type='submit' onClick={(e)=>formSubmiter(e)} className='w-[50%] mt-5 bg-[#01d5ab] transition-all duration-300 hover:shadow-[0px_0px_5px_1px_rgba(0,0,0,0.2)] hover:bg-[#00dfb2] text-white font-bold text-xl py-1 rounded-sm'>
                {
                    loading
                    ? <img src={loadingSvg} alt="loading" className='w-[1.5rem] mx-auto'/>
                    :<span>ثبت محصول</span>
                }
            </button>
        </form>
    </div>
  )
}

export default NewProduct;


