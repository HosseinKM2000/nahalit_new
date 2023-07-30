import { React, useEffect, useState } from 'react';
import { AiTwotoneDelete } from 'react-icons/ai';
import { BsPencilFill } from 'react-icons/bs';
import { FiPlusCircle } from 'react-icons/fi';
import { TiDelete, TiTick } from 'react-icons/ti';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import loading from '../../../../../assets/img/Ripple-0.8s-200px.svg';
import { addParentCategories, deleteParentCategories, editeParentCategories, getCategories } from '../../../../../features/dashboard/action';
import { setSwitchCategories } from '../../../../../features/dashboard/dashboardSlice';

function ParentsCate() {

  const categories = useSelector(state => state.dashboard.categories);
  const [mouseHover,setMouseHover] = useState(null);
  const [newCate,setNewCate] = useState({status:false,value:null});
  const [isChange,setIsChange] = useState({oldValue:'',newValue:''});
  const dispatch = useDispatch();
  // api 
  const Loading = useSelector(state => state.dashboard.categoriesLoading);
  const getError = useSelector(state => state.dashboard.categoriesError)
  const add = useSelector(state => state.dashboard.addSeccess);
  const Delete = useSelector(state => state.dashboard.deleteSeccess);
  const edite = useSelector(state => state.dashboard.editeSeccess);

  useEffect(()=>{
    dispatch(getCategories())
  },[add,Delete,edite])

  const addCateHandler = (e, key) => {
        if (e.code !== 'Enter' && key !== 'Tick') {
          return;
        }
      
        if (!newCate.value) {
          toast.info('عنوان دسته بندی را وارد کنید');
          return;
        }
      
        if (categories.some(cate => cate.title === newCate.value)) {
          toast.error('!این عنوان موجود است');
          return;
        }
      
        dispatch(addParentCategories({title: newCate.value, category_id: null}));
        setNewCate({status: false, value: null});
  };

  const deleteCateHandler = (id) => {
    dispatch(deleteParentCategories(id))
  };
  
  const editeHandler =  (e,key,id) => {
      const exiteItem  = categories.find(cate=> cate.title === isChange.newValue);
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
          dispatch(editeParentCategories({id,title:isChange.newValue,category_id:null}));
          setIsChange({oldValue:'',newValue:''});
        }
      }
  };

  return (
    <>
          <ToastContainer 
          position='top-center'
          theme='colored'
          autoClose={2500}
          className='Toast_info'
          />
          <div className='flex flex-col items-center md:flex-row flex-wrap sm:w-[60%] md:w-full w-full gap-x-10 gap-y-10 justify-center'>
            {
              Loading
              ?
                <div className='h-[4rem] w-full lg:w-[27%] flex items-center justify-center'>
                <img src={loading} alt="loading" className='w-[30%]'/>
                </div>
              :
              <>
              {
              categories !== null && categories !== undefined
              ?
              categories.length !== 0
              ?
              <>
              <>
              {
                categories.filter(cate => cate.category_id === null).map((cate,index) => (
                  <>
                          {
                  isChange.oldValue !== cate.title
                ?
                <div className='min-w-[27%] 2xl:min-w-[20%] scale-motion h-[3rem]  lg:h-[4rem] flex justify-center items-center relative hover:scale-[1.05] transition-all' onMouseEnter={()=>setMouseHover(cate.title)} onMouseLeave={()=>setMouseHover(null)}>
                <div onClick={(e)=>{
                  dispatch(setSwitchCategories({key:'FIRSTCHILDREN',title:cate.title,id:cate.id}))
                }} className='w-full z-40 relative 2xl:min-w-[20%] h-full  hover:shadow-[0px_0px_5px_2px_rgba(0,0,0,0.5)] shadow-[2px_2px_5px_2px_rgba(0,0,0,0.5)] font-bold cursor-default text-[#363D4F] transition-all hover:text-[#af4b08] bg-slate-200 flex justify-center items-center rounded-sm'>{cate.title}</div>
                <div className=
                {
                  mouseHover === cate.title 
                  ? 'absolute h-full top-0 z-0 left-[-1.5rem] hidden lg:flex flex-col bg-[#cdd2d8] duration-500 justify-between px-1 py-2 pr-12'
                  : 'absolute h-full top-0 z-0 left-[1rem] hidden lg:flex flex-col bg-[#cdd2d8] duration-500 justify-between px-1 py-2 pr-12'
                }
                  onMouseEnter={()=>setMouseHover(cate.title)} onMouseLeave={()=>setMouseHover(null)}>
                  <AiTwotoneDelete className='text-red-700 hover:text-red-500 transition-all cursor-pointer' onClick={()=>deleteCateHandler(cate.id)}/>
                  <BsPencilFill className='text-purple-700 hover:text-purple-500 transition-all cursor-pointer' onClick={(e)=>{
                    setIsChange({oldValue:cate.title,newValue:''})
                  }}/>
                </div>
                <div className='absolute h-full top-0 z-[100] left-0  flex lg:hidden flex-col bg-[#cdd2d8] duration-500 justify-between px-1 py-1 gap-2'>
                  <AiTwotoneDelete className='text-red-700 hover:text-red-500 transition-all cursor-pointer' onClick={()=>deleteCateHandler(cate.id)}/>
                  <BsPencilFill className='text-purple-700 hover:text-purple-500 transition-all cursor-pointer' onClick={(e)=>{setIsChange({oldValue:cate.title,newValue:''})}}/>
                </div>
                </div>
                :
                <div className='w-full 2xl:w-[20%] md:w-[27%] scale-motion h-[3rem]  lg:h-[4rem] bg-white flex justify-end rounded-sm relative transition-all shadow-[0px_0px_5px_2px_rgba(0,0,0,0.5)]'>
                <input onKeyDown={(e)=>editeHandler(e,'',cate.id)}  onChange={(e)=>setIsChange({oldValue:cate.title,newValue:e.target.value})} defaultValue={isChange.oldValue}  className='w-[90%] md:w-[80%] 2xl:w-[90%] z-40 relative font-bold cursor-default placeholder:text-sm p-0 m-0 h-full text-[#363D4F] outline-none' placeholder='عنوان جدید'/>
                <div className='flex flex-col h-full gap-1 justify-center ml-1'>
                  <TiTick onClick={(e)=>{editeHandler(e,'Tick',cate.id)}} className='text-green-600 text-xl transition-all hover:text-green-500 cursor-pointer'/>
                  <TiDelete className='text-red-600 text-xl transition-all hover:text-red-500 cursor-pointer' onClick={()=>{
                  setIsChange({oldValue:'',newValue:''})
                  }}/>
                </div>
                </div>
              }
              </>
                ))
                }
                </>
                <>
                {
                // add new Category
                !newCate.status
                ?
                <div className='scale-motion 2xl:w-[20%]  md:w-[27%] h-[3rem] md:h-[3rem] lg:h-[4rem] rounded-sm transition-all hover:text-orange-500 hover:border-orange-500 duration-200 items-center gap-1 text-white flex justify-center font-bold border-2 border-white border-dashed cursor-default' onClick={()=>setNewCate({status:true,value:null})}>
                <span>افزودن دسته بندی</span>
                <FiPlusCircle className='text-2xl'/>
                </div>
              : 
                <div className='w-full 2xl:w-[20%] md:w-[27%] scale-motion h-[3rem] lg:h-[4rem] bg-white flex justify-end rounded-sm relative transition-all shadow-[0px_0px_5px_2px_rgba(0,0,0,0.5)]'>
              <input onKeyDown={(e)=>addCateHandler(e)} onChange={(e)=>setNewCate({status:true,value:e.target.value})} className='w-[90%] md:w-[80%] 2xl:w-[90%] z-40 relative font-bold cursor-default placeholder:text-sm p-0 m-0 h-full text-[#363D4F] outline-none' placeholder='عنوان دسته بندی'/>
              <div className='flex flex-col h-full gap-[0.2rem] lg:gap-1 justify-center ml-1'>
                <TiTick className='text-green-600 text-xl transition-all hover:text-green-500 cursor-pointer' onClick={(e)=>addCateHandler(e,'Tick')}/>
                <TiDelete className='text-red-600 text-xl transition-all hover:text-red-500 cursor-pointer' onClick={()=>setNewCate({status:false,value:null})}/>
              </div>
                </div>
            }
            </>
            </>
              :
              <div className='flex flex-col items-center w-full gap-5'>
              <span className='items-center flex text-white text-xl font-bold' style={{textShadow:'1px 1px 3px orange'}}>دسته بندی وجود ندارد</span>
              <>
              {
                            // add new Category
                            !newCate.status
                            ?
                          <div className='scale-motion w-full h-[3rem] rounded-sm transition-all hover:text-orange-500 hover:border-orange-500 duration-200 items-center gap-1 text-white flex justify-center font-bold border-2 border-white border-dashed cursor-default' onClick={()=>setNewCate({status:true,value:null})}>
                            <span>افزودن دسته بندی</span>
                            <FiPlusCircle className='text-2xl'/>
                          </div>
                          : 
                          <div className='w-full scale-motion h-[4rem] bg-white flex justify-end rounded-sm relative transition-all shadow-[0px_0px_5px_2px_rgba(0,0,0,0.5)] pr-2'>
                          <input onKeyDown={(e)=>addCateHandler(e)} onChange={(e)=>setNewCate({status:true,value:e.target.value})} className='w-full z-40 relative font-bold cursor-default placeholder:text-sm p-0 m-0 h-full text-[#363D4F] outline-none' placeholder='عنوان دسته بندی'/>
                          <div className='flex flex-col h-full gap-1 justify-center ml-1'>
                            <TiTick className='text-green-600 text-xl transition-all hover:text-green-500 cursor-pointer' onClick={(e)=>addCateHandler(e,'Tick')}/>
                            <TiDelete className='text-red-600 text-xl transition-all hover:text-red-500 cursor-pointer' onClick={()=>setNewCate({status:false,value:null})}/>
                          </div>
                          </div>
              }
              </>
              </div>
              :
              <span className='items-center flex text-white text-xl font-bold' style={{textShadow:'1px 1px 2px red'}}>{getError}</span>
              }
              </>
            }
            </div>
    </>
  )
}

export default ParentsCate;
