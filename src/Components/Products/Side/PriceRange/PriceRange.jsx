import React from 'react';
import { Typography , Slider } from '@material-ui/core';

function PriceRange() {
  const [value, setValue] =  React.useState([20,70]);

  const rangeSelector = (event, newValue) => {
    setValue(newValue);
    console.log(newValue)
  };
  

  return (
    <div className='flex flex-col w-full mt-3'>
        <span className='px-3 py-3 text-sm 2xl:text-xl font-[vasirbold] text-stone-700' style={{borderRight:'solid 5px #02AAF1'}}>قیمت</span>
        <div style={{
      margin: 'auto',
      display: 'block',
      width: '100%'
    }}>
      <Slider
        value={value}
        onChange={rangeSelector}
        valueLabelDisplay="auto"
      />
      Your range of Price is between {value[0]} /- and {value[1]} /-
    </div>
    </div>
  )
}

export default PriceRange;