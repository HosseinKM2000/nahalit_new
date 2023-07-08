import { React , useEffect , useState } from 'react';
import { useSelector , useDispatch } from 'react-redux';
import { FaEdit } from 'react-icons/fa';
import { MdDeleteForever } from 'react-icons/md';
import { setSwitch } from '../../../../../features/dashboard/dashboardSlice';


function All({ currentItems , setShow}) {

  const dispatch = useDispatch();
  useEffect(()=>{
    console.log(currentItems)
  },[currentItems])
  return (
    <div className='flex items-center justify-center flex-wrap gap-8'>
        {
         currentItems.map((array,index) => (
          <div key={index} className='relative items-end p-2 w-[30%] flex h-[15rem]'>
            {
              array.map((item,i) => (
                <div className='h-[100%] w-[100%] absolute z-0' style={{backgroundImage:`url(${item.imageUrl})`,backgroundPosition:'center',backgroundRepeat:'no-repeat',backgroundSize:'cover',backgroundColor:`#${item.colorCode}`,right:`-${i}px`,rotate:`${i}deg`}}></div>
              ))
            }
            <div onClick={()=>setShow({status:true,value:array})} className='flex w-full text-sm transition-all cursor-default hover:text-white hover:bg-[#00b490] bg-white z-10 justify-center py-3 font-bold' style={{boxShadow:'rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px'}}>
              {
                array[0].productTitle
              }
            </div>
          </div>
          ))
        }
    </div>
  )
}

export default All;