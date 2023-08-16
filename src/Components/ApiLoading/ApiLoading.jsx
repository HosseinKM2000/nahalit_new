import { useState } from "react";
import { useSelector } from "react-redux";

function ApiLoading() {
    const isLoading = useSelector(state => state.loading.isLoading);
  return (
    <>
        {
        isLoading
        ?
        <div className='w-full fixed justify-center items-center min-h-screen bg-white opacity-70 flex top-0 left-0'>
            <div className='Loading-box flex flex-row justify-center w-1/4  h-10 items-center gap-5'>
                <div className='h-full bg-green-teal'></div>
                <div className='h-full bg-green-teal'></div>
                <div className='h-full bg-green-teal'></div>
                <div className='h-full bg-green-teal'></div>
                <div className='h-full bg-green-teal'></div>
            </div>
        </div>
        :null
         }
    </>
  )
}

export default ApiLoading;