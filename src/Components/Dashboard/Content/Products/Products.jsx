import { React , useState , useEffect } from 'react';
import { useSelector } from 'react-redux';
import ProductsPagination from './AllProducts/ProductsPagination/ProductsPagination';
import NewProduct from './NewProduct/NewProduct';
import EditeProduct from './EditeProduct/EditeProduct';
import ProductGallery from './ProductGallery/ProductGallery';


function Products() {
  const [innerCommponent,setInnerCommponent] = useState(<></>)
  const Criterion = useSelector(state=> state.dashboard.productsSwitch);
  
  useEffect(() => {
    switch(Criterion)
    {
      case "all" : setInnerCommponent(<ProductsPagination/>);
      break;
      case "new" : setInnerCommponent(<NewProduct/>)
      break;
      case "edite" : setInnerCommponent(<EditeProduct/>);
      break;
      case "gallery" : setInnerCommponent(<ProductGallery/>);
      break;
      default : setInnerCommponent(<></>)
    }
  },[])

  return (
    <div className='w-full p-10'>
      {
        innerCommponent
      }
    </div>
  )
}

export default Products;