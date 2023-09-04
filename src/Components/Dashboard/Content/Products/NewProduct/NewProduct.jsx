import Cookies from 'js-cookie';
import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import loadingSvg from '../../../../../assets/img/Rolling-0.8s-200px.svg';
import { addProduct } from '../../../../../features/dashboard/action';
import CategoriesBox from '../../../../CategoriesBox/CategoriesBox';
import Editor from '../../../../Editor/Editor';

function NewProduct() {
    const [imageName,setImageName] = useState('');
    const [desc,setDesc] = useState('');
    const [priceValue,setPriceValue] = useState('0');
    const [discountValue,setDiscountValue] = useState('0');
    const [dropCate,setDropCate] = useState({status:false,value:null,id:null})
    const userId = JSON.parse(Cookies.get("user")).id;
    const titleRef = useRef();
    const imageRef = useRef()
    const discountRef = useRef();
    const dispatch = useDispatch();
    const loading = useSelector(state => state.dashboard.productsLoading);

    const formKeyNotSubmit = (e) => {
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
        
        setPriceValue(separatedNumber);
      }

    const formSubmitter = (e) => {
        e.preventDefault()
        const form = {
            title:titleRef.current.value,
            image:imageName,
            category_id:dropCate.id,
            price:JSON.parse(priceValue.replaceAll(',','')),
            discount:JSON.parse(discountValue),
            description:desc,
            seller_id:userId,
        }
      
        switch(true)
        {
            case form.title.length === 0 : toast.warn("عنوان را وارد کنید");
            break;
            case form.title.length < 3 : toast.warn("عنوان کوتاه است");
            break;
            case imageName === '' : toast.warn('فایل تصویر را وارد کنید');
            break;
            case form.description.length === 0 : toast.warn("توضیح را وارد کنید");
            break;
            case form.category_id === null : toast.warn("دسته بندی را انتخاب کنید");
            break;
            case form.price === 0 : toast.warn("قیمت را وارد کنید");
            break;
            case form.discount === 0 : toast.warn("تخفیف را وارد کنید");
            break;
            default : sendProduct(form)
        }

    }

    const sendProduct = (form) => {
        let formdata = new FormData();
            formdata.append("title", form.title);
            formdata.append("description", form.description);
            formdata.append("category_id", form.category_id);
            formdata.append("seller_id", form.seller_id );
            formdata.append("price", form.price);
            formdata.append("image", form.image , `${imageRef.current.value}`);
            dispatch(addProduct(formdata))
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
        <form className='flex flex-col items-center bg-[#ffffff70] px-2 py-5 w-full gap-8 z-10 opacity-90' onKeyDown={(e)=>formKeyNotSubmit(e)} onSubmit={(e)=>formSubmitter(e)}>
               {/* title */}
            <div className='flex flex-col gap-2 w-full'>
                <label htmlFor="title" className='font-semibold text-[#2e424a]'>عنوان</label>
                <input type="text" className='p-1  outline-[#0ab694] w-full' ref={titleRef} required={true} name='title'/>
            </div>
               {/* image */}
            <div className='flex flex-col gap-2 w-full'>
                <label htmlFor="image" className='font-semibold text-[#2e424a]'>تصویر</label>
                <input onChange={(e)=>{
                    setImageName(e.target.files[0])
                }} type="file" ref={imageRef} className='p-1 outline-[#0ab694] w-full text-left' required={true} name='image'/>
            </div>
               {/* describe */}
            <Editor setDesc={setDesc}/>
               {/* categories */}
            <CategoriesBox dropCate={dropCate} setDropCate={setDropCate}/>
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
                    else
                    {
                      setDiscountValue(e.target.value)
                    }
             }}/>
              </div>
            </div>
            <button type='submit' className='w-[50%] min-h-[35px] mt-5 bg-[#01d5ab] transition-all duration-300 hover:shadow-[0px_0px_5px_1px_rgba(0,0,0,0.2)] hover:bg-[#00dfb2] text-white font-bold text-lg rounded-sm'>
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


