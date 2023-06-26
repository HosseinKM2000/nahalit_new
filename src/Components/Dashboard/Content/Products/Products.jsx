import React from 'react';
import { useSelector } from 'react-redux';
import ProductsPagination from './AllProducts/ProductsPagination/ProductsPagination';
import NewProduct from './NewProduct/NewProduct';

function Products() {

  const Criterion = useSelector(state=> state.dashboard.productsSwitch);

  return (
    <div className='w-full p-10'>
      {
        Criterion === 'all'
        ? <ProductsPagination/>
        : <NewProduct/>
      }
    </div>
  )
}

export default Products;