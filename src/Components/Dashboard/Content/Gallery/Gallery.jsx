import { React, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import GalleriesPagination from './All/GalleriesPagination/GalleriesPagination';
import New from './New/New';

function Gallery() {
  const [innerComponent,setInnerComponent] = useState(<></>)
  const Criterion = useSelector(state => state.dashboard.gallerySwitch);
  
  useEffect(()=>{
    if(Criterion === 'all')
    {
      setInnerComponent(<GalleriesPagination/>)
    }
    else if(Criterion === 'new')
    {
      setInnerComponent(<New/>)
    }

  },[Criterion])

  return (
    <div className='w-full p-3 md:p-10 flex flex-col items-center'>
      {
        innerComponent
      }
    </div>
  )
}

export default Gallery;