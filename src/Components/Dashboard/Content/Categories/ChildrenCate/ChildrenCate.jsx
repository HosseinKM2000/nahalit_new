import React from 'react'
import {RiDeleteBack2Fill} from 'react-icons/ri';
import { useSelector , useDispatch } from 'react-redux';
import {AiTwotoneDelete} from 'react-icons/ai';
import {BsPencilFill} from 'react-icons/bs';

function ChildrenCate() {

  const parentTitle = useSelector(state => state.dashboard.categoriesSwitch.value)
  const categories = useSelector(state => state.dashboard.categories);
  const goalCategory = categories.find(cate => cate.title === parentTitle)

  return (
    <div className='flex flex-col'>
      <div className='flex w-full items-center justify-between bg-[#ffffff1a] rounded-sm p-1'>
        <div className='flex items-center'>
          <span className='text-white font-bold'>{parentTitle}/</span>
        </div>
        <RiDeleteBack2Fill className='text-red-700 text-3xl rotate-[180deg] transition-all hover:text-red-600'/>
      </div>
      <div>
        {
          goalCategory.children.length !== 0
          ?
          <div className='flex flex-col w-full p-5 gap-3'>
           {
            goalCategory.children.map((child,index) => (
              <div key={index} className='h-[4rem] bg-[#ffffffaa] rounded-md justify-between flex items-center pr-3 pl-2 cursor-default transition-all hover:bg-[#ffffffd4] font-bold'>
                <span>{child.title}</span>
                <div className='flex flex-col gap-2'>
                  <AiTwotoneDelete className='text-red-700 hover:text-red-500 transition-all cursor-pointer'/>
                  <BsPencilFill className='text-purple-700 hover:text-purple-500 transition-all cursor-pointer'/>
                </div>
              </div>
            ))
           }
          </div>
          :
          <span>زیر شاخه ای وجود ندارد</span>
        }
      </div>
    </div>
  )
}

export default ChildrenCate