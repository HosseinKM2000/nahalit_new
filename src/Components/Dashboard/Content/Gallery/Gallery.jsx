import { React, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import GalleriesPagination from './All/GalleriesPagination/GalleriesPagination';
import New from './New/New';

function Gallery() {
  const [innerCommponent,setInnerCommponent] = useState(<></>)
  const Criterion = useSelector(state => state.dashboard.gallerySwitch);
  
  useEffect(()=>{
    if(Criterion === 'all')
    {
      setInnerCommponent(<GalleriesPagination/>)
    }
    else if(Criterion === 'new')
    {
      setInnerCommponent(<New/>)
    }

  },[Criterion])

  return (
    <div className='w-full p-3 md:p-10 flex flex-col items-center'>
      {
        innerCommponent
      }
    </div>
  )
}

export default Gallery;