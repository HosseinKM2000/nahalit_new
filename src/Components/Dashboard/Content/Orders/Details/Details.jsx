import moment from 'moment-jalaali';
import React from 'react';
import { MdCancel } from 'react-icons/md';

function Details({ details , setShowDetails , users }) {
    const user = users.find(user => user.id === details.user_id);
    function separateByCommas(number) {
        let numberString = String(number);
        
        let separatedNumber = '';
        let counter = 0;
        
        for (let i = numberString.length - 1; i >= 0; i--) {
          if (counter === 3) {
            separatedNumber = ',' + separatedNumber;
            counter = 0;
          }
          separatedNumber = numberString.charAt(i) + separatedNumber;
          counter++;
        }
        
        return separatedNumber
    }
    
  return (
    <div className='p-3 sm:p-10 w-full flex justify-center'>
        <div className='w-full 2xl:w-[70%] rounded-md bg-[#ffffff8f] flex flex-col gap-8 py-5 px-3'>
            <div className='pb-3 flex items-center justify-between' style={{borderBottom:'solid 1px black'}}>
                <h1 className='font-[shabnamBold] text-xl text-stone-800'>جزئیات</h1>
                <MdCancel className='text-red-600 font-bold text-3xl transition-all hover:text-red-500' onClick={(e)=>setShowDetails({status:false,value:''})}/>
            </div>
            <div className='flex flex-col gap-2'>
                <span className='font-[shabnamBold] text-[#2e424a]'>کاربر:</span>
                <span className='pr-5'>{`${user?.first_name} ${user?.last_name}`}</span>
            </div>
            <div className='flex flex-col gap-2'>
                <span className='font-[shabnamBold] text-[#2e424a]'>تاریخ ایجاد:</span>
                <span className='pr-5 font-[shabnamBold]'>{moment(user?.created_at).format('jYYYY/jMM/jDD')}</span>
            </div>
            <div className='flex flex-col gap-2'>
                <span className='font-[shabnamBold] text-[#2e424a]'>وضعیت:</span>
                {
                    details.status === null
                    ?
                    <span className='pr-5 text-yellow-800'>تکمیل نشده</span>
                    :
                    details.status === "0"
                    ?
                    <span className='pr-5 text-red-800'>لغو شد</span>
                    :
                    <span className='pr-5 text-green-800'>تکمیل شد</span>
                }
            </div>
            <div className='flex flex-col gap-2'>
                <span className='font-[shabnamBold] text-[#2e424a]'>جمع کل:</span>
                <span className='pr-5 font-[shabnamBold]'>{ separateByCommas(details.total) }</span>
            </div>
            {/* <div className='w-full flex items-center justify-center'>
            <button className='bg-red-600 text-white w-[60%] px-0 md:w-fit md:px-40 py-1 font-bold transition-all hover:bg-red-500 shadow-md'>حذف</button>
            </div> */}
        </div>
    </div>
  )
}

export default Details;