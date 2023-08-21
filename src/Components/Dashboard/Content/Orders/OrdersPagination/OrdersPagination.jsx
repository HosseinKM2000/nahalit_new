import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
import { useDispatch } from 'react-redux';
import { setScrollUp } from '../../../../../features/dashboard/dashboardSlice';
import Details from '../Details/Details';
import Orders from '../Orders';

function OrdersPagination() {
    const [showDetails,setShowDetails] = useState({status:false,value:''});
    const [itemOffset, setItemOffset] = useState(0);
    const dispatch = useDispatch();
    const orders = [];
      
      for (let i = 1; i <= 50; i++) {
        orders.push({
          status: `وضعیت ${i}`,
          total_price: `${i * 1000} تومان`,
          customer_name: `مشتری ${i}`
        });
      }
      const mobile = window.innerWidth <= 425 ? true : false;
      const itemsPerPage = 20;
      const endOffset = itemOffset + itemsPerPage;
      const currentItems = orders.slice(itemOffset, endOffset);
      const pageCount = Math.ceil(orders.length / itemsPerPage);
      const handlePageClick = (event) => {
          const newOffset = (event.selected * itemsPerPage) % orders.length;
          dispatch(setScrollUp());
          setItemOffset(newOffset)
        };
        console.log(orders)
      return (
        <>
        {
            !showDetails.status
            ?
            <>
            <Orders currentItems={currentItems} setShowDetails={setShowDetails} />
            <ReactPaginate
            breakLabel="..."
            nextLabel={mobile ? '>>' : "برگه بعدی >>"}
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel={mobile ? '<<' : "<< برگه قبلی"}
            renderOnZeroPageCount={null}
            className='pagination'
            activeClassName='active'
            previousClassName='preBtn'
            nextClassName='nextBtn'
            />
            </>
            :
            <Details details={showDetails.value} setShowDetails={setShowDetails}/>
        }
        </>
      )
}

export default OrdersPagination;