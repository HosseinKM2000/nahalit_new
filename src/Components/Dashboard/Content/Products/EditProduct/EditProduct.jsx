import { React, useRef, useState } from 'react';
import { GiCancel } from 'react-icons/gi';
import { MdCancel } from 'react-icons/md';
import { TiTickOutline } from 'react-icons/ti';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import loadingSvg from '../../../../../assets/img/Rolling-0.8s-200px.svg';
import { editProduct } from '../../../../../features/dashboard/action';
import CategoriesBox from '../../../../CategoriesBox/CategoriesBox';
import Editor from '../../../../Editor/Editor';
import Cookies from 'js-cookie';

function EditProduct({ isEdit , setIsEdit }) {
    const categories = useSelector(state => state.dashboard.categories);
    const [imageName,setImageName] = useState('');
    const [desc,setDesc] = useState('');
    const [editDiscount,setEditDiscount] = useState(false);
    const [dropCate,setDropCate] = useState({status:false,value:categories?.find(cate => cate.id === isEdit.value.category_id ).title,id:isEdit.value.category_id})
    const [priceValue,setPriceValue] = useState(isEdit.value.price);
    const loading = useSelector(state => state.dashboard.productsLoading);
    const titleRef = useRef();
    const imageRef = useRef();
    const discountRef = useRef();
    const dispatch = useDispatch();
    
    const formKeyNotSubmit = (e) => {
        if(e.key === 'Enter' && e.target.type !== 'textarea' | e.target.type.button)
        {
            e.preventDefault();
            e.stopPropagation()
        }
    }

    const formSubmitter = (e) => {
        e.preventDefault()
        const formData = {
            title:titleRef.current.value,
            image:imageName,
            category_id:dropCate.id,
            price:priceValue,
            description:desc,
            userId : JSON.parse(Cookies.get("user")).id
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
            case formData.category_id === null : toast.warn("دسته بندی را انتخاب کنید");
            break;
            default : EditProduct(formData)
        }
    }

    const EditProduct = (form) => {
        let formdata = new FormData();
        formdata.append("title", form.title);
        formdata.append("description", form.description);
        formdata.append("category_id", form.category_id);
        formdata.append("seller_id", form.userId );
        formdata.append("price", form.price);
        formdata.append("image", form.image , `${imageRef.current.value}`);
        dispatch(editProduct(isEdit.value.id,formdata))
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
    <div className='flex w-full sm:w-[90%] md:w-full 2xl:w-[70%] flex-col opacity-motion'>
        <div className='bg-[#C0D9DB] p-2 flex items-center justify-between'>
            <h1 className='font-semibold text-lg text-stone-800'>ویرایش محصول</h1>
            <MdCancel className='text-red-600 font-bold text-3xl transition-all hover:text-red-500' onClick={(e)=>setIsEdit({status:false,value:""})}/>
        </div>
        <form className='flex flex-col items-center bg-[#ffffff70] px-2 py-5 w-full gap-8 z-10 opacity-90' onKeyDown={(e)=>formKeyNotSubmit(e)} onSubmit={(e)=>formSubmitter(e)}>
            {/* title */}
            <div className='flex flex-col gap-2 w-full'>
                <label htmlFor="title" className='font-semibold text-[#2e424a]'>عنوان</label>
                <input type="text" defaultValue={isEdit.value.title} className='p-1  outline-[#0ab694] w-full' ref={titleRef} required={true} name='title'/>
            </div>
            {/* image */}
            <div className='flex flex-col gap-2 w-full'>
                <label htmlFor="image" className='font-semibold text-[#2e424a]'>تصویر</label>
                <input onChange={(e)=>setImageName(e.target.files[0])} ref={imageRef} type="file" className='p-1 outline-[#0ab694] w-full text-left' required={true} name='image'/>
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
            }} value={priceValue}  placeholder='به تومان...' className='p-1 outline-[#0ab694] w-[20%] text-left font-[shabnambold]' style={{direction:'ltr'}}/>
            </div>
            {/* discount */}
            <div className='w-full flex flex-col gap-2'>
                    <label htmlFor="price" className='font-semibold text-[#2e424a]'>تخفیف</label>
                    <div className='flex w-[10%]'>
                    <button className='px-2 py-1 border-2 border-[#ffffffa2] rounded-sm hover:bg-purple-500 transition-all text-white font-bold bg-purple-600' type='button' onClick={(e)=>setEditDiscount(true)}>5%</button>
                    <button className='px-2 py-1 rounded-sm border-y-2 border-[#ffffffa2] border-l-2 hover:bg-rose-500 transition-all text-white font-bold bg-rose-600'>حذف</button>
                    </div>
                    <div className={editDiscount ? 'flex gap-1 w-full items-center mr-1 transition-all h-fit duration-300 overflow-hidden' : 'h-0 p-0 mr-1 flex overflow-hidden'}>
                        <input ref={discountRef} type="text" className='w-[20%] sm:w-[10%] md:w-[10%] p-1 h-[2rem] font-bold outline-stone-500 text-[#000] font-[shabnambold]' onChange={(e)=>{
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
                        <div className='flex flex-col gap-1 items-center'>
                            <TiTickOutline className='text-green-800 text-xl transition-all hover:text-green-700'/>
                            <GiCancel className='text-red-600 transition-all hover:text-red-500' onClick={(e)=>setEditDiscount(false)}/>
                        </div>
                    </div>
            </div>
            <button type='submit' className='w-[50%] min-h-[35px] mt-5 bg-[#01d5ab] transition-all duration-300 hover:shadow-[0px_0px_5px_1px_rgba(0,0,0,0.2)] hover:bg-[#00dfb2] text-white font-bold text-xl rounded-sm'>
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

export default EditProduct;