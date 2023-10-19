import React from 'react';
import { BsLink } from 'react-icons/bs';
import { toast } from 'react-toastify';

function AllLinks({ currentItems , linksLength }) {

  const copyPath = path => {
    navigator.clipboard.writeText(path);
    toast.success('آدرس کپی شد' , {
        position: "top-center",
    })
  }

  return (
    <div className='flex flex-col items-start gap-3'>
        <span className='text-white font-bold mx-5 md:m-0'> مسیر ها ( {linksLength} )</span>
        <div className='flex flex-col gap-5'>
            {
                currentItems?.map(link => (
                    <div key={link?.id} className='bg-white p-3 rounded-sm'>
                        <div className='font-[shabnamBold]'>
                            <span>عنوان: </span>
                            <span>{link?.title}</span>
                        </div>
                        <div className='font-[shabnamBold] my-1 flex items-start md:items-center gap-1'>
                            <span>آدرس: </span>
                            <div className='flex md:items-center gap-3 flex-wrap'>
                              <span className='text-blue-500 break-all'>{link?.path}</span>
                              <button className='font-[shabnam] bg-blue-500 text-white px-3 py-[0.1rem] transition-all hover:bg-blue-400 rounded-md' onClick={() => copyPath(link?.path)}>
                                <BsLink className='scale-125'/>
                              </button>
                            </div>
                        </div>
                        <div className='font-[shabnamBold]'>
                            <span>تعداد ورود: </span>
                            <span>{link?.count}</span>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default AllLinks;