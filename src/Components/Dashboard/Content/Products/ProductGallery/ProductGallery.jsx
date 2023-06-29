import React from 'react';
import { ToastContainer } from 'react-toastify';
import { useDispatch , useSelector } from 'react-redux';
import { setSwitch } from '../../../../../features/dashboard/dashboardSlice';
import { MdCancel } from 'react-icons/md';

function ProductGallery() {

    const dispatch = useDispatch();
    const picturs = useSelector(state => state.dashboard.productId);
    
    console.log(picturs);

  return (
    <div className='flex flex-col w-full opacity-motion'>
        {/* toaster */}
        <ToastContainer 
            position='top-center'
            theme='colored'
            autoClose={2500}
            className='Toast_info'
        />
        <div className='w-full bg-[#C0D9DB] p-2 flex items-center justify-between'>
            <h1 className='font-semibold text-xl text-stone-800'>گالری محصول</h1>
            <MdCancel className='text-red-600 font-bold text-3xl transition-all hover:text-red-500' onClick={(e)=>dispatch(setSwitch({key:'products',value:'all',id:null}))}/>
        </div>
        <section className='flex flex-col items-center bg-[#ffffff70] px-2 py-5 w-full gap-8 z-10 opacity-90'>

        </section>
    </div>
  )
}

export default ProductGallery;