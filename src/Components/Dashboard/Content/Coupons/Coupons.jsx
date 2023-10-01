import React from 'react';
import { useState } from 'react';
import AllCoupons from './AllCoupons/AllCoupons';
import NewCoupon from './NewCoupon/NewCoupon';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

function Coupons() {
    const [innerComponent,setInnerComponent] = useState(<></>);
    const Criterion = useSelector(state=> state.dashboard.couponSwitch);
    useEffect(()=>{
        switch(Criterion)
        {
            case 'all' : setInnerComponent(<AllCoupons/>);
            break;
            case 'new' : setInnerComponent(<NewCoupon/>)
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

export default Coupons;