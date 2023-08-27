import { React, useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { useDispatch } from 'react-redux';
import { setScrollUp } from '../../../../../../features/dashboard/dashboardSlice';
import Show from '../../Show/Show';
import All from '../All';

function GalleriesPagination() {

    const [show,setShow] = useState({status:false,value:''});
    const [itemOffset, setItemOffset] = useState(0);
    const galleries = [];
    for (let i = 1; i <= 20; i++) {
      galleries.push({
        productTitle: i <= 5 ? 'محصول_1' : i > 5 && i <= 10 ? 'محصول_2' : i > 10 && i <= 15 ? 'محصول_3' : 'محصول_4',
        title: `Title ${i}`,
        imageUrl: `https://example.com/image${i}.jpg`,
        colorCode:Math.floor(Math.random()*16777215).toString(16)
      });
    }

    const groupeGalleries = galleries.reduce((groups, gallery) => {
      const productTitle = gallery.productTitle;
      if (!groups[productTitle]) {
        groups[productTitle] = [];
      }
      groups[productTitle].push(gallery);
      return groups;
    }, {});
    const sortedGalleries = Object.values(groupeGalleries)
    

    const dispatch = useDispatch();
    const mobile = window.innerWidth <= 425 ? true : false;
    const itemsPerPage = 10;
    const endOffset = itemOffset + itemsPerPage;
    const currentItems = sortedGalleries.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(sortedGalleries.length / itemsPerPage);

    const handlePageClick = (event) => {
      const newOffset = (event.selected * itemsPerPage) % sortedGalleries.length;
      dispatch(setScrollUp());
      setItemOffset(newOffset)
    };

    
    

   
  return (
    <>
    {
      !show.status
      ?
      <>
      <All currentItems={currentItems} setShow={setShow}/>
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
      <Show array={show.value} setShow={setShow}/>
    }
    </>
  )
}

export default GalleriesPagination;