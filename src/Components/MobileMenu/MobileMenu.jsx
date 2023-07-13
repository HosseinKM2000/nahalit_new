import React from 'react';
import { Link } from 'react-router-dom';

function MobileMenu() {
  return (
    <menu className='w-full h-full p-5'>
        <ul className='flex flex-col items-center w-full h-full justify-between'>
            <li className='text-[1.3rem] text-white font-[shabnambold] hover:bg-[#ffffffce] rounded-sm hover:text-[#5ECF93] w-full text-center'><Link to={'/'}>صفحه اصلی</Link></li>
            <li className='text-[1.3rem] text-white font-[shabnambold] hover:bg-[#ffffffce] rounded-sm hover:text-[#5ECF93] w-full text-center'><Link>محصولات</Link></li>
            <li className='text-[1.3rem] text-white font-[shabnambold] hover:bg-[#ffffffce] rounded-sm hover:text-[#5ECF93] w-full text-center'><Link>ثبت سفارش</Link></li>
            <li className='text-[1.3rem] text-white font-[shabnambold] hover:bg-[#ffffffce] rounded-sm hover:text-[#5ECF93] w-full text-center'><Link>بلاگ</Link></li>
            <li className='text-[1.3rem] text-white font-[shabnambold] hover:bg-[#ffffffce] rounded-sm hover:text-[#5ECF93] w-full text-center'><Link>نمونه کارها</Link></li>
            <li className='text-[1.3rem] text-white font-[shabnambold] hover:bg-[#ffffffce] rounded-sm hover:text-[#5ECF93] w-full text-center'><Link>آموزش ورود</Link></li>
            <li className='text-[1.3rem] text-white font-[shabnambold] hover:bg-[#ffffffce] rounded-sm hover:text-[#5ECF93] w-full text-center'><Link>استخدام</Link></li>
            <li className='text-[1.3rem] text-white font-[shabnambold] hover:bg-[#ffffffce] rounded-sm hover:text-[#5ECF93] w-full text-center'><Link>خدمات ما</Link></li>
        </ul>
    </menu>
  )
}

export default MobileMenu;