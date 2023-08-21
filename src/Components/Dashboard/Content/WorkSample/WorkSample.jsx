import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import WorkSamplePagination from '../WorkSample/All/WorkSamplePagination/WorkSamplePagination';
import New from './New/New';

function WorkSample() {
  const [innerComponent,setInnerComponent] = useState(<></>);
  const Criterion = useSelector(state=> state.dashboard.workSampleSwitch);

  useEffect(()=>{
      switch(Criterion)
      {
          case 'all' : setInnerComponent(<WorkSamplePagination/>);
          break;
          case 'new' : setInnerComponent(<New/>)
          break;
          default : setInnerComponent(<></>)
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

export default WorkSample;