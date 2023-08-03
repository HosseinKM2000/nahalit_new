import React, { useState } from 'react';
import { TbHandFinger } from 'react-icons/tb';
import { Link } from 'react-scroll';


function ScrollTop() {
    const [scrollTop,setScrollTop] = useState(window.scrollY);
    window.addEventListener('scroll',(e)=>{
        setScrollTop(window.scrollY)
    })
  return (
    <Link smooth={false} to='UP' className={scrollTop > 1500 ? 'text-white bottom-5 z-[100] fixed rounded-md left-5 bg-green-600 hover:bg-green-500 transition-all duration-300 cursor-pointer text-[1.8rem] sm:text-[2rem] flex w-fit h-fit' : 'text-white bottom-5 hidden rounded-md left-5 bg-green-600 hover:bg-green-500 transition-all duration-300 cursor-pointer text-[2rem]  w-fit h-fit'}><TbHandFinger className='m-1'/></Link>
  )
}

export default ScrollTop;