import React from 'react';
import { useSelector } from 'react-redux';
import AllProducts from './AllProducts/AllProducts';
import NewProduct from './NewProduct/NewProduct';

function Products() {

  const Criterion = useSelector(state=> state.dashboard.productsSwitch);

  return (
    <div className='w-full p-10'>
      {
        Criterion === 'all'
        ? <AllProducts/>
        :<NewProduct/>
      }
    </div>
  )
}

export default Products;