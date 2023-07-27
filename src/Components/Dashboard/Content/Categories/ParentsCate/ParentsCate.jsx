import {React , useState , useEffect} from 'react';
import { useSelector } from 'react-redux';
import {BsPencilFill} from 'react-icons/bs';
import {AiTwotoneDelete} from 'react-icons/ai';
import {FiPlusCircle} from 'react-icons/fi';
import {TiTick,TiDelete} from 'react-icons/ti';
import { useDispatch } from 'react-redux';
import { addParentCategory , deleteParentCategory, setSwitchCategories  ,editeParentCategory } from '../../../../../features/dashboard/dashboardSlice';
import { ToastContainer , toast} from 'react-toastify';
import { getCategories , addParentCategories , deleteParentCategories , editeParentCategories } from '../../../../../features/dashboard/action';


function ParentsCate() {

  const categories = useSelector(state => state.dashboard.categories);
  const [mouseHover,setMouseHover] = useState(null);
  const [newCate,setNewCate] = useState({status:false,value:null});
  const [isChange,setIsChange] = useState({oldValue:'',newValue:''});
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getCategories())
  },[])

  const addCateHandler = (e,key) => {
    if(e.code === 'Enter' || key === 'Tick')
    {
      if(newCate.value !== null )
      {
        const exiteItem  = categories.find(cate=> cate.title === newCate.value);
        if(exiteItem)
        {
          toast.error('!این عنوان موجود است')
        }
        else
        {
          dispatch(addParentCategory(newCate.value))
          setNewCate({status:false,value:null})
          // dispatch(addParentCategories(newCate.value))
        }
      }
      else
      {
        toast.info('عنوان دسته بندی را وارد کنید')
      }
    }
  }
  const deleteCateHandler = (index) => {
    dispatch(deleteParentCategory(index))
    // dispatch(deleteParentCategories(id))
  }
  const editeHandler =  (e,key,index) => {
    const exiteItem  = categories.find(cate=> cate.title === isChange.newValue);
    // const exiteItem  = categories.find(cate=> cate.title === isChange.newValue);
    if(e.code === 'Enter' || key === 'Tick')
    {
      if(exiteItem)
      {
        toast.error('!این عنوان موجود است')
      }
      else if(isChange.newValue === '')
      {
  
        toast.info('لطفا عنوان جدید را وارد کنید')
      }
      else
      {
        dispatch(editeParentCategory({index,value:isChange.newValue}))
        // dispatch(editeParentCategories({id,title:isChange.newValue}))
      }
    }
  } 

  return (
    <>
    <ToastContainer 
    position='top-center'
    theme='colored'
    autoClose={2500}
    className='Toast_info'
    />
    <div className='flex flex-wrap w-full gap-x-10 gap-y-10 justify-center'>
      {
        categories.map((cate,index) => (
           <>
            {
               isChange.oldValue !== cate.title
              ?
              <div className='min-w-[27%] scale-motion h-[4rem] flex justify-center items-center relative hover:scale-[1.05] transition-all' onMouseEnter={()=>setMouseHover(cate.title)} onMouseLeave={()=>setMouseHover(null)}>
              <div onClick={(e)=>{
                dispatch(setSwitchCategories({key:'FIRSTCHILDREN',value:cate.title,index}))
              }} className='w-full z-40 relative h-full  hover:shadow-[0px_0px_5px_2px_rgba(0,0,0,0.5)] shadow-[2px_2px_5px_2px_rgba(0,0,0,0.5)] font-bold cursor-default text-[#363D4F] transition-all hover:text-[#af4b08] bg-slate-200 flex justify-center items-center rounded-sm'>{cate.title}</div>
              <div className=
              {
                mouseHover === cate.title 
                ? 'absolute h-full top-0 z-0 left-[-1.5rem]  flex flex-col bg-[#cdd2d8] duration-500 justify-between px-1 py-2 pr-12'
                : 'absolute h-full top-0 z-0 left-[1rem]  flex flex-col bg-[#cdd2d8] duration-500 justify-between px-1 py-2 pr-12'
              }
                onMouseEnter={()=>setMouseHover(cate.title)} onMouseLeave={()=>setMouseHover(null)}>
                <AiTwotoneDelete className='text-red-700 hover:text-red-500 transition-all cursor-pointer' onClick={()=>deleteCateHandler(index)}/>
                <BsPencilFill className='text-purple-700 hover:text-purple-500 transition-all cursor-pointer' onClick={(e)=>{
                  setIsChange({oldValue:cate.title,newValue:''})
                  console.log(cate.title)
                }}/>
              </div>
             </div>
             :
             <div className='w-[27%] scale-motion h-[4rem] bg-white flex justify-end rounded-sm relative transition-all shadow-[0px_0px_5px_2px_rgba(0,0,0,0.5)]'>
             <input onKeyDown={(e)=>editeHandler(e,'',index)}  onChange={(e)=>setIsChange({oldValue:cate.title,newValue:e.target.value})} defaultValue={isChange.oldValue}  className='w-[80%] z-40 relative font-bold cursor-default placeholder:text-sm p-0 m-0 h-full text-[#363D4F] outline-none' placeholder='عنوان جدید'/>
             <div className='flex flex-col h-full gap-1 justify-center ml-1'>
               <TiTick onClick={(e)=>{editeHandler(e,'Tick',index)}} className='text-green-600 text-xl transition-all hover:text-green-500 cursor-pointer'/>
               <TiDelete className='text-red-600 text-xl transition-all hover:text-red-500 cursor-pointer' onClick={()=>{
                setIsChange({oldValue:'',newValue:''})
               }}/>
             </div>
            </div>
            }
           </>
        ))
      }
      {
        // add new Category
        !newCate.status
        ?
        <div className='scale-motion w-[27%] h-[4rem] rounded-sm transition-all hover:text-orange-500 hover:border-orange-500 duration-200 items-center gap-1 text-white flex justify-center font-bold border-2 border-white border-dashed cursor-default' onClick={()=>setNewCate({status:true,value:null})}>
        <span>افزودن دسته بندی</span>
        <FiPlusCircle className='text-2xl'/>
      </div>
      : 
      <div className='w-[27%] scale-motion h-[4rem] bg-white flex justify-end rounded-sm relative transition-all shadow-[0px_0px_5px_2px_rgba(0,0,0,0.5)]'>
      <input onKeyDown={(e)=>addCateHandler(e)} onChange={(e)=>setNewCate({status:true,value:e.target.value})} className='w-[80%] z-40 relative font-bold cursor-default placeholder:text-sm p-0 m-0 h-full text-[#363D4F] outline-none' placeholder='عنوان دسته بندی'/>
      <div className='flex flex-col h-full gap-1 justify-center ml-1'>
        <TiTick className='text-green-600 text-xl transition-all hover:text-green-500 cursor-pointer' onClick={(e)=>addCateHandler(e,'Tick')}/>
        <TiDelete className='text-red-600 text-xl transition-all hover:text-red-500 cursor-pointer' onClick={()=>setNewCate({status:false,value:null})}/>
      </div>
     </div>
      }
    </div>
    </>
  )
}

export default ParentsCate;