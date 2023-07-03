import React , { useEffect , useState } from 'react';
import { useDispatch } from 'react-redux';
import { setScrollUp } from '../../../../../features/dashboard/dashboardSlice';
import ReactPaginate from 'react-paginate';
import Users from '../Users';

function UsersPagination() {

  const users = ["آرش", "آرمین", "آتوسا", "آذر", "آریا", "آیدین", "آرتین", "آرشام", "آرتا", "آرشیا", "آریانا", "آزاده", "آرزو", "آسیه", "آتنا", "آناهیتا", "آنوشا", "آریان", "آیدا", "آرشاد", "آرشنا", "آتوش", "آفرین", "آترین", "آروین", "آرتمیس", "آرتام", "آرمان", "آرتاش", "آرتامین", "آریو", "آمنه", "آراد", "آرتور", "آهو", "آسمان", "آرین", "آنا", "آنیتا", "آنیا", "آسمین", "آمیتیس", "آیلین", "آبانو", "آریوباک", "آریون", "آرینا", "آسما", "آکین", "آریندا", "آنیتا", "آرینوش", "آرم", "آریوش", "آرتورو", "آرزو", "آریاز", "آزین", "آناهی", "آریاندخت", "آریاوش", "آریانو", "آرتینا", "آرشمند", "آتوشا", "آینده", "آرمون", "آرینجان", "آناهید", "آرتینو", "آرشک", "آریوان", "آرتاز", "آمیر", "آریال", "آیناز", "آرتو", "آرمینا", "آریاشاد", "آرتینوش", "آریامن", "آریاک", "آرینک", "آریوز", "آرتیا", "آزرم", "آهویار", "آریازاد", "آریامنش", "آریناس", "آرینو", "آروینا", "آریناز", "آرشیان", "آرتابان", "آرشاد", "آرینی", "آرشکا", "آریام", "آرتاک", "آریاپور", "آرتیناز", "آریامین", "آریامهر", "آریاکوش", "آریاناز",]
    const [itemOffset, setItemOffset] = useState(0);
    const mobile = window.innerWidth <= 425 ? true : false;
    const itemsPerPage = 20;
    const endOffset = itemOffset + itemsPerPage;
    const currentItems = users.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(users.length / itemsPerPage);
    const dispatch = useDispatch();

    useEffect(()=>{
    },[]);

    const handlePageClick = (event) => {
      const newOffset = (event.selected * itemsPerPage) % users.length;
      dispatch(setScrollUp());
      setItemOffset(newOffset);
    };


  return (
    <>
      <Users currentItems={currentItems} />
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
  )
}

export default UsersPagination;