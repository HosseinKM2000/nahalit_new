import React from 'react'
import { useNavigate } from 'react-router-dom';

function SearchResultItem({ data , deviceSize , type }) {
  const navigate = useNavigate();
  const transport = () => {
    if(type === "blog") {
      navigate(`/articles/article?id=${data.id}`)
    }else {
      navigate(`/shop/product/${data.id}`)
    }
  }

  return (
    <>
     {
       deviceSize === 'small'
       ?
        <div className='flex items-center bg-stone-200 py-1 px-3 justify-between hover:opacity-70' onClick={transport}>
            <span className='font-[shabnambold] text-sm'>{data.title}</span>
            <img src={data.image} alt={data.title} className='w-[2rem] h-[2rem] bg-slate-600'/>
        </div>
       :
        <div className='flex items-center bg-stone-100 p-2 py-3 justify-between hover:opacity-70' onClick={transport}>
            <span className='font-[shabnambold]'>{data.title}</span>
            <img src={data.image} alt={data.title} className='w-[3rem] h-[3rem] bg-slate-600' />
        </div>
     }
    </>
  )
}

export default SearchResultItem;