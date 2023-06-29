import { React , useEffect , useState } from 'react';
import { useSelector , useDispatch } from 'react-redux';
import { FaEdit } from 'react-icons/fa';
import { MdDeleteForever } from 'react-icons/md';
import { setSwitch } from '../../../../../features/dashboard/dashboardSlice';


function All({currentItems}) {
  const [hover,setHover] = useState({status:false,key:''});
  const dispatch = useDispatch();

  return (
    <div className='flex items-center flex-wrap justify-center gap-5'>
      {
       currentItems.map((item,index) => (
          <div onMouseEnter={()=>setHover({status:true,key:index})} onMouseLeave={()=>setHover({status:false,key:''})} key={index} className='w-[30%] flex flex-col rounded-3xl overflow-hidden cursor-default transition-all duration-500 hover:translate-y-[-0.2rem] hover:brightness-125' style={{boxShadow:'0px 15px 18px -3px #00000073'}}>
            <div className='h-[9rem]' style={{backgroundImage:`url(${item.url})`,backgroundPosition:'center',backgroundRepeat:'no-repeat',backgroundSize:'cover'}}></div>
            <div className='flex flex-col bg-[#ffff] py-3 text-sm font-[shabnambold] px-3 gap-1'>
              <span className='line-clamp-1'>{item.title}</span>
              <div className='w-fill flex items-center justify-between'>
               <span className='text-stone-600'>1401/10/13</span>
                <div className={ hover.status && hover.key === index ? 'flex items-center gap-1' :'hidden items-center gap-1'}>
                <FaEdit className='text-orange-600 text-base cursor-pointer transition-all hover:text-orange-500' onClick={()=>dispatch(setSwitch({key:'gallery',value:'edite',id:index}))}/>
                <MdDeleteForever className='text-red-600 text-xl cursor-pointer transition-all hover:text-red-500'/>
               </div>
              </div>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default All;