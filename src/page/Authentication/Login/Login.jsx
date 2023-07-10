import { React , useState , useRef } from 'react';
import { toast , ToastContainer } from 'react-toastify';
import { HiOutlineLogin } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import HomeButton from '../HomeButton/HomeButton';

function Login() {
  const [isVerified, setIsVerified] = useState(false);
  const emailOrphoneRef = useRef();
  const passwordRef = useRef();
  const handleVerify = () => {
    setIsVerified(true);
  };
  const handleExpire = () => {
    setIsVerified(false);
  };
  const loginHandler = () => {
    let emailphone = emailOrphoneRef.current.value;
    let password = passwordRef.current.value;
     console.log(emailphone , password)
    switch(true)
    {
      case emailphone.length === 0 : toast.warn("ایمیل یا شماره تلفن را وارد کنید");
      break;
      case password.length === 0 : toast.warn('رمز عبور را وارد کنید');
      break;
      case emailphone.search(/\D+/g) === -1 && emailphone.includes('0') === false && emailphone.includes('98') === false : toast.warn('شماره تلفن صحیح نیست');
      break;
      case emailphone.search(/\D+/g) === -1  && emailphone.length <= 10 : toast.warn('شماره تلفن کوتاه است')
      break;
      case emailphone.search(/\D+/g) !== -1 && emailphone.includes('@') === false : toast.warn('ایمیل صحیح نیست');
      break;
      case emailphone.search(/\D+/g) !== -1 && emailphone.indexOf('@') === 0 : toast.warn('ایمیل صحیح نیست');
      break;
      case emailphone.search(/\D+/g) !== -1 && emailphone.length < 8 : toast.warn('ایمیل کوتاه است');
      break;
      case password.length < 8 : toast.warn('رمز عبور کوتاه است')
      break;
      default : alert(emailphone.includes('98'))
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
    <div className='w-full relative min-h-screen bg-gray-600 login-gradient flex justify-center font-[shabnamMedium] items-center'>
      <HomeButton/>
      <div className='flex flex-col w-[80%] 2xl:w-[50%] 2xl:my-10 my-5 sm:m-0 sm:w-[50%] overflow-hidden rounded-md shadow-[0px_2px_5px_1px_rgba(0,0,0,0.5)]'>
        <div className='w-full bg-[#2b323b] text-white justify-center flex py-5 2xl:py-10'>
            <div className='flex flex-col gap-1 items-center'>
                    <div className='bg-[#464c56] rounded-[50%] 2xl:h-[6rem] 2xl:w-[6rem] w-[4rem] 2xl:p-3 h-[4rem] 2xl:text-7xl text-5xl flex justify-center items-center'>
                      <HiOutlineLogin/>
                    </div>
                    <span className='text-lg 2xl:text-2xl'>ورود</span>
            </div>
        </div>
        <form action="" onSubmit={(e)=>e.preventDefault()} className='bg-white flex flex-col gap-5 2xl:gap-10 2xl:py-10 text-stone-700 py-3 px-5'>
                  <div className='flex flex-col items-end gap-2 w-full lg:items-start text-sm sm:text-base 2xl:text-2xl'>
                    <label className='text-stone-600 w-full' htmlFor="emailorphone">ایمیل / شماره موبایل:</label>
                    <input ref={emailOrphoneRef} type="text" className='bg-[#c3cad2] font-[shabnambold] text-left outline-none border-none 2xl:p-2 w-[90%] lg:w-[70%] p-1' name='emailorphone'/>
                  </div>
                  <div className='flex flex-col items-end gap-2 w-full lg:items-start text-sm sm:text-base 2xl:text-2xl'>
                    <label className='text-stone-600 w-full' htmlFor="password">گذرواژه:</label>
                    <input ref={passwordRef} type="password" name="password" id="" className='bg-[#c3cad2] text-left 2xl:p-2 outline-none border-none w-[90%] lg:w-[70%] p-1'/>
                  </div>
                  <div className='flex items-center gap-1 2xl:gap-3'>
                    <input type="checkbox" name="remember" id="" className='2xl:scale-150'/>
                    <label htmlFor="remember" className='text-sm font-thin text-stone-500 2xl:text-xl'>مرا به خاطر بسپار</label>
                  </div>
                  <div className='w-full flex flex-col items-center text-sm sm:text-base justify-center gap-3'>
              <button type="button" onClick={()=>loginHandler()} className='bg-green-600 2xl:text-2xl 2xl:py-2 hover:bg-green-500 text-center transition-all duration-300 text-white rounded-md py-1 w-[80%] sm:w-[60%]'>ورود</button>
                    <Link to={'/register'} className='bg-blue-600 2xl:text-2xl 2xl:py-2 hover:bg-blue-500 text-center transition-all duration-300 text-white rounded-md py-1 w-[80%] sm:w-[60%]'><button type="button">عضویت</button></Link>
                  </div>
                  <span className='w-full  text-left text-sm text-stone-600 cursor-pointer hover:text-blue-500 transition-all 2xl:text-xl'>گذرواژه خود را فراموش کرده اید؟</span>
                  <span className='w-full text-center text-stone-500 font-bold 2xl:text-2xl'>یا</span>
                  <div className='w-full flex flex-col items-center justify-center'>
                   <Link className='bg-[#54a733] 2xl:text-2xl text-sm sm:text-base 2xl:py-2 hover:bg-[#70c64e] text-center transition-all duration-300 text-white rounded-md py-1 w-[80%] sm:w-[60%]'><button type="button">ورود با کد یکبار مصرف</button></Link>
                  </div>
        </form>
      </div>
    </div>
    </>
  )
}

export default Login;