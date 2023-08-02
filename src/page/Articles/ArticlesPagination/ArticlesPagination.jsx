import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
import { useSelector } from 'react-redux';
import FixedIcon from '../../../Components/FixedIcon/FixedIcon';
import Footer from '../../../Components/Footer/Footer';
import Header from '../../../Components/Header/Header';
import ResponseHeader from '../../../Components/ResponseHeader/ResponseHeader';
import Articles from '../Articles';

function ArticlesPagination() {

    const [itemOffset, setItemOffset] = useState(0);
    const articles = useSelector(state => state.articles.articles);
    const mobile = window.innerWidth <= 425 ? true : false;
    const itemsPerPage = 12;
    const endOffset = itemOffset + itemsPerPage;
    const currentItems = articles.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(articles.length / itemsPerPage);
    const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % articles.length;
      window.scrollTo({top:0,behavior:'instant'})
      setItemOffset(newOffset);
    };


  return (
    <main>
      <header>
    <div className="max-lg:hidden">
      <Header />
    </div>
    <div className="lg:hidden">
      <ResponseHeader />
    </div>
    </header>
    <Articles currentItems={currentItems} />
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
        <div>
        <FixedIcon />
      </div>
      <footer>
        <Footer />
      </footer>
      </main>
  )
}

export default ArticlesPagination;