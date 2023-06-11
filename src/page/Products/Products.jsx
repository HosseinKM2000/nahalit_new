import React from 'react';
import Header from '../../Components/Header/Header.js';
import Footer from '../../Components/Footer/Footer.js';
import ResponseHeader from '../../Components/ResponseHeader/ResponseHeader.js';
import Side from '../../Components/Products/Side/Side.jsx';
import Main from '../../Components/Products/Main/Main.jsx';

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
        <div className='w-full flex px-5 lg:flex-row flex-col-reverse'>
            <Side/>
            <Main/>
        </div>
        <footer>
          <Footer/>
        </footer>
    </main>
  )
}

export default Products;