import { React , useRef , useState } from 'react';
import { useSelector , useDispatch } from 'react-redux';
import { ToastContainer , toast } from 'react-toastify';
import { MdKeyboardArrowLeft , MdCancel } from 'react-icons/md';
import { setSwitch } from '../../../../../features/dashboard/dashboardSlice';
import { GiCancel } from 'react-icons/gi';
import { TiTickOutline } from 'react-icons/ti';

function EditeProduct() {
    const productId = useSelector(state => state.dashboard.productId);
    const products = useSelector( state => state.dashboard.products);
    const goalProduct = products.find(product => product.id === productId) || {title:'',description:'',price:''};
    const [imageName,setImageName] = useState('');
    const [editeDiscount,setEditeDiscount] = useState(false);
    const [dropCate,setDropCate] = useState({status:false,value:null})
    const [childList,setChildList] = useState(false);
    const [childList_2,setChildList_2] = useState(false);
    const [goalCate,setGoalCate] = useState(null);
    const [goalChild,setGoalChild] = useState(null);
    const [tags,setTags] = useState([]);
    const priceRef = useRef();
    const tagsRef = useRef();
    const categoryRef = useRef();
    const titleRef = useRef();
    const descRef  = useRef();
    const discountRef = useRef();
    const dispatch = useDispatch();
    const categories = useSelector(state => state.dashboard.categories);
    const cateList = categories !== null ? categories : [{title:'دسته بندی بار گیری نشده است!',category_id:null,}]
    const formKeyNotSuber = (e) => {
        if(e.key === 'Enter' && e.target.type !== 'textarea' | e.target.type.button)
        {
            e.preventDefault();
            e.stopPropagation()
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
    const formSubmiter = (e) => {
        e.preventDefault()
        const formData = {
            title:titleRef.current.value,
            image:imageName,
            category_id:categoryRef,
            tags:tags,
            price:priceRef,
            description:descRef.current.value,
        }
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
    <div className='flex flex-col w-full opacity-motion'>
    {/* green circles in background */}
            <div className='w-[15rem] h-[15rem] rounded-full bg-[#6FEDD6] blur-[12rem] absolute top-[1rem] right-[1rem] z-0'></div>
            <div className='w-[15rem] h-[15rem] rounded-full bg-[#6FEDD6] blur-[12rem] absolute bottom-[1rem] left-[1rem] z-0'></div>
            <div className='w-[15rem] h-[15rem] rounded-full bg-[#6FEDD6] blur-[12rem] absolute bottom-[-35rem] left-[1rem] z-0'></div>
            <div className='w-[15rem] h-[15rem] rounded-full bg-[#6FEDD6] blur-[12rem] absolute bottom-[-35rem] right-[1rem] z-0'></div>
   {/* toaster */}
    <ToastContainer 
     position='top-center'
     theme='colored'
     autoClose={2500}
     className='Toast_info'
     />
<div className='w-full bg-[#C0D9DB] p-2 flex items-center justify-between'>
   <h1 className='font-semibold text-xl text-stone-800'>ویرایش محصول</h1>
   <MdCancel className='text-red-600 font-bold text-3xl transition-all hover:text-red-500' onClick={(e)=>dispatch(setSwitch({key:'products',value:'all',id:null}))}/>
</div>
<form className='flex flex-col items-center bg-[#ffffff70] px-2 py-5 w-full gap-8 z-10 opacity-90' onKeyDown={(e)=>formKeyNotSuber(e)}>
   {/* titl */}
   <div className='flex flex-col gap-2 w-full'>
       <label htmlFor="title" className='font-semibold text-[#2e424a]'>عنوان</label>
       <input type="text" defaultValue={goalProduct.title} className='p-1  outline-[#0ab694] w-full' ref={titleRef} required={true} name='title'/>
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
                    <ul className='bg-white cate-scroll overflow-hidden max-h-[10rem] overflow-y-scroll px-2  transition-all duration-300 rounded-sm' style={{height:dropCate.status?'fit-content':'0px',padding:dropCate.status?'3px':'0px'}}>
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
                <input type="text" name="price" id="" placeholder='به تومان...' ref={priceRef}  className='p-1 font-[shabnambold] outline-[#0ab694] w-[20%]' onChange={(e)=>{                        
                    if(e.target.value.search(/\D+/g) !== -1)
                                        {
                                        e.target.value = ''
                                        toast.warn("مقدار قابل قبول نیست")
                                        }}}/>
                </div>
                {/* discount */}
                <div className='w-full flex flex-col gap-2'>
                        <label htmlFor="price" className='font-semibold text-[#2e424a]'>تخفیف</label>
                        <div className='flex w-[10%]'>
                        <button className='px-2 py-1 border-2 border-[#ffffffa2] rounded-sm hover:bg-purple-500 transition-all text-white font-bold bg-purple-600' type='button' onClick={(e)=>setEditeDiscount(true)}>5%</button>
                        <button className='px-2 py-1 rounded-sm border-y-2 border-[#ffffffa2] border-l-2 hover:bg-rose-500 transition-all text-white font-bold bg-rose-600'>حذف</button>
                        </div>
                        <div className={editeDiscount ? 'flex gap-1 w-full items-center mr-1 transition-all h-fit duration-300 overflow-hidden' : 'h-0 p-0 mr-1 flex overflow-hidden'}>
                            <input ref={discountRef} type="text" className='w-[10%] p-1 h-[2rem] font-bold outline-stone-500 text-[#000] font-[shabnambold]' onChange={(e)=>{
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
                                <GiCancel className='text-red-600 transition-all hover:text-red-500' onClick={(e)=>setEditeDiscount(false)}/>
                            </div>
                        </div>
                </div>
   <button type='submit' className='w-[50%] mt-5 bg-[#01d5ab] transition-all duration-300 hover:shadow-[0px_0px_5px_1px_rgba(0,0,0,0.2)] hover:bg-[#00dfb2] text-white font-bold text-xl py-1 rounded-sm'>ثبت</button>
</form>
    </div>
  )
}

export default EditeProduct;