import { React , useState , useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { useDispatch , useSelector } from 'react-redux';
import { MdKeyboardArrowLeft } from 'react-icons/md';
import { setSwitch } from '../../../../../features/dashboard/dashboardSlice';
import { MdCancel } from 'react-icons/md';

function Edite() {
    const [imageName,setimageName] = useState('');
    const [dropCate,setDropCate] = useState({status:false,value:null});
    const [childList,setChildList] = useState(false);
    const [childList_2,setChildList_2] = useState(false);
    const [goalCate,setGoalCate] = useState(null);
    const [goalChild,setGoalChild] = useState(null);
    const dispatch = useDispatch();
    const galleryId = useSelector(state => state.dashboard.galleryId);
    const list = useSelector(state => state.dashboard.products);
    const photos = list !== null ? list.slice(0,100) : [{url:'',title:'title'}];
    const goalGallery = photos.find((item,index) => index === galleryId) || {title:''}
    const categories = useSelector(state => state.dashboard.categories);
    const cateList = categories !== null ? categories : [{title:'دسته بندی بارگیری نشده است!',category_id:null,}]
    const titleRef = useRef();
    const formKeyNotSuber = (e) => {
      if(e.key === 'Enter' && e.target.type !== 'textarea' | e.target.type.button)
      {
          e.preventDefault();
          e.stopPropagation()
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
    const addGalleryHandle =  () => {
        let title = titleRef.current.value;
        let product_id = cateList.find(cate => cate.title === dropCate.value).id
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
    <div className='flex flex-col w-full opacity-motion'>
    {/* green circles in background */}
      <div className='w-[15rem] h-[15rem] rounded-full bg-[#6FEDD6] blur-[12rem] absolute top-[1rem] right-[1rem] z-0'></div>
      <div className='w-[15rem] h-[15rem] rounded-full bg-[#6FEDD6] blur-[12rem] absolute bottom-[10rem] left-[1rem] z-0'></div>
{/* toaster */}
<ToastContainer 
position='top-center'
theme='colored'
autoClose={2500}
className='Toast_info'
/>
<div className='w-full bg-[#C0D9DB] p-2 flex items-center justify-between'>
<h1 className='font-semibold text-xl text-stone-800'>ویرایش</h1>
<MdCancel className='text-red-600 font-bold text-3xl transition-all hover:text-red-500' onClick={(e)=>dispatch(setSwitch({key:'gallery',value:'all',id:null}))}/>
</div>
<form  className='flex flex-col items-center bg-[#ffffff70] px-2 py-5 w-full gap-8 z-10 opacity-90' onKeyDown={(e)=>formKeyNotSuber(e)}>
{/* title */}
<div className='flex flex-col gap-2 w-full'>
 <label htmlFor="title" className='font-semibold text-[#2e424a]'>عنوان</label>
 <input type="text" defaultValue={goalGallery.title} className='p-1  outline-[#0ab694] w-full' ref={titleRef} required={true} name='title'/>
</div>
{/* image */}
<div className='flex flex-col gap-2 w-full'>
 <label htmlFor="poster" className='font-semibold text-[#2e424a]'>تصویر</label>
 <input onChange={(e)=>setimageName(e.target.files[0].name)} type="file" className='p-1 outline-[#0ab694] w-full text-left' required={true} name='poster'/>
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
     <ul className='bg-white px-2 rounded-sm  cate-scroll max-h-[10rem] overflow-y-scroll transition-all duration-300 overflow-hidden' style={{height:childList?'fit-content':'0px'}}>
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
<button onClick={(e)=>addGalleryHandle()} type='button' className='w-[50%] mt-5 bg-[#01d5ab] transition-all duration-300 hover:shadow-[0px_0px_5px_1px_rgba(0,0,0,0.2)] hover:bg-[#00dfb2] text-white font-bold text-xl py-1 rounded-sm'>ثبت</button>
</form>
</div>
  )
}

export default Edite;