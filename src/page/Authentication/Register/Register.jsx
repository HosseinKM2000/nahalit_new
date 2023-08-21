import { React, useRef, useState } from 'react';
import { Helmet } from 'react-helmet';
import { BsPersonFill } from 'react-icons/bs';
import { MdOutlineRemoveRedEye } from 'react-icons/md';
import { PiEyeClosedBold } from 'react-icons/pi';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import loadingSvg from '../../../assets/img/Rolling-0.8s-200px.svg';
import { register } from '../../../features/authentication/action';
import HomeButton from '../HomeButton/HomeButton';

function Register() {
  const [Switch,setSwitch] = useState(false);
  const [showpassword,setShowpassword] = useState(false);
  const [acceptCode,setAcceptCode] = useState(false);
  const nameRef = useRef();
  const familyRef = useRef();
  const usernameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const codeRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmationRef = useRef();
  const dispatch = useDispatch();
  const loading = useSelector(state => state.authentication.loading);

  const registerHandler = (e) => {
    e.preventDefault()
    let first_name = nameRef.current.value || "javad";
    let last_name = familyRef.current.value || "javadi";
    let username = usernameRef.current.value || "javad12345654";
    let email = emailRef.current.value || "test1234fddf5@gmail.com";
    let mobile = phoneRef.current.value || "09123547587";
    let password = passwordRef.current.value || "012345678lk";
    let password_confirmation = passwordConfirmationRef.current.value || "012345678lk";

    switch(true)
    {
      case first_name.length < 2 && first_name.length !== 0 : toast.warn('!نام کوتاه است');
      break;
      case first_name.length === 0 : toast.warning('نام را وارد کنید');
      break;
      case first_name.search(/\D+/g) === -1 : toast.warn('نام قابل قبول نیست');
      break;
      case last_name.length < 3 && last_name.length !== 0 : toast.warn('!نام خانوادگی کوتاه است');
      break;
      case last_name.length === 0 : toast.warning('نام خانوادگی را وارد کنید');
      break;
      case last_name.search(/\D+/g) === -1 : toast.warn('نام خانوادگی قابل قبول نیست');
      break;
      case username.length < 5 && username.length !== 0 : toast.warn('!نام کاربری کوتاه است');
      break;
      case username.length === 0 : toast.warning('نام کاربری را وارد کنید');
      break;
      case username.search(/\D+/g) === -1 : toast.warn('نام کاربری قابل قبول نیست');
      break;
      case email.length === 0 : toast.warn('ایمیل را وارد کنید');
      break;
      case email.length < 5 : toast.warn('ایمیل کوتاه است');
      break;
      case !email.includes('@') : toast.warn('ایمیل صحیح نیست');
      break;
      case email.indexOf('@') < 1 : toast.warn('ایمیل صحیح نیست');
      break;
      case mobile.length === 0 : toast.warn('شماره تلفن را وارد کنید');
      break;
      case mobile.length < 11 : toast.warn('شماره تلفن کوتاه است');
      break;
      case password.length === 0 : toast.warn('رمز عبور را وارد کنید');
      break;
      case password.length < 8 : toast.warn('رمز عبور کوتاه است');
      break;
      case password.search(/\D+/g) === -1 || password.search(/\d+/g) === -1 : toast.warn('رمز عبور باید ترکیبی از اعداد و حروف باشد')
      break; 
      case password_confirmation.length === 0 : toast.warn('تکرار رمز عبور را وارد کنید');
      break;
      case password !== password_confirmation : toast.warn('تکرار رمز عبور تطابق ندارد');
      break;
      default : formSubmitter({first_name,last_name,username,mobile,email,password,password_confirmation});
    }
  }
  const formSubmitter = (dataObj) => {
    dispatch(register(dataObj))
    setAcceptCode(!acceptCode)
  }
  
  return (
    <>
    <Helmet>
      <title>نهال آی تی |  ثبت نام</title>
    </Helmet>
    <ToastContainer 
    position='top-center'
    theme='colored'
    autoClose={2500}
    className='Toast_info'
    />
    <div className='w-screen relative min-h-[dvh] bg-gray-300 login-gradient flex justify-center font-[shabnamMedium] items-center'>
        <HomeButton/>
        <div className='container mx-auto max-w-[400px]'>
          <div className='flex flex-col my-5 overflow-hidden rounded-md shadow-[0px_2px_5px_1px_rgba(0,0,0,0.5)]'>
              <div className='w-full bg-[#2b323b] text-white justify-center flex py-5 2xl:py-10'>
                  <div className='flex flex-col gap-1 2xl:gap-3 items-center'>
                      <div className='bg-[#464c56] rounded-[50%] w-[4rem] h-[4rem] 2xl:h-[6rem] 2xl:w-[6rem] 2xl:text-7xl 2xl:p-3 text-5xl flex justify-center items-center'>
                        <BsPersonFill/>
                      </div>
                      <span className='text-lg'>عضویت</span>
                  </div>
              </div>
              <form onSubmit={(e)=>registerHandler(e)} className='bg-white flex flex-col 2xl:gap-10 gap-5 text-stone-700 py-5 px-5'>
                  <div className='flex flex-col items-center gap-2 w-full text-sm'>
                    <label className='text-stone-600 w-full' htmlFor="name">نام:</label>
                    <input ref={nameRef} type="text" className='bg-gray-200 text-left outline-none border-none w-full p-1' name='name'/>
                  </div>
                  <div className='flex flex-col items-center gap-2 w-full text-sm'>
                    <label className='text-stone-600 w-full' htmlFor="family">نام خانوادگی:</label>
                    <input ref={familyRef} type="text" className='bg-gray-200 text-left outline-none border-none w-full p-1' name='family'/>
                  </div>
                  <div className='flex flex-col items-center gap-2 w-full text-sm'>
                    <label className='text-stone-600 w-full' htmlFor="username">نام کاربری:</label>
                    <input ref={usernameRef} type="text" className='bg-gray-200 text-left outline-none border-none w-full p-1' name='username'/>
                  </div>
                  <div className='flex flex-col items-center gap-2 w-full text-sm'>
                      <label className='text-stone-600 w-full' htmlFor="email">ایمیل:</label>
                      <input ref={emailRef} className='bg-gray-200 outline-none text-left border-none w-full p-1' type="email" name="email" id="" />
                  </div>
                  <div className='flex flex-col items-center gap-2 w-full text-sm'>
                      <label className='text-stone-600 w-full' htmlFor="phone">شماره موبایل:</label>
                        <input onChange={(e)=>{
                          if(e.target.value.search(/\D+/g) !== -1)
                          {
                            e.target.value = ''
                            toast.warn("شماره تلفن صحیح را وارد کنید")
                          }
                        }} ref={phoneRef}  type="text" className='bg-gray-200 outline-none text-left border-none w-[100%] p-1' name='phone'/>
                  </div>
                  <div className='flex flex-col items-end gap-2 w-full text-sm'>
                    <label htmlFor="password" className='text-stone-600 w-full'>رمز عبور</label>
                    <div className='w-full flex items-center justify-end 2xl:justify-center gap-3'>
                    {
                      !showpassword
                      ?
                      <MdOutlineRemoveRedEye onClick={()=>setShowpassword(true)}/>
                      :
                      <PiEyeClosedBold onClick={()=>setShowpassword(false)}/>
                    }
                    <input type={showpassword?'text':'password'} minLength={'8'} ref={passwordRef} name="password" id="password" className='bg-gray-200 outline-none text-left border-none w-[100%] sm:w-[90%] 2xl:w-[80%] p-1'/>
                    </div>
                  </div>
                  <div className='flex flex-col items-end gap-2 w-full text-sm'>
                    <label htmlFor="passwordConfermation" className='text-stone-600 w-full'>تکرار رمز عبور</label>
                    <div className='w-full flex items-center justify-end 2xl:justify-center gap-3'>
                    <input type={showpassword?'text':'password'} minLength={'8'} ref={passwordConfirmationRef} name="passwordConfermation" id="passwordConfermation" className='bg-gray-200 outline-none text-left border-none w-[100%] sm:w-[90%] 2xl:w-[80%] p-1'/>
                    </div>
                  </div>
                  {
                    acceptCode 
                    ?
                    <div className='flex items-center justify-start gap-2 w-full mt-5 text-s'>
                      <label htmlFor="acceptCode">کد تایید:</label>
                      <input name='acceptCode' type="text" onChange={(e)=>{}} className='bg-gray-200 text-left outline-none border-none w-[20%] p-1 2xl:w-[10%]'/>
                    </div>
                    :
                    <></>
                  }
                  <span className=' text-stone-500 text-xs text-justify'>اطلاعات شخصی شما برای پردازش سفارش شما استفاده می‌شود، و پشتیبانی از تجربه شما در این وبسایت، و برای اهداف دیگری که در سیاست حفظ حریم خصوصی توضیح داده شده است.</span>
                  <div className='w-full flex flex-col items-center gap-3 2xl:gap-5 my-3'>
                    {
                      acceptCode
                      ?
                      <button type="button" className='bg-green-600  hover:bg-green-500 transition-all font-bold duration-300 text-white rounded-md py-1 w-full'>ثبت کد تایید</button>
                      :
                      <button type="submit" className='bg-green-600  font-bold hover:bg-green-500 transition-all duration-300 text-white rounded-md py-1 w-full'>
                        {
                          loading
                          ?  <img src={loadingSvg} alt="loading" className='w-[1.5rem]'/>
                          : <span>عضویت</span>
                        }
                      </button>
                    }
                    <Link to={'/login'} className='bg-blue-600  hover:bg-blue-500 transition-all duration-300 text-white rounded-md font-bold py-1 w-full flex justify-center'><button>ورود</button></Link>
                  </div>
              </form>
          </div>
        </div>
    </div>
    </>
  )
}

export default Register;