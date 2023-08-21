import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import AllDiscount from './AllDiscount/AllDiscount';
import NewDiscount from './NewDiscount/NewDiscount';

function Discount() {
    const [innerComponent,setInnerComponent] = useState(<></>);
    const Criterion = useSelector(state=> state.dashboard.discountSwitch);
    useEffect(()=>{
        switch(Criterion)
        {
            case 'all' : setInnerComponent(<AllDiscount/>);
            break;
            case 'new' : setInnerComponent(<NewDiscount/>)
            break;
            default : setInnerComponent(<></>)
        }
    },[Criterion])

  return (
    <div className='w-full h-full p-3 md:p-10'>
        {
            innerComponent
        }
    </div>
  )
}

export default Discount