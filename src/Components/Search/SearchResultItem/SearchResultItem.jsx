import React from 'react'

function SearchResultItem({ showResult , data , deviceSize }) {

  return (
    <>
     {
       deviceSize === 'small'
       ?
        <div className='flex items-center bg-stone-200 py-1 px-3 justify-between hover:opacity-70'>
            <span className='font-[shabnambold] text-sm'>{data.title}</span>
            <img src={data.image} alt="img" className='w-[2rem] h-[2rem] bg-slate-600' />
        </div>
       :
        <div className='flex items-center bg-stone-100 p-2 py-3 justify-between hover:opacity-70'>
            <span className='font-[shabnambold]'>{data.title}</span>
            <img src={data.image} alt="img" className='w-[3rem] h-[3rem] bg-slate-600' />
        </div>
     }
    </>
  )
}

export default SearchResultItem;