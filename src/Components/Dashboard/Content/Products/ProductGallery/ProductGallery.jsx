import React, { useEffect, useState } from 'react';
import { AiTwotoneDelete } from 'react-icons/ai';
import { FiPlusCircle } from 'react-icons/fi';
import { RiDeleteBack2Fill } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';
import { deleteGallery, getGalleryById } from '../../../../../features/dashboard/action';
import { setSwitch } from '../../../../../features/dashboard/dashboardSlice';

function ProductGallery({ showGallery , setShowGallery }) {
    const [visibleIcon,setVisibleIcon] = useState("");
    const dispatch = useDispatch();
    const loading = useSelector(state => state.dashboard.galleryLoading);
    const gallery = useSelector(state => state.dashboard.gallery);

    useEffect(()=>{
      dispatch(getGalleryById(showGallery.id))
    },[loading]);

    const deleteGalleryFnc = id => {
      dispatch(deleteGallery(id))
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
                {
                  loading
                  ?
                  <img src={"/img/Rolling-0.8s-200px.svg"} alt='loading' className='w-[20px] absolute top-2 left-2' style={{visibility:visibleIcon === img.id ? "visible" : "hidden"}}/>
                  :
                  <AiTwotoneDelete className='absolute top-2 left-2 text-red-600 scale-125 cursor-pointer' style={{visibility:visibleIcon === img.id ? "visible" : "hidden"}} onClick={()=>deleteGalleryFnc(img.id)}/>
                }
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