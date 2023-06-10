import React from 'react';
import Header from '../../Components/Header/Header.js';
import Footer from '../../Components/Footer/Footer.js';
import ResponseHeader from '../../Components/ResponseHeader/ResponseHeader.js';
import Side from '../../Components/Products/Side/Side.jsx';

function Products() {
  return (
    <main className='w-full flex flex-col'>
        <header>
          <div className="max-lg:hidden">
            <Header />
          </div>
          <div className="lg:hidden">
            <ResponseHeader />
          </div>
        </header>
        <div className='w-full flex px-5'>
            <Side/>
        </div>
        <footer>
          <Footer/>
        </footer>
    </main>
  )
}

export default Products;