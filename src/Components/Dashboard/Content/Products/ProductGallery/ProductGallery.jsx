import React from 'react';
import { MdCancel } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getGalleryById } from '../../../../../features/dashboard/action';
import { RiDeleteBack2Fill } from 'react-icons/ri';
import { AiTwotoneDelete } from 'react-icons/ai';
import { useState } from 'react';
import { FiPlusCircle } from 'react-icons/fi';
import { setSwitch } from '../../../../../features/dashboard/dashboardSlice';

function ProductGallery({ showGallery , setShowGallery }) {
    const [visibleIcon,setVisibleIcon] = useState("");
    const dispatch = useDispatch();
    const loading = useSelector(state => state.dashboard.galleryLoading);
    const gallery = useSelector(state => state.dashboard.gallery);

    useEffect(()=>{
      dispatch(getGalleryById(showGallery.id))
    },[]);

    const deleteGallery = id => {
      
    }

  return (
    <div className='flex flex-col w-full opacity-motion'>
        <div className='flex w-full items-center justify-between bg-[#ffffff1a] rounded-sm p-1'>
          <div className='flex items-center'>
            <span className='text-white font-bold'>تصاویر محصول/</span>
          </div>
          <RiDeleteBack2Fill onClick={()=>setShowGallery({status:false,id:""})} className='text-[#ff4000] text-3xl rotate-[180deg] transition-all hover:text-red-600'/>
        </div>
        <section className='flex flex-col md:flex-row justify-center flex-wrap items-center px-2 py-5 w-full gap-8 z-10'>
          {
            gallery.map(img => (
              <div className='w-[200px] relative h-[200px] bg-stone-600' onMouseEnter={()=>setVisibleIcon(img.id)} onMouseLeave={()=>setVisibleIcon("")}>
                <img src={img.image} alt={img.title} />
                <AiTwotoneDelete className='absolute top-2 left-2 text-red-600 scale-125 cursor-pointer' style={{visibility:visibleIcon === img.id ? "visible" : "hidden"}} onClick={()=>deleteGallery(img.id)}/>
              </div>
            ))
          }
          <div className='w-[200px] h-[200px] border-2 border-white border-dashed text-white flex justify-center items-center hover:border-orange-500 hover:text-orange-500' onClick={()=>dispatch(setSwitch({key:'products',value:'addGallery',id:showGallery.id}))}>
              <FiPlusCircle className='scale-[3]'/>
          </div>
        </section>
    </div>
  )
}

export default ProductGallery;