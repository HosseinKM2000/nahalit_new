import { React, useEffect, useState } from 'react';
import { AiTwotoneDelete } from 'react-icons/ai';
import { BsPencilFill } from 'react-icons/bs';
import { FiPlusCircle } from 'react-icons/fi';
import { RiDeleteBack2Fill } from 'react-icons/ri';
import { TiDelete, TiTick } from 'react-icons/ti';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import loading from '../../../../../assets/img/Ripple-0.8s-200px.svg';
import {
  addParentCategories,
  deleteParentCategories,
  editeParentCategories,
  getCategories
} from '../../../../../features/dashboard/action';
import { setSwitchCategories_2 } from '../../../../../features/dashboard/dashboardSlice';

function SecondChildrenCate() {

    const [edite,setEdite] = useState({oldValue:'',newValue:''});
    const [newCate,setNewCate] = useState({status:false,value:null});
    const parentTitle = useSelector(state => state.dashboard.categoriesSwitch.title);
    const firstChildrenTitle = useSelector(state => state.dashboard.categoriesSwitch.title_2)
    const categories = useSelector(state => state.dashboard.categories);
    const Loading = useSelector(state => state.dashboard.categoriesLoading);
    const firstChildrenId = useSelector(state => state.dashboard.categoriesSwitch.id_2);
    const childrenCategories  = categories.filter(cate => cate.category_id === firstChildrenId);
    const add = useSelector(state => state.dashboard.addSeccess);
    const Delete = useSelector(state => state.dashboard.deleteSeccess);
    const Edite = useSelector(state => state.dashboard.editeSeccess);
    const dispatch = useDispatch();

    const addCateHandler = (e,key) => {

      if(e.code === 'Enter' || key === 'Tick')
      {
        if(newCate.value !== null )
        {

          const exiteItem  = categories.find(cate=> cate === newCate.value)
          console.log(exiteItem)
          if(exiteItem)
          {
            toast.error('!این عنوان موجود است')
          }
          else
          {
            dispatch(addParentCategories({title:newCate.value,category_id:firstChildrenId}))
            setNewCate({status:false,value:null})
          }

        }
        else
        {
          toast.info('عنوان دسته بندی را وارد کنید')
        }
      }
    } 

    const deleteHandler = (e,id) => {
        e.stopPropagation();
        dispatch(deleteParentCategories(id))
    }

    const editeHandler =  (e,key,id,category_id) => {

          e.stopPropagation();
          const exiteItem  = categories.find(cate=> cate.title === edite.newValue)

          if(e.code === 'Enter' || key === 'Tick')
          {
            if(exiteItem)
            {
              toast.error('!این عنوان موجود است')
            }
            else if(edite.newValue === '')
            {
        
              toast.info('لطفا عنوان جدید را وارد کنید')
            }
            else
            {
              dispatch(editeParentCategories({id:id,title:edite.newValue,category_id:category_id}))
            }
          }
    } 
    
    useEffect(()=>{
      dispatch(getCategories())
    },[add,Delete,Edite])

  return (
    <div className='w-full 2xl:w-[60%]'>
    <>
        <ToastContainer 
    position='top-center'
    theme='colored'
    autoClose={2500}
    className='Toast_info'
    />
    <div className='flex flex-col items-center w-full'>
      <div className='flex w-full items-center justify-between bg-[#ffffff1a] rounded-sm p-1'>
        <div className='flex items-center'>
          <span className='text-white font-bold'>{parentTitle} / {firstChildrenTitle}</span>
        </div>
        <RiDeleteBack2Fill onClick={()=>dispatch(setSwitchCategories_2({key:'FIRSTCHILDREN',title_2:firstChildrenTitle.title}))} className='text-[#ff4000] text-3xl rotate-[180deg] transition-all hover:text-red-600'/>
      </div>
      {
        Loading 
        ?
        <div className='h-[4rem] w-[30%] flex items-center justify-center mt-10'>
        <img src={loading} alt="loading" className='w-[30%]'/>
        </div>
        :
        <div className='w-full'>
        {
         childrenCategories.length !== 0
          ?
          <div className='flex flex-col w-full p-5 gap-3'>
           {
            childrenCategories.map((child,index) => (
              <>
              {
                edite.oldValue !== child.title
                ?
                <div key={index}   className='h-[4rem] bg-[#ffffffaa] rounded-md justify-between flex items-center pr-3 pl-2 cursor-default transition-all hover:bg-[#ffffffd4] font-bold'>
                <span>{child.title}</span>
                <div className='flex flex-col gap-2'>
                  <AiTwotoneDelete className='text-red-700 hover:text-red-500 transition-all cursor-pointer' onClick={(e)=>deleteHandler(e,child.id)}/>
                  <BsPencilFill className='text-purple-700 hover:text-purple-500 transition-all cursor-pointer' onClick={(e)=>{
                    e.stopPropagation()
                    setEdite({oldValue:child.title,newValue:''})
                  }}/>
                </div>
              </div>
              :
              <div className='w-[100%] h-[4rem] bg-white flex justify-between pl-2 pr-3 rounded-sm relative transition-all shadow-[0px_0px_5px_2px_rgba(0,0,0,0.5)]'>
              <input onKeyDown={(e)=>editeHandler(e,'',child.id,child.category_id)} defaultValue={edite.oldValue} onChange={(e)=>setEdite({oldValue:child.title,newValue:e.target.value})} className='w-[80%] z-40 relative font-bold cursor-default placeholder:text-sm p-0 m-0 h-full text-[#363D4F] outline-none' placeholder='عنوان جدید'/>
              <div className='flex flex-col h-full gap-1 justify-center'>
                <TiTick className='text-green-600 text-xl transition-all hover:text-green-500 cursor-pointer' onClick={(e)=>{editeHandler(e,'Tick',child.id,child.category_id)}}/>
                <TiDelete className='text-red-600 text-xl transition-all hover:text-red-500 cursor-pointer' onClick={(e)=>{
                    e.stopPropagation();
                    setEdite({oldValue:'',newValue:''})
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
        <div className='w-[100%] h-[3rem] rounded-sm transition-all hover:text-orange-500 hover:border-orange-500 duration-200 items-center gap-1 text-white flex justify-center font-bold border-2 border-white border-dashed cursor-default' onClick={()=>setNewCate({status:true,value:null})}>
        <span>افزودن دسته بندی</span>
        <FiPlusCircle className='text-2xl'/>
      </div>
      : 
      <div className='w-[100%] h-[4rem] bg-white flex justify-end rounded-sm relative transition-all shadow-[0px_0px_5px_2px_rgba(0,0,0,0.5)] pr-3 pl-2'>
      <input onKeyDown={(e)=>addCateHandler(e)} onChange={(e)=>setNewCate({status:true,value:e.target.value})} className='w-[100%] z-40 relative font-bold cursor-default placeholder:text-sm p-0 m-0 h-full text-[#363D4F] outline-none' placeholder='عنوان دسته بندی'/>
      <div className='flex flex-col h-full gap-1 justify-center'>
        <TiTick className='text-green-600 text-xl transition-all hover:text-green-500 cursor-pointer' onClick={(e)=>addCateHandler(e,'Tick')}/>
        <TiDelete className='text-red-600 text-xl transition-all hover:text-red-500 cursor-pointer' onClick={()=>setNewCate({status:false,value:null})}/>
      </div>
     </div>
      }
          </div>
          :
          <div className='flex flex-col gap-20 py-5'>
          {
            // add new Category
            !newCate.status
            ?
            <div className='w-[100%] h-[3rem] rounded-sm transition-all hover:text-orange-500 hover:border-orange-500 duration-200 items-center gap-1 text-white flex justify-center font-bold border-2 border-white border-dashed cursor-default' onClick={()=>setNewCate({status:true,value:null})}>
            <span>افزودن دسته بندی</span>
            <FiPlusCircle className='text-2xl'/>
          </div>
          : 
          <div className='w-[100%] h-[4rem] bg-white flex justify-end rounded-sm relative transition-all shadow-[0px_0px_5px_2px_rgba(0,0,0,0.5)] pr-3 pl-2'>
          <input onKeyDown={(e)=>addCateHandler(e)} onChange={(e)=>setNewCate({status:true,value:e.target.value})} className='w-[100%] z-40 relative font-bold cursor-default placeholder:text-sm p-0 m-0 h-full text-[#363D4F] outline-none' placeholder='عنوان دسته بندی'/>
          <div className='flex flex-col h-full gap-1 justify-center'>
            <TiTick className='text-green-600 text-xl transition-all hover:text-green-500 cursor-pointer' onClick={(e)=>addCateHandler(e,'Tick')}/>
            <TiDelete className='text-red-600 text-xl transition-all hover:text-red-500 cursor-pointer' onClick={()=>setNewCate({status:false,value:null})}/>
          </div>
         </div>
          }
          <div className='w-full flex justify-center font-bold text-yellow-500'>
            <span className='text-xl'>دسته بندی وجود ندارد!</span>
          </div>
          </div>
        }
      </div>
      }
    </div>
    </>
    </div>
  )
}

export default SecondChildrenCate;