import React, { useState , useEffect } from 'react';
import { useSelector } from 'react-redux';
import AllDiscount from './AllDiscount/AllDiscount';
import NewDiscount from './NewDiscount/NewDiscount';

function Discount() {
    const [innerCommponent,setInnerCommponent] = useState(<></>);
    const Criterion = useSelector(state=> state.dashboard.discountSwitch);
    useEffect(()=>{
        switch(Criterion)
        {
            case 'all' : setInnerCommponent(<AllDiscount/>);
            break;
            case 'new' : setInnerCommponent(<NewDiscount/>)
            break;
            default : setInnerCommponent(<></>)
        }
    },[Criterion])

  return (
    <div className='w-full h-full p-3 md:p-10'>
        {
            innerCommponent
        }
    </div>
  )
}

export default Discount