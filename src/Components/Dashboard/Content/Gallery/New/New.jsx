import { React , useState , useRef } from 'react';
import { ToastContainer } from 'react-toastify';

function New() {
  const [imageName,setimageName] = useState('');
  const titleRef = useRef();
  const formKeyNotSuber = (e) => {
    if(e.key === 'Enter' && e.target.type !== 'textarea' | e.target.type.button)
    {
        e.preventDefault();
        e.stopPropagation()
    }
   }

  return (
        <div className='flex flex-col w-full opacity-motion'>
                   {/* green circles in background */}
                     <div className='w-[15rem] h-[15rem] rounded-full bg-[#6FEDD6] blur-[12rem] absolute top-[1rem] right-[1rem] z-0'></div>
                     <div className='w-[15rem] h-[15rem] rounded-full bg-[#6FEDD6] blur-[12rem] absolute bottom-[1rem] left-[1rem] z-0'></div>
                     <div className='w-[15rem] h-[15rem] rounded-full bg-[#6FEDD6] blur-[12rem] absolute bottom-[-40rem] left-[1rem] z-0'></div>
                     <div className='w-[15rem] h-[15rem] rounded-full bg-[#6FEDD6] blur-[12rem] absolute bottom-[-40rem] right-[1rem] z-0'></div>
             {/* toaster */}
             <ToastContainer 
              position='top-center'
              theme='colored'
              autoClose={2500}
              className='Toast_info'
              />
        <div className='w-full bg-[#C0D9DB] p-2'>
            <h1 className='font-semibold text-xl text-stone-800'>ایجاد</h1>
        </div>
        <form className='flex flex-col items-center bg-[#ffffff70] px-2 py-5 w-full gap-8 z-10 opacity-90' onKeyDown={(e)=>formKeyNotSuber(e)}>
           {/* title */}
            <div className='flex flex-col gap-2 w-full'>
                <label htmlFor="title" className='font-semibold text-[#2e424a]'>عنوان</label>
                <input type="text" className='p-1  outline-[#0ab694] w-full' ref={titleRef} required={true} name='title'/>
            </div>
            {/* image */}
            <div className='flex flex-col gap-2 w-full'>
                <label htmlFor="poster" className='font-semibold text-[#2e424a]'>تصویر</label>
                <input onChange={(e)=>setimageName(e.target.files[0].name)} type="file" className='p-1 outline-[#0ab694] w-full text-left' required={true} name='poster'/>
            </div>
            <button type='submit' className='w-[50%] mt-5 bg-[#01d5ab] transition-all duration-300 hover:shadow-[0px_0px_5px_1px_rgba(0,0,0,0.2)] hover:bg-[#00dfb2] text-white font-bold text-xl py-1 rounded-sm'>ثبت</button>
        </form>
    </div>
  )
}

export default New;