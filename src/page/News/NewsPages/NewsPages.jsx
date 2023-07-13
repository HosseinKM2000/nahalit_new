import React from 'react';
import { text } from '../../../API/data';
import { Link } from 'react-router-dom';
import './NewsPages.css';
// import Img from '../../assets/img/6.png';
import {MdPersonPin} from 'react-icons/md';

function NewsPages({currentItems}) {
  return (
    <div className='news flex flex-column sm:flex-row justify-center items-center flex-wrap gap-[3rem] sm:gap-[1rem]'>
    {
      currentItems.map((item,index) => (
        <div key={index} className='new w-[80%] sm:w-[70%] md:w-[30%] lg:w-[20%] border-2 border-for-border flex flex-col justify-center items-start rounded-sm  overflow-hidden' style={{boxShadow:'0px 0px 5px -2px #000'}}> 
          <Link to={{pathname:'/articles/article',search:`name=${item.title}`}}><img src={item.url} alt={item.title} className='cursor-pointer hover:brightness-125'/></Link>
          <div className='w-full py-1 2xl:py-5 flex flex-row items-center justify-end relative'>
          <Link to={{pathname:'/articles/article',search:`name=${item.title}`}} className='w-3/4 mx-3 text-base text-[1.1rem] line-clamp-2 text-gray-66 hover:text-gray-77'><span>{item.title}</span></Link>
          <MdPersonPin className='w-[3rem] h-[3rem] 2xl:w-[5rem] 2xl:h-[5rem] hover:brightness-105 text-gray-white ml-2 cursor-pointer'/>
          </div>
          <p className='text-sm px-3 text-gray-77 line-clamp-3 leading-7'>{text}</p>
          <Link to={{pathname:'/articles/article',search:`name=${item.title}`}} className='text-pink hover:text-light-pink px-3 my-2 text-sm font-bold 2xl:mt-6 cursor-pointer'><span>جزییات بیشتر</span></Link>
          <div className='flex flex-row text-xs text-gray-5E5E justify-between  w-full p-3' style={{borderTop:'1px solid #D2D2D2'}}>
            <span>دوشنبه 14 فروردین 1402</span>
            <Link to={{pathname:'/articles/article',search:`name=${item.title}`}}><span className='cursor-pointer hover:text-gray-88'>بدون دیدگاه</span></Link>
          </div>
        </div>
      ))
    }
  </div>
  )
}

export default NewsPages;