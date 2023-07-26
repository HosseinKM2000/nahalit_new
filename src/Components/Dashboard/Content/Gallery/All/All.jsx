import { React, useEffect } from 'react';
import { useDispatch } from 'react-redux';


function All({ currentItems , setShow}) {

  const dispatch = useDispatch();
  useEffect(()=>{
    console.log(currentItems)
  },[currentItems])
  return (
    <div className='flex items-center justify-center flex-wrap gap-8 mb-5'>
        {
         currentItems.map((array,index) => (
          <div key={index} className='relative items-end justify-center w-[15rem] xl:w-[20rem] flex h-[15rem] xl:h-[20rem] overflow-y-hidden'>
            {
              array.map((item,i) => (
                <div className='h-[80%] w-[80%] absolute z-0' style={{backgroundImage:`url(${item.imageUrl})`,backgroundPosition:'center',backgroundRepeat:'no-repeat',backgroundSize:'cover',backgroundColor:`#${item.colorCode}`,rotate: index % 2 === 0 ? `${array.length-i}deg` : `-${array.length-i}deg`}}></div>
              ))
            }
            <div onClick={()=>setShow({status:true,value:array})} className='flex w-[90%] text-sm transition-all cursor-default hover:text-white hover:bg-[#00b490] bg-white z-10 justify-center py-3 font-bold'>
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