import { React, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import ProductsPagination from './AllProducts/ProductsPagination/ProductsPagination';
import NewProduct from './NewProduct/NewProduct';
import ProductGallery from './ProductGallery/ProductGallery';


function Products() {
  const [innerComponent,setInnerComponent] = useState(<></>);
  const Criterion = useSelector(state=> state.dashboard.productsSwitch);
  
  useEffect(() => {
    switch(Criterion)
    {
      case "all" : setInnerComponent(<ProductsPagination/>);
      break;
      case "new" : setInnerComponent(<NewProduct/>)
      break;
      case "gallery" : setInnerComponent(<ProductGallery/>);
      break;
      default : setInnerComponent(<></>)
    }
  },[Criterion])

  return (
    <div className='w-full p-3 md:p-10 flex items-center flex-col'>
      {
        innerComponent
      }
    </div>
  )
}

export default Products;