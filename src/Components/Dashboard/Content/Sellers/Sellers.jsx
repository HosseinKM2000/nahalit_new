import React from 'react';

function Sellers({ currentItems }) {
  return (
    <div className='w-full h-full p-3 md:p-10'>
        {/* <span className='w-full text-white font-bold'>تعداد پروژه ها ( {currentItems !== null ? currentItems?.length : 'NaN'} )</span>
            <div className='w-full flex flex-row flex-wrap justify-center md:justify-start md:flex-col items-center gap-10 md:gap-3'>
                {
                    currentItems.map((seller,index) => (
                        <div key={index}>
                          <span>{seller.userId}</span>
                        </div>
                    ))
                }
            </div> */}
    </div>
  )
}

export default Sellers;