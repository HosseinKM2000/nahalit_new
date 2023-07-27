import {React , useState} from 'react'
import {RiDeleteBack2Fill} from 'react-icons/ri';
import { useSelector , useDispatch } from 'react-redux';
import {AiTwotoneDelete} from 'react-icons/ai';
import {BsPencilFill} from 'react-icons/bs';
import {FiPlusCircle} from 'react-icons/fi';
import { TiTick , TiDelete } from 'react-icons/ti';
import { setSwitchCategories_2 , addChildren_2Category ,editeChildren_2Category , deleteChildren_2Category } from '../../../../../features/dashboard/dashboardSlice';
import { ToastContainer , toast} from 'react-toastify';
import { addChildrenCategories , deleteParentCategories , editeParentCategories } from '../../../../../features/dashboard/action';

function SecondChildrenCate() {

    const parentTitle = useSelector(state => state.dashboard.categoriesSwitch.value);
    const firstChildrenTitle = useSelector(state => state.dashboard.categoriesSwitch.value_2)
    const categories = useSelector(state => state.dashboard.categories);
    const parentIndex = useSelector(state => state.dashboard.categoriesSwitch.index);
    const firstChildrenIndex = useSelector(state => state.dashboard.categoriesSwitch.index_2);
    const [newCate,setNewCate] = useState({status:false,value:null});
    const goalCategory = categories.find(cate => cate.title === parentTitle);
    const goalChildren = goalCategory.children.find(cate => cate.title === firstChildrenTitle)
    // const childrenCategories  = categories.filter(cate => cate.category_id === firstChildrenIndex);
    const [edite,setEdite] = useState({oldValue:'',newValue:''});
    const dispatch = useDispatch();
    console.log(firstChildrenTitle,goalChildren)

    const editeHandler =  (e,key,index) => {
        e.stopPropagation();
      const exiteItem  = categories[parentIndex].children[firstChildrenIndex].children.find(cate=> cate.title === edite.newValue)
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
          dispatch(editeChildren_2Category({index,value:edite.newValue}))
           // dispatch(editeParentCategories({id,title:edite.newValue}))
        }
      }
    } 
    const addCateHandler = (e,key) => {
      if(e.code === 'Enter' || key === 'Tick')
      {
        if(newCate.value !== null )
        {
          const exiteItem  = categories[parentIndex].children[firstChildrenIndex].children.find(cate=> cate === newCate.value)
          console.log(exiteItem)
          if(exiteItem)
          {
            toast.error('!این عنوان موجود است')
          }
          else
          {
            dispatch(addChildren_2Category(newCate.value))
            setNewCate({status:false,value:null})
            // dispatch(addSecondChildrenCategories(newCate.value))
          }
        }
        else
        {
          toast.info('عنوان دسته بندی را وارد کنید')
        }
      }
    } 
    const deleteHandler = (e,index) => {
      e.stopPropagation();
      dispatch(deleteChildren_2Category(index))
      // dispatch(deleteParentCategories(id))
    }
    console.log(parentIndex,'ll')

  return (
    <div>
            <>
        <ToastContainer 
    position='top-center'
    theme='colored'
    autoClose={2500}
    className='Toast_info'
    />
    <div className='flex flex-col'>
      <div className='flex w-full items-center justify-between bg-[#ffffff1a] rounded-sm p-1'>
        <div className='flex items-center'>
          <span className='text-white font-bold'>{parentTitle} / {firstChildrenTitle}</span>
        </div>
        <RiDeleteBack2Fill onClick={()=>dispatch(setSwitchCategories_2({key:'FIRSTCHILDREN',value_2:goalChildren.title}))} className='text-[#ff4000] text-3xl rotate-[180deg] transition-all hover:text-red-600'/>
      </div>
      <div>
        {
         goalChildren.children.length !== 0
          ?
          <div className='flex flex-col w-full p-5 gap-3'>
           {
            goalChildren.children.map((child,index) => (
              <>
              {
                edite.oldValue !== child
                ?
                <div key={index}   className='h-[4rem] bg-[#ffffffaa] rounded-md justify-between flex items-center pr-3 pl-2 cursor-default transition-all hover:bg-[#ffffffd4] font-bold'>
                <span>{child}</span>
                <div className='flex flex-col gap-2'>
                  <AiTwotoneDelete className='text-red-700 hover:text-red-500 transition-all cursor-pointer' onClick={(e)=>deleteHandler(e,index)}/>
                  <BsPencilFill className='text-purple-700 hover:text-purple-500 transition-all cursor-pointer' onClick={(e)=>{
                    e.stopPropagation()
                    setEdite({oldValue:child,newValue:''})
                  }}/>
                </div>
              </div>
              :
              <div className='w-[100%] h-[4rem] bg-white flex justify-between pl-2 pr-3 rounded-sm relative transition-all shadow-[0px_0px_5px_2px_rgba(0,0,0,0.5)]'>
              <input onKeyDown={(e)=>editeHandler(e,'',index)} defaultValue={edite.oldValue} onChange={(e)=>setEdite({oldValue:child,newValue:e.target.value})} className='w-[80%] z-40 relative font-bold cursor-default placeholder:text-sm p-0 m-0 h-full text-[#363D4F] outline-none' placeholder='عنوان جدید'/>
              <div className='flex flex-col h-full gap-1 justify-center'>
                <TiTick className='text-green-600 text-xl transition-all hover:text-green-500 cursor-pointer' onClick={(e)=>{editeHandler(e,'Tick',index)}}/>
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
    </div>
    </>
    </div>
  )
}

export default SecondChildrenCate;