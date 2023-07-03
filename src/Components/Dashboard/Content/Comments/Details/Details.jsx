import React from 'react';
import { MdPersonPin  } from 'react-icons/md';
import { BiSolidChevronsRight  } from 'react-icons/bi';


function Details({ details , setShowDetails }) {
  return (
    <div className='w-full p-10 flex justify-center items-center h-full gap-1'>
      <div className='flex relative w-[90%] h-[90%] bg-[#ffffff49] items-center py-10 px-5 rounded-lg' style={{border:'1px solid #ffffffb0'}}>
        <div className='flex flex-col items-start gap-3 pl-3'>
          <MdPersonPin className='text-[4rem]' style={{color:`#${details.colorCode}`}}/>
          <span className='font-[shabnambold] text-[#1f2433]'>{details.name} محمد بیگی</span>
          <span>testemail@gmail.com</span>
          <span className='text-[#face9f] font-[shabnambold]'>سایت آماده لاراول</span>
          <span className='font-[shabnambold] text-[#1f2433]'>1401/11/24</span>
          <span className='text-white bg-green-700 rounded-full px-3 text-xs flex items-center'>تایید شده</span>
          <div className='flex items-center mt-5 flex-col gap-3'>
            <div className='gap-3 flex items-center'>
              <button className='bg-red-600 text-white transition-all duration-200 shadow-md hover:bg-red-500 px-5 py-1'>حذف</button>
              <button className='bg-lime-600 text-white px-5 transition-all duration-200 shadow-md hover:bg-lime-500 py-1'>تایید</button>
            </div>
            <button className='text-white w-full py-1 shadow-md flex items-center justify-center bg-yellow-600 transition-all duration-200 hover:bg-yellow-500' onClick={()=>setShowDetails({status:false,item:''})}>
              <BiSolidChevronsRight/>
            </button>
          </div>
        </div>
        <div className='px-3 py-3 flex flex-col text-stone-800 gap-5 justify-start w-full h-full'>
          <div className='flex items-center gap-1'>
              <span>&#9899;</span>
              <h1 className='font-[shabnambold]'>عنوان تستی برای کامنت</h1>
          </div>
          <p className='text-sm text-justify text-white leading-6 max-h-[20rem] min-h-full px-3 comment-scroll overflow-y-scroll w-full' style={{borderBottom:'1px solid white',borderRight:'1px solid white',textShadow:'1px 1px 1px black'}}>ممنون عالی بود</p>
        </div>
      </div>
    </div>
  )
}

export default Details;