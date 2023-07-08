import React , {useState} from 'react';
import { RiDeleteBin2Fill , RiEditCircleFill } from 'react-icons/ri';
import Edite from '../Edite/Edite';
import { RiDeleteBack2Fill } from 'react-icons/ri';

function Show({ array , setShow }) {
    const [hover,setHover] = useState({status:false,key:''});
    const [edite,setEdite] = useState({status:false,value:''});
  return ( 
    <>
     {
        !edite.status
        ?
        <div className='flex w-full flex-col gap-5'>
            <div className='flex w-full items-center justify-between bg-[#ffffff1a] rounded-sm p-1'>
             <RiDeleteBack2Fill onClick={()=>setShow({status:false,value:''})} className='text-[#ff4000] text-3xl rotate-[180deg] transition-all hover:text-red-600'/>
            </div>
            <div className='w-full flex items-center justify-center gap-6 flex-wrap'>
            {
                array.map((item,index) => (
                    <div key={index} onMouseEnter={()=>setHover({status:true,key:index})} onMouseOut={()=>setHover({status:false,key:''})} className='w-[13rem] h-[13rem] flex items-end' style={{backgroundImage:`url(${item.imageUrl})`,backgroundColor:`#${item.colorCode}`}}>
                        {
                            hover.status && hover.key === index
                            ?
                            <div onMouseEnter={()=>setHover({status:true,key:index})} onMouseOut={()=>setHover({status:true,key:index})} className='w-full cursor-default  flex justify-between items-center p-2 bg-[#64748bb5] font-[shabnambold]'>
                            <span className='cursor-default line-clamp-1'>{item.title}</span>
                            <div className='flex items-center gap-1'>
                                <RiEditCircleFill className='text-orange-600 transition-all hover:text-orange-500' onClick={()=>setEdite({status:true,value:item})}/>
                                <RiDeleteBin2Fill className='text-red-600 transition-all hover:text-red-500'/>
                            </div>
                            </div>
                            :
                            <></>
                        }
                    </div>
                ))
            }
        </div>
        </div>
        :
        <Edite goalGallery={edite.value} setEdite={setEdite}/>
     }
    </>
  )
}

export default Show;