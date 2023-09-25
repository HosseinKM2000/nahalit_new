import { React, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import ProductsPagination from './AllProducts/ProductsPagination/ProductsPagination';
import NewProduct from './NewProduct/NewProduct';
import NewGallery from './NewGallery/NewGallery';


function Products() {
  const [innerComponent,setInnerComponent] = useState(<></>);
  const Criterion = useSelector(state=> state.dashboard.productsSwitch);
  
  useEffect(() => {
    switch(Criterion)
    {
      case "all" : setInnerComponent(<ProductsPagination/>);
      break;
      case "new" : setInnerComponent(<NewProduct/>);
      break;
      case "addGallery" : setInnerComponent(<NewGallery/>);
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