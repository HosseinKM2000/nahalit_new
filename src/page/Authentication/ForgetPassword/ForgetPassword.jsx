import React from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { FaRegEyeSlash } from 'react-icons/fa';
import { MdOutlineRemoveRedEye } from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';
import { forgetPassword } from '../../../features/authentication/action';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { changeRedirect } from '../../../features/authentication/AuthenticationSlice';
import { useEffect } from 'react';

function ForgetPassword() {
    const [showPassword,setShowPassword] = useState(false);
    const mobileRef = useRef();
    const newPasswordRef = useRef();
    const new_password_confirmationRef = useRef();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const loading = useSelector(state => state.authentication.loading);
    const redirect = useSelector(state => state.authentication.redirect);

    useEffect(() => {
        if(redirect)
        {
          setTimeout(()=>{
            navigate("/login")
          },1000)
          dispatch(changeRedirect())
        }
      },[redirect]);

    const changePassword = (e) => {
        e.preventDefault()
        let mobile = mobileRef.current.value;
        let new_password = newPasswordRef.current.value;
        let new_password_confirmation = new_password_confirmationRef.current.value;
        
        switch(true)
        {
          case mobile.length === 0 : toast.warn('شماره تلفن را وارد کنید');
          break;
          case mobile.length < 11 : toast.warn('شماره تلفن کوتاه است');
          break;
          case new_password.length === 0 : toast.warn('رمز عبور را وارد کنید');
          break;
          case new_password.length < 8 : toast.warn('رمز عبور کوتاه است');
          break;
          case new_password.search(/\D+/g) === -1 || new_password.search(/\d+/g) === -1 : toast.warn('رمز عبور باید ترکیبی از اعداد و حروف باشد')
          break; 
          case new_password_confirmation.length === 0 : toast.warn('تکرار رمز عبور را وارد کنید');
          break;
          case new_password !== new_password_confirmation : toast.warn('تکرار رمز عبور تطابق ندارد');
          break;
          default : formSubmitter({mobile,new_password,new_password_confirmation});
        }
      };

      const formSubmitter = (dataObj) => {
        dispatch(forgetPassword(dataObj))
      }

  return (
    <>
        <Helmet>
            <title>نهال آی تی | بازیابی رمز عبور</title>
        </Helmet>
        <div className='w-screen relative min-h-[100dvh] bg-gray-300 flex justify-center font-[shabnamMedium] items-center'>
            <div className='flex flex-col items-center absolute top-10 gap-3'>
                <span className='font-[shabnamBold] text-xl'>تغییر رمز عبور</span>
                <Link to={"/login"}><span className='font-[shabnam] text-red-700 text-lg underline cursor-pointer hover:text-red-600 transition-all'>بازگشت به صفحه ورود</span></Link>
            </div>
            <form onSubmit={(e)=>changePassword(e)} className='bg-white flex flex-col 2xl:gap-10 gap-5 text-stone-700 py-5 px-10 2xl:px-20'>
                <div className='flex flex-col items-center gap-2 w-full lg:items-center text-sm'>
                    <label className='text-stone-600 w-full' htmlFor="phone">شماره موبایل:</label>
                    <input type="number" ref={mobileRef} className='bg-gray-300 font-[shabnam] text-left outline-none text-[1.1rem] border-none 2xl:p-2 w-full p-2' name='phone'/>
                </div>
                <div className='flex flex-col items-end gap-2 w-full text-sm'>
                          <label className='text-stone-600 w-full' htmlFor="password">رمز عبور جدید:</label>
                          <div className='w-full flex bg-gray-300 items-center justify-end 2xl:justify-center gap-3 p-2 text-[1.1rem]'>
                          {
                            !showPassword
                            ?
                            <MdOutlineRemoveRedEye onClick={()=>setShowPassword(true)}/>
                            :
                            <FaRegEyeSlash onClick={()=>setShowPassword(false)}/>
                          }
                          <input type={showPassword?'text':'password'} minLength={'8'} ref={newPasswordRef} name="password" id="password" className='bg-transparent text-left outline-none text-[1.1rem] font-[shabnam] border-none 2xl:p-2 w-full'/>
                          </div>
                </div>
                <div className='flex flex-col items-end gap-2 w-full text-sm'>
                    <label htmlFor="passwordConfermation" className='text-stone-600 w-full'>تکرار رمز عبور:</label>
                    <div className='w-full flex items-center justify-end 2xl:justify-center gap-3'>
                    <input type={showPassword?'text':'password'} minLength={'8'} ref={new_password_confirmationRef} name="passwordConfermation" id="passwordConfermation" className='bg-gray-300 outline-none text-left font-[shabnam] border-none w-full p-2 text-[1.1rem]'/>
                    </div>
                </div>
                <button type='submit' className='bg-blue-600  hover:bg-blue-500 transition-all duration-300 text-white rounded-md font-bold py-2 w-full flex justify-center'>
                    {
                        loading
                        ?
                        <img src={"/img/Rolling-0.8s-200px.svg"} alt="loading" className='w-[1.5rem]'/>
                        :
                        "ثبت"
                    }
                </button>
            </form>
        </div>
    </>
  )
}

export default ForgetPassword;