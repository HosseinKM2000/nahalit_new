import React, { useEffect, useRef, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import InteractiveButton from './InteractiveButton/InteractiveButton';
import { getPermissions } from '../../../../../features/dashboard/action';

function NewRole() {
    const [activePermissions,setActivePermissions] = useState([]);
    const permissions = [1,2,3,4,5,6,7,8,9];
    const titleRef = useRef();
    // const pathRef = useRef();
    const dispatch = useDispatch();
    
    const addPermission = (permission) => {

      if(!activePermissions.includes(permission))
      {
        setActivePermissions(pre => [...pre,permission]);
      }
      else
      {
        setActivePermissions(activePermissions.filter(item => item !== permission));
      }
    }
    
    const formKeyNotSuber = (e) => {
        if(e.key === 'Enter' && e.target.type !== 'textarea' | e.target.type.button)
        {
            e.preventDefault();
            e.stopPropagation()
        }
    }

    const formSubmiter = () => {
        const formData = {
          title:titleRef.current.value,
          // path:pathRef.current.value,
          permissions:activePermissions
        }
        switch(true)
        {
          case formData.title.length === 0 : toast.warn('عنوان را وارد کنید');
          break;
          case formData.title.length < 3 : toast.warn('عنوان کوتاه است');
          break;
          // case formData.path.length === 0 : toast.warn('مسیر را وارد کنید');
          // break;
          // case formData.path.length < 3 : toast.warn('مسیر کوتاه است');
          // break;
          case formData.permissions.length === 0 : toast.warn('دسترسی را مشخص کنید');
          break;
          default : console.log('sendData')
        }
    }

    useEffect(() => {
      dispatch(getPermissions())
    },[])

  return (
    <div className='w-full h-full flex-col justify-center items-center'>
      <div className='flex flex-col w-full 2xl:w-[70%] opacity-motion'>
        {/* toaster */}
        <ToastContainer 
         position='top-center'
         theme='colored'
         autoClose={2500}
         className='Toast_info'
         />
       <div className='w-full bg-[#C0D9DB] p-2'>
           <h1 className='font-semibold text-lg text-stone-800'>نقش جدید</h1>
       </div>
       <form  className='flex flex-col items-center bg-[#ffffff70] px-2 py-5 w-full gap-8 z-10 opacity-90' onKeyDown={(e)=>formKeyNotSuber(e)}>
           {/* title */}
       <div className='flex flex-col gap-2 w-full'>
           <label htmlFor="title" className='font-semibold text-[#2e424a]'>عنوان</label>
           <input type="text" className='p-1  outline-[#0ab694] w-full' ref={titleRef} required={true} name='title'/>
       </div>
               {/* path */}
       {/* <div className='flex flex-col gap-2 w-full'>
           <label htmlFor="path" className='font-semibold text-[#2e424a]'>مسیر</label>
           <input type="text" className='p-1  outline-[#0ab694] w-full' ref={pathRef} required={true} name='path'/>
       </div> */}
         {/* permissions */}
       <div className='flex flex-col gap-5 w-full'>
         <label htmlFor="permissions" className='font-semibold text-[#2e424a]'>وظایف</label>
         <div className='flex items-center flex-wrap gap-x-5 gap-y-8'>
            {
                permissions.map((item,index) => (
                    <InteractiveButton key={index} text={`permission${item}`} setPermission={addPermission}/>
                ))
            }
         </div>
         <div>

         </div>
       </div>
       <button onClick={(e)=>formSubmiter()} type='button' className='w-[80%] sm:w-[50%] 2xl:w-[30%] mt-5 bg-[#01d5ab] transition-all duration-300 hover:shadow-[0px_0px_5px_1px_rgba(0,0,0,0.2)] hover:bg-[#00dfb2] text-white font-bold text-xl py-1 rounded-sm'>ثبت</button>
   </form>
        </div>
    </div>
  )
}

export default NewRole;