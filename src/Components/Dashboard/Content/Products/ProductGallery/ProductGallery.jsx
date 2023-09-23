import React from 'react';
import { MdCancel } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getGalleryById } from '../../../../../features/dashboard/action';
import { RiDeleteBack2Fill } from 'react-icons/ri';

function ProductGallery({ showGallery , setShowGallery }) {

    const dispatch = useDispatch();
    const loading = useSelector(state => state.dashboard.galleryLoading);
    const gallery = useSelector(state => state.dashboard.gallery);

    useEffect(()=>{
      dispatch(getGalleryById(showGallery.id))
    },[]);
console.log(gallery)
  return (
    <div className='flex flex-col w-full opacity-motion'>
        <div className='flex w-full items-center justify-between bg-[#ffffff1a] rounded-sm p-1'>
          <div className='flex items-center'>
            <span className='text-white font-bold'>تصاویر محصول/</span>
          </div>
          <RiDeleteBack2Fill onClick={()=>setShowGallery({status:false,id:""})} className='text-[#ff4000] text-3xl rotate-[180deg] transition-all hover:text-red-600'/>
        </div>
        <section className='flex flex-col items-center px-2 py-5 w-full gap-8 z-10'>
          {
            gallery.map(img => (
              <div className='w-[50px] h-[50px] bg-stone-600'>
                <img src={img.image} alt={img.title} />
              </div>
            ))
          }
        </section>
    </div>
  )
}

export default ProductGallery;