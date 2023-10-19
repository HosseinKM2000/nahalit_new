import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';

function Links() {
    const [innerComponent,setInnerComponent] = useState(<></>);
    const Criterion = useSelector(state=> state.dashboard.linksSwitch);
    useEffect(()=>{
        switch(Criterion)
        {
            case 'all' : setInnerComponent(<></>);
            break;
            case 'new' : setInnerComponent(<></>)
            break;
            default : setInnerComponent(<></>)
        }
    },[Criterion])

  return (
    <div className='container mx-auto h-full p-3 md:p-10 flex flex-col justify-between items-center'>
        {
            innerComponent
        }
    </div>
  )
}

export default Links;