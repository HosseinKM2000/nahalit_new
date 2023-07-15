import React ,{ useState , useEffect } from 'react';
import { useSelector } from 'react-redux';
import WorkSamplePagination from '../WorkSample/All/WorkSamplePagination/WorkSamplePagination';
import New from './New/New';

function WorkSample() {
  const [innerCommponent,setInnerCommponent] = useState(<></>);
  const Criterion = useSelector(state=> state.dashboard.workSampleSwitch);

  useEffect(()=>{
      switch(Criterion)
      {
          case 'all' : setInnerCommponent(<WorkSamplePagination/>);
          break;
          case 'new' : setInnerCommponent(<New/>)
          break;
          default : setInnerCommponent(<></>)
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

export default WorkSample;