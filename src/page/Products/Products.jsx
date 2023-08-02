import React from 'react';
import FixedIcon from '../../Components/FixedIcon/FixedIcon.js';
import Footer from '../../Components/Footer/Footer.js';
import Header from '../../Components/Header/Header.js';
import Main from '../../Components/Products/Main/Main.jsx';
import Side from '../../Components/Products/Side/Side.jsx';
import ResponseHeader from '../../Components/ResponseHeader/ResponseHeader.js';

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
        <div className='w-full flex lg:pr-0 lg:pl-5 lg:flex-row flex-col-reverse'>
            <Side/>
            <Main/>
        </div>
        <div>
        <FixedIcon />
        </div>
        <footer>
          <Footer/>
        </footer>
    </main>
  )
}

export default Products;